import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
import logo from '../icon/logo.png'
const Header = () => {
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
                    <Link to="/itemmarket" className='link'>
                        <span className='header__navmenu__button__icon'>
                            Item 
                        </span>
                    </Link>
                </div>
                {/* NFT Market 버튼 */}
                <div className='header__navmenu__button'>
                    <Link to="/market" className='link'>
                        <span className='header__navmenu__button__icon'>
                            NFT 
                        </span>
                    </Link>
                </div>
                {/* My Page 버튼 */}
                <div className='header__navmenu__button'>
                    <Link to="/market" className='link'>
                        <span className='header__navmenu__button__icon'>
                            MyPage
                        </span>
                    </Link>
                </div>
                {/* LogOut 버튼 */}
                <div className='header__navmenu__button'>
                    <Link to="/market" className='link'>
                        <span className='header__navmenu__button__icon'>
                            LogOut
                        </span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Header