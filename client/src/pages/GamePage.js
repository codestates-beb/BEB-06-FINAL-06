import React from 'react'
import '../style/GamePage.css'
import Tetris from '../tetris/components/Tetris';

const GamePage = () => {
 return(
  <div className="GamePage">
  <Tetris />
</div>
 )

}

export default GamePage;