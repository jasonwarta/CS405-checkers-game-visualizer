import React from 'react';
import Board from './Board.jsx';
import Color from './Color.jsx';
import MoveTracker from './MoveTracker.jsx';
import GameInput from './GameInput.jsx';

// r__rrrbr___r_bbr___r_br_b__b_bbb
// ___rrrb__r___brrb_r_b_rrbb_b___b

// r_rrr_r____r_rr____bbb___b_bbR_b

// ________B__r____B_r_rR___rR__R__
// ___________r____B_r_rR___rR__R__

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

if (!Array.prototype.first){
    Array.prototype.first = function(){
        return this[0];
    };
};

if (!String.prototype.replaceAt){
	String.prototype.replaceAt = function(idx,newChar){
		return `${this.substr(0,idx)}${newChar}${this.substr(idx+1)}`;
	};
};

function log(msg) {
	console.log(msg);
	return true;
}

export default class GameContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			board: [],
			computerMoves: []
		}

		this.processGame = this.processGame.bind(this);
	}

	processGame() {
		let data = [];
		try {
			data = JSON.parse(document.getElementById('enterBoard').value.trim());
		}
		catch(e) {
			data = JSON.parse(`[${document.getElementById('enterBoard').value.trim().split('\n').join(',')}]`);
		}
		
		
		const loopDelay = (idx,nextIdx) => {
			let self = this;
			setTimeout( () => {
				self.setState({
					board:data[idx].board.split(''),
					computerMoves: [...this.state.computerMoves, data[idx].board]
				});
				if(data[nextIdx]) {
					loopDelay(nextIdx,nextIdx+1);
				}
			}, 500 );
		}

		loopDelay(0,1);
	}

	render(){
		return (
			<div>
				<h1>Checkers Visualizer</h1>

				<Board 
					board={this.state.board} 
				/>
				<Color 
					className="color turnMarker" 
					color={this.state.turnColor} 
				/>
				<MoveTracker computerMoves={this.state.computerMoves} />

				<GameInput processGame={this.processGame} />
			</div>
		);
	}
}