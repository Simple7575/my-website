import { GUI } from "dat.gui";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RBox } from "./rbClass.js";
import styles from "../../../style/skills.module.scss";

const cartGuiInit = (gui, ReactCard, renderer, containerSize) => {
    const meshColor = {
        color: ReactCard.material[4].color.getHex(),
        emissive: ReactCard.material[4].emissive.getHex(),
    };
    const CardFolder = gui.addFolder("Card");
    CardFolder.add(containerSize, "containerWidth", 100, 500)
        .name("CSize x")
        .onChange((value) => renderer.setSize(value, containerSize.containerHeight));
    CardFolder.add(containerSize, "containerHeight", 100, 500)
        .name("CSize y")
        .onChange((value) => renderer.setSize(containerSize.containerWidth, value));
    CardFolder.add(ReactCard.rotation, "x", -10, 10).name("rotate x");
    CardFolder.add(ReactCard.rotation, "y", -10, 10).name("rotate y");
    CardFolder.addColor(meshColor, "color")
        .name("Color")
        .onChange((value) => {
            ReactCard.material[0].color.set(value);
        });
    CardFolder.addColor(meshColor, "emissive")
        .name("Emissive")
        .onChange((value) => {
            ReactCard.material[4].emissive.set(value);
        });
    CardFolder.add(ReactCard.material[4], "opacity", 0, 1).name("Opacity");
    CardFolder.add(ReactCard.material[4], "transparent").name("Transparancy");
};

export default function RoundedBox({ children, logo, color }) {
    const canvasRef = useRef();

    useEffect(() => {
        // const gui = new GUI();

        // Container
        const container = canvasRef.current;
        const containerSize = {
            containerWidth: 100,
            containerHeight: 100,
        };

        // Scene
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color(0x707070);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(containerSize.containerWidth, containerSize.containerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        container.appendChild(renderer.domElement);

        // Camera
        const camera = new THREE.PerspectiveCamera(
            45,
            containerSize.containerWidth / containerSize.containerHeight,
            0.2,
            100
        );
        camera.position.z = 8.39;

        // Directional Light
        const dLightSettings = { intensity: 5, color: 0xffffff };
        const directionalLight1 = new THREE.DirectionalLight(
            dLightSettings.color,
            dLightSettings.intensity
        );
        const directionalLight2 = new THREE.DirectionalLight(
            dLightSettings.color,
            dLightSettings.intensity
        );
        const directionalLight3 = new THREE.DirectionalLight(
            dLightSettings.color,
            dLightSettings.intensity
        );
        const directionalLight4 = new THREE.DirectionalLight(
            dLightSettings.color,
            dLightSettings.intensity
        );
        directionalLight1.position.set(-5, -5, -10);
        directionalLight2.position.set(5, 5, 10);
        directionalLight3.position.set(5, 5, -10);
        directionalLight4.position.set(-5, -5, 10);
        scene.add(directionalLight1);
        scene.add(directionalLight2);
        scene.add(directionalLight3);
        scene.add(directionalLight4);

        // const dHelper = new THREE.DirectionalLightHelper(
        //     directionalLight2,
        //     1,
        //     new THREE.Color(0xa259ff)
        // );
        // const dHelper2 = new THREE.DirectionalLightHelper(
        //     directionalLight1,
        //     1,
        //     new THREE.Color(0xfffff)
        // );
        // const dHelper3 = new THREE.DirectionalLightHelper(
        //     directionalLight3,
        //     1,
        //     new THREE.Color(0xa259ff)
        // );
        // const dHelper4 = new THREE.DirectionalLightHelper(
        //     directionalLight4,
        //     1,
        //     new THREE.Color(0xfffff)
        // );
        // scene.add(dHelper);
        // scene.add(dHelper2);
        // scene.add(dHelper3);
        // scene.add(dHelper4);

        // AmbientLight
        const ambientLight = new THREE.AmbientLight(0xffffff, 1); // soft white light
        ambientLight.position.set(0, -5, 10);
        scene.add(ambientLight);

        // Rounded box
        // const rb = new RBox(2, 2, 0.5, 10, 0.2).init(0xbec5da, mySvg);
        // scene.add(rb);
        const size = 3;
        const ReactCard = new RBox(size, size, size, 10, 0.5, renderer).init(color, logo);
        scene.add(ReactCard);
        camera.lookAt(ReactCard);

        // Card-Gui
        // cartGuiInit(gui, ReactCard, renderer, containerSize);

        // Light-Gui
        // const lights = [directionalLight1, directionalLight2, directionalLight3, directionalLight4];
        // const LightFolder = gui.addFolder("Light");
        // LightFolder.add(dLightSettings, "intensity", 0, 10)
        //     .name("Intensity")
        //     .onChange((value) => {
        //         lights.forEach((light) => {
        //             light.intensity = value;
        //         });
        //     });

        // Camera-Gui
        // const CameraFolder = gui.addFolder("Camera");
        // CameraFolder.add(camera.position, "x", -10, 10, 0.001).name("Camera X");
        // CameraFolder.add(camera.position, "y", -10, 10, 0.001).name("Camera Y");
        // CameraFolder.add(camera.position, "z", -10, 20, 0.001).name("Camera Z");
        // CameraFolder.add(camera.rotation, "x", -10, 10, 0.001).name("Camera R X");
        // CameraFolder.add(camera.rotation, "y", -10, 10, 0.001).name("Camera R Y");

        console.log();
        // Animation
        let animationID;
        let angle = 0.004;
        const rotationX = Math.floor(Math.random() * 9 + 1) * 0.001;
        const rotationY = Math.floor(Math.random() * 9 + 1) * 0.001;
        const animate = () => {
            renderer.render(scene, camera);

            // if (Number(ReactCard.rotation.x.toFixed(2)) === 0.27) {
            //     angle = -0.004;
            // } else if (Number(ReactCard.rotation.x.toFixed(2)) === -0.27) {
            //     angle = 0.004;
            // }
            // ReactCard.rotation.x += angle;

            ReactCard.rotation.x += rotationX;
            ReactCard.rotation.y += rotationY;

            animationID = requestAnimationFrame(animate);
        };
        animate();

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 5;

        return () => {
            container.removeChild(renderer.domElement);
            // gui.destroy();

            // window.removeEventListener(window, resizeFunc);
            cancelAnimationFrame(animationID);
        };
    }, []);

    return (
        <div className={`${styles.skills__icons} `}>
            <div ref={canvasRef}></div>
            <span>{children}</span>
        </div>
    );
}
