import React,{useContext, useState, useEffect} from 'react'
import Header from '../components/Header'
import '../style/NFTMarket.css'
import axios from 'axios';
import { UserContext } from '../User/UserContext';
import NFTItemlist from '../components/ERC721-item/NFTItemList'
const NFTMarket = () => {
// 사용자 정보 불러오기
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
// NFT 데이터 불러오기

const test = () =>{
  console.log(user)
}

 return(
  <div className='NFTMarket'>
    <Header/>
    <button onClick={test}> 테스트 버튼 </button>
    {/* <div className='nftContent'> */}
      <div className='TokenCount-Container'>
        <span className='TokenCount'>
          ERC-20 Token2 Count : {user.user_token2amount}개
        </span>
      </div>
    <div className='nftDummy'>
      <div className='nft'>NFT IMGS</div>
    </div>
    {/* </div> */}
  </div>
 )

}

export default NFTMarket;