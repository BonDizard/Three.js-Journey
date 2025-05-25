/**
 * Author: Bharath Kumar S
 * Date Created: 2025-05-25
 * Title: Animate Object
 * Description: Animating object with bare-bones and GSAP library
 */
import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
const canvas = document.querySelector(".webgl");

const size = {
  height: 400,
  width: 600,
};

const scene = new THREE.Scene();

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);

scene.add(mesh);

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(size.width, size.height);

let previousTime = Date.now();
const clock = new THREE.Clock();
const tick = () => {
  // const currentTime = Date.now();
  // const deltaTime = currentTime - previousTime;
  // previousTime = currentTime;

  // mesh.rotation.y += 0.001 * deltaTime;
  const elapsedTime = clock.getElapsedTime();
  mesh.rotation.y = elapsedTime;
  mesh.position.y = Math.sin(elapsedTime);
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 3, x: 0 });

tick();
