import React from 'react';
import './Computer.css';

function Computer(props) {
	let mysteryWord = props.mysteryWord;
	let guessedLetters = props.guessedLetters;

	let mysteryLetters = mysteryWord.split('');

	let mystery = mysteryLetters.map((item, index) => (
		<div 
			key={ 'letter_' + index } 
			className={guessedLetters.indexOf(item) !== -1 ? 'Letter' : 'Letter hidden'}
		>
		  	{guessedLetters.indexOf(item) !== -1 ? item : ''}					
		</div>
	))

    return (
    	<div className="Computer">
			<div className="Letters">
				{ mystery }
			</div>
    	</div> 
    );
}

export default Computer;