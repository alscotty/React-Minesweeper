import React,{useState} from 'react'

export default function Tile(props){

    const [] = useState();

    function handleClick(e){
        if(e.altKey){
            props.tile.toggleFlag();
        }
        props.updateGame(props.tile, props.tile.flagged);
    }

    function getTileIcon(tile){
       if(tile.explored && tile.bombed){
           return(
               <span id='bombed'> {'💣'}</span>
           );
       } else if (tile.flagged){
           return (
               <span id='flagged'> {'⛳'}</span>
           );
       } else if (tile.explored && tile.adjacentBombCount()){
           return(
                <span>{tile.adjacentBombCount()}</span>
           )
       } else if (tile.explored){
           return (
               <span id='explored'>E</span>
           )
       } else {
            return(
                <span id='unexplored'>U</span>
            )
       }
    }


    return(
        <div className='tile' onClick={handleClick}>
            {getTileIcon(props.tile)}
        </div>
    )
}