export default class Button {
    private ctx;
    private x;
    private y;
    private width;
    private height;
    private text;
    private radius;
    constructor(gameArea: CanvasRenderingContext2D, x: number, y: number, text: string, width: number, height: number, radius: number, child?: boolean);
    draw(): void;
    inBounds(mouseX: number, mouseY: number): boolean;
    onClick: () => void;
}
