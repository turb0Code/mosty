 /*

 Component which crwates simple Rectangle in canvas.
 args:
 - ctx -> context (handle to rendering canvas)
 - x -> x dimension of rectangle
 - y -> y dimension of rectangle
 - color -> color which fills the rectangle
 - width -> width of the rectangle
 - height -> height of the rectangle
 - child? (optional) -> set to true to avoid instant rendering
(additional call of draw() required)
in other case use undefined of omit child parameter

example:
new Rectangle(ctx, 50, 50, "red", 150, 150);

*/

export default class Rectangle {
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private x: number;
    private y: number;
    private color: any;

    constructor(gameArea: CanvasRenderingContext2D, x: number, y: number, color: any, width: number, height: number, child?: boolean) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
        this.ctx = gameArea;

        // if you specyfied child but component is not inside Row or Column it won't be rendered
        if (child == undefined) {
            this.draw();
        }

    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
