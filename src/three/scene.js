import * as THREE from "three";

let cinematicScrollProgress = 0;

export function setCinematicScroll(progress) {
  cinematicScrollProgress = Math.max(
    0,
    Math.min(1, progress)
  );
}

export function createScene() {

  // =========================
  // SCENE
  // =========================

  const scene = new THREE.Scene();

  // =========================
  // CAMERA
  // =========================

  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.set(0, 0, 6);

  // =========================
  // RENDERER
  // =========================

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
  );

  renderer.domElement.style.position = "fixed";
  renderer.domElement.style.top = "0";
  renderer.domElement.style.left = "0";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";

  // Keep the 3D object behind the website content
  renderer.domElement.style.zIndex = "-1";
  renderer.domElement.style.pointerEvents = "none";

  document.body.appendChild(renderer.domElement);

  // =========================
  // LIGHTING
  // =========================

  const ambientLight = new THREE.AmbientLight(
    0xffffff,
    1.5
  );

  scene.add(ambientLight);

  const directionalLight =
    new THREE.DirectionalLight(
      0xffffff,
      2.5
    );

  directionalLight.position.set(4, 5, 6);

  scene.add(directionalLight);

  const blueLight = new THREE.PointLight(
    0x2563eb,
    4,
    12
  );

  blueLight.position.set(4, 2, 4);

  scene.add(blueLight);

  const purpleLight = new THREE.PointLight(
    0x7c3aed,
    3,
    10
  );

  purpleLight.position.set(-3, -2, 3);

  scene.add(purpleLight);

  // =========================
  // CUBE GROUP
  // =========================

  const cubeGroup = new THREE.Group();

  // =========================
  // CUBE GEOMETRY
  // =========================

  const geometry = new THREE.BoxGeometry(
    1.6,
    1.6,
    1.6
  );

  // =========================
  // CUBE MATERIAL
  // =========================

  const material =
    new THREE.MeshPhysicalMaterial({
      color: 0x4f46e5,
      metalness: 0.35,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.15,
      transparent: true,
      opacity: 0.95
    });

  // =========================
  // CUBE
  // =========================

  const cube = new THREE.Mesh(
    geometry,
    material
  );

  cubeGroup.add(cube);

  // =========================
  // CUBE EDGES
  // =========================

  const edgesGeometry =
    new THREE.EdgesGeometry(geometry);

  const edgesMaterial =
    new THREE.LineBasicMaterial({
      color: 0x9f7aea,
      transparent: true,
      opacity: 0.75
    });

  const edges = new THREE.LineSegments(
    edgesGeometry,
    edgesMaterial
  );

  cubeGroup.add(edges);

  // =========================
  // CENTER POSITION
  // =========================

  cubeGroup.position.set(
    0,
    0,
    -0.5
  );

  cubeGroup.scale.set(
    0.7,
    0.7,
    0.7
  );

  cubeGroup.rotation.set(
    -0.15,
    0.35,
    0
  );

  scene.add(cubeGroup);

  // =========================
  // MOUSE INTERACTION
  // =========================

  const mouse = {
    x: 0,
    y: 0
  };

  const targetRotation = {
    x: -0.15,
    y: 0.35
  };

  window.addEventListener(
    "mousemove",
    (event) => {

      mouse.x =
        (event.clientX /
          window.innerWidth) *
        2 - 1;

      mouse.y =
        -(event.clientY /
          window.innerHeight) *
        2 + 1;

      targetRotation.x =
        -0.15 + mouse.y * 0.12;

      targetRotation.y =
        0.35 + mouse.x * 0.18;
    }
  );

  // =========================
  // ANIMATION
  // =========================

  function animate() {

    requestAnimationFrame(animate);

    // Cube rotation
    cube.rotation.x += 0.003;
    cube.rotation.y += 0.006;

    // Smooth mouse movement
    cubeGroup.rotation.x +=
      (targetRotation.x -
        cubeGroup.rotation.x) *
      0.025;

    cubeGroup.rotation.y +=
      (targetRotation.y -
        cubeGroup.rotation.y) *
      0.025;

    // Floating effect
    const floatingY =
      Math.sin(Date.now() * 0.001) * 0.06;

    // =========================
    // CINEMATIC SCROLL MOTION
    // =========================

    const scrollRotation =
      cinematicScrollProgress * 0.35;

    cubeGroup.rotation.z =
      scrollRotation;

    cubeGroup.position.y =
      floatingY +
      cinematicScrollProgress * 0.25;

    // Subtle depth movement
    cubeGroup.position.z =
      -0.5 +
      cinematicScrollProgress * 0.15;

    renderer.render(
      scene,
      camera
    );
  }

  animate();

  // =========================
  // RESPONSIVE
  // =========================

  function handleResize() {

    const width =
      window.innerWidth;

    const height =
      window.innerHeight;

    camera.aspect =
      width / height;

    camera.updateProjectionMatrix();

    renderer.setSize(
      width,
      height
    );

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    // Desktop
    if (width > 1100) {

      cubeGroup.position.set(
        0,
        0,
        -0.5
      );

      cubeGroup.scale.set(
        0.7,
        0.7,
        0.7
      );

    }

    // Tablet
    else if (width > 700) {

      cubeGroup.position.set(
        0,
        0,
        -0.5
      );

      cubeGroup.scale.set(
        0.6,
        0.6,
        0.6
      );

    }

    // Mobile
    else {

      cubeGroup.position.set(
        0,
        -0.8,
        -0.5
      );

      cubeGroup.scale.set(
        0.45,
        0.45,
        0.45
      );

    }
  }

  window.addEventListener(
    "resize",
    handleResize
  );

  handleResize();
}