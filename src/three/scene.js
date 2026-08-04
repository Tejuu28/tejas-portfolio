import * as THREE from "three";

export function createScene() {
  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.z = 5;

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Canvas style
  renderer.domElement.style.position = "fixed";
  renderer.domElement.style.top = "0";
  renderer.domElement.style.left = "0";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.zIndex = "-1";

  document.body.appendChild(renderer.domElement);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0x00e5ff, 2);
  directionalLight.position.set(3, 3, 5);
  scene.add(directionalLight);

  // Geometry
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);

// Material
const material = new THREE.MeshPhysicalMaterial({
  color: 0x4f46e5,
  metalness: 0.2,
  roughness: 0,
  transmission: 1,
  transparent: true,
  opacity: 0.9,
  thickness: 1,
});
// Mesh
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

  function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.005;
  cube.rotation.y += 0.008;

  renderer.render(scene, camera);
}

  animate();

  // Responsive
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}