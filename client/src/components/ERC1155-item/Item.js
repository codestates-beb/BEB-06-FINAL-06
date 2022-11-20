import React from 'react'
import weth from '../../icon/weth.png'
import './Item.css'
import { Lock } from '@material-ui/icons';
const Item = ({id, name, image, price}) => {
    const UseItem = () => {
        
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
                {/* 마우스 올렸을 시 사용 버튼 나오는 부분  div(useItem-container) 안에 작성하시면 됩니다*/}
                <div className='useItem-container'>
                <button className='useItem-container__btn useItem-container__btn-size' onClick={UseItem}>사용하기</button>
                </div>
            </div>
        </div>
    )
}

export default Item