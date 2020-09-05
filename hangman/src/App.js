import React, { useState, useEffect } from 'react';
import { useAsync } from 'react-async';
import './App.css';
import HangedMan from './components/HangedMan';
import Computer from './components/Computer';
import Player from './components/Player';

import GetRandomIndex from './utils/GetRandomIndex';

const fetchWordList = async () => {
    const res = await fetch('https://random-word-api.herokuapp.com/word?number=20');
    if (!res.ok) throw new Error(res.statusText)
    return res.json();
};

function App() {
    const { data, error, isPending } = useAsync({ 
        promiseFn: fetchWordList, 
        onResolve: (data) => {
            let tempList = wordList;

            data.forEach((item)=> {
                if (item.length <= 13) {
                    tempList.push(item);
                }
            });

            setWordList(tempList);
            console.log(wordList);
        }
    });

    const [wordList, setWordList] = useState(['']);
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
