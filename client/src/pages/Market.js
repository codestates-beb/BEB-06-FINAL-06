import React,{useState} from 'react'
import '../style/Market.css'
import { useRecoilState } from "recoil";
import { userState } from '../recoil/user/atom';
import { Login } from '../recoil/user/atom';
import Header from "../components/Header";
import ItemMarket from '../components/Market/ItemMarket';
import NFTMarket from '../components/Market/NFTMarket';
import TokenSwap from '../components/Market/TokenSwap';

import ItemMarket2 from '../components/Market/ItemMarket2';
const Market = () => {
    const [user, setUser] = useRecoilState(userState)   // recoil user 선언
    const [isLogin, setIsLogin] = useRecoilState(Login) // recoil user login 선언
    const [isPage, setIsPage] = useState("item")

    // const setPageItem =() =>{
    //     setIsPage('item')
    //     console.log(isPage)
    // }
    const setPageNft = () => {
        setIsPage('nft')
        console.log(isPage)
    }
    const setPageTokenSwap = () => {
        setIsPage('tokenswap')
        console.log(isPage)
    }
    const setPageItem =() =>{
        setIsPage('item')
        console.log(isPage)
    }
  return (
    <div className='Market'>
        <Header/>
        <div className='Market_Page'>
        
            <div className='header-text '>
                        Market
            </div>
        {/* 상단 헤더 */} 
     
        <div className='Market_Header'>
            <div className='Market_Header-left'>
                {/* <div className={`Market_Header-button ${(isPage == 'item') ? 'selectmenu' : ''}`} onClick={setPageItem}>
                    아이템
                </div> */}
                <div className={`Market_Header-button ${(isPage == 'item') ? 'selectmenu' : ''}`} onClick={setPageItem}>
                    아이템
                </div>
                <div className={`Market_Header-button ${(isPage == 'nft') ? 'selectmenu' : ''}`} onClick={setPageNft}>
                    NFT
                </div>
                <div className={`Market_Header-button ${(isPage == 'tokenswap') ? 'selectmenu' : ''}`} onClick={setPageTokenSwap}>
                    토큰 스왑
                </div>

            </div>
            <div className='Market_Header-right'>
                <div className='Market_Header-token'>
                    <span className='Market_Header-token-title'>  JT Token </span> <br/>
                    <span className='Market_Header-token-content'> {user.user_token1amount} JT </span>
                </div>
                <div className='Market_Header-token'>
                    <span className='Market_Header-token-title'>  JTT Token </span> <br/>
                    <span className='Market_Header-token-content'> {user.user_token2amount} JTT </span>
                </div>
            </div>
        </div>
        <div className='Market_Content'>
            {/* 조건에 따른 컨텐츠 */}
            {/* <div hidden={isPage != 'item'}>
                <ItemMarket/>
            </div> */}
            <div hidden={isPage != 'item'}>
                <ItemMarket2/>
            </div>
            <div hidden={isPage != 'nft'}>
                <NFTMarket/>
            </div>
            <div hidden={isPage != 'tokenswap'}>
                <TokenSwap/>
            </div>

            
        </div>
            
        </div>

    
    </div>
  )
}

export default Market