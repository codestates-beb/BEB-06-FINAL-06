import React from 'react'
import weth from '../../icon/weth.png'
import './Item.css'
import { Lock } from '@material-ui/icons';
const Item = ({id, name, image, price}) => {
    const Sell = () => {
        
    }
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
                {/* 처음에 잠금화면 표시 -> 구매후는 안보여야함 */}
                <div className='sell-container'>

                <Lock fontSize='large'></Lock>
                    {/* <button className='sell-container__btn sell-container__btn-size' onClick={Sell}>구매하기</button> */}
                </div>
            </div>
        </div>
    )
}

export default Item