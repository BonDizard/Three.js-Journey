/**
 * Author: Bharath Kumar S
 * Date Created: 2025-05-25
 * Title: Local Server Setup
 * Description: Setup file can be used as a starter project for three.js
 */
import "./style.css";
import * as THREE from "three";

// Get the canvas element from the HTML
const canvas = document.querySelector(".webgl");

// Define a fixed size for the render viewport
const size = {
  height: 400,
  width: 600,
};

// Create a new Three.js scene
const scene = new THREE.Scene();

// Create a cube: geometry (shape) and material (appearance)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);

// Add the cube mesh to the scene so it's visible
scene.add(mesh);

// Set up a perspective camera with field of view and aspect ratio
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3; // Move the camera back so we can see the cube

scene.add(camera); // Add the camera to the scene

// Create a WebGL renderer and attach it to our canvas
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

// Set the size of the renderer and render the scene from the camera's perspective
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
