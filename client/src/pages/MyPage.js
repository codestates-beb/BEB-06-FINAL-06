import React from 'react'
import '../style/MyPage.css'
import ItemList from '../components/ERC1155-item/ItemList'
import NFTItemlist from '../components/ERC721-item/NFTItemList'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'


const MyPage = () => {
    // 필요한 user 정보 키값 닉네임 지갑주소 ERC 20 Token 1 갯수 ERC 20 Token 2 갯수 ERC 1155 토큰 목록
    // ERC 721 토큰 목록 나의 최고점수 랭크 <- 이건 랭크기록 받아와서 처리할수있음 프론트에서도 가능할지도? (보류))

    const navigator = useNavigate();

    const gamePageLoad = () =>{
        navigator('/GamePage');
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
                        src='https://i.seadn.io/gae/Pjpj2wMnEqpFMTJXQatS8rcrYAHsAGLQ7WdNXAmvbtXdye8HGC7N1dOb9pHmmvlOtof2QVM5iJ70GIiCgBcL6e-UESMFzwas7U4O?auto=format&w=384'/>
                    <div className='MyPage_Content-UserInfo'>
                        <span>닉네임 : 홍길동 님</span>
                        <span>ERC-20 Token1 : 100 개</span>
                        <span>ERC-20 Token2 : 100 개</span>
                        <span>Score Point : 1,000</span>
                    </div>
                    <button className='btn-Shape btn-Size-long btn-gamestart' onClick={gamePageLoad}>게임 시작</button>
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