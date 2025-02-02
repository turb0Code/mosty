export default class TextBox {
    private ctx;
    private x;
    private y;
    private text;
    constructor(gameArea: CanvasRenderingContext2D, x: number, y: number, text: string, child?: boolean);
    draw(): void;
}
