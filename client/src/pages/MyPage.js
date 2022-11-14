import React from 'react'
import '../style/MyPage.css'
import ItemList from '../components/unlocked-item/ItemList'
import Item from '../components/unlocked-item/Item'
import defaultNFT from '../icon/heart.png'
import bronze from '../icon/bronze.png'


const MyPage = () => {
    // 필요한 user 정보
    // 키값
    // 닉네임
    // 지갑주소
    // 토큰갯수
    // unlocked nft 목록 <- 이건 json형태로 받아야할듯?
    // 나의 최고점수
    // 랭크 <- 이건 랭크기록 받아와서 처리할수있음 프론트에서도 가능할지도? 






    return (
        <div className='MyPage'>
            <div className='MyPage_Header'>
                <span className='header-text'>This is MyPage !</span>
            </div>
            <div className='MyPage_Content'>
                <div className='MyPage_Content-left'>
                    <img className='MyPage_Content-setImg' src='https://i.seadn.io/gae/Pjpj2wMnEqpFMTJXQatS8rcrYAHsAGLQ7WdNXAmvbtXdye8HGC7N1dOb9pHmmvlOtof2QVM5iJ70GIiCgBcL6e-UESMFzwas7U4O?auto=format&w=384'/>
                    <div className='MyPage_Content-UserInfo'>
                        <span>닉네임 : 홍길동 님</span>
                        <span>나의토큰 : 100 개</span>
                    </div>
                    <button className='btn-Shape btn-Size-long btn-gamestart'>게임 시작</button>
                </div>
                <div className='MyPage_Content-right'>
                    <div className='MyPage_Content-Rank-container'>
                        <img className='Rank-container_Badge' src={bronze}/>
                        <div className='Rank-container_Score'>
                            <span className='container-title'>Score</span>
                            <span className='container-content'>1,000</span>
                        </div>
                        <div className='Rank-container_Rank'>
                            <span className='container-title'>Rank</span>
                            <span className='container-content'>100</span>
                        </div>
                    </div>
                    <div className='MyPage_Content-Unlocked-container'>
                      <span className='container-title'> Unlocked Image</span>
                      <div>
                       <ItemList/>
                       
                      </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default MyPage