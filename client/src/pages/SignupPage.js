import React, {useEffect} from 'react'
import {useState} from 'react'
import '../style/SignupPage.css'
import default_img from '../icon/Default_Img.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Web3 from 'web3';

import {useWeb3React} from '@web3-react/core';
import {injected} from '../connectors/connectors';

const SignupPage = () => {
    const [nickname, setNickname] = useState('') // 닉네임
    const [walletAccept, setWalletAccept] = useState('지갑연결') //?
    const navigator = useNavigate(); // 회원가입 완료 시 메인페이지(로그인) 이동하기 위해 선언
    const {account, library, active, activate, deactivate} = useWeb3React();
    // - connector: 현재 dapp에 연결된 월렛의 connector 값
    // - library: web3 provider 제공
    // - chainId: dapp에 연결된 account의 chainId
    // - account: dapp에 연결된 account address
    // - active: dapp 유저가 로그인 된 상태인지 체크
    // - activate: dapp 월렛 연결 기능 수행 함수
    // - deactivate: dapp 월렛 연결 해제 수행 함수
    
    // 지갑 연결 하는 기능 부분
    const WalletConnection = async () => {
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

    };

    const onChangeNickname = (e) => {
        setNickname(e.target.value)
    }

    // 회원가입 버튼 클릭시 서버 통신
    const SignUp = () => {
        console.log("회원가입 버튼 눌림")
        axios
            .post("http://localhost:8000/user/signup", {
                // axios.get("http://localhost:8000/user/findall",{
                user_nickname: nickname,
                user_address: account,
                user_img: default_img,
            })
            .then(function (response) {
                console.log("성공")
                console.log(response.data)
                navigator('/MyPage')
            })
            .catch((Error) => {
                console.log("실패")
                console.log(Error)
            })

    }
    const test = () => {
        console.log(default_img)
        console.log(account)
        console.log(active)
    }
    return (
        <div className='SignupPage'>
            {/* 헤더, 지갑연결 버튼  */}
            <div className='SignupPage_Header'>
                <span className='header-text'>Welcome to JETRIS !</span>

            </div>
            {/* 디폴트 이미지, 닉네임, 회원가입 버튼 부분 */}
            <div className='SignupPage_Content'>
                <img
                    src={default_img}></img>
                <div className='SignupPage_Content-userinput'>
                    {/* 지갑연결이 된다면 버튼CSS를 변경 */}
                    <button
                        className={`${account
                            ? 'btn-Shape-accept'
                            : 'btn-Shape'} btn-Size-small`}
                        onClick={() => {
                            WalletConnection()
                        }}>{walletAccept}</button>
                    <input placeholder='  닉네임' onChange={onChangeNickname}/>
                </div>
                {/* 지갑연결과 닉네임입력이 완성되었을때 버튼이 활성화 */}
                <button
                    className={`btn-Size-long btn-Shape${ (account && nickname)
                        ? ''
                        : '-disabled'}`}
                    onClick={SignUp}
                    disabled={!(account && nickname)}>
                    회원가입
                </button>
                {/* <button onClick={test}>테스트</button> */}
            </div>
        </div>
    )
}

export default SignupPage