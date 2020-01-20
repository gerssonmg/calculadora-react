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

    const status = `Next player:  ${plays_xIsNext ? 'X' : 'O'}`;

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

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}