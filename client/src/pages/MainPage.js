import React, {useState} from 'react'
import '../style/MainPage.css'
import '../style/style.css'
import {useNavigate} from 'react-router-dom'

const MainPage = () => {
    const [wallet, SetWallet] = useState('지갑연결'); // 지갑주소 저장
    const navigator = useNavigate(); // 회원가입 버튼 클릭시 회원가입 페이지 이동하기위해 선언

    // 로그인 버튼 클릭시 동작
    const WalletConnection = () => {
        console.log("지갑 연결 버튼 클릭")
        SetWallet("지갑연결완료")

        // 로그인 버튼 클릭 시 서버와 통신 완료 후 마이페이지 이동
        navigator('/MyPage')
    }
    // 회원가입 버튼 클릭시 동작
    const SignupPageLoad = () => {
        console.log("회원가입 버튼 클릭")
        navigator('/SignupPage')
    }

    return (
        <div className='MainPage'>
            <div className='MainPage-btn-Container'>
                <span>{wallet}</span>
                <button className='btn-Shape btn-Size-default' onClick={WalletConnection}>로그인</button>
                <button className='btn-Shape btn-Size-default' onClick={SignupPageLoad}>회원가입</button>
            </div>
        </div>
    )
}

export default MainPage