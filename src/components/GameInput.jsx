import React, {Component} from 'react';

export default function GameInput(props) {
	return (
		<div>
			<textarea id='enterBoard' cols='170' rows='30' ></textarea>
			<button onClick={props.processGame}>Run Game</button>
		</div>
	);
}