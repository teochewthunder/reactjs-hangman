import React, { useState } from 'react';
import './App.css';
import HangedMan from './components/HangedMan';
import Computer from './components/Computer';
import Player from './components/Player';

function App() {
    let word, letters;

    word = 'computertests';
    letters = word.split('');

    let computer_letters = letters.map((x)=>{
        return {letter:x, show:false};
    });

    word = 'abcdefghijklmnopqrstuvwxyz';
    letters = word.split('');

    let player_letters = letters.map((x)=>{
        return {letter:x, show:true};
    });

    let stage = 0;

    return (
        <div className="App">
            <h1>HANGMAN</h1>
            <HangedMan stage={stage}/>
            <Computer letters={computer_letters} />
            <Player letters={player_letters} />
        </div>
    );
}

export default App;
