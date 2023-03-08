import * as THREE from "three";

export class SphereClass {
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
