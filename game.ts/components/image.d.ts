export default class Graphic {
    private ctx;
    private src;
    private width;
    private height;
    private x;
    private y;
    constructor(gameArea: CanvasRenderingContext2D, x: number, y: number, src: string, child?: boolean);
    draw(): void;
}
