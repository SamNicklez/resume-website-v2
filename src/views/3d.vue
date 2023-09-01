<template>
    <div class="page-container">
      <div ref="container" class="torus-container"></div>
      <div class="top-text">ROTATING DONUT</div>
      <div class="bottom-text">BOTTOM TEXT</div>
    </div>
  </template>
  
  <script>
  import * as THREE from "three";
  
  export default {
    name: "RotatingTorus",
    mounted() {
      this.initScene();
      this.initTorus();
      this.initLight();
      this.initEnvironment();
      this.animate();
  
      window.addEventListener("resize", this.handleWindowResize);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.handleWindowResize);
      cancelAnimationFrame(this.animate);
    },
    methods: {
      // Initialize the 3D scene
      initScene() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
  
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.container.appendChild(this.renderer.domElement);
  
        this.camera.position.z = 5;
      },
      // Initialize the torus mesh
      initTorus() {
        this.torusRadius = 1.5;
        this.tubeRadius = 0.35;
        this.updateTorusGeometry();
  
        const material = new THREE.MeshPhysicalMaterial({
          color: this.getRandomColor(),
          roughness: 0.4,
          metalness: 0.6,
          clearcoat: 1.0,
          clearcoatRoughness: 0.3,
          reflectivity: 0.8,
        });
        this.torus = new THREE.Mesh(this.geometry, material);
        this.scene.add(this.torus);
      },
      // Initialize lighting
      initLight() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);
  
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1);
        this.scene.add(directionalLight);
      },
      // Initialize environment map
      initEnvironment() {
        const loader = new THREE.CubeTextureLoader();
        const environmentMap = loader.load([
          "path_to_environment_map/px.jpg", // Replace with actual paths
          "path_to_environment_map/nx.jpg",
          "path_to_environment_map/py.jpg",
          "path_to_environment_map/ny.jpg",
          "path_to_environment_map/pz.jpg",
          "path_to_environment_map/nz.jpg",
        ]);
        this.scene.background = environmentMap;
      },
      // Update torus geometry
      updateTorusGeometry() {
        this.geometry = new THREE.TorusGeometry(
          this.torusRadius,
          this.tubeRadius,
          128,
          128
        );
      },
      // Animation loop
      animate() {
        requestAnimationFrame(this.animate);
        this.torus.rotation.x += 0.020;
        this.torus.rotation.y += 0.020;
        this.renderer.render(this.scene, this.camera);
      },
      // Handle window resize
      handleWindowResize() {
        const newAspectRatio = window.innerWidth / window.innerHeight;
        this.camera.aspect = newAspectRatio;
        this.camera.updateProjectionMatrix();
  
        const minDimension = Math.min(window.innerWidth, window.innerHeight);
        this.torusRadius = minDimension * 0.3;
        this.updateTorusGeometry();
  
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      },
      // Get a random color
      getRandomColor() {
        const colors = [
          0xff5733, 0xff7518, 0xffa933, 0xffc64c, 0xffdb66,
          0xf5f749, 0xccf533, 0xaaff33, 0x80ff33, 0x4cff33,
          0x33ff50, 0x33ff7f, 0x33ffad, 0x33ffc4, 0x33ffdb,
        ];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      },
    },
  };
  </script>
  
  <style scoped>
  .page-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  
  .torus-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .top-text,
  .bottom-text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-weight: bold;
    color: white;
  }
  
  .top-text {
    top: 50px;
    font-size: 24px;
  }
  
  .bottom-text {
    bottom: 50px;
    font-size: 18px;
  }
  </style>
  