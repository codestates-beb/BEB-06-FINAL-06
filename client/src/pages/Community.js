import React,{useContext, useState, useEffect} from 'react'
import Header from "../components/Header";
import '../style/Community.css';
import Banner from '../pages/Banner';
import {AiOutlineComment} from 'react-icons/ai';
import PostWriting from "../components/Post/PostWriting";
import PostList from '../components/Post/PostList'
import {useWeb3React} from '@web3-react/core';
import { UserContext } from '../User/UserContext';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Community = () => {
    const {account, library, active, activate, deactivate} = useWeb3React();
    const {user, setUser, isLogin, setIsLogin} = useContext(UserContext);
    const navigator = useNavigate(); 
    if(isLogin === false){
        navigator('/')
        console.log("옹잉")
    }

    // 랜더링 시 유저 상태 유지하기 위해 서버와 통신

    useEffect(() => {
        axios.get("http://localhost:8000/user/success",
            {withCredentials : true})
            .then(function (response) {
                console.log("Community success")
                // console.log(response.data[0])
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
        return (
            <div className="CommunityPage">
            <Header/>
            <div className="CommunityContent">
                <div className="Banner">
                    <div className="banner">
                        <Banner/>
                    </div>
                </div>
                <div className="Categories">
                    <div className="Categorites_content">
                        <div className="hamburgerMenu">
                        <div className='hamburgerMenuContent'>
                        <input id="menuToggle" type="checkbox" />
                        <label class="menuBtn" for="menuToggle">
                            <span></span>
                        </label>
                         <ul className="menuBox">
                            <li className="menuItem">JETRIS</li>
                            <li className="menuItem">TRADE</li>
                            <li className="menuItem">NFT</li>
                        </ul>
                        </div>
                        </div>
                <div className="CategoriesList">
                    <div className="list">JETRIS</div>
                    <div className="list">TRADE</div>
                    <div className="list">NFT</div>
                </div>
                </div>
                </div>
                <div className="Posts">
                    <PostWriting/>
                    <PostList/>
                </div>
            </div>
            </div>
        )
    }

export default Community;



