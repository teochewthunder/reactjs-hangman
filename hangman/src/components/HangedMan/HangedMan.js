import React from 'react';
import './HangedMan.css';

function HangedMan() {
    return (
    	<div className="HangedMan">
			<svg>
				<polyline className="gallows" points="350,20 20,20 20,380 580,380"></polyline>
				<line className="rope" x1="300" y1="20" x2="300" y2="60"></line>
				<circle className="man {props.stage >= 1 ? '' : 'hidden'}" cx="300" cy="80" r="20"></circle>
				<line className="man {props.stage >= 2 ? '' : 'hidden'}" x1="300" y1="100" x2="250" y2="200"></line>
				<line className="man {props.stage >= 3 ? '' : 'hidden'}" x1="300" y1="100" x2="350" y2="200"></line>
				<line className="man {props.stage >= 4 ? '' : 'hidden'}" x1="300" y1="100" x2="300" y2="200"></line>
				<line className="man {props.stage >= 5 ? '' : 'hidden'}" x1="300" y1="200" x2="280" y2="350"></line>
				<line className="man {props.stage >= 6 ? '' : 'hidden'}" x1="300" y1="200" x2="320" y2="350"></line>
			</svg>  
    	</div>
    );
}

export default HangedMan;