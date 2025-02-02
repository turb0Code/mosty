/*

Component which creates Image in canvas.
args:
- ctx -> context (handle to rendering canvas)
- x -> x dimension of image
- y -> y dimension of image
- src -> path to displayed image
- child (optional) -> set to true to avoid instant rendering
(additional call of draw() required)
in other case use undefined or omit child parametr

example:
new Graphic(this.ctx, 100, 350, "./your/path/to/image.png");

*/

export default class Graphic {
    private ctx: CanvasRenderingContext2D;
    private src: string;
    private width: number;
    private height: number;
    private x: number;
    private y: number;

    constructor(gameArea: CanvasRenderingContext2D, x: number, y: number, src: string, child?: boolean) {
        this.ctx = gameArea;
        this.src = src;
        this.x = x;
        this.y = y;

        // if you specyfied child but component is not inside Row or Column it won't be rendered
        if (child == undefined) {
            this.draw();
        }

    }

    draw() {
        let img = new Image();
        img.src = this.src;
        this.ctx.drawImage(img, this.x, this.y); // should be displayed only when fully loaded but checking takes too much time :)
    }
}