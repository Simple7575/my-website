import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import { useRef, useEffect } from "react";
// import { GUI } from "dat.gui";

import styles from "../../style/sphere.module.scss";

// Textures
import earthTexture from "../../images/earthTexture.jpg";
import moonTexture from "../../images/moonTexture.jpg";
import cloudsTexture from "../../images/cloudsTexture.png";

// Shaders
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

class SphereClass {
    constructor(radius, WSegments, HSegments, color) {
        this.radius = radius;
        this.WSegments = WSegments;
        this.HSegments = HSegments;
        this.color = color;
    }

    create(texture) {
        // Texture Loader
        const textureLoader = new THREE.TextureLoader();

        const geometry = new THREE.SphereGeometry(this.radius, this.WSegments, this.HSegments);
        let material;
        if (texture) {
            material = new THREE.MeshStandardMaterial({ map: textureLoader.load(texture) });
        } else {
            material = new THREE.MeshStandardMaterial({ color: this.color });
        }
        const sphere = new THREE.Mesh(geometry, material);
        sphere.castShadow = true;
        sphere.receiveShadow = true;
        return sphere;
    }

    clouds(texture) {
        const geometry = new THREE.SphereGeometry(this.radius, this.WSegments, this.HSegments);
        const material = new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load(texture),
            transparent: true,
            opacity: 0.5,
            color: 0xffffff,
        });
        const cloud = new THREE.Mesh(geometry, material);
        cloud.receiveShadow = true;
        cloud.castShadow = true;
        return cloud;
    }
}

export default function Sphere() {
    const canvasRef = useRef();

    useEffect(() => {
        // Container
        const container = canvasRef.current;
        let containerWidth = container.offsetWidth - 80;
        let containerHeight = container.offsetHeight;

        // Scene
        const scene = new THREE.Scene();

        // Renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(containerWidth, containerHeight);
        renderer.domElement.className = styles.canvas;
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);

        // Camera
        const camera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 0.1, 100);
        camera.position.z = 10;
        camera.position.y = 5;

        // Light
        const light = new THREE.PointLight(0xffffff, 3, 100, 7);
        light.position.set(-5, 2, 10);
        light.castShadow = true;
        scene.add(light);

        // Earth
        const earth = new SphereClass(2, 64, 32, 0xffff00).create(earthTexture);
        earth.rotation.z += -0.3;
        scene.add(earth);

        // Atmosphere
        // const atmosphere = new THREE.Mesh(
        //     new THREE.SphereGeometry(2.2, 64, 32),
        //     new THREE.ShaderMaterial({
        //         vertexShader,
        //         fragmentShader,
        //     })
        // );
        // scene.add(atmosphere);
        // console.log(shaders.vertexShader);

        // Clouds
        const clouds = new SphereClass(2.1, 64, 32, 0xffffff).clouds(cloudsTexture);
        scene.add(clouds);

        // Moon
        const moonObj = new THREE.Object3D();
        const moon = new SphereClass(0.2, 64, 32, 0xbb0000).create(moonTexture);
        moonObj.add(moon);
        scene.add(moonObj);

        moon.position.set(-2, 1, 5);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 5;

        // Animation
        let animationID;
        const animate = () => {
            animationID = requestAnimationFrame(animate);
            // earth.rotation.x += 0.01;
            earth.rotation.y += 0.002;
            clouds.rotation.x -= 0.002;
            clouds.rotation.y += 0.001;
            moonObj.rotation.y += 0.004;
            renderer.render(scene, camera);
        };
        animate();

        // Resizing
        const resizeFunc = (e) => {
            containerWidth = container.offsetWidth - 80;
            camera.aspect = containerWidth / containerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(containerWidth, containerHeight);
        };
        window.addEventListener("resize", resizeFunc);

        // Gsap
        const tl = gsap.timeline().from(moon.position, {
            y: 1,
            repeat: -1,
            yoyo: true,
            duration: 6,
            ease: "back.inOut(1.7)",
        });

        // Gui
        // const gui = new GUI();
        // const earthFolder = gui.addFolder("Earth");
        // earthFolder.add(earth.rotation, "x", 0, Math.PI * 2);

        return () => {
            container.removeChild(renderer.domElement);
            window.removeEventListener(window, resizeFunc);
            cancelAnimationFrame(animationID);
        };
    }, []);

    return (
        <>
            <div ref={canvasRef} className={styles.container}>
                {/* Sphere */}
            </div>
        </>
    );
}
