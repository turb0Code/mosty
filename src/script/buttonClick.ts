import Button from '../components/button';

/*

Detector checking if some button in current module was clicked.

usage:
create detector instance in your module (outside rendering function)
let clickDetector = new ClickDetector();

in rendered function every frame invoke
clickDetector.setCanvas(canvas);  // assign detector to canvas
clickDetector.detectClickEvent();  // check if some button was clicked

then for evety button (example: btn)
clickDetector.add(btn);  // add button to detector

*/

export default class ClickDetector {
    private canvas: HTMLCanvasElement;
    private clicked: boolean;
    private buttons: Button[];

    constructor() {
        this.canvas = null;
        this.clicked = true;
        this.buttons = [];
    }

    detectClickEvent() {
        this.canvas.addEventListener('click', (event: MouseEvent) => {
            let x = event.pageX - (this.canvas.clientLeft + this.canvas.offsetLeft);
            let y = event.pageY - (this.canvas.clientTop + this.canvas.offsetTop);

            this.buttons.forEach(b => {
                if (b.inBounds(x, y) && !!b.onClick && this.clicked) { b.onClick(); this.clicked = false; }
            });

            this.buttons = [];
            this.clicked = true;
        });
    }

    setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

    add(button: Button) {
        this.buttons.push(button);
    }
}

