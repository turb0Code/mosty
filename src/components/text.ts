/*

Component which displays text in canvas.
args:
- ctx -> context (handle to rendering canvas)
- x -> x dimension of the text
- y -> y dimension od the text
- text -> text to be displayed
- child? (optional) -> set to true to avoid instant rendering
(additional call of draw() required)
in other case use undefined of omit child parameter

example:
new TextBox(ctx, 100, 100, "Example text");

*/

export default class TextBox {
    private ctx: CanvasRenderingContext2D;
    private x: number;
    private y: number;
    private text: string;

    constructor(gameArea: CanvasRenderingContext2D, x: number, y: number, text: string, child?: boolean) {
        this.ctx = gameArea;
        this.x = x;
        this.y = y;
        this.text = text;

        // if you specyfied child but component is not inside Row or Column it won't be rendered
        if (child == undefined) {
            this.draw();
        }

    }

    draw() {
        this.ctx.font = "50px Pixelify Sans";
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillText(this.text, this.x, this.y+40);
    }
}