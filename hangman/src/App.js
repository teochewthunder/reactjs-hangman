import React, { useState } from 'react';
import './App.css';
import HangedMan from './components/HangedMan';
import Computer from './components/Computer';
import Player from './components/Player';

function App() {
    let word, letters;

    const [mysteryWord, setMysteryWord] = useState('computertests');
    letters = mysteryWord.split('');

    let computer_letters = letters.map((x)=>{
        return {letter:x, show:false};
    });

    const [mysteryLetters, setMysteryLetters] = useState(computer_letters);

    word = 'abcdefghijklmnopqrstuvwxyz';
    letters = word.split('');

    let player_letters = letters.map((x)=>{
        return {letter:x, show:true};
    });

    const [stage, setStage] = useState(0);
    const [message, setMessage] = useState('');

    return (
        <div className="App">
            <h1>HANGMAN</h1>
            <HangedMan stage={stage}/>
            <Computer 
                mysteryLetters={mysteryLetters}
                message={message} 
            />
            <Player 
                letters={player_letters} 
                stage={stage} setStage={setStage} 
                mysteryWord={mysteryWord} 
                mysteryLetters={mysteryLetters} 
                setMysteryLetters={setMysteryLetters}
                setMessage={setMessage}
            />
        </div>
    );
}

export default App;
