export default class Rectangle {
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private x: number;
    private y: number;
    private color: any;

    constructor(gameArea: CanvasRenderingContext2D, x: number, y: number, color: any, width: number, height: number) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
        this.ctx = gameArea;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
