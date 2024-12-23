import React from 'react';
import ChessPiece from "../ChessPiece";
import {Piece} from '../utils/types';

type ChessCellProps = {
    x: number,
    y: number,
    piece: Piece | null;
    isSelected: boolean;
    onClick: (x:number , y:number) => void;
}

const ChessCell: React.FC<ChessCellProps> = ({x,y, piece, isSelected, onClick}) => {
  return (
    <>
      <div onClick={()=> onClick(x,y)} 
        style = {{
         
           width: 50,
           height: 50, 
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           backgroundColor : (x+y)%2 === 0 ? 'white' : 'gray',
           border: isSelected ? '2px solid red': '1px solid black', 

        }}    
     ></div>
    </>
  );
}

export default ChessCell;