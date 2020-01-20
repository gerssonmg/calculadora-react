import React, { useState } from 'react';
import Square from '../Square';

export default function Board() {

    const [plays_squares, setPlays_squares] = useState(Array(9).fill(null));
    console.log(plays_squares);

    const [plays_xIsNext, setPlays_xIsNext] = useState(true);
    console.log(plays_xIsNext);

    function handleClick(i) {
        const s = plays_squares.slice();
        s[i] = plays_xIsNext ? 'X' : 'O';
        setPlays_squares(s);
        console.log(plays_squares);
        console.log(plays_xIsNext);

        setPlays_xIsNext(!plays_xIsNext);
    }

    function renderSquare(i) {
        return <Square value={plays_squares[i]}
            onClick={() => handleClick(i)}
        />;
    }

    const status = 'Next player: X';

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );

}