export class Canvas {
    constructor(canvas, ctx) {
        // this.canvas = canvas;
        // this.ctx = ctx;
        // this.canvas.width = 400;
        // this.canvas.height = 400;
    }

    // statics---------
    static textX;
    static textY;
    static adjustX = 50;
    static adjustY = 50;
    static mouse = {
        x: null,
        y: null,
        r: 50,
    };

    static init(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.canvas.width = 350;
        this.canvas.height = 200;
        // this.ctx.fillStyle = "grey";
        // this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    static handleMouse = (e) => {
        const rect = e.target.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
    };

    static resetMousePose = (e) => {
        this.mouse.x = 0;
        this.mouse.y = 0;
        this.mouse.r = 0;
    };

    static createMouseRadius = (e) => {
        this.mouse.r = 50;
    };

    static text(color, size, font, content, posX, posY) {
        this.textX = posX;
        this.textY = posY;
        this.ctx.fillStyle = color;
        this.ctx.font = `${size}px ${font}`;
        this.ctx.fillText(`${content}`, this.textX, this.textY);
    }
}
