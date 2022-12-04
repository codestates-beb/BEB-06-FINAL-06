import React,{useContext, useState, useEffect} from 'react'
// import Header from '../components/Header'
import './NFTMarket.css'
import axios from 'axios';
import simbol from '../../icon/simbol.png'
import NFTItemlist from '../ERC721-item/NFTItemList'
import Box from '../../icon/Box.png'
import { useRecoilState } from "recoil";
import { userState } from '../../recoil/user/atom';
import { Login } from '../../recoil/user/atom';
// import nftdummy from '../ERC721-item/nftdummy';


const NFTMarket = () => {
// 사용자 정보 불러오기
// const {user, setUser, isLogin, setIsLogin} = useContext(UserContext);
const NFTPRICE = 100;
const [user, setUser] = useRecoilState(userState)   // recoil user 선언
const [isLogin, setIsLogin] = useRecoilState(Login) // recoil user login 선언
const [nfts, setNfts] = useState([])

// NFT 초기화
useEffect(()=> {
  axios.get("http://localhost:8000/nft/findall",
  {withCredentials: true})
  .then((response) =>{
    setNfts(response.data)
    //  console.log(response.data)
  })
  .catch((Error)=>{
      console.log(Error)
  })
}, [])


const NFTminting = () => {
  // const rand = Math.floor(Math.random() * 21);
  // console.log(rand)
  
  if(user.user_token1amount < NFTPRICE){
    alert("토큰이 부족합니다. 토큰 개수를 확인하세요.")  
  }else{
     axios.get("http://localhost:8000/nft/buy",
     {withCredentials : true})
     .then(function (response) {
         console.log(response.data)
         setUser({...user,
          user_token1amount : user.user_token1amount-NFTPRICE })
         alert("민팅 되었습니다. 마이페이지에서 확인하세요.")

         window.location.reload();
         
     })
     .catch((Error) => {
         console.log(Error)
     })
  }
}
// NFT 데이터 불러오기
 return(
  <div className='NFTMarket'>
    {/* 상단 랜덤박스 /  */}
    <div className='NFTMarket_Top'>
      {/* 랜덤박스 이미지 */}
      <div className='NFTMarket_Top-random'>
        <img src="https://64.media.tumblr.com/df5c115b40469e0c42033e7d56cb8987/tumblr_pw6qa3NDvW1qeyvpto1_500.gifv" alt='Box'/>
      </div>
      {/* 아이템 정보 */}
      <div className='NFTMarket_Top-detailed'>
        <div className='NFTMarket_Top-detailed2'>
            {/* 타이틀 */}
            <div className='NFTMarket_Top-detailed-title-container'>
              <div className='NFTMarket_Top-detailed-title'>
                 Name 
              </div>
              <div className='NFTMarket_Top-detailed-title-content'>
                Jetris NFT #1 ~ 20
              </div>
            </div>
            {/* 설명 */}
            <div className='NFTMarket_Top-detailed-title-container'>
              <div className='NFTMarket_Top-detailed-title'>
              Description
              </div>
              <div className='NFTMarket_Top-detailed-title-content2'>
              Token을 사용하여 랜덤으로 NFT를 뽑으세요!<br></br>
              뽑은 NFT는 프로필에 장착하여 커뮤니티 활동을 즐길 수 있습니다.<br></br>
              랜덤으로 뽑힌 NFT 상세 설명은 마이 페이지에서 확인할 수 있습니다.
              </div>
            </div>
            {/* 가격 */}
            <div className='NFTMarket_Top-detailed-title-container'>
              <div className='NFTMarket_Top-detailed-title'>
              Price 
              </div>
              <div className='price'>
                <img src={simbol} alt='simbol'/>
                <span> 100 JTT </span>
              </div>
            </div>
            {/* 버튼 */}
            <div className='NFTMarket_Top-detailed-btn'>
              <button className='btn-Shape btn-Size-long2' onClick={NFTminting}> 랜덤 뽑기 </button>
            </div>
        </div>
      </div>
    </div>
  {/* NFT 미리보기 */}
  <div className='NFTMarket_Bottom'>
    <div>

    </div>
    <NFTItemlist nftitem={nfts} loadpage='Market'/>
  </div>
  </div>
 )

}

export default NFTMarket;