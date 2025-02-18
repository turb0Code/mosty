const drawBar = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {



}

export default drawBar;

class Bar {
    public id: number;
    private x: number;
    private y: number;
    private endX: number;
    private endY: number;
    private length: number;
    private material: any;
    private strenght: number;
    private load: number;
    private deformation: number;
    private nodes: any[];

    constructor(x: number, y: number, endX: number, endY: number, material: any, strenght: number, load: number, deformation: number) {
        this.x = x;
        this.y = y;
        this.endX = endX;
        this.endY = endY;
        this.material = material;
        this.strenght = strenght;
        this.load = load;
        this.deformation = deformation;
    }
}