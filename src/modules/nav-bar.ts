import Button from "../components/button";
import TextBox from "../components/text";


let buttons: Button[] = [];
let money = 8500;

let clicked = true;


const drawNavBar = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {

    canvas.addEventListener('click', (event: MouseEvent) => {
        let x = event.pageX - (canvas.clientLeft + canvas.offsetLeft);
        let y = event.pageY - (canvas.clientTop + canvas.offsetTop);

        buttons.forEach(b => {
            if (b.inBounds(x, y) && !!b.onClick && clicked) { b.onClick(); clicked = false; }
        });

        buttons = [];

        clicked = true;
    });

    new TextBox(ctx, 15, 895, `${money}$`);

    let cheap = new Button(ctx, 700, 852, "300$", 120, 50, 12);
    buttons.push(cheap);
	cheap.onClick = () => { console.log('[+] bought cheap'); money = money - 300; };

    let mid = new Button(ctx, 900, 852, "500$", 120, 50, 12);
    buttons.push(mid);
	mid.onClick = () => { console.log('[+] bought mid'); money = money - 500; }

    let expensive = new Button(ctx, 1100, 852, "700$", 120, 50, 12);
    buttons.push(expensive);
	expensive.onClick = () => { console.log('[+] bought expensive'); money = money - 700; }

    new Button(ctx, 1790, 852, "Start", 120, 50, 12);
}

export default drawNavBar;