import React from "react";
import Header from "../components/Header";
import '../style/Community.css';
import Banner from '../pages/Banner';

const Community = () => {
    return (
        <div className="CommunityPage">
        <Header/>
        <div className="CommunityContent">
            <div className="Banner">
                <div className="banner"><Banner></Banner></div>
            </div>
            <div className="Categories">
                <div className="Categorites_content">
                    <div>Jetris</div>
                    <div>NFT</div>
                    <div>중고거래</div>
                </div>
            </div>
            <div className="Posts">
                <div className="post">Post</div>
            </div>
        </div>
        </div>
    )
}

export default Community;