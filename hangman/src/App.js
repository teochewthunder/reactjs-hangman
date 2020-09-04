import React, { useState } from 'react';
import './App.css';
import HangedMan from './components/HangedMan';
import Computer from './components/Computer';
import Player from './components/Player';

function App() {
    let temp_word, tempLetters;

    const [mysteryWord, setMysteryWord] = useState('computertests');
    tempLetters = mysteryWord.split('');

    let computerLetters = tempLetters.map((x)=>{
        return {letter:x, show:false};
    });

    const [mysteryLetters, setMysteryLetters] = useState(computerLetters);

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
