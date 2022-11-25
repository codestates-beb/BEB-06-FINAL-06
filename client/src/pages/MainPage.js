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
    
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({});
    
    // 랜더링 시 유저 상태 유지하기 위해 서버와 통신
    useEffect(() => {
        axios.get("http://localhost:8000/user/success",
            {withCredentials : true})
            .then(function (response) {
                console.log("여기들어옴")
                console.log(response.data)
                if(response.data){
                    setIsLogin(true)
                    setUser(response.data)
                }
            })
            .catch((Error) => {
                console.log(Error.response.data)
            })
        },[])
    
    // 지갑 연결 상태(active)가 변경될경우 useEffect 실행 
    useEffect(() => {
        console.log(active)
        axios
        .post("http://localhost:8000/user/login", {
            user_address: account,
        },{withCredentials : true})
        .then(function (response) {
            console.log(response)
            setIsLogin(true)
            console.log(isLogin)
            // navigator('/mypage')
        })
        .catch((Error) => {
            console.log(Error.response.data)
        })
    },[active])

   
    
    // 엑세스 토큰 갱신용
    const accessToken = () => {
        axios.get("http://localhost:8000/user/accessToken",
        {withCredentials : true})
        .then(function (response) {
            console.log(response.data[0])

        })
        .catch((Error) => {
            console.log(Error.response.data)
        })
    }
    // 리프레시 토큰 갱신
    const refreshToken = () => {
        axios.get("http://localhost:8000/user/refreshToken",
        {withCredentials : true})
        .then(function (response) {
            console.log(response.data)

        })
        .catch((Error) => {
            console.log(Error.response.data)
        })
    }


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
        // navigator('/MyPage')
    }


    // 회원가입 버튼 클릭시 동작
    const SignupPageLoad = () => {
        console.log("회원가입 버튼 클릭")
        navigator('/SignupPage')
    }
    // 게임페이지 클릭
    const GamePageLoad = () => {
        console.log("게임시작 버튼 클릭")
        navigator('/Mypage')
    }
    // 커뮤니티 페이지 클릭
    const CommunityPageLoad = () => {
        console.log("커뮤니티 버튼 클릭")
        navigator('/community')
    }


    // 로그아웃 버튼 클릭
    const Logout = () => {
        // 쿠키삭제, 지갑 접속 종료
        // 지갑 연결 해제
        if(active){
            deactivate()
            setIsLogin(false)
            console.log(isLogin)
        }
        axios.get("http://localhost:8000/user/logout",
        {withCredentials : true})
        .then(function (response) {
            console.log(response.data)
        })
        .catch((Error) => {
            console.log(Error.response.data)
        })
    }    


    return (
        <div className='MainPage'>
            <div className='Logo-Container'>
                <img src={logo} className='Logo' alt='logo'/>
           </div>
                <div className='MainPage-btn-Container'>
                    <span>{account}</span>
                   {isLogin ? (<> <sapn> 로그인 상태</sapn></>):<sapn> 로그아웃 상태</sapn>}
                    {isLogin ? 
                    <>
                        <button className='btn-Shape btn-Size-default' onClick={GamePageLoad}>게임 시작</button>
                        <button className='btn-Shape btn-Size-default' onClick={CommunityPageLoad}>커뮤니티</button>
                        <button className='btn-Shape btn-Size-default' onClick={Logout}>로그아웃</button>
                    </>
                    : <>
                        <button className='btn-Shape btn-Size-default' onClick={Login}>로그인</button>
                        <button className='btn-Shape btn-Size-default' onClick={SignupPageLoad}>회원가입</button>
                    </>}            
                    {/* <button className='btn-Shape btn-Size-default' onClick={accessToken}>accessToken</button>
                    <button className='btn-Shape btn-Size-default' onClick={refreshToken}>refreshToken</button> */}
                </div>
     
        </div>
        
    )
}

export default MainPage