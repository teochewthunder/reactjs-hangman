import React, { useState, useEffect } from 'react';
import './App.css';
import HangedMan from './components/HangedMan';
import Computer from './components/Computer';
import Player from './components/Player';

import GetRandomIndex from './utils/GetRandomIndex';

function App() {
    const [wordList, setWordList] = useState(['', 'ability', 'transparent', 'culture', 'average']);
    const [mysteryWord, setMysteryWord] = useState(wordList[0]);
    const [guessedLetters, setGuessedLetters] = useState([]);

    const [stage, setStage] = useState(-1);
    const [message, setMessage] = useState('Welcome to Hangman! Click button to Begin');
    const [messageContext, setMessageContext] = useState('');
    
    const setMessageAndContext = (strMessage, strContext)=> {
        setMessage(strMessage);
        setMessageContext(strContext);
    }

    useEffect(() => {
        if (message !== '') return;

        setMessageAndContext('Guess the mystery word', '');
        setMysteryWord(wordList[GetRandomIndex(wordList.length)]);
    });
    
    return (
        <div className="App">
            <h1>HANGMAN</h1>
            <HangedMan stage={ stage }/>
            <div className={ 'Message ' + messageContext }>
                { message }
            </div> 
            <Computer 
                mysteryWord={ mysteryWord }
                guessedLetters={ guessedLetters }
            />
            <Player 
                stage={ stage } 
                setStage={ setStage } 
                mysteryWord={ mysteryWord } 
                guessedLetters={ guessedLetters }
                setGuessedLetters={ setGuessedLetters }
                setMessageAndContext={ setMessageAndContext }
            />
        </div>
    );
}

export default App;
