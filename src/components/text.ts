export default class TextBox {
    private ctx: CanvasRenderingContext2D;
    private x: number;
    private y: number;
    private text: string;

    constructor(gameArea: CanvasRenderingContext2D, x: number, y: number, text: string) {
        this.ctx = gameArea;
        this.x = x;
        this.y = y;
        this.text = text;

        this.ctx.font = "50px Pixelify Sans";
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillText(this.text, this.x, this.y);
    }
}