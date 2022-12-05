const jetrisNFT= artifacts.require("JetrisNFT");
const jetrisMarket= artifacts.require("JetrisMarket");
const jetrisItems = artifacts.require("JetrisItems");
const jetrisUser = artifacts.require("JetrisUser");

const lpContract = artifacts.require('../contracts/LiquidityPool.sol');
const jetContract = artifacts.require('../contracts/JetToken.sol');
const lptContract = artifacts.require('../contracts/LPT.sol');
const routerContract = artifacts.require('../contracts/JetTRouter.sol');

const stakingContract = artifacts.require('../contracts/Staking.sol');
const jet2TokenContract = artifacts.require('../contracts/Jet2Token.sol');

module.exports = async function (deployer) {

  const deployFunc = async (deployer, web3, contributeAccount) => {
    deployer.from = contributeAccount;
    await deployer.then(async () => {
      let jtCont,lpCont,lptCont,routerCont,jetrisNFTCont,jetrisItemsCont,jt2Cont,stakingCont;

      //jt deploy
      await deployer.deploy(jetContract, contributeAccount, {from: contributeAccount});
      jtCont = await jetContract.deployed();

      //jt2 deploy
      await deployer.deploy(jet2TokenContract, contributeAccount, {from: contributeAccount});
      jt2Cont = await jet2TokenContract.deployed();
  
      //staking deploy
      await deployer.deploy(stakingContract, jt2Cont.address, {from: contributeAccount});
      stakingCont = await stakingContract.deployed();
  
      await deployer.deploy(
        jetrisMarket, 
        jetContract.address,
        contributeAccount,
        {from: contributeAccount}
      );
      jetrisMarketCont = await jetrisMarket.deployed();
  
      await deployer.deploy(
        jetrisNFT,
        jetrisMarketCont.address,
        jetContract.address,
        "https://ipfs.io/ipfs/Qmb9C6BQg3CXYkDG3yeHGvStHMxjVxUdpK6mWiMCwz6WM8/", // 예시
        contributeAccount,
        {from: contributeAccount}
      );
      await deployer.deploy(
        jetrisItems,
        jetrisMarketCont.address,
        jetContract.address,
        contributeAccount,
        {from: contributeAccount}
      );
      //jetris NFT contract instance 
      jetrisNFTCont = await jetrisNFT.deployed();
      jetrisItemsCont = await jetrisItems.deployed();

      await jetrisItemsCont.generateJtemArray();
      await jetrisItemsCont.generatefirstJtem();
      await jetrisItemsCont.generateItemCheck();
      
      await deployer.deploy(
        jetrisUser, 
        jetContract.address,
        jetrisNFTCont.address,
        jetrisItemsCont.address,
        contributeAccount,
        {from: contributeAccount}
      );
      jetrisUserCont = await jetrisUser.deployed();
      await jetrisMarketCont.setUserContractAddress(jetrisUserCont.address);
  
      // swap_pool
      await deployer.deploy(lpContract, {from: contributeAccount}); // lp 디플로이
      lpCont = await lpContract.deployed(); 
  
      await deployer.deploy(lptContract,lpCont.address, {from: contributeAccount}) // lpt 디플로이 
      lptCont = await lptContract.deployed();
  
      // address setting
      await lpCont.setJtCoinAddress(jtCont.address);
      await lpCont.setLPTAddress(lptCont.address);
      await lpCont.setJet2CoinAddress(jt2Cont.address);
  
      await deployer.deploy(routerContract,
          lpCont.address,
          jtCont.address,
          {from: contributeAccount}
      );
  
      routerCont = await routerContract.deployed();
      await jtCont.setRouterAddress(routerCont.address);
      await jtCont.setJetrisNFTAddress(jetrisNFTCont.address);
      await jtCont.setJetrisItemsAddress(jetrisItemsCont.address);
      await jtCont.setJetrisUserAddress(jetrisUserCont.address);
      await jtCont.setJetrisMarketAddress(jetrisMarketCont.address);
      await jtCont.setStakingAddress(stakingCont.address);
      await stakingCont.setJetTokenAddress(jtCont.address);
      await jt2Cont.setLPAddress(lpCont.address); // lp어드레스 추가 
      await jt2Cont.MoveToTreasuryWallet(); // lp,재무 지갑 자산 이동
  
      // Contribute
      await jtCont.contribute({ 
          from: contributeAccount,
          value: web3.utils.toWei("1","ether") 
      });
      await jtCont.claimTokens({
          from: contributeAccount
      });
      await jtCont.sendLiquidityToLPContract(lpCont.address);
    })
  }
};
