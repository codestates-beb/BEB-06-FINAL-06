import React from 'react'
import Header from '../components/Header'
import '../style/NFTMarket.css'

const NFTMarket = () => {
 return(
  <div className='NFTMarket'>
    <Header/>
    <div className='nftContent'>
    <div className='TokenCount'>
      <div className='Token_Count'>token1 count</div>
    </div>
    <div className='nftDummy'>
      <div className='nft'>NFT IMGS</div>
    </div>
    </div>
  </div>
 )

}

export default NFTMarket;