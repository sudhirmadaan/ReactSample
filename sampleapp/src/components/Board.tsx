import React, { useState } from 'react';
import Square from './Square';

export default function Board(){
    const [values, setValues] = useState( Array(9).fill(null));
    const [nextMove, setNextMove] = useState('X');
    const status = 'Next player: ' + nextMove;
    return (
        <div>
        <div className="status">{status}</div>
        <div className="board-row">
            {SquareComponent(0)}
            {SquareComponent(1)}
            {SquareComponent(2)}
        </div>
        <div className="board-row">
            {SquareComponent(3)}
            {SquareComponent(4)}
            {SquareComponent(5)}
        </div>
        <div className="board-row">
            {SquareComponent(6)}
            {SquareComponent(7)}
            {SquareComponent(8)}
        </div>
      </div>
    );

    function SquareComponent(index: number)
    {
        return (<Square value={values[index]} handleClick={()=> handleClick(index)}/>);
    }

    function handleClick(index: number){
        console.log('In click!!!!');
        if (values[index] == null)
        {
            const squares = values.slice();
            squares[index] = nextMove === 'X' ? 'X' : '0';
            setNextMove(nextMove === 'X' ? '0' : 'X');
            setValues(squares);
        }
        
    }
}

// interface IBoardProps {
//     value: number;
// }