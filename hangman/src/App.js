import React, { useState } from 'react';
import './App.css';
import HangedMan from './components/HangedMan';
import Computer from './components/Computer';
import Player from './components/Player';

function App() {
    const [mysteryWord, setMysteryWord] = useState('computertests');
    const [guessedLetters, setGuessedLetters] = useState([]);

    const [stage, setStage] = useState(0);
    const [message, setMessage] = useState('');
    

    return (
        <div className="App">
            <h1>HANGMAN</h1>
            <HangedMan stage={stage}/>
            <Computer 
                mysteryWord={mysteryWord}
                guessedLetters={guessedLetters}
                message={message} 
            />
            <Player 
                stage={stage} setStage={setStage} 
                mysteryWord={mysteryWord} 
                guessedLetters={guessedLetters}
                setGuessedLetters={setGuessedLetters}
                setMessage={setMessage}
            />
        </div>
    );
}

export default App;
