/*

Component which crwates row of elements in canvas.
args:
- ctx -> context (handle to rendering canvas)
- y -> y dimension of row
- width -> width of the row
- height -> height of the row
- elements -> array of elements in row

example:
new Row(ctx, 200, 500, 600, [...]);

*/

export default class Row {
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private x: number;
    private y: number;
    private elements: Array<any>;

    constructor(ctx: CanvasRenderingContext2D, y: number, width: number, height: number, elements: Array<any>) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.y = y;
        this.elements = elements;

        elements.forEach(element => {
            element.y = y;
            element.draw();
        });
    }
}
