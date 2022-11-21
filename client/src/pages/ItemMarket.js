import React from 'react'
import Header from '../components/Header'
import '../style/ItemMarket.css'

const ItemMarket = () => {
 return(
  <div className='ItemMarket'>
    <Header/>
        <div className='item_Content'>
            <div className='randomImg'>
                <div className='randomImgBox'>randombox</div>
            </div>
            <div className='itemInfo'>
                <div className='transactionButton'><button>Transaction button</button></div>
                <div className='token1Count'>ERC20 Token1 Count</div>
                <div className='marketDescription'>Market Description</div>
            </div>
            <div className='imgCollect'>
                <div>imgCards</div>
            </div>
        </div>
  </div>
 )

}

export default ItemMarket;