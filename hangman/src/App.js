import React from 'react';
import './App.css';
import HangedMan from './components/HangedMan';
import Computer from './components/Computer';
import Player from './components/Player';

function App() {
    return (
        <div className="App">
            <h1>HANGMAN</h1>
            <Computer />
            <HangedMan stage="0" />
            <Player />
        </div>
    );
}

export default App;
