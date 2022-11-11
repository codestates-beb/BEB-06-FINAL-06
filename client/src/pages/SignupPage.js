import React from 'react'
import {useState} from 'react'
import '../style/SignupPage.css'
import defaultNFT from '../icon/heart.png'
import {useNavigate} from 'react-router-dom'
const SignupPage = () => {
    const [isWallet, isSetWallet] = useState(false)
    const [nickname, setNickname] = useState('') // 닉네임
    const [walletAccept, setWalletAccept] = useState('지갑연결')
    const navigator = useNavigate(); // 회원가입 완료 시 메인페이지(로그인) 이동하기 위해 선언
    const WalletConnection = () => {
        console.log("지갑 연결 버튼 클릭")
        //지갑연결 완료 시
        isSetWallet(true)
        setWalletAccept('연결완료')

    }
    const onChangeNickname = (e) => {
        setNickname(e.target.value)
    }

    const SignUp = () => {
        console.log("지갑 연결 버튼 클릭")
        console.log(nickname)
        navigator('/')
    }
    return (
        <div className='SignupPage'>
            {/* 헤더, 지갑연결 버튼  */}
            <div className='SignupPage_Header'>
                <span className='header-text'>Welcome to JETRIS</span>

            </div>
            {/* 디폴트 이미지, 닉네임, 회원가입 버튼 부분 */}
            <div className='SignupPage_Content'>
                <img
                    src='https://i.seadn.io/gae/Pjpj2wMnEqpFMTJXQatS8rcrYAHsAGLQ7WdNXAmvbtXdye8HGC7N1dOb9pHmmvlOtof2QVM5iJ70GIiCgBcL6e-UESMFzwas7U4O?auto=format&w=384'></img>
                <div className='SignupPage_Content-userinput'>
                    <button
                        className={`${isWallet
                            ? 'btn-Shape-accept'
                            : 'btn-Shape'} btn-Size-small`}
                        onClick={WalletConnection}>{walletAccept}</button>
                    <input placeholder='  닉네임' onChange={onChangeNickname}/>
                </div>

                <button className='btn-Shape btn-Size-long' onClick={SignUp}>
                    회원가입
                </button>
            </div>
        </div>
    )
}

export default SignupPage