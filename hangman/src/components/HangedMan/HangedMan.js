import React from 'react';
import './HangedMan.css';

function HangedMan(props) {
    return (
    	<div className="HangedMan">
			<svg>
				<g className={ props.stage === 6 ? 'swing' : '' }>
					<line 
						className="rope" 
						x1="300" 
						y1="20" 
						x2="300" 
						y2="60"
					></line>

					<circle 
						className={props.stage >= 1 ? 'man' : 'man hidden'} 
						cx="300" 
						cy="80" 
						r="20"
						data-testid="hangedMan_head"
					></circle>

					<line 
						className={props.stage >= 2 ? 'man' : 'man hidden'} 
						x1="300" 
						y1="100" 
						x2="280" 
						y2="160"
						data-testid="hangedMan_leftArm"
					></line>

					<line 
						className={props.stage >= 3 ? 'man' : 'man hidden'} 
						x1="300" 
						y1="100" 
						x2="320" 
						y2="160"
						data-testid="hangedMan_rightArm"
					></line>

					<line 
						className={props.stage >= 4 ? 'man' : 'man hidden'} 
						x1="300" 
						y1="100" 
						x2="300" 
						y2="180"
						data-testid="hangedMan_torso"
					></line>

					<line 
						className={props.stage >= 5 ? 'man' : 'man hidden'} 
						x1="300" 
						y1="180" 
						x2="280" 
						y2="250"
						data-testid="hangedMan_leftLeg"
					></line>

					<line 
						className={props.stage >= 6 ? 'man' : 'man hidden'} 
						x1="300" 
						y1="180" 
						x2="320" 
						y2="250"
						data-testid="hangedMan_rightLeg"
					></line>
				</g>

				<text 
					x="350" 
					y="100" 
					className={props.stage >= 6 ? 'gameover' : 'gameover hidden'}
					data-testid="txtGameOver"
				>
					<tspan x="350" y="100">GAME</tspan>
					<tspan x="350" y="145">OVER</tspan>
				</text>

				<polyline className="gallows" points="320,20 120,20 120,280 480,280"></polyline>
			</svg>  
    	</div>
    );
}

export default HangedMan;