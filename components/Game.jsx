import React, {useState, useEffect} from 'react'
import * as Minesweeper from '../minesweeper'
import Board from './Board'

export default function Game (props) {
    const [board,updateBoard] = useState(new Minesweeper.Board(10,5));

    function updateGame(tileObj, flagBool){
        if(flagBool){
            tileObj.toggleFlag();
        } else {
            tileObj.explore();
        }
        updateBoard(board);
    }


    return(
        <div>
            <Board board={board} updateGame={updateGame}/>
        </div>
    )
}