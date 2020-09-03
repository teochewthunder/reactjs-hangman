import React from 'react';
import './Computer.css';
import Letters from '../Letters';

function Computer(props) {
	let message = props.message;
	let letters = props.mysteryLetters;

    return (
    	<div className="Computer">
			<div className="Message">{message}</div> 
			<Letters letters={letters} context="computer"/> 
    	</div> 
    );
}

export default Computer;