import React from 'react';
import './Letters.css';

function Letters(props) {
    return (
    	<div className="Letters">
    	{
			props.letters.map((item, index) => (
				<div key={'letter_' + index} className={item.show ? 'Letter' : 'Letter hidden'}>
				  	{(item.show && props.context === 'player') || props.conext === 'computer' ? item.letter : ''}					
				</div>
			))		
    	}
    	</div>   
    );
}

export default Letters;