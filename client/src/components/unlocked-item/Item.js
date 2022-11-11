import React from 'react'
import weth from '../../icon/weth.png'
import './Item.css'
const Item = ({id, name, image, price}) => {

    return (
        <div className='item'>
            <div className='item-hover'>
                <div className='item-component__item'>
                    <img className='item-component__image' src={image} alt='img'/> {/* 이름 보여주는 부분 */}
                    <div className='item-component__datails'>
                        <div className='name'>
                            {name}
                            {id}
                        </div>
                    </div>
                    {/* 가격 보여주는 부분 */}
                    <div className='item-component__price-container'>
                        <img src={weth} className='wethImage' alt='img'/>
                        <div className='peice'>{price}</div>
                    </div>
                </div>
                <div className='sell-container'>
                    <button className='sell-container__btn sell-container__btn-size'>구매하기</button>
                </div>
            </div>
        </div>
    )
}

export default Item