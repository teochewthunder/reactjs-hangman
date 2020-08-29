import React from 'react';
import './Computer.css';
import Letters from '../Letters';

function Computer() {
    return (
    	<div className="Computer">
			<p>Computer</p> 
			<Letters word="computertest" /> 
    	</div> 
    );
}

export default Computer;