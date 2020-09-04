import React from 'react';
import './Computer.css';

function Computer(props) {
	let message = props.message;
	let mysteryLetters = props.mysteryLetters;

	let mystery = mysteryLetters.map((item, index) => (
		<div 
			key={'letter_' + index} 
			className={item.show ? 'Letter' : 'Letter hidden'}
		>
		  	{item.show ? item.letter : ''}					
		</div>
	))

    return (
    	<div className="Computer">
			<div className="Message">
				{ message }
			</div> 
			<div className="Letters">
				{ mystery }
			</div>
    	</div> 
    );
}

export default Computer;