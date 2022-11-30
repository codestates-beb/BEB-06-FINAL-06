import axios from 'axios'
import React from 'react'
import weth from '../../icon/weth.png'
import './NFTItem.css'
import { useRecoilState } from "recoil";
import { userState } from '../../recoil/user/atom';

const NFTItem = ({id, name, image, price, loadpage}) => {
    const [user, setUser] = useRecoilState(userState)   // recoil user 선언
    // 판매하기 ?
    const Sell = () => {
        console.log(loadpage)
    }
    // 장착하기
    const Mounting = () =>{
        // 유저의 프로필이미지를 갱신시키고 -> 디비로 값 보냄 ( 다음에 로그인할때 유지 )
        axios
            .post("http://localhost:8000/nft/mounting", {
                user_img: image,
            },{withCredentials : true})
            .then(function (response) {
                console.log("성공")
                console.log(response.data)
                // window.location.reload();
                setUser({...user,
                    user_img : image })
            })
            .catch((Error) => {
                console.log("실패")
                console.log(Error)
            })
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
                {loadpage === 'MyPage' ? 
                <button className='sell-container__btn sell-container__btn-size' onClick={Mounting}>장착하기</button> 
                : <button className='sell-container__btn sell-container__btn-size' onClick={Sell}>판매하기</button> }
                
                </div>
            </div>
        </div>
    )
}

export default NFTItem