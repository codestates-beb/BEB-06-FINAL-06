import React from 'react'
import weth from '../../icon/weth.png'
import './Item.css'
import { Lock } from '@material-ui/icons';
import axios from 'axios';
import { useRecoilState } from "recoil";
import { userState } from '../../recoil/user/atom';

const Item = ({id, name, image, price, rating, loadpage}) => {
    const [user, setUser] = useRecoilState(userState)   // recoil user 선언
    
    // 판매하기 ?
    const Sell = () => {
        console.log(loadpage)
        // console.log(name)
    }
    // // 장착하기
    const Mounting = () =>{
        // 유저의 뱃지 이미지를 갱신시키고 -> 디비로 값 보냄 ( 다음에 로그인할때 유지 )
        axios
            .post("http://localhost:8000/item/mounting", {
                item_img: image,
                rating : rating,
            },{withCredentials : true})
            .then(function (response) {
                // console.log(response.data)
                console.log("성공")
                // window.location.reload();
                setUser({...user,
                    item_img : image })
                alert("아이템이 장착 되었습니다.")
            })
            .catch((Error) => {
                console.log("실패")
                console.log(Error)
            })
    }

    return (
        <div className='item'>
            <div className='item-hover'>
                <div className='item-component__item'>
                    <img className='item-component__image' src={image} alt='img'/> {/* 이름 보여주는 부분 */}
                    {/* <div className='item-component__datails'>
                        <div className='name'>
                            {name}
                        </div>
                    </div> */}
                </div>
                {/* 마우스 올렸을 시 사용 버튼 나오는 부분  div(useItem-container) 안에 작성하시면 됩니다*/}
                <div className='useItem-container'>
                {loadpage === 'MyPage' ? 
                <div>
                    <span className='mypage-Item-container_sapn'>{name} </span>
                    <button className='mypage-Item-container__btn mypage-Item-container__btn-size' onClick={Mounting}>장착하기</button>
                    {/* <button className='mypage-Item-container__btn mypage-Item-container__btn-size' onClick={Mounting}>판매하기</button> */}
                </div>
                :   <span className='mypage-Item-container_sapn'>{name} </span>
                }
                
                
                 </div>
            </div>
        </div>
    )
}

export default Item