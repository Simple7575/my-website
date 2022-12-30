import { Canvas } from "./Canvas.js";

export class Particle extends Canvas {
    constructor(x, y) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        super();
        this.x = x;
        this.y = y;
        this.size = 2;
        this.baseX = x;
        this.baseY = y;
        this.density = Math.random() * 30 + 1;
        this.color = `rgb(${r}, ${g}, ${b})`;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update(mouse) {
        // console.log(mouse);
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.r;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.r) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                const dx = this.x - this.baseX;
                this.x -= dx / 10;
            }

            if (this.y !== this.baseY) {
                const dy = this.y - this.baseY;
                this.y -= dy / 10;
            }
        }
    }

    static particlesArr;

    static creation(textCordinates) {
        const gap = 3;
        this.particlesArr = [];
        for (let i = 0; i < textCordinates.height; i += gap) {
            for (let j = 0; j < textCordinates.width; j += gap) {
                // prettier-ignore
                if (textCordinates.data[(i * 4 * textCordinates.width) + (j * 4) + 3] > 128) {
                        let positionX = j + this.adjustX;
                        let positionY = i + this.adjustY;
                        this.particlesArr.push(new Particle(positionX, positionY));
                    }
            }
        }
    }

    static animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.particlesArr.length; i++) {
            this.particlesArr[i].draw(this.ctx);
            this.particlesArr[i].update(this.mouse);
        }
    }
}
