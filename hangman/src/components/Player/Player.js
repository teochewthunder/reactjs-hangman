import React, { useState } from 'react';
import './Player.css';

function Player(props) {
	const [guessWord, setGuessWord] = useState('');	
    const [usedLetters, setUsedLetters] = useState([]);
    
    let playerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

	let stage = props.stage;
	let setStage = props.setStage;
	let guessedLetters = props.guessedLetters;
	let setGuessedLetters = props.setGuessedLetters;
	let mysteryWord = props.mysteryWord;
	let setMessage = props.setMessage;

	let mysteryLetters = mysteryWord.split('');

	let BtnConfirm_click = ()=> {
		if (guessWord === mysteryWord) {
			setGuessedLetters(mysteryLetters);
			setStage(0);
			setMessage("You Win!");
		} else {
			setStage(stage + 1);
		}
	};

	let RemoveIllegalCharacters = (word) => {
		let newWord = word.replace(/[^a-z]/gi, '');
		return newWord.toLowerCase();
	}	

	let LetterClick = (letter) => {
		if (usedLetters.indexOf(letter) !== -1) return;

		let tempArray = usedLetters;
		tempArray.push(letter);
		setUsedLetters(tempArray);

		UseLetter(letter);
	};

	let UseLetter = (letter) => {
		if (mysteryLetters.indexOf(letter) === -1) {
			setStage(stage + 1);
		} else {
			let tempArray = guessedLetters;
			tempArray.push(letter);
			setGuessedLetters(tempArray);
		}		
	}

	let keyboard = playerLetters.map((item, index) => (
		<div 
			key={'letter_' + index} 
			className={usedLetters.indexOf(item) === -1 ? 'Key' : 'Key hidden'}
			onClick={()=>{LetterClick(item);}}
		>
	  		{item}					
		</div>
		)
	);

    return (
    	<div className="Player">
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
				<input type="text" maxLength="13" value={guessWord} onChange={(e)=>{ setGuessWord(RemoveIllegalCharacters(e.target.value)); }}/>
				<br /><br />
				<button onClick={()=>{BtnConfirm_click();}} disabled={guessWord.length === 0}>Confirm</button>
			</div>
    	</div>   
    );
}

export default Player;