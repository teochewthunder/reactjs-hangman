import React, { useState } from 'react';
import './Player.css';

function Player(props) {
	const [guessWord, setGuessWord] = useState('');	
    
    let temp_word = 'abcdefghijklmnopqrstuvwxyz';
    let tempLetters = temp_word.split('');

    let playerLetters = tempLetters.map((x)=>{
        return {letter:x, show:true};
    });

    const [letters, setLetters] = useState(playerLetters);

	let stage = props.stage;
	let setStage = props.setStage;
	let mysteryWord = props.mysteryWord;
	let mysteryLetters = props.mysteryLetters;
	let setMysteryLetters = props.setMysteryLetters;
	let setMessage = props.setMessage;

	let BtnConfirm_click = ()=> {
		if (guessWord === mysteryWord) {
			let tempLetters = mysteryLetters.map((x) => {
				return {letter:x.letter, show:true};
			});

			setMysteryLetters(tempLetters);
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
		if (props.context === 'computer') return;

		let unusedLetter = letters.filter((item) => {
			return (item.letter === letter && item.show)
		});	

		if (unusedLetter.length === 0) return;

		UseLetter(letter);

		playerLetters = letters.map((item) => {
			return {letter:item.letter, show:!(item.letter === letter)};
		});

		setLetters(playerLetters);
		console.log(letters)
	};

	let UseLetter = (letter) => {
		if (mysteryWord.indexOf(letter) === -1) {
			setStage(stage + 1);
		} else {
			mysteryLetters = mysteryLetters.map((item) => {
				return {letter:item.letter, show:(item.letter === letter)};
			});

			setMysteryLetters(mysteryLetters);
		}		
	}

	let keyboard = letters.map((item, index) => (
		<div 
			key={'letter_' + index} 
			className={item.show ? 'Key' : 'Key hidden'}
			onClick={()=>{LetterClick(item.letter);}}
		>
	  		{item.letter}					
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