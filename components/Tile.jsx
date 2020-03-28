import React,{useState} from 'react'

export default function Tile(props){

    function getTileIcon(tile){
       if(tile.bombed){
           return '💣';
       } else if (tile.flagged){
            return '⛳';
       } else if (tile.explored && tile.adjacentBombCount()){
            return tile.adjacentBombCount()
       } else if (tile.explored){
            return 'E'
       } else {
            return 'U'
       }
    }


    return(
        <div className='tile'>
            {getTileIcon(props.tile)}
        </div>
    )
}