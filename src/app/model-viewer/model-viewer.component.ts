import { Component, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import * as THREE from 'three';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


@Component({
  selector: 'app-model-viewer',
  standalone: true,
  imports: [],
  templateUrl: './model-viewer.component.html',
  styleUrls:[ './model-viewer.component.scss']
})
export class ModelViewerComponent implements AfterViewInit {
  @ViewChild('rendererContainer', { static: true }) container!: ElementRef;
  @Input() modelFile: string = ''
  private controls!: OrbitControls;

  ngAfterViewInit(): void {
    this.initThreeJS();
  }

  initThreeJS() {
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, this.container.nativeElement.clientWidth / 500, 0.1, 1000);
    camera.position.set(0, 0, 200);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(this.container.nativeElement.clientWidth, 500);
    this.container.nativeElement.appendChild(renderer.domElement);

        // ✅ Add OrbitControls for rotation
        this.controls = new OrbitControls(camera, renderer.domElement);
        this.controls.enableDamping = true; // Smooth rotation
        this.controls.dampingFactor = 0.05;
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 10;
        this.controls.maxDistance = 500;
        this.controls.enableRotate = true;
        this.controls.enableZoom = true;

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10).normalize();
    scene.add(light);

    // Load STL File
    const loader = new STLLoader();
    loader.load(this.modelFile, (geometry) => {
      const material = new THREE.MeshPhongMaterial({ color: 0x555555, specular: 0x111111, shininess: 200 });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      this.controls.update(); 
      renderer.render(scene, camera);
    };
    animate();
  }
}
 