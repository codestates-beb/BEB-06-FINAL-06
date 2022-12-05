// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./JetToken.sol";

contract JetrisUser is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _userIds;
    uint256 decimals = 10**18;
    uint256 firstReward = 0;
    uint256 secondReward = 0;
    uint256 thirdReward = 0;

    JetToken private token;
    address payable private treasuryWallet;
    address private nftContractAddress;
    address private itemContractAddress;
    address[] private addrList;

    constructor (
        address _tokenContractAddress,
        address _nftContractAddress,
        address _itemContractAddress,
        address payable _treasuryWallet
    ) {
        _setToken(_tokenContractAddress);
        nftContractAddress = _nftContractAddress;
        itemContractAddress = _itemContractAddress;
        treasuryWallet = _treasuryWallet;
    }

    mapping(address => UserInfo) idUserInfo;

    struct Token {
        address contractAddr;
        uint256 tokenId;
    }

    struct UserInfo {
        uint256 userId;
        Token charToken;
        Token jtemToken;
        address payable user;
    }

    event UserCreated (
        uint256 charId,
        uint256 jtemId,
        uint256 userId,
        address user
    );

    event UserUpdated (
        uint256 charId,
        uint256 jtemId,
        address user
    );

    event UserDeleated (
        uint256 charId,
        uint256 jtemId,
        address user
    );


    function _setToken(address _tokenAddress) private onlyOwner returns (bool) {
        require(_tokenAddress != address(0x0));
        token = JetToken(_tokenAddress);
        return true;
    }

    function signUp(
        uint256 _charId,
        uint256 _jtemId
    ) public {
        require(msg.sender == ERC721(nftContractAddress).ownerOf(_charId),  "only character owners can sign up");
        require(ERC1155(itemContractAddress).balanceOf(msg.sender, _jtemId)!=0,  "only Jetris Item owners can sign up");

        _userIds.increment();
        uint256 userId = _userIds.current();
        addrList.push(msg.sender);
        idUserInfo[msg.sender] = UserInfo({
            userId: userId,
            charToken: Token({
                contractAddr: nftContractAddress,
                tokenId: _charId
            }),
            jtemToken: Token({
                contractAddr: itemContractAddress,
                tokenId: _jtemId
            }),
            user: payable(msg.sender)
        });

        emit UserCreated(
            _charId,
            _jtemId,
            userId,
            msg.sender
        );
    }

    function updateChar(
        uint256 _charId
    ) public {
        require(msg.sender == ERC721(nftContractAddress).ownerOf(_charId),  "only character owners can sign up");

        idUserInfo[msg.sender].charToken.tokenId = _charId;

        emit UserUpdated(
            _charId,
            idUserInfo[msg.sender].jtemToken.tokenId,
            msg.sender
        );
    }

    function updateJtem(
        uint256 _jtemId
    ) public {
        require(ERC1155(itemContractAddress).balanceOf(msg.sender, _jtemId)!=0,  "only Jetris Item owners can update userInfo");

        idUserInfo[msg.sender].jtemToken.tokenId = _jtemId;

        emit UserUpdated(
            idUserInfo[msg.sender].charToken.tokenId,
            _jtemId,
            msg.sender
        );
    }

    function fetchUser(address _user) public view returns (UserInfo memory) {
        return idUserInfo[_user];
    }

    function fetchUsers() public view returns (UserInfo[] memory) {
        uint userCount = _userIds.current();
        UserInfo[] memory users =  new UserInfo[](userCount);

        for (uint i = 0; i < userCount; i++) {
            address currentAddr = addrList[i];
            UserInfo storage currentUser = idUserInfo[currentAddr];
            users[i] = currentUser;
        }
        return users;
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
