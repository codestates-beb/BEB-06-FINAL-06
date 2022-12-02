import React,{useState} from 'react'

import './TokenSwap.css'
import { useRecoilState } from "recoil";
import { userState } from '../../recoil/user/atom';
import { Login } from '../../recoil/user/atom';
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
    // 스테이킹 : JT input 입력값
    const onChangeJtSteaking = (e) => {
        setJtSteakingChange(e.target.value)
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
        if(jtSteakingChange <= 0){
            alert('0보다 큰 수를 입력해 주세요')
        }
        else if(user.user_token2amount < jtSteakingChange ){
            alert('JTT Token의 수량이 부족합니다.')
        }
        else{
            console.log(jtSteakingChange)
        }

        
    }

    // 스테이킹 보상 버튼 클릭시
    const SteakingRewards = () => {
        
    }

    return (
        <div className='TokenSwap'>
            <div className='TokenSwapPage'>
                {/* 상단 탭 */}
                <div className='TokenSwapPage_Tap'>
                    <div onClick={setPageSwap}>
                        토큰 스왑
                    </div>
                    <div onClick={setPageSteaking}>
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
                            스테이킹 (1:10)
                        </div>
                        <div className='TokenSwapPage_Content-containe-content'>
                            <input type='number' className='TokenSwapPage_Swap-input' placeholder='스테이킹할 JT 수량을 입력해 주세요.' onChange={onChangeJtSteaking} value={jtSteakingChange}/>
                            <span>JT </span> <br/>
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
                            <span>스테이킹 JTT : 100 </span> <br/>
                            <span>보상 JT : 10 </span> <br/>
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