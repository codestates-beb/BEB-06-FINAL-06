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
                    <Link to="/nftmarket" className='link'>
                        <span className='header__navmenu__button__icon'>
                            NFT
                        </span>
                    </Link>
                </div>
                {/* My Page 버튼 */}
                <div className='header__navmenu__button'>
                    <Link to="/mypage" className='link'>
                        <span className='header__navmenu__button__icon' style={{fontSize: '27px'}}>
                            MyPage
                        </span>
                    </Link>
                </div>
                {/* LogOut 버튼 */}
                <div className='header__navmenu__button'>
                    <Link to="/" className='link'>
                        <span className='header__navmenu__button__icon' style={{fontSize: '27px'}}>
                            LogOut
                        </span>
                    </Link>
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
                 <li><Link to='/itemmarket'><a className="menu__item">Item</a></Link></li>
                 <li><Link to='/nftmarket'><a className="menu__item">NFT</a></Link></li>
                 <li><Link to='/mypage'><a className="menu__item">MyPage</a></Link></li>
                 <li><Link to='/'><a className="menu__item">LogOut</a></Link></li>
             </ul>
             </div>
        </div>
    </div>
    )
}
export default Header