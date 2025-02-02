import Button from './components/button';
import Graphic from './components/image';
import TextBox from './components/text';
import ClickDetector from './script/buttonClick';

import drawNavBar from "./modules/nav-bar";

// initialize click detector instance
let clickDetector = new ClickDetector();

export default class Game {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private height: number = window.innerHeight;
	private width: number = window.innerWidth;
	private background: HTMLImageElement = null;

	constructor() {
		this.canvas = <HTMLCanvasElement>document.querySelector('canvas');
		this.canvas.width = 1920;
		this.canvas.height = 911;
		this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");

		this.background = new Image();
		this.background.src = "./assets/images/mosty-bg.png";
		this.background.onload = () => {
			this.ctx.drawImage(this.background, -80, 0, 2050, 1000);
		}
	}


	// main rendering function (each run of function is a frame)
	public render(): void {

		// clear canvas
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// draw background image
		this.ctx.drawImage(this.background, -80, 0, 2050, 1000);

		// debug info
        console.log('[*] rendering');

		// click detection
		clickDetector.setCanvas(this.canvas);  // assign detector to canvas
		clickDetector.detectClickEvent();  // check if some button was clicked

		// scene elements
		new Graphic(this.ctx, 100, 350, "./assets/images/car.png");

		new TextBox(this.ctx, 50, 50, "Hello, World!");

		let btn = new Button(this.ctx, 50, 100, "click!", 120, 50, 12);
		clickDetector.add(btn);
		btn.onClick = () => console.log('[+] clicked button!');

		drawNavBar(this.ctx, this.canvas);

	}
}