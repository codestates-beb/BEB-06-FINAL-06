//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./JetToken.sol";
import "./LiquidityPool.sol";

contract JetTRouter {
    LiquidityPool liquidityPool;
    JetToken jet;

    constructor(LiquidityPool _liquidityPool, JetToken _jet) 
    {
        liquidityPool = _liquidityPool;
        jet = _jet;
    }

    function _getAddress() public view returns (address, address){
        return (address(liquidityPool), address(jet));
    }

    function addLiquidity(uint256 _jtAmount) external payable {
        require(jet.balanceOf(msg.sender) > 0, "NO_AVAILABLE_TOKENS"); // 토큰 보유량 체크 

        bool success = jet.increaseContractAllowance(
            msg.sender, // from 
            address(this), // to
            _jtAmount 
        );
        require(success);
        
        jet.transferFrom(msg.sender, address(liquidityPool), _jtAmount); 
        liquidityPool.deposit{value: msg.value}(_jtAmount, msg.sender); // value:이더, token:jt 
    }

    function pullLiquidity() external {
        liquidityPool.withdraw(msg.sender);
    }

    function swapTokens(uint256 _jtAmount) external payable {
        bool success = jet.increaseContractAllowance(
            msg.sender,
            address(this),
            _jtAmount
        );
        require(success);

        // 요청자의 jttoken: 0 or 0이상 을 pool로 전송
        jet.transferFrom(msg.sender, address(liquidityPool), _jtAmount);
        liquidityPool.swap{value: msg.value}(msg.sender, _jtAmount);
    }
}