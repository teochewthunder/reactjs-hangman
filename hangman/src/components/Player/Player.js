import React, { useState } from 'react';
import './Player.css';
import Letters from '../Letters';

function Player(props) {
	let letters = props.letters;

    return (
    	<div className="Player">
			<div className="SelectLetter">
				<h3>Select A Letter</h3>
				<Letters letters={letters} context="player" />
			</div>
			<div className="Middle">
				<br /><br />OR
			</div>
			<div className="GuessWord">
				<h3>Guess The Word</h3>
				<input id="txtGuessWord" type="text" maxLength="13" />
				<br /><br />
				<button>Confirm</button>
			</div>
    	</div>   
    );
}

export default Player;