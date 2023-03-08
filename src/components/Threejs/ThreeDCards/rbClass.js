import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import * as THREE from "three";

export class RBox {
    constructor(width, height, depth, segments, radius, renderer) {
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.segments = segments;
        this.radius = radius;
        this.renderer = renderer;
    }

    init(color, texture) {
        const meshMaterial = new THREE.MeshStandardMaterial({
            roughness: 0,
            color,
            side: THREE.DoubleSide,
            emissive: 0x000000,
            metalness: 0.9,
        });
        const textureLoader = new THREE.TextureLoader();
        const geometry = new RoundedBoxGeometry(
            this.height,
            this.width,
            this.depth,
            this.segments,
            this.radius
        );
        const material = [
            meshMaterial,
            meshMaterial,
            meshMaterial,
            meshMaterial,
            new THREE.MeshStandardMaterial({
                roughness: 0,
                depthTest: false,
                map: textureLoader.load(texture),
                alphaMap: textureLoader.load(texture),
                transparent: true,
                // opacity: 0.5,
                // emissive: new THREE.Color(color),
                // color,
                side: THREE.FrontSide,
            }),
            meshMaterial,

            // new THREE.MeshStandardMaterial({
            //     roughness: 0.1,
            //     color,
            //     side: THREE.DoubleSide,
            //     depthTest: false,
            // }),
        ];
        const roundedBox = new THREE.Mesh(geometry, material);
        return roundedBox;
    }
}
