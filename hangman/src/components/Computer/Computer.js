import React from 'react';
import './Computer.css';
import Letters from '../Letters';

function Computer(props) {
	let message = 'loading...';
	let letters = props.letters;

    return (
    	<div className="Computer">
			<div className="Message">{message}</div> 
			<Letters letters={letters} context="computer"/> 
    	</div> 
    );
}

export default Computer;