import React, {useState} from 'react'
import Tile from './Tile'

export default function Board(props){
    console.log(props.board)



    if (!props.board) return;
    let rowSize = props.board.grid.length

    return(
        <div>
           {props.board.grid.map((row,rowIdx)=>{
               return(
                   row.map((tile,colIdx)=>{
                    return(
                        <div>
                            <Tile tile={tile}/>
                        </div>
                    )
                   })
               )
           })}
        </div>
    )
}