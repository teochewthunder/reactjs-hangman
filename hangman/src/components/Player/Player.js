import React, { useState } from 'react';
import './Player.css';

import RemoveIllegalCharacters from '../../utils/RemoveIllegalCharacters';

function Player(props) {
	const [guessedWord, setguessedWord] = useState('');	
    const [usedLetters, setUsedLetters] = useState([]);
    
    let playerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

	let stage = props.stage;
	let setStage = props.setStage;
	let guessedLetters = props.guessedLetters;
	let setGuessedLetters = props.setGuessedLetters;
	let mysteryWord = props.mysteryWord;
	let setMessageAndContext = props.setMessageAndContext;

	let mysteryLetters = mysteryWord.split('');

	const BtnConfirm_click = ()=> {
		if (stage === 6 || stage === -1) return;

		if (guessedWord === mysteryWord) {
			setGuessedLetters(mysteryLetters);
			setStage(-1);
			setMessageAndContext("You Win!", "success");
		} else {
			setStage(stage + 1);
			setMessageAndContext("You guessed '" + guessedWord + "'. Wrong!", "failure");
		}
	};

	const BtnBegin_click = ()=> {
		setStage(0);
		setGuessedLetters([]);
		setUsedLetters([]);
		setMessageAndContext("", "");
	};

	const LetterClick = (letter) => {
		if (stage === 6 || stage === -1) return;
		if (usedLetters.indexOf(letter) !== -1) return;

		let tempArray = usedLetters;
		tempArray.push(letter);
		setUsedLetters(tempArray);

		UseLetter(letter);
	};

	const UseLetter = (letter) => {
		if (mysteryLetters.indexOf(letter) === -1) {
			setStage(stage + 1);
			setMessageAndContext("You guessed '" + letter + "'. Wrong!", "failure");

			if (stage === 5) {
				setMessageAndContext("You have run out of tries!", "failure");
			} 
		} else {
			guessedLetters.push(letter);
			setGuessedLetters(guessedLetters);
			setMessageAndContext("You guessed '" + letter + "'. Correct!", "success");

			let unguessedLetters = mysteryLetters.filter((item)=>{
				return guessedLetters.indexOf(item) === -1;
			});

			if (unguessedLetters.length === 0) {
				setStage(-1);
				setMessageAndContext("You Win!", "success");
			}
		}		
	}

	const keyboard = playerLetters.map((item, index) => (
		<div 
			key={'letter_' + index} 
			className={usedLetters.indexOf(item) === -1 ? 'Key' : 'Key hidden'}
			onClick={()=>{LetterClick(item);}}
		>
	  		{item}					
		</div>
		)
	);

	const dashboard = (
		<>
			<div className="SelectLetter">
				<h3>Select A Letter</h3>
				<div className="Keyboard">
					{keyboard}
				</div>
			</div>
			<div className="Middle">
				<br /><br />OR
			</div>
			<div className="GuessWord">
				<h3>Guess The Word</h3>
				<input 
					type="text" 
					maxLength="13" 
					value={ guessedWord } 
					onChange={ (e)=>{ setguessedWord(RemoveIllegalCharacters(e.target.value)); }}
				/>
				<br /><br />
				<button onClick={ ()=>{BtnConfirm_click();}} disabled={guessedWord.length === 0}>
					Confirm
				</button>
			</div>
		</>
	)
    
	if (stage === -1) {
		return (
		<button className="BtnBegin" onClick={ ()=>{BtnBegin_click();}}>
			Begin
		</button>	    	
		);
	} else if (stage === 6) {
		return (
		<button className="BtnBegin" onClick={ ()=>{BtnBegin_click();}}>
			Replay
		</button>	    	 
		);
	} else {
		return (
    	<div className="Player">
    		{ dashboard }
    	</div> 
    	);  		
	}   
}

export default Player;