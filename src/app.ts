declare var require: any;
import './style.css';

import Game from './game';

class App {
	private _game: Game;

	constructor(game: Game) {
		this._game = game;
	}

	// setup method where we can initialize any game-specific settings and start the game loop
	public setup(): void {
		// Any setup that is required that only runs once before game loads goes here

		this.gameLoop();
	}


    // bind this to gameLoop to keep the correct context during the animation loop
	private gameLoop(): void {
        // need to bind the current this reference to the callback
		requestAnimationFrame(this.gameLoop.bind(this));

		this._game.render();  // start rendering
	}
}

window.onload = () => {
	let app = new App(new Game());

	app.setup();
}