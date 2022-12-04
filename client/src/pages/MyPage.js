import React, {useContext, useEffect, useState} from 'react' // 선언
import '../style/MyPage.css'
import ItemList from '../components/ERC1155-item/ItemList'
import NFTItemlist from '../components/ERC721-item/NFTItemList'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import itemdummy from '../components/ERC1155-item/dummy';   // 나중에 디비로 변경
import nftdummy from '../components/ERC721-item/nftdummy';   // 나중에 디비로 변경
import { CompareArrowsOutlined } from '@material-ui/icons'
// import {UserContext} from '../User/UserContext'; // 선언
import { useRecoilState } from "recoil";
import { userState } from '../recoil/user/atom';
import { Login } from '../recoil/user/atom';


const MyPage = () => {
    const navigator = useNavigate();
    // const {user, setUser, isLogin, setIsLogin} = useContext(UserContext);
    // user : 현재 유저 정보, setUser : 유저 정보 갱신, isLogin : 현재 로그인 상태, setisLogin : 로그인 상태 갱신

    const [user, setUser] = useRecoilState(userState)   // recoil user 선언
    const [isLogin, setIsLogin] = useRecoilState(Login) // recoil user login 선언
    const [myNft, setMyNft] = useState([]) // 사용자 NFT 관리
    const [myItem, setMyItem] = useState([]) // 사용자 ITEM 관리
    // 랜더링 시 유저 상태 유지하기 위해 서버와 통신

        // NFT 받기
        useEffect(() => {
            axios.get("http://localhost:8000/nft/mynft",
            {withCredentials : true})
            .then(function (response) {
                console.log(response.data)
                setMyNft(response.data)        
            })
            .catch((Error) => {
                console.log(Error)
            })
        },[])
        // 아이템 받기
        useEffect(() => {
            axios.get("http://localhost:8000/item/myitem",
            {withCredentials : true})
            .then(function (response) {
                console.log(response.data)
                setMyItem(response.data)        
            })
            .catch((Error) => {
                console.log(Error)
            })
        },[])   
    // NFT클릭시 프로필 이미지가 변경된다.

    const gamePageLoad = () => {
        // navigator('/GamePage');
        console.log(user)
    }
    
    const test = () => {
         console.log(myNft)
         console.log(user.user_img)
    }   

    return (
        <div className='MyPage'>
            <Header/>
            <div className='MyPage_Header'>
                <span className='header-text'>마이페이지</span>
            </div>
            <div className='MyPage_Content'>
                {/* 마이페이지 왼쪽 구성 */}
                <div className='MyPage_Content-left'>
                    <div className='center'>
                    <div className='MyPage_Content-img'>

                        <img className='MyPage_Content-userImg' src={user.user_img}/>
                        <img className='MyPage_Content-itemImg' src={user.item_img}/>
                    </div>
                    </div>
                    <div className='center'>
                        <div className='MyPage_Content-UserInfo'>
                            <div className='center'>
                                <div className='userInfo'>
                                    <span className='userInfo-title'> {"닉네임 >"} </span>
                                    <span className='userInfo-content'>{user.user_nickname}</span>
                                </div>
                            </div>
                            <div className='center'>
                                <div className='userInfo'>
                                    <span className='userInfo-title'> {"JT >"} </span>
                                    <span className='userInfo-content'>{user.user_token1amount} 개</span>
                                </div>
                            </div>
                            <div className='center'>
                                <div className='userInfo'>
                                    <span className='userInfo-title'> {"JTT >"} </span>
                                    <span className='userInfo-content'>{user.user_token2amount} 개</span>
                                </div>
                            </div>
                            <div className='center'>
                                <div className='userInfo'>
                                    <span className='userInfo-title'> {"최고점수 >"} </span>
                                    <span className='userInfo-content'>{user.user_score} 점</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className='btn-Shape btn-Size-long btn-gamestart'
                        onClick={gamePageLoad}>게임 시작</button>
                    {/* <button className='btn-Shape btn-Size-long btn-gamestart' onClick={test}>test</button> */}
                </div>
                {/* 마이페이지 오른쪽 구성 */}
                <div className='MyPage_Content-right'>
                    <div className='MyPage_Content-Item-container'>
                        <span className='container-title'> 아이템 </span>
                            <div className='itembox'>
                                <ItemList item={myItem} loadpage='MyPage'/>
                            </div>
                        
                    </div>
                    <div className='MyPage_Content-NFT-container'>
                        <span className='container-title'> 프로필 </span>
                            <div className='itembox'>
                                <NFTItemlist nftitem={myNft} loadpage='MyPage' />
                            </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default MyPage