// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./JetToken.sol";

contract JetrisItems is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {
    JetToken private token;
    uint256 decimals = 10**18;
    address payable public treasuryWallet; //                                               비상금 계좌!
    uint256 private mintPrice;
    uint256 private maxStrength;
    uint randNum = 0;
    uint rewardProbability = 70;

    uint256[] private waitForMint;
    uint256[] private firstMint;
    uint256[] private itemCheck;
    address private marketContractAddress;

    uint256 public constant NOMAL0 = 0;
    uint256 public constant NOMAL1 = 1;
    uint256 public constant NOMAL2 = 2;
    uint256 public constant NOMAL3 = 3;
    uint256 public constant NOMAL4 = 4;
    uint256 public constant NOMAL5 = 5;
    uint256 public constant NOMAL6 = 6;
    uint256 public constant NOMAL7 = 7;
    uint256 public constant NOMAL8 = 8;
    uint256 public constant NOMAL9 = 9;
    uint256 public constant NOMAL10 = 10;
    uint256 public constant NOMAL11 = 11;
    uint256 public constant NOMAL12 = 12;
    uint256 public constant NOMAL13 = 13;
    uint256 public constant NOMAL14 = 14;
    uint256 public constant NOMAL15 = 15;
    uint256 public constant NOMAL16 = 16;
    uint256 public constant NOMAL17 = 17;
    uint256 public constant NOMAL18 = 18;
    uint256 public constant NOMAL19 = 19;

    uint256 public constant RARE0 = 100;
    uint256 public constant RARE1 = 101;
    uint256 public constant RARE2 = 102;
    uint256 public constant RARE3 = 103;
    uint256 public constant RARE4 = 104;
    uint256 public constant RARE5 = 105;
    uint256 public constant RARE6 = 106;
    uint256 public constant RARE7 = 107;
    uint256 public constant RARE8 = 108;
    uint256 public constant RARE9 = 109;
    uint256 public constant RARE10 = 110;
    uint256 public constant RARE11 = 111;

    uint256 public constant UNIQUE0 = 200;
    uint256 public constant UNIQUE1 = 201;
    uint256 public constant UNIQUE2 = 202;
    uint256 public constant UNIQUE3 = 203;
    uint256 public constant UNIQUE4 = 204;
    uint256 public constant UNIQUE5 = 205;

    uint256 public constant LEGEND0 = 300;
    uint256 public constant LEGEND1 = 301;

    constructor(
        address _marketAddress,
        address _tokenContractAddress,
        address payable _treasuryWallet) 
        ERC1155("ipfs://QmZGRpX2TAhsSCvBSZATFPViyzpXMdjKWcjCKf4j4Pfswa/{id}") {
        mintPrice = 1;
        maxStrength = 2;
        marketContractAddress = _marketAddress;
        _setToken(_tokenContractAddress);        
        treasuryWallet = _treasuryWallet;
    }

    function uri(uint256 _tokenid) override public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "https://ipfs.io/ipfs/QmZGRpX2TAhsSCvBSZATFPViyzpXMdjKWcjCKf4j4Pfswa/",
                Strings.toString(_tokenid)
            )
        );
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function generateJtemArray() public onlyOwner{
        for (uint256 i = 0; i < 5; i++ ){
            waitForMint.push(NOMAL0); 
        }
        for (uint256 i = 0; i < 9; i++ ){
            waitForMint.push(NOMAL1);
        }
        for (uint256 i = 0; i < 8; i++ ){
            waitForMint.push(NOMAL2); 
        }
        for (uint256 i = 0; i < 7; i++ ){
            waitForMint.push(NOMAL3); 
        }
        for (uint256 i = 0; i < 6; i++ ){
            waitForMint.push(NOMAL4);
        }
        for (uint256 i = 0; i < 5; i++ ){
            waitForMint.push(NOMAL5); 
        }
        for (uint256 i = 0; i < 4; i++ ){
            waitForMint.push(NOMAL6); 
        }
        for (uint256 i = 0; i < 3; i++ ){
            waitForMint.push(NOMAL7);
        }
        for (uint256 i = 0; i < 2; i++ ){
            waitForMint.push(NOMAL8); 
        }
        for (uint256 i = 0; i < 1; i++ ){
            waitForMint.push(NOMAL9); 
        }
        for (uint256 i = 0; i < 5; i++ ){
            waitForMint.push(NOMAL10); 
        }
        for (uint256 i = 0; i < 9; i++ ){
            waitForMint.push(NOMAL11);
        }
        for (uint256 i = 0; i < 8; i++ ){
            waitForMint.push(NOMAL12); 
        }
        for (uint256 i = 0; i < 7; i++ ){
            waitForMint.push(NOMAL13); 
        }
        for (uint256 i = 0; i < 6; i++ ){
            waitForMint.push(NOMAL14);
        }
        for (uint256 i = 0; i < 5; i++ ){
            waitForMint.push(NOMAL15); 
        }
        for (uint256 i = 0; i < 4; i++ ){
            waitForMint.push(NOMAL16); 
        }
        for (uint256 i = 0; i < 3; i++ ){
            waitForMint.push(NOMAL17);
        }
        for (uint256 i = 0; i < 2; i++ ){
            waitForMint.push(NOMAL18); 
        }
        for (uint256 i = 0; i < 1; i++ ){
            waitForMint.push(NOMAL19); 
        }

        for (uint256 i = 0; i < 5; i++ ){
            waitForMint.push(RARE0); 
        }
        for (uint256 i = 0; i < 9; i++ ){
            waitForMint.push(RARE1);
        }
        for (uint256 i = 0; i < 8; i++ ){
            waitForMint.push(RARE2); 
        }
        for (uint256 i = 0; i < 7; i++ ){
            waitForMint.push(RARE3); 
        }
        for (uint256 i = 0; i < 6; i++ ){
            waitForMint.push(RARE4);
        }
        for (uint256 i = 0; i < 5; i++ ){
            waitForMint.push(RARE5); 
        }
        for (uint256 i = 0; i < 4; i++ ){
            waitForMint.push(RARE6); 
        }
        for (uint256 i = 0; i < 3; i++ ){
            waitForMint.push(RARE7);
        }
        for (uint256 i = 0; i < 2; i++ ){
            waitForMint.push(RARE8); 
        }
        for (uint256 i = 0; i < 1; i++ ){
            waitForMint.push(RARE9); 
        }
        for (uint256 i = 0; i < 5; i++ ){
            waitForMint.push(RARE10); 
        }
        for (uint256 i = 0; i < 9; i++ ){
            waitForMint.push(RARE11);
        }

        for (uint256 i = 0; i < 8; i++ ){
            waitForMint.push(UNIQUE0); 
        }
        for (uint256 i = 0; i < 7; i++ ){
            waitForMint.push(UNIQUE1); 
        }
        for (uint256 i = 0; i < 6; i++ ){
            waitForMint.push(UNIQUE2);
        }
        for (uint256 i = 0; i < 5; i++ ){
            waitForMint.push(UNIQUE3); 
        }
        for (uint256 i = 0; i < 4; i++ ){
            waitForMint.push(UNIQUE4); 
        }
        for (uint256 i = 0; i < 3; i++ ){
            waitForMint.push(UNIQUE5);
        }

        for (uint256 i = 0; i < 2; i++ ){
            waitForMint.push(LEGEND0); 
        }
        for (uint256 i = 0; i < 1; i++ ){
            waitForMint.push(LEGEND1); 
        }
    }

    function generatefirstJtem() public onlyOwner{
        firstMint.push(NOMAL0); 
    }

    function generateItemCheck() public onlyOwner{
        itemCheck.push(NOMAL0);
        itemCheck.push(NOMAL1);
        itemCheck.push(NOMAL2);
        itemCheck.push(NOMAL3);
        itemCheck.push(NOMAL4);
        itemCheck.push(NOMAL5);
        itemCheck.push(NOMAL6);
        itemCheck.push(NOMAL7);
        itemCheck.push(NOMAL8);
        itemCheck.push(NOMAL9);
        itemCheck.push(NOMAL10);
        itemCheck.push(NOMAL11);
        itemCheck.push(NOMAL12);
        itemCheck.push(NOMAL13);
        itemCheck.push(NOMAL14);
        itemCheck.push(NOMAL15);
        itemCheck.push(NOMAL16);
        itemCheck.push(NOMAL17);
        itemCheck.push(NOMAL18);
        itemCheck.push(NOMAL19);

        itemCheck.push(RARE0);
        itemCheck.push(RARE1);
        itemCheck.push(RARE2);
        itemCheck.push(RARE3);
        itemCheck.push(RARE4);
        itemCheck.push(RARE5);
        itemCheck.push(RARE6);
        itemCheck.push(RARE7);
        itemCheck.push(RARE8);
        itemCheck.push(RARE9);
        itemCheck.push(RARE10);
        itemCheck.push(RARE11);

        itemCheck.push(UNIQUE0);
        itemCheck.push(UNIQUE1);
        itemCheck.push(UNIQUE2);
        itemCheck.push(UNIQUE3);
        itemCheck.push(UNIQUE4);
        itemCheck.push(UNIQUE5);

        itemCheck.push(LEGEND0);
        itemCheck.push(LEGEND1);
    }

    function mintFirstJtem() public {
        require(balanceCheck(msg.sender).length==0, "ERC1155: you already have first Emblem");

        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (firstMint.length);
        uint id = firstMint[n];
        
        _mint(msg.sender, id, 1, "");
        setApprovalForAll(marketContractAddress, true);
    }

    function mintRandomJtem() public returns (uint256){  
        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (waitForMint.length);
        uint256 id = waitForMint[n];
        
        _mint(msg.sender, id, 1, "");
        setApprovalForAll(marketContractAddress, true);
        
        //재무 토큰 지갑으로 전송
        bool success = token.increaseContractAllowance(
            msg.sender, 
            address(this),
            mintPrice * decimals
        );
        require(success,"IncreaseContract Fail");
        token.transferFrom(msg.sender, treasuryWallet, mintPrice * decimals); 
        token.marketBurn(treasuryWallet, (mintPrice * decimals)/2);

        return id;
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }

    function balanceCheck(address sender) public returns(uint256[][] memory){
        uint256[][] memory balance = new uint256[][](itemCheck.length);
        uint256 count = 0;

        for(uint256 i=0; i<itemCheck.length; i++){
            uint256 mybalance = balanceOf(sender, itemCheck[i]); 
            if(mybalance!=0){
                balance[count] = new uint256[](2);
                balance[count][0] = itemCheck[i];
                balance[count][1] = mybalance;
                count++;
            }            
        }

        uint256[][] memory result = new uint256[][](count);
        for(uint256 i=0; i<count; i++){
            result[i] = new uint256[](2);
            result[i][0] = balance[i][0];
            result[i][1] = balance[i][1];
        }

        return result;
    }
    // JetToken 으로 결제.
    function _setToken(address _tokenAddress) private onlyOwner returns (bool) {
        require(_tokenAddress != address(0x0));
        token = JetToken(_tokenAddress);
        return true;
    }
    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}