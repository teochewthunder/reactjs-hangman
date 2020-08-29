import React from 'react';
import './Letters.css';

function Letters(props) {
	let letters = props.word.split(""); 

    return (
    	<div className="Letters">
    	{
	      letters.map((item, index) => (
	        <div key={"letter_" + index} className="Letter">
	          {item}
	        </div>
	      ))  		
    	}
    	</div>   
    );
}

export default Letters;