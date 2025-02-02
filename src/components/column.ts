/*

Component which crwates column of elements in canvas.
args:
- ctx -> context (handle to rendering canvas)
- x -> x dimension of column
- width -> width of the column
- height -> height of the column
- elements -> array of elements in column

example:
new Column(ctx, 200, 500, 600, [...]);

*/

export default class Column {
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private x: number;
    private y: number;
    private elements: Array<any>;

    constructor(ctx: CanvasRenderingContext2D, x: number, width: number, height: number, elements: Array<any>) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.x = x;
        this.elements = elements;

        elements.forEach(element => {
            element.x = x;
            element.draw();
        });
    }
}