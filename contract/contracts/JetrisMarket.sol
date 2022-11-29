// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./JetToken.sol";
import "./JetrisUser.sol";

contract JetrisMarket is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _charIds;
    Counters.Counter private _charSoldOrCanceled;
    Counters.Counter private _jtemIds;
    Counters.Counter private _jtemSoldOrCanceled;
    uint256 decimals = 10**18;
    JetToken private token;
    address payable private treasuryWallet;
    address payable private userContract;
    constructor (
        address _tokenContractAddress,
        address payable _treasuryWallet
    ) {
        _setToken(_tokenContractAddress);
        treasuryWallet = _treasuryWallet;
    }

    mapping(uint256 => MarketItem) idMarketChar;
    mapping(uint256 => MarketItem) idMarketJtem;

    enum ItemStatus {  
        ON_SALE, SOLD, SALE_CANCELED
    }

    struct Token {
        address contractAddr;
        uint256 tokenId;
    }

    struct MarketItem {
        uint256 itemId;
        Token token;
        address payable seller;
        uint256 price;
        ItemStatus itemStatus;
    }

    event ItemCreated (
        uint256 tokenId,
        uint256 itemId,
        address seller,
        uint256 price
    );

    event ItemSold (
        uint256 tokenId,
        uint256 itemId,
        address seller,
        address buyer,
        uint256 price
    );

    event SaleCanceled (
        uint256 tokenId,
        uint256 itemId,
        address seller
    );

    function setUserContractAddress(address _userContract) external onlyOwner {
        require(address(userContract) == address(0), "WRITE_ONCE!");
        userContract = payable(_userContract);
    }

    function _setToken(address _tokenAddress) private onlyOwner returns (bool) {
        require(_tokenAddress != address(0x0));
        token = JetToken(_tokenAddress);
        return true;
    }

    function sell(
        address _contractAddr,
        uint256 _tokenId,
        uint256 _price
    ) public {
        require(msg.sender == ERC721(_contractAddr).ownerOf(_tokenId),  "only owners can sell items");
        require(_price > 0, "Price must be above zero");

        _charIds.increment();
        uint256 itemId = _charIds.current();

        idMarketChar[itemId] = MarketItem({
            itemId: itemId,
            token: Token({
                contractAddr: _contractAddr,
                tokenId: _tokenId
            }),
            seller: payable(msg.sender),
            price: _price,
            itemStatus: ItemStatus.ON_SALE
        });

        ERC721(_contractAddr).transferFrom(msg.sender, address(this), _tokenId);

        emit ItemCreated(
            _tokenId,
            itemId,
            msg.sender,
            _price
        );
    }

    function sellJtem(
        address _contractAddr,
        uint256 _tokenId,
        uint256 _price
    ) public {
        require(ERC1155(_contractAddr).balanceOf(msg.sender, _tokenId)!=0,  "only owners can sell items");
        require(_price > 0, "Price must be above zero");

        _jtemIds.increment();
        uint256 itemId = _jtemIds.current();

        idMarketJtem[itemId] = MarketItem({
            itemId: itemId,
            token: Token({
                contractAddr: _contractAddr,
                tokenId: _tokenId
            }),
            seller: payable(msg.sender),
            price: _price,
            itemStatus: ItemStatus.ON_SALE
        });

        ERC1155(_contractAddr).safeTransferFrom(msg.sender, address(this), _tokenId, 1, "");

        emit ItemCreated(
            _tokenId,
            itemId,
            msg.sender,
            _price
        );
    }

    function saleCancel(
        address _contractAddr,
        uint256 _itemId
    ) public {
        require(msg.sender == idMarketChar[_itemId].seller, "only seller can cancel");
        require(ItemStatus.ON_SALE == idMarketChar[_itemId].itemStatus, "item is not on sale");

        uint tokenId = idMarketChar[_itemId].token.tokenId;

        ERC721(_contractAddr).transferFrom(address(this), msg.sender, tokenId);

        idMarketChar[_itemId].itemStatus = ItemStatus.SALE_CANCELED;
        _charSoldOrCanceled.increment();
        

        emit SaleCanceled(
            tokenId,
            _itemId,
            msg.sender
        );
    }

    function saleCancelJtem(
        address _contractAddr,
        uint256 _itemId
    ) public {
        require(msg.sender == idMarketJtem[_itemId].seller, "only seller can cancel");
        require(ItemStatus.ON_SALE == idMarketJtem[_itemId].itemStatus, "item is not on sale");

        uint tokenId = idMarketJtem[_itemId].token.tokenId;

        ERC1155(_contractAddr).safeTransferFrom(address(this), msg.sender, tokenId, 1, "");

        idMarketJtem[_itemId].itemStatus = ItemStatus.SALE_CANCELED;
        _jtemSoldOrCanceled.increment();
        

        emit SaleCanceled(
            tokenId,
            _itemId,
            msg.sender
        );
    }

    function buy(
        address _contractAddr,
        uint256 _itemId
    ) public {
        uint price = idMarketChar[_itemId].price;
        uint fee = price * decimals * 10 / 100;
        uint grant = price * decimals - fee;
        uint tokenId = idMarketChar[_itemId].token.tokenId;

        bool success = token.increaseContractAllowance(
            msg.sender,
            address(this),
            price * decimals
        );
        require(success, "IncreaseContract Fail");
        // treasury
        token.transferFrom(msg.sender, treasuryWallet, fee);
        token.marketBurn(treasuryWallet, fee/2);
        // grant seller
        token.transferFrom(msg.sender, idMarketChar[_itemId].seller, grant);

        ERC721(_contractAddr).transferFrom(address(this), msg.sender, tokenId);
        idMarketChar[_itemId].itemStatus = ItemStatus.SOLD;
        _charSoldOrCanceled.increment();

        emit ItemSold(
            tokenId,
            _itemId,
            idMarketChar[_itemId].seller,
            msg.sender,
            price
        );
    }

    function buyJtem(
        address _contractAddr,
        uint256 _itemId
    ) public {
        uint price = idMarketJtem[_itemId].price;
        uint fee = price * decimals * 10 / 100;
        uint grant = price * decimals - fee;
        uint tokenId = idMarketJtem[_itemId].token.tokenId;

        bool success = token.increaseContractAllowance(
            msg.sender,
            address(this),
            price * decimals
        );
        require(success, "IncreaseContract Fail");
        // treasury
        token.transferFrom(msg.sender, treasuryWallet, fee);
        token.marketBurn(treasuryWallet, fee/2);
        // grant seller
        token.transferFrom(msg.sender, idMarketJtem[_itemId].seller, grant);

        ERC1155(_contractAddr).safeTransferFrom(address(this), msg.sender, tokenId, 1, "");
        idMarketJtem[_itemId].itemStatus = ItemStatus.SOLD;
        _jtemSoldOrCanceled.increment();

        emit ItemSold(
            tokenId,
            _itemId,
            idMarketJtem[_itemId].seller,
            msg.sender,
            price
        );
    }

    function fetchCharOnSale() public view returns (MarketItem[] memory) {
        uint itemCount = _charIds.current();
        uint unsoldItemCount = _charIds.current() - _charSoldOrCanceled.current();
        uint currentIndex = 0;

        MarketItem[] memory items =  new MarketItem[](unsoldItemCount);

        for (uint i = 1; i <= itemCount; i++) {
            if (idMarketChar[i].itemStatus == ItemStatus.ON_SALE) {
                uint currentId = idMarketChar[i].itemId;
                MarketItem storage currentItem = idMarketChar[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function fetchJtemOnSale() public view returns (MarketItem[] memory) {
        uint itemCount = _jtemIds.current();
        uint unsoldItemCount = _jtemIds.current() - _jtemSoldOrCanceled.current();
        uint currentIndex = 0;

        MarketItem[] memory items =  new MarketItem[](unsoldItemCount);

        for (uint i = 1; i <= itemCount; i++) {
            if (idMarketJtem[i].itemStatus == ItemStatus.ON_SALE) {
                uint currentId = idMarketJtem[i].itemId;
                MarketItem storage currentItem = idMarketJtem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function fetchMyItemsOnSale() public view returns (MarketItem[] memory) {
        uint totalItemCount = _charIds.current();

        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 1; i <= totalItemCount; i++) {
            if (
                idMarketChar[i].itemStatus == ItemStatus.ON_SALE
                && idMarketChar[i].seller == msg.sender
            ) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 1; i <= totalItemCount; i++) {
            if (
                idMarketChar[i].itemStatus == ItemStatus.ON_SALE
                && idMarketChar[i].seller == msg.sender
            ) {
                uint currentId = idMarketChar[i].itemId;
                MarketItem storage currentItem = idMarketChar[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function onERC1155Received(address, address, uint256, uint256, bytes memory) public virtual returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(address, address, uint256[] memory, uint256[] memory, bytes memory) public virtual returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }

    function onERC721Received(address, address, uint256, bytes memory) public virtual returns (bytes4) {
        return this.onERC721Received.selector;
    }
}
