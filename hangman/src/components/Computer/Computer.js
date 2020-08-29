import React from 'react';
import './Computer.css';
import Letters from '../Letters';

function Computer() {
	let message = "loading...";

    return (
    	<div className="Computer">
			<div className="Message">{message}</div> 
			<Letters word="computertest" /> 
    	</div> 
    );
}

export default Computer;