import React, {useContext, useEffect} from 'react'
import Header from '../components/Header'
import '../style/ItemMarket.css'
import NFTItemlist from '../components/ERC721-item/NFTItemList'
import Itemlist from '../components/ERC1155-item/ItemList'
import Box from '../icon/Box.png'
import axios from 'axios'
import {UserContext} from '../User/UserContext'

const ItemMarket = () => {
    const {user, setUser, isLogin, setIsLogin} = useContext(UserContext);
    useEffect(() => {
        axios.get("http://localhost:8000/user/success",
            {withCredentials : true})
            .then(function (response) {
                console.log("MyPage success")
                // console.log(response.data)
                setIsLogin(true)    // 로그인 상태 유지
                // 유저정보를 갱신함
                setUser({
                    id: response.data.id,
                    user_address: response.data.user_address,
                    user_nickname: response.data.user_nickname,
                    user_token1amount: response.data.user_token1amount,
                    user_token2amount: response.data.user_token2amount,
                    user_score: response.data.user_score,
                    user_img: response.data.user_img,
                })
            })
            .catch((Error) => {
                console.log(Error)
            })
        },[])
 return(
  <div className='ItemMarket'>
    <Header/>
        <div className='item_Content'>
            <div className='randomImg'>
                <div className='randomImgBox'>
                    <img src={Box} alt='Box'></img>
                </div>
            </div>
            <div className='itemInfo'>
                <div className='transactionButton'><button>Transaction Button</button></div>
                <div className='token1Count'>
                    <div>ERC-20 Token1 Count : {user.user_token1amount}개</div>
                </div>
                <div className='marketDescription'>
                    <div className='description'>
                        <span>Token을 사용하여 랜덤으로 아이템을 뽑으세요!</span><br/><br/>
                        <span>위에 있는 노란 버튼을 통해 랜덤 뽑기가 가능합니다.</span><br/><br/>
                        <span>뽑은 아이템을 프로필에 장착하여 기본 점수를 높일 수 있습니다.</span><br/><br/>
                        <span>랜덤으로 뽑힌 아이템과 상세 설명은 마이 페이지에서 확인할 수 있습니다.</span><br/>
                    </div>
                </div>
            </div>
            <div className='imgCollect'>
                <div className='NFTs'><Itemlist/></div>
            </div>
        </div>
  </div>
 )

}

export default ItemMarket;