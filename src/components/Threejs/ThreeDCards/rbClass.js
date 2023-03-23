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
            metalness: 0.9,
            depthTest: true,
            depthWrite: true,
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
            new THREE.MeshBasicMaterial({
                map: textureLoader.load(texture),
                transparent: true,
                side: THREE.DoubleSide,
            }),
            // new THREE.MeshStandardMaterial({
            //     depthTest: false,
            //     map: textureLoader.load(texture),
            //     emissive: color,
            //     emissiveIntensity: 0.5,
            //     // transparent: true,
            //     roughness: 0,
            //     // color,
            //     side: THREE.FrontSide,
            //     blending: THREE.AdditiveBlending,
            // }),
            meshMaterial,
            // new THREE.MeshBasicMaterial({
            //     map: textureLoader.load(texture),
            //     transparent: true,
            //     side: THREE.DoubleSide,
            // }),
        ];
        const roundedBox = new THREE.Mesh(geometry, material);
        return roundedBox;
    }
}
