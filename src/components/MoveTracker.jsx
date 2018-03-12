import React from 'react';

export default function MoveTracker(props) {
	return (
		<div>
		{props.computerMoves.length > 0 
		?
			<div className="moveTracker">
				<textarea cols="50" rows="50" 
				value={props.computerMoves.join('\n\n')}
				readOnly="true" />
			</div>
		:
			<div></div>
		}
		</div>
	);
}