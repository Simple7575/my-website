import { useEffect, useRef } from "react";
import { Canvas } from "./Canvas.js";
import { Particle } from "./Particle.js";

export default function TextParticles() {
    const canvasRef = useRef();
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        Canvas.init(canvas, ctx);
        Canvas.text("white", 50, "Ubuntu", "About me:", 0, 50);

        const textCordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
        Particle.creation(textCordinates);

        function animate() {
            Particle.animate();
            requestAnimationFrame(animate);
        }
        animate();

        canvas.addEventListener("mouseout", Canvas.resetMousePose);
        canvas.addEventListener("mouseover", Canvas.createMouseRadius);

        return () => {
            canvas.removeEventListener("mouseout", Canvas.resetMousePose);
            canvas.removeEventListener("mouseover", Canvas.createMouseRadius);
        };
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} onMouseMove={Canvas.handleMouse}></canvas>
        </div>
    );
}
