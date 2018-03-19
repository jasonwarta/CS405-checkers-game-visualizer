import React from 'react';

export default function GameInput(props) {
	return (
		<div>
			<h4>Enter Game data, as output from checkers ai</h4>
			<textarea id='enterBoard' cols='170' rows='30' ></textarea>
			<button onClick={props.processGame}>Run Game</button>
		</div>
	);
}