import React from 'react'
import weth from '../../icon/weth.png'
import './NFTItem.css'
const Item = ({id, name, image, price}) => {
    const Sell = () => {
        
    }
    return (
        <div className='nftitem'>
            <div className='nftitem-hover'>
                <div className='nftitem-component__item'>
                    <img className='nftitem-component__image' src={image} alt='img'/> {/* 이름 보여주는 부분 */}
                    {/* <div className='nftitem-component__datails'>
                        <div className='name'>
                            {name}
                            {id}
                        </div>
                    </div> */}
                    {/* 가격 보여주는 부분 */}
                    {/* <div className='nftitem-component__price-container'>
                        <img src={weth} className='wethImage' alt='img'/>
                        <div className='peice'>{price}</div>
                    </div> */}
                </div>
                {/* 처음에 잠금화면 표시 -> 구매후는 안보여야함 */}
                <div className='sell-container'>
                {/* div sell-container 안에 Description 작성하면 됩니다.*/}
                {/* <Lock fontSize='large'></Lock> */}
                <button className='sell-container__btn sell-container__btn-size' onClick={Sell}>판매하기</button>
                </div>
            </div>
        </div>
    )
}

export default Item