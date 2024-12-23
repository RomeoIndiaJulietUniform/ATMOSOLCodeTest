import React from 'react';
import {Piece} from "../utils/types";

type ChessCellProps = {
    piece : Piece;
}

const ChessPiece: React.FC<ChessCellProps> = ({piece}) => {
  return (
    <span style = {{fontWeight: 'bold' , fontSize: 18}}>
       {piece}
    </span>
  );
}

export default ChessPiece;