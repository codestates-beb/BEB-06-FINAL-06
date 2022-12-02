import React, {useEffect, useState , useContext} from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
import logo from '../icon/logo.png'
import {useWeb3React} from '@web3-react/core';
import { UserContext } from '../User/UserContext';
import axios from 'axios';
import { useRecoilState } from "recoil";
import { userState } from '../recoil/user/atom';
import { Login } from '../recoil/user/atom';
import {useNavigate} from 'react-router-dom'
const Header = () => {
    const {account, library, active, activate, deactivate} = useWeb3React();
    // const {user, setUser, isLogin, setIsLogin} = useContext(UserContext);
    const [user, setUser] = useRecoilState(userState)   // recoil user 선언
    const [isLogin, setIsLogin] = useRecoilState(Login) // recoil user login 선언
    const navigator = useNavigate(); 
    // 로그아웃 버튼 클릭
    const Logout = () => {
        // 쿠키삭제, 지갑 접속 종료
        // 지갑 연결 해제
            localStorage.clear();
            deactivate()
            setIsLogin(false)
            setUser({        
                id: "",
                user_address: "",
                user_nickname: "",
                user_token1amount: "",
                user_token2amount: "",
                user_score: "",
                user_img: "",
            });
            console.log(isLogin)
        
        axios.get("http://localhost:8000/user/logout",
        {withCredentials : true})
        .then(function (response) {
            console.log(response.data)
            console.log("로그아웃!")
            navigator('/')
        })
        .catch((Error) => {
            console.log(Error.response.data)
        })
    }    
    return (
        <div className='header'>
            {/* 로고 */}
            <div className='logocase'>
                <Link to="/">
                    <img src={logo} className='logo' alt='logo'/>
                </Link>
            </div>
            {/* 네비게이션 메뉴 */}
            <div className='header__navmenu'>
                {/* Item Market 버튼 */}
                <div className='header__navmenu__button'>
                    <Link to="/community" className='link'>
                        <span className='header__navmenu__button__icon'>
                            Community
                        </span>
                    </Link>
                </div>
                <div className='header__navmenu__button'>
                    <Link to="/Market" className='link'>
                        <span className='header__navmenu__button__icon'>
                            Market 
                        </span>
                    </Link>
                </div>
                {/* NFT Market 버튼 */}
                {/* <div className='header__navmenu__button'>
                    <Link to="/nftmarket" className='link'>
                        <span className='header__navmenu__button__icon'>
                            NFT
                        </span>
                    </Link>
                </div> */}
                {/* My Page 버튼 */}
                <div className='header__navmenu__button'>
                    <Link to="/mypage" className='link'>
                        <span className='header__navmenu__button__icon' style={{fontSize: '27px'}}>
                            MyPage
                        </span>
                    </Link>
                </div>
                {/* LogOut 버튼 */}
                <div className='header__navmenu__button' onClick={Logout}>
                    {/* <Link to="/" className='link'> */}
                        <span className='header__navmenu__button__icon' style={{fontSize: '27px'}}>
                            LogOut
                        </span>
                    {/* </Link> */}
                </div>
        </div>
                {/* 햄버거 메뉴 */}
            <div className="hamburger-menu">
                <div className='hamburger_menu_content'>
                <input id="menu__toggle" type="checkbox" />
                     <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>
            <ul className="menu__box">
                 <li><Link to='/community'><a className="menu__item">Community</a></Link></li>
                 <li><Link to='/market'><a className="menu__item">Market</a></Link></li>
                 {/* <li><Link to='/itemmarket'><a className="menu__item">Item</a></Link></li>
                 <li><Link to='/nftmarket'><a className="menu__item">NFT</a></Link></li> */}
                 <li><Link to='/mypage'><a className="menu__item">MyPage</a></Link></li>
                 <li>
                    {/* <Link to='/'> */}
                        <a className="menu__item" onClick={Logout}>LogOut</a>
                        {/* </Link> */}
                        </li>
             </ul>
             </div>
        </div>
    </div>
    )
}
export default Header