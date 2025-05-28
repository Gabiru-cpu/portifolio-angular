import { Component, AfterViewInit, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { LucideAngularModule, RefreshCcw } from 'lucide-angular';
import { Subscription } from 'rxjs';
import * as THREE from 'three';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js';
import { AnimatorService } from '../../services/animator.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  readonly RefreshCcw = RefreshCcw;

  @ViewChild('rendererContainer', { static: false }) rendererContainer!: ElementRef;

  private model: THREE.Object3D | null = null;
  private isGirarAtivo = false;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  private mouseX = 0;
  private mouseY = 0;

  private subscription!: Subscription;

  constructor(private animatorService: AnimatorService) {}



  ngAfterViewInit(): void {
    this.init3D();
    this.addMouseListeners();
  }

  ngOnInit() {
    this.subscription = this.animatorService.toggleGirar$.subscribe(() => {
      this.toggleGirar();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleGirar(): void {
    this.isGirarAtivo = !this.isGirarAtivo;
  }

  init3D(): void {
    // === CENA ===
    this.scene = new THREE.Scene();

    // === CÂMERA ===
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.rendererContainer.nativeElement.clientWidth / this.rendererContainer.nativeElement.clientHeight,
      0.1,
      1000
    );
    this.camera.position.z = 2;

    // === RENDERER ===
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(
      this.rendererContainer.nativeElement.clientWidth,
      this.rendererContainer.nativeElement.clientHeight
    );
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // === LUZES ===
    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffaa55, 1.5, 3);
    pointLight.position.set(-3, 1, 2);
    this.scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    this.scene.add(ambientLight);



    // === CARREGAR MODELO DAE ===
    const loader = new ColladaLoader();
    loader.load(
      'assets/models/magodev.dae',
      (collada) => {
        this.model = collada.scene;
        this.model.scale.set(0.5, 0.5, 0.5);
        this.model.position.set(0, 0, 0);

        this.scene.add(this.model);

        this.animate();
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% carregado');
      },
      (error) => {
        console.error('Erro ao carregar DAE:', error);
      }
    );
  }

  addMouseListeners(): void {
    document.addEventListener('mousemove', (event) => {
      this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    if (this.model) {
      if (this.isGirarAtivo) {
        this.model.scale.lerp(new THREE.Vector3(0.5, 0.5, 0.5), 0.05);
        this.model.position.lerp(new THREE.Vector3(-1.5, 0, 0), 0.05);
        this.model.rotation.y += 0.05;
      } else {
        this.model.scale.lerp(new THREE.Vector3(0.5, 0.5, 0.5), 0.05);
        this.model.position.lerp(new THREE.Vector3(0, 0, 0), 0.05);

        this.model.rotation.x += (this.mouseY * 0.5 - this.model.rotation.x) * 0.05;
        this.model.rotation.y += (this.mouseX * 0.5 - this.model.rotation.y) * 0.05;
      }
    }

    this.renderer.render(this.scene, this.camera);
  };
}
