import React, {useEffect, useState , useContext} from 'react'
import '../style/MainPage.css'
import '../style/style.css'
import {useNavigate} from 'react-router-dom';
import logo from '../icon/logo.png';
import axios from 'axios';
import {useWeb3React} from '@web3-react/core';
import {injected} from '../connectors/connectors';


const MainPage = () => {
    const navigator = useNavigate(); // 회원가입 버튼 클릭시 회원가입 페이지 이동하기위해 선언
    const {account, library, active, activate, deactivate} = useWeb3React();
    const {setCookiesHandler} =useContext(UseContext);
    // 지갑 연결 상태(active)가 변경될경우 useEffect 실행 
    useEffect(() => {
        axios
        .post("http://localhost:8000/user/login", {
            user_address: account
        })
        .then(function (response) {
            setCookiesHandler(true);    
            console.log(response)
            console.log(document.cookie)

        })
        .catch((Error) => {
            console.log(Error.response.data)
        })
    },[active])
    useEffect(()=>{
        console.log("연결상태 : "+active)
    })

    // 로그인 버튼 클릭시 동작
    const Login = async() => {
        console.log("로그인 버튼 클릭")
        console.log(active)
        // 지갑연결 수행
         try {
            await activate((injected), (error) => {
                 // activate(injected) 로 메타마스크 연결함 크롬 익스텐션 없을 경우 오류 핸들링
                 if ('/No Ethereum provider was found on window.ethereum/') 
                     throw new Error('Metamask 익스텐션을 설치해주세요');
                 }
             );
         } catch (err) {
             alert(err);
             window.open('https://metamask.io/download.html');
         }
        
        // 로그인 버튼 클릭 시 서버와 통신 완료 후 마이페이지 이동
        // 내 지갑주소를 가져와서 서버에 비교작업 요청
        // 내 지갑주소가 있는걸로 판별되고 회신오면 디비에있는 내정보를 가져온다음 전역으로 선언 하여 스토리지에 저장

        // navigator('/MyPage')
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
                    <span>{account}</span>
                    <button className='btn-Shape btn-Size-default' onClick={Login}>로그인</button>
                    <button className='btn-Shape btn-Size-default' onClick={SignupPageLoad}>회원가입</button>
                </div>
     
        </div>
        
    )
}

export default MainPage