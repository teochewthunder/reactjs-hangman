import React from 'react';
import './Player.css';
import Letters from '../Letters';

function Player() {
    return (
    	<div className="Player">
			<p>Player</p> 
			<Letters word="playertest" />
    	</div>   
    );
}

export default Player;