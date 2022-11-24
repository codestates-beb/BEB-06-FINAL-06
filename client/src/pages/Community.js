import React from "react";
import Header from "../components/Header";
import '../style/Community.css';
import Banner from '../pages/Banner';
import {AiOutlineComment} from 'react-icons/ai';

const Community = () => {
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
                post
            </div>
        </div>
        </div>
    )
}

export default Community;