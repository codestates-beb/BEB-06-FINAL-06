import React,{useContext, useState, useEffect} from 'react'
import Header from "../components/Header";
import '../style/Community.css';
import Banner from '../pages/Banner';
import {AiOutlineComment} from 'react-icons/ai';
import PostWriting from "../components/Post/PostWriting";
import PostList from '../components/Post/PostList'
import {useWeb3React} from '@web3-react/core';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
// import { UserContext } from '../User/UserContext';
import { useRecoilState } from "recoil";
import { userState } from '../recoil/user/atom';
import { Login } from '../recoil/user/atom';
// import { posts } from '../recoil/post/atom';
const Community = () => {
    const {account, library, active, activate, deactivate} = useWeb3React();
    // const {user, setUser, isLogin, setIsLogin} = useContext(UserContext);

    const [user, setUser] = useRecoilState(userState)   // recoil user 선언
    const [isLogin, setIsLogin] = useRecoilState(Login) // recoil user login 선언
    
    const navigator = useNavigate(); 
    if(isLogin === false){
        navigator('/')
    }
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



