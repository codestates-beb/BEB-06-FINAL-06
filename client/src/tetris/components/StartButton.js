import React,{useState} from "react";
import { StyledStartButton } from "./styles/StyledStartButton";


import { useRecoilState } from "recoil";
import { Game } from "../../recoil/user/atom";


const StartButton = ({callback}) => {
    const [isGame, setIsGame] = useRecoilState(Game) // 게임 상태
    const test = () => {
        console.log(isGame)
    }
    return(
        <div>
        {isGame ? 
    <StyledStartButton onClick={callback} disabled> 게임 중</StyledStartButton>:
    <StyledStartButton onClick={callback} >게임 시작</StyledStartButton>
        }
    {/* <button onClick={test}>테스트</button> */}
    </div>
    )};

export default StartButton;