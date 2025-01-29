export default class Graphic {
    private ctx: CanvasRenderingContext2D;
    private src: string;
    private width: number;
    private height: number;
    private x: number;
    private y: number;

    constructor(gameArea: CanvasRenderingContext2D, x: number, y: number, src: string) {
        this.ctx = gameArea;
        this.src = src;
        this.x = x;
        this.y = y;

        let img = new Image();
        img.src = src;
        this.ctx.drawImage(img, this.x, this.y); // should be displayed only when fully loaded but checking takes too much time :)
    }
}