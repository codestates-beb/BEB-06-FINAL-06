import React,{useContext, useState, useEffect} from 'react'
import './ItemMarket2.css'
import axios from 'axios';
import simbol from '../../icon/simbol.png'
import Box from '../../icon/Box.png'
import { useRecoilState } from "recoil";
import { userState } from '../../recoil/user/atom';
import { Login } from '../../recoil/user/atom';
import Itemlist from '../ERC1155-item/ItemList'

const ItemMarket2 = () => {
// 사용자 정보 불러오기
// const {user, setUser, isLogin, setIsLogin} = useContext(UserContext);
const ITEMPRICE = 10; // 아이템 가격

const [user, setUser] = useRecoilState(userState)   // recoil user 선언
const [isLogin, setIsLogin] = useRecoilState(Login) // recoil user login 선언
const [items, setItems] = useState([])

    // Item 초기화
    useEffect(() => {
        axios
            .get("http://localhost:8000/item/findall", {withCredentials: true})
            .then((response) => {
                setItems(response.data)
                console.log(items)
            })
            .catch((Error) => {
                console.log(Error)
            })
        }, [])


 // 아이템 구매
 const Transaction = () => {
    if (user.user_token1amount < ITEMPRICE) {
        alert("토큰이 부족합니다. 토큰 개수를 확인하세요.")
    } else {
        axios
            .get("http://localhost:8000/item/buy", {withCredentials: true})
            .then(function (response) {
                //  console.log(response.data)
                setUser({
                    ...user,
                    user_token1amount: user.user_token1amount - ITEMPRICE
                })
                alert("아이템이 구매 되었습니다. 마이페이지에서 확인하세요.")

                window
                    .location
                    .reload();

            })
            .catch((Error) => {
                console.log(Error)
            })
        }
}

// NFT 데이터 불러오기
 return(
  <div className='ItemMarket'>
    {/* 상단 랜덤박스 /  */}
    <div className='ItemMarket_Top'>
      {/* 랜덤박스 이미지 */}
      <div className='ItemMarket_Top-random'>
        <img src="https://64.media.tumblr.com/df5c115b40469e0c42033e7d56cb8987/tumblr_pw6qa3NDvW1qeyvpto1_500.gifv" alt='Box'/>
      </div>
      {/* 아이템 정보 */}
      <div className='NFTMarket_Top-detailed'>
        <div className='NFTMarket_Top-detailed2'>
            {/* 타이틀 */}
            <div className='ItemMarket_Top-detailed-title-container'>
              <div className='NFTMarket_Top-detailed-title'>
                 Name 
              </div>
              <div className='NFTMarket_Top-detailed-title-content'>
                Jetris ITEM
              </div>
            </div>
            {/* 설명 */}
            <div className='ItemMarket_Top-detailed-title-container'>
              <div className='NFTMarket_Top-detailed-title'>
              Description
              </div>
              <div className='NFTMarket_Top-detailed-title-content2'>
              Token을 사용하여 랜덤으로 ITEM을 뽑으세요!<br></br>
              뽑은 ITEM을 장착하여 게임시 추가 점수를 받을 수 있습니다.<br></br>
              랜덤으로 뽑힌 ITEM 상세 설명은 마이 페이지에서 확인할 수 있습니다.
              </div>
            </div>
            {/* 확률 */}
            <div className='ItemMarket_Top-detailed-title-container'>
                            <div className='NFTMarket_Top-detailed-title'>
                                Probability
                            </div>
                            <div className='NFTMarket_Top-detailed-title-content2'>
                                <span className='Legend'>Legend</span>
                                : 5.26%<span className='Figure'>(2/38)</span>
                                <br></br>
                                <span className='Unique'>Unique
                                </span>
                                : 10.53%<span className='Figure'>(4/38)</span>
                                <br></br>
                                <span className='Rare'>Rare
                                </span>
                                : 31.58%<span className='Figure'>(12/38)</span>
                                <br></br>
                                <span className='Nomal'>Nomal
                                </span>
                                : 52.63%<span className='Figure'>(20/38)</span>
                            </div>
                        </div>
            {/* 가격 */}
            <div className='ItemMarket_Top-detailed-title-container'>
              <div className='NFTMarket_Top-detailed-title'>
              Price 
              </div>
              <div className='price'>
                <img src={simbol} alt='simbol'/>
                <span> 10 JT </span>
              </div>
            </div>
            {/* 버튼 */}
            <div className='ItemMarket_Top-detailed-btn'>
              <button className='btn-Shape btn-Size-long2' onClick={Transaction}> 랜덤 뽑기 </button>
            </div>
        </div>
      </div>
    </div>
  {/* NFT 미리보기 */}
  <div className='NFTMarket_Bottom'>
    <div>

    </div>
    <Itemlist item={items} loadpage='Market'/>
  </div>
  </div>
 )

}

export default ItemMarket2;