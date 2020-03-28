import React, {useState} from 'react'
import Tile from './Tile'

export default function Board(props){
    console.log(props.board)



    if (!props.board) return;
  
    return(
        <div>
           {props.board.grid.map((row,rowIdx)=>{
               return(
                   <div key={rowIdx}>
                   {row.map((tile,colIdx)=>{
                       return(
                           <span key={colIdx}>
                            <Tile tile={tile} updateGame={props.updateGame}/>
                        </span>
                    )
                })}
                </div>
                )
           })}
        </div>
    )
}