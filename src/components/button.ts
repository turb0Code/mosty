/*

Component which creates Button in canvas.
args:
- ctx -> contex (handle to canvas)
- x -> x dimension of button
- y -> y dimension of button
- text -> text displayed on button
- width -> width of the button
- height -> height of the button
- radius -> radius of the button border
- child? (optional) -> set to true to avoid instant rendering
(additional call of draw() required)
in other case use undefined or omit child parameter

methods:
onClick -> pass fuction to be called when clicked

example:
new Button(this.ctx, 50, 100, "click!", 120, 50, 12);

*/

export default class Button {
    private ctx: CanvasRenderingContext2D;
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private text: string;
    private radius: number;

    constructor(gameArea: CanvasRenderingContext2D, x: number, y: number, text: string, width: number, height: number, radius: number, child?: boolean) {
        this.ctx = gameArea;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
        this.radius = radius;

        // if you specyfied child but component is not inside Row or Column it won't be rendered
        if (child == undefined) {
            this.draw();
        }

    }

    draw() {
        this.ctx.fillStyle = '#15151f';
        this.ctx.strokeStyle = '#ffffff';

        this.ctx.beginPath();
        this.ctx.moveTo(this.x + this.radius, this.y);
        this.ctx.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + this.height, this.radius);
        this.ctx.arcTo(this.x + this.width, this.y + this.height, this.x, this.y + this.height, this.radius);
        this.ctx.arcTo(this.x, this.y + this.height, this.x, this.y, this.radius);
        this.ctx.arcTo(this.x, this.y, this.x + this.width, this.y, this.radius);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.fillStyle = 'white';
        this.ctx.font = '25px Pixelify Sans';
        this.ctx.fillText(this.text, this.x + (this.width / 3.7), this.y + (this.height / 1.6));
    }

    inBounds(mouseX: number, mouseY: number): boolean {
        return !(mouseX < this.x || mouseX > this.x + this.width || mouseY < this.y || mouseY > this.y + this.height);
    }

    onClick: () => void;
}