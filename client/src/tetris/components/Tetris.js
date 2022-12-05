import React, {useState} from "react";
import { createStage, checkCollision } from "../gameHelpers";

//styleComponents
import { StyledTetrisWrapper} from "./styles/StyledTetris";
import { StyledTetris} from "./styles/StyledTetris";

//components
import Stage from './Stage';
import Display from "./Display";
import StartButton from "./StartButton";
import BackButton from "./BackButton";

//hooks
import { useInterval } from "../hooks/useInterval";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useGameStatus } from "../hooks/useGameStatus";

// 유저 정보
import { useRecoilState } from "recoil";
import { userState } from '../../recoil/user/atom';
import { Login } from '../../recoil/user/atom';
import axios from "axios";

import { Game } from "../../recoil/user/atom";

const Tetris = ()=> {
    const [user, setUser] = useRecoilState(userState)   // recoil user 선언
    const [isLogin, setIsLogin] = useRecoilState(Login) // recoil user login 선언
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);
    const [isGame, setIsGame] = useRecoilState(Game) // 게임 상태
    const [isSpace, setSpace] = useState(false);
    console.log('re-render');

    const movePlayer = dir => {
        if(!checkCollision(player, stage, {x: dir, y: 0})) {
            updatePlayerPos({x: dir, y: 0});
        }
    }

    const startGame = () => {
        //reset everything
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
        setIsGame(true)

    }

    const drop = () => {
        if(rows > (level + 1) * 10){
            setLevel(prev => prev + 1);
            setDropTime(1000 / (level + 1) + 200);

        }
        if(!checkCollision(player, stage, {x: 0, y: 1})){
            updatePlayerPos({x:0, y:1, collided:false})

        } else {

            //Game Over
            if(player.pos.y <= 0){
                console.log("GAME OVER!!!");
                setGameOver(true);
                setDropTime(null);
                setIsGame(false)
                axios.post("http://localhost:8000/game/update", {
                    score: score,  // 점수
                    user_score: user.user_score, // 유저 최고점수
                    user_rating: user.rating,   // 아이템등급
                    user_token1amount: user.user_token1amount,  // 현재 토큰갯수
                    },{withCredentials : true})
                    .then(function (response) {
                        console.log(response.data)
                        // 현재 점수가 더 크면 최고점수 갱신 
                        if(user.user_score < response.data.user_score){
                            console.log(response.data)
                            setUser({...user,
                                user_score : response.data.user_score,
                                user_token1amount : response.data.user_token1amount,
                             })
                             alert(`*************************** 게임 결과 ***************************\n*                        이번 점수 : ${response.data.user_score} (최고기록 갱신 !!!!)                         *\n*                        토큰 보상 후 갯수 : ${response.data.user_token1amount}                                          *\n****************************************************************`)
                        }else{
                            // 최고점수를 갱신 못했을때는 토큰만 받음
                            console.log(response.data)
                            setUser({...user,
                                user_token1amount : response.data.user_token1amount,
                             })
                             alert(`*************************** 게임 결과 ***************************\n*                        이번 점수 : ${response.data.user_score} (최고기록 갱신 실패)                         *\n*                        토큰 보상 후 갯수 : ${response.data.user_token1amount}                                          *\n****************************************************************`)
                        }
                        
                })
                .catch((Error) => {
                    console.log("실패")
                    console.log(Error)
                })



            }
            updatePlayerPos({x: 0, y: 0, collided: true});
        }  
    }

    const keyUp = ({keyCode}) => {
        if(!gameOver){
            if(keyCode === 40){
                console.log("interval on")
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    }

    const dropPlayer = () => {
        console.log("interval off")
        setDropTime(1000);
        drop();
    }
    const spaceBar = () => {
        console.log("interval off")
        setDropTime(0);
        drop();

    }

    const move = ({keyCode}) => {
        if(!gameOver) {
            if(keyCode === 37){ //37 is left arrow in the keyboard
            movePlayer(-1);
        }else if(keyCode === 39){ // right arrow
            movePlayer(1);
        }else if(keyCode === 40){ // down arrow
            dropPlayer();
        } else if(keyCode === 38){ 
            playerRotate(stage, 1)
        }else if(keyCode === 32){ // space bar -> when I use space bar, the tetrominos attatched to the bottom of the stage
            // spaceBar();
        }
    }
}
// 매초 dropTime 초만큼 drop 함
useInterval(() => {
    drop();
}, dropTime)

    return (
        <StyledTetrisWrapper role='button' tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
            <div style={{fontSize:'6rem', color:'white', textAlign:'center', paddingTop:'2.8rem', paddingBottom: '1.5rem'}}>Here we go !</div>
            <StyledTetris>
            <Stage stage={stage}/>
            <aside>
                {gameOver ? (
                    <div>
                    <Display gameOver={gameOver} text="Game Over"/>
                    <Display text={`Score: ${score}`}/>
                    </div>
                ) : (
                <div>
                <Display text={`Score: ${score}`}/>
                <Display text={`Rows: ${rows}`}/>
                <Display text={`Speed: ${level}`}/>
                </div>
                )}
                <StartButton callback={startGame} />
                <BackButton />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;