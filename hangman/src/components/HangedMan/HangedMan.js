import React from 'react';
import './HangedMan.css';

function HangedMan(props) {
    return (
    	<div className="HangedMan">
			<svg>
				<g>
					<animateTransform 
						id="rotateLeft"
						attributeName="transform" 
						attributeType="XML" 
						type="rotate" 
						from="-5 300 20" 
						to="5 300 20" 
						dur="1s" 
						begin={props.stage >= 6 ? '0;rotateRight.end' : ''}
					/>
					<animateTransform 
						id="rotateRight"
						attributeName="transform" 
						attributeType="XML" 
						type="rotate" 
						from="5 300 20" 
						to="-5 300 20" 
						dur="1s" 
						begin={props.stage >= 6 ? 'rotateLeft.end' : ''}
					/>

					<line className="rope" x1="300" y1="20" x2="300" y2="60"></line>
					<circle className={props.stage >= 1 ? 'man' : 'man hidden'} cx="300" cy="80" r="20"></circle>
					<line className={props.stage >= 2 ? 'man' : 'man hidden'} x1="300" y1="100" x2="280" y2="160"></line>
					<line className={props.stage >= 3 ? 'man' : 'man hidden'} x1="300" y1="100" x2="320" y2="160"></line>
					<line className={props.stage >= 4 ? 'man' : 'man hidden'} x1="300" y1="100" x2="300" y2="180"></line>
					<line className={props.stage >= 5 ? 'man' : 'man hidden'} x1="300" y1="180" x2="280" y2="250"></line>
					<line className={props.stage >= 6 ? 'man' : 'man hidden'} x1="300" y1="180" x2="320" y2="250"></line>
				</g>
				<text x="350" y="100" className={props.stage >= 6 ? 'gameover' : 'gameover hidden'}>
					<tspan x="350" y="100">GAME</tspan>
					<tspan x="350" y="145">OVER</tspan>
				</text>
				<polyline className="gallows" points="320,20 120,20 120,280 480,280"></polyline>
			</svg>  
    	</div>
    );
}

export default HangedMan;