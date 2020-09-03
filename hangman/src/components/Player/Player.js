import React, { useState } from 'react';
import './Player.css';
import Letters from '../Letters';

function Player(props) {
	const [guessWord, setGuessWord] = useState('');

	let letters = props.letters;
	let setStage = props.setStage;
	let stage = props.stage;
	let mysteryWord = props.mysteryWord;
	let setMysteryLetters = props.setMysteryLetters;
	let mysteryLetters = props.mysteryLetters;
	let setMessage = props.setMessage;

	let btnConfirm_click = ()=> {
		if (guessWord === mysteryWord) {
			let tempLetters = mysteryLetters;
			tempLetters.map((x) => {
				return {letter:x.letter, show:true};
			});

			setMysteryLetters(tempLetters);
			setStage(0);
			setMessage("You Win!");
		} else {
			setStage(stage + 1);
		}
	};

	let removeIllegalCharacters = (word) => {
		let newWord = word.replace(/[^a-z]/gi, '');
		return newWord.toLowerCase();
	}	

    return (
    	<div className="Player">
			<div className="SelectLetter">
				<h3>Select A Letter</h3>
				<Letters 
					letters={letters} 
					context="player" 
					stage={stage} 
					setStage={setStage} 
	                mysteryWord={mysteryWord} 
	                mysteryLetters={mysteryLetters} 
				/>
			</div>
			<div className="Middle">
				<br /><br />OR
			</div>
			<div className="GuessWord">
				<h3>Guess The Word</h3>
				<input type="text" maxLength="13" value={guessWord} onChange={(e)=>{ setGuessWord(removeIllegalCharacters(e.target.value)); }}/>
				<br /><br />
				<button onClick={()=>{btnConfirm_click();}} disabled={guessWord.length === 0}>Confirm</button>
			</div>
    	</div>   
    );
}

export default Player;