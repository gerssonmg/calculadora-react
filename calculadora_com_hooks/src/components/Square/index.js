import React, { useState } from 'react';

export default function Square(props) {

    //    const [clicking, setClicking] = useState('');

    return (
        <button
            className="square"
            onClick={() => props.onClick()}
        >
            {props.value}
        </button>
    );
}