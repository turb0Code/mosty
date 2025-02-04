import Button from "../components/button";
import Row from "../components/row";
import TextBox from "../components/text";
import ClickDetector from "../script/buttonClick";

// initialize click detector instance
let clickDetector = new ClickDetector();

// vars
let money = 8500;
let tooPoorTextDisplay = 0;

const drawNavBar = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {

    // click detection
    clickDetector.setCanvas(canvas);  // assign detector to canvas
    clickDetector.detectClickEvent();  // check if some button was clicked

    // you're too poor message
    let tooPoorText = new TextBox(ctx, 600, 500, "You don't have enough money", true);
    if (tooPoorTextDisplay > 0)
    {
        tooPoorText.draw();
        tooPoorTextDisplay--;
    }

    // setup buttons
    let cheap = new Button(ctx, 700, 0, "300$", 120, 50, 12, true);
    clickDetector.add(cheap);
	cheap.onClick = () => {
        if (money - 300 > 0)
        {
            console.log('[+] bought cheap');
            money = money - 300;
        } else
        { tooPoorTextDisplay = 500; }
    };

    let mid = new Button(ctx, 900, 0, "500$", 120, 50, 12, true);
    clickDetector.add(mid);
	mid.onClick = () => {
        if (money - 500 > 0)
        {
            console.log('[+] bought cheap');
            money = money - 500;
        } else
        { tooPoorTextDisplay = 500; }
    };

    let expensive = new Button(ctx, 1100, 0, "700$", 120, 50, 12, true);
    clickDetector.add(expensive);
	expensive.onClick = () => {
        if (money - 700 > 0)
        {
            console.log('[+] bought cheap');
            money = money - 700;
        } else
        { tooPoorTextDisplay = 500; }
    };

    let startBtn = new Button(ctx, 1790, 0, "Start", 120, 50, 12, true)
    clickDetector.add(startBtn);
	startBtn.onClick = () => { console.log('[+] started simulation'); }


    // draw bottom bar in row
    new Row(ctx, 852, 200, 1920, [
        new TextBox(ctx, 15, 0, `${money}$`, true),
        cheap,
        mid,
        expensive,
        startBtn
    ]);

}

export default drawNavBar;