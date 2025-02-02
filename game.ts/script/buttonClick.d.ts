import Button from '../components/button';
export default class ClickDetector {
    private canvas;
    private clicked;
    private buttons;
    constructor();
    detectClickEvent(): void;
    setCanvas(canvas: HTMLCanvasElement): void;
    add(button: Button): void;
}
