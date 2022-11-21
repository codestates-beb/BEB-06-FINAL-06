import React, { useEffect } from 'react'
import {useState} from 'react'
import '../style/SignupPage.css'
import defaultNFT from '../icon/heart.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Web3 from 'web3';

const SignupPage = () => {
    const [web, setWeb3] = useState();
    const [isWallet, isSetWallet] = useState(false)
    const [nickname, setNickname] = useState('') // 닉네임
    const [walletAccept, setWalletAccept] = useState('지갑연결') //?
    const [walletAddress, setWalletAddress] = useState() //?
    const navigator = useNavigate(); // 회원가입 완료 시 메인페이지(로그인) 이동하기 위해 선언

    axios.get("http://localhost:8000/user/findall",{
        user_nickname : '12',
        user_address : "123456",
    })
    .then(function(response){
        console.log("성공")
        // console.log(response.data)
        // console.log(walletAddress)
    })
    .catch((Error) => {
        console.log("실패")
        console.log(Error)
    })
    

    useEffect(()=>{
        if(typeof Window.ethereum !== "undefined"){
            try{
                const web = new Web3(window.ethereum);
                setWeb3(web);
                if(!(window.ethereum && window.ethereum.isMetaMask)){
                    alert("메타마스크가 설치되어 있지 않습니다.");
                if(window.confirm("메타마스크를 설치하시겠습니까?")){
                    window.open('https://metamask.io/')
                }
                }
            }catch (e){
                console.error(e);
            }
        }
    },[]);


    const WalletConnection = async () => {
        try{
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            console.log("지갑 연결 클릭")
            //지갑연결 완료 시 
            isSetWallet(true)
            setWalletAddress("wlrkqwnth")
            setWalletAccept('연결완료')
        }catch(e){
            console.error(e);
            alert("메타마스크에 연결되어 있지 않았습니다")
        }
    };


    const onChangeNickname = (e) => {
        setNickname(e.target.value)
    }

    const SignUp = () => {
        // fetch(`"http://localhost:8000/user/findall`)
        // .then(res => res.json())
        // .then(res=>{
        //     if(res.sucess){
        //         console.log('2')
        //     }
        // })
        // console.log("지갑 연결 버튼 클릭")
        // console.log(nickname)
        // console.log(walletAddress)
        // 회원가입 버튼 클릭시 지갑주소와 입력받은 닉네임을 서버로 전송해야한다.
        // fetch

        navigator('/MyPage')
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
                    src='https://i.seadn.io/gae/Pjpj2wMnEqpFMTJXQatS8rcrYAHsAGLQ7WdNXAmvbtXdye8HGC7N1dOb9pHmmvlOtof2QVM5iJ70GIiCgBcL6e-UESMFzwas7U4O?auto=format&w=384'></img>
                <div className='SignupPage_Content-userinput'>
                    {/* 지갑연결이 된다면 버튼CSS를 변경 */}
                    <button
                        className={`${isWallet
                            ? 'btn-Shape-accept'
                            : 'btn-Shape'} btn-Size-small`}
                        onClick={()=>{WalletConnection()}}>{walletAccept}</button>
                    <input placeholder='  닉네임' onChange={onChangeNickname}/>
                </div>
                {/* 지갑연결과 닉네임입력이 완성되었을때 버튼이 활성화 */}
                <button className={`btn-Size-long btn-Shape${(isWallet && nickname) ? '': '-disabled'}`} onClick={SignUp} disabled={!(isWallet && nickname)}>
                    회원가입
                </button>
            </div>
        </div>
    )
}

export default SignupPage