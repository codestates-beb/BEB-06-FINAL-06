import React,{useState} from 'react'

import './TokenSwap.css'
import { useRecoilState } from "recoil";
import { userState } from '../../recoil/user/atom';
import { Login } from '../../recoil/user/atom';
import axios from 'axios';

const TokenSwap = () => {
    const [user, setUser] = useRecoilState(userState)   // recoil user 선언
    const [isLogin, setIsLogin] = useRecoilState(Login) // recoil user login 선언

    const [direction, setDirection] = useState(false)   // 스왑 방향
    const [jtAmountChange, SetJtAmountChange] = useState() // 스왑 JT 입력값
    const [ethAmountChange, SetEthAmountChange] = useState() // 스왑 ETH 입력값
    const [isPage, setIsPage] = useState("swap")    // 페이지 구분


    const [jtSteakingChange, setJtSteakingChange] = useState();

    // 상단 탭 : 스왑 클릭
    const setPageSwap =() =>{
        setIsPage('swap')
        console.log(isPage)
    }
    // 상단 탭 : 스테이킹 클릭
    const setPageSteaking = () => {
        setIsPage('steaking')
        console.log(isPage)
    }
    // 스왑 : JT input 입력값
    const onChangeJtAmount = (e) => {
        SetJtAmountChange(e.target.value)
    }
    // 스왑 : ETH input 입력값
    const onChangeEthAmount = (e) => {
        SetEthAmountChange(e.target.value)
    }
    // 스테이킹 : JTT input 입력값
    const onChangeJtSteaking = (e) => {
        setJtSteakingChange(e.target.value)
        console.log(jtSteakingChange)
    }

    // 방향변경 버튼 클릭
    const DirectionChange = () => {
        setDirection(!direction)
        document.getElementsByClassName('TokenSwapPage_Swap-input').value = ''; 
        SetJtAmountChange('')
        SetEthAmountChange('')
        
    }

    // 토큰 스왑 동작 실행
    const Swap = () => {    
        console.log(direction)
        if(direction){
        // direction = true 일 경우 ETH -> JT 교환 
            console.log(`ethAmountChange : ${ethAmountChange}`)
        }else{
            // direction = false 일 경우 JT -> ETH 교환
            if(jtAmountChange <= 0){
                alert('0보다 큰 수를 입력해 주세요')
            }
            else if(user.user_token1amount < jtAmountChange){
                alert('JT Token의 수량이 부족합니다.')
            }
            else{
                console.log(`jtAmountChange : ${jtAmountChange}`)
                
            }
            
        }
    }

    // 스테이킹 버튼 클릭시
    const Steaking = () => {
        if(jtSteakingChange < 100){
            alert('JTT Toke 토큰은 100개부터 교환 가능 합니다.')
        }
        else if(user.user_token2amount < jtSteakingChange ){
            alert('JTT Token의 수량이 부족합니다.')
        }
        else{
            console.log("스테이킹")
            console.log()
            // alert('스테이킹 되었습니다.')
            axios.post("http://localhost:8000/token/steaking", {
                jttsteaking : jtSteakingChange,
                },{withCredentials : true})
                .then(function (response) {
                    console.log("성공")
                    console.log(response.data)
                    setJtSteakingChange(0)  // 값 초기화
                    setUser({...user,
                        jttsteaking : user.jttsteaking + parseInt(jtSteakingChange) ,
                        user_token2amount : user.user_token2amount -parseInt(jtSteakingChange) })
                    // window.location.reload();
                    // alert(`${jtSteakingChange}JTT가 스테이킹 되었습니다.`)
                })
                .catch((Error) => {
                    console.log("실패")
                    console.log(Error)
                })
            console.log(user)  
        }

        
    }

    // 스테이킹 보상 버튼 클릭시
    const SteakingRewards = () => {
        // 내가 지금 저장한 JJT Staeking 를 100/1비율로 JT로 변환한다.
        // JT를 해당수만큼 반환한다. JTT Staeking값을 그만큼 감소한다.
        axios.get("http://localhost:8000/token/reward",
        {withCredentials: true})
        .then((response) =>{
            console.log(user.user_token1amount)
            console.log(response)
            setUser({...user,
                jttsteaking : 0,
                user_token1amount : user.user_token1amount + (user.jttsteaking/100)  })
            alert(`스테이킹 보상 JT ${(user.jttsteaking/100)}개가 지급되었습니다.`)
        })
        .catch((Error)=>{
            console.log(Error)
        })
    }

    return (
        <div className='TokenSwap'>
            <div className='TokenSwapPage'>
                {/* 상단 탭 */}
                <div className='TokenSwapPage_Tap'  >
                    <div className={`Tokenswap_Header-button ${(isPage == 'swap') ? 'selectmenu2' : ''}`} onClick={setPageSwap}>
                        토큰 스왑
                    </div>
                    <div className={`Tokenswap_Header-button ${(isPage == 'steaking') ? 'selectmenu2' : ''}`} onClick={setPageSteaking}>
                        토큰 스테이킹
                    </div>
                </div>
                {/* 본문내용  */}
                {/* 토큰 스왑 부분 */}
                <div className='TokenSwapPage_Content' hidden={isPage != 'swap'} >
                    {/* 헤더  */}
                    <div className='TokenSwapPage_Content-container'>
                        <div className='TokenSwapPage_Content-container-title'>
                            교환 비율 (1:1)
                        </div>
                        <div className='TokenSwapPage_Content-containe-content'>

                        {direction ?    
                            <div className='TokenSwapPage_Content-containe-content-text'>
                                <span>ETH : {ethAmountChange} &nbsp;&nbsp;👉&nbsp;&nbsp; </span>
                                <span>JT : {ethAmountChange} </span>
                            </div> 
                            :
                            <div className='TokenSwapPage_Content-containe-content-text'>
                                <span>JT : {jtAmountChange} &nbsp;&nbsp;👉&nbsp;&nbsp; </span>
                                <span>ETH : {jtAmountChange} </span>
                            </div> 

                        }
                        </div>
                    </div>
  
                    {/* 입력 */}
                    <div className='TokenSwapPage_Content-container'>
                        <div className='TokenSwapPage_Content-container-title'>
                            입력
                        </div>
                        <div className='TokenSwapPage_Content-containe-content'>
                           {direction ? 
                           <div>
                                <input type='number' className='TokenSwapPage_Swap-input' placeholder='ETH 입력' onChange={onChangeEthAmount} value={ethAmountChange}/>
                                {/* <span>To </span> */}
                                {/* <span> JT : {ethAmountChange}</span> */}
                           </div>:
                           <div>
                                <input type='number' className='TokenSwapPage_Swap-input' placeholder='JT 입력' onChange={onChangeJtAmount} value={jtAmountChange} />
                                {/* <span>To </span> */}
                                {/* <span> ETH : {jtAmountChange}</span> */}
                            </div>
                            }
                        </div>
                        
                        {/* 버튼 */}
                        <div className='TokenSwapPage_Content-containe-content-btn'>
                            <button className='btn-Shape btn-Size-small' onClick={DirectionChange}>방향변경</button>
                            <button className='btn-Shape btn-Size-small'onClick={Swap}>스왑</button>
                        </div>
                    </div>
                </div>
                {/* 토큰 스테이킹 부분 */}
                <div className='TokenSwapPage_Content' hidden={isPage != 'steaking'} >
                    <div className='TokenSwapPage_Content-container'>
                        <div className='TokenSwapPage_Content-container-title'>
                            스테이킹 (1:100)
                        </div>
                        <div className='TokenSwapPage_Content-containe-content'>
                            <input type='number' className='TokenSwapPage_Swap-input' placeholder='스테이킹할 JTT 수량을 입력해 주세요.' onChange={onChangeJtSteaking} value={jtSteakingChange}/>
                            <span>&nbsp;&nbsp;JTT </span> <br/>
                        </div>
                        <div className='TokenSwapPage_Content-containe-content-btn'>
                            <button className='btn-Shape btn-Size-small' onClick={Steaking}> 스테이킹 </button>
                        </div>
                    </div>
                    <div className='TokenSwapPage_Content-container'>
                        <div className='TokenSwapPage_Content-container-title'>
                            보상
                        </div>
                        <div className='TokenSwapPage_Content-containe-content'>
                            {/* <input className='TokenSwapPage_Swap-input' placeholder='스테이킹할 JT 수량을 입력해 주세요.' onChange={onChangeEthAmount} value={ethAmountChange}/> */}
                            <span>스테이킹 JTT : {user.jttsteaking} </span> <br/>
                            <span>보상 JT : {user.jttsteaking / 100} </span> <br/>
                        </div>
                        <div className='TokenSwapPage_Content-containe-content-btn'>
                            <button className='btn-Shape btn-Size-small' onClick={SteakingRewards}> 보상받기 </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TokenSwap