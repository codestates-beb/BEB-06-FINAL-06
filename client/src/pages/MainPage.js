import React, {useState} from 'react'
import '../style/MainPage.css'
import '../style/style.css'
import {useNavigate} from 'react-router-dom';
import logo from '../icon/logo.png';

const MainPage = () => {
    const [wallet, SetWallet] = useState('지갑연결'); // 지갑주소 저장
    const navigator = useNavigate(); // 회원가입 버튼 클릭시 회원가입 페이지 이동하기위해 선언

    // 로그인 버튼 클릭시 동작
    const WalletConnection = () => {
        console.log("지갑 연결 버튼 클릭")
        SetWallet("지갑연결완료")

        // 로그인 버튼 클릭 시 서버와 통신 완료 후 마이페이지 이동
        // 내 지갑주소를 가져와서 서버에 비교작업 요청
        // 내 지갑주소가 있는걸로 판별되고 회신오면 디비에있는 내정보를 가져온다음 전역으로 선언 하여 스토리지에 저장
        

        navigator('/MyPage')
    }
    // 회원가입 버튼 클릭시 동작
    const SignupPageLoad = () => {
        console.log("회원가입 버튼 클릭")
        navigator('/SignupPage')
    }

    return (
        <div className='MainPage'>
            <div className='Logo-Container'>
                <img src={logo} className='Logo' alt='logo'/>
           </div>
                <div className='MainPage-btn-Container'>
                    <span>{wallet}</span>
                    <button className='btn-Shape btn-Size-default' onClick={WalletConnection}>로그인</button>
                    <button className='btn-Shape btn-Size-default' onClick={SignupPageLoad}>회원가입</button>
                </div>
        </div>
    )
}

export default MainPage