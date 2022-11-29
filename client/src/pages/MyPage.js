import React, {useContext, useEffect} from 'react' // 선언
import '../style/MyPage.css'
import ItemList from '../components/ERC1155-item/ItemList'
import NFTItemlist from '../components/ERC721-item/NFTItemList'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import {UserContext} from '../User/UserContext'; // 선언

const MyPage = () => {
    const navigator = useNavigate();
    const {user, setUser, isLogin, setIsLogin} = useContext(UserContext);
    // user : 현재 유저 정보, setUser : 유저 정보 갱신, isLogin : 현재 로그인 상태, setisLogin : 로그인 상태 갱신
     // 랜더링 시 유저 상태 유지하기 위해 서버와 통신

     // 유저 정보 갱신
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
    ///////

    const gamePageLoad = () => {
        navigator('/GamePage');
    }


    
    const test = () => {

        console.log(user)
    }

    return (
        <div className='MyPage'>
            <Header/>
            <div className='MyPage_Header'>
                <span className='header-text'>This is MyPage !</span>
            </div>
            <div className='MyPage_Content'>
                {/* 마이페이지 왼쪽 구성 */}
                <div className='MyPage_Content-left'>
                    <img
                        className='MyPage_Content-setImg'
                        src={user.user_img}/>
                    <div className='MyPage_Content-UserInfo'>
                        <span>닉네임 : {user.user_nickname}</span>
                        <span>ERC-20 Token1 : {user.user_token1amount}개</span>
                        <span>ERC-20 Token2 : {user.user_token2amount}개</span>
                        <span>Score Point : {user.user_score}점</span>
                    </div>
                    <button
                        className='btn-Shape btn-Size-long btn-gamestart'
                        onClick={gamePageLoad}>게임 시작</button>
                    <button className='btn-Shape btn-Size-long btn-gamestart' onClick={test}>test</button>
                </div>
                {/* 마이페이지 오른쪽 구성 */}
                <div className='MyPage_Content-right'>
                    <div className='MyPage_Content-Profile-container'>
                        <span className='container-title'>
                            {`Profile (ERC1155)`}
                            <div>
                                <ItemList/>
                            </div>
                        </span>
                    </div>
                    <div className='MyPage_Content-NFT-container'>
                        <span className='container-title'>
                            {`NFT (ERC721)`}
                            <div>
                                <NFTItemlist/>
                            </div>
                        </span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default MyPage