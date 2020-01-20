import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Game />
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}
