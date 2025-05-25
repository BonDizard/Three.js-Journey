/**
 * Author: Bharath Kumar S
 * Date Created: 2025-05-25
 * Title: Playing with Transforms
 * Description: Position, Rotation, Scale, Groups and AxisHelper
 */
import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector(".webgl");

const size = {
  height: 400,
  width: 600,
};

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);

//==============================Position===========================
mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 1;

mesh.position.normalize(); //will take the mesh where ever it may be and make the length to one
console.log(mesh.position.length());

mesh.position.set(0.7, -0.6, 1); //other way to change all three at once
console.log(mesh.position.length()); //distance between centre of the screen and the object
//==============================Position===========================

//==============================Scale===========================
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5);
//==============================Scale===========================

//==============================Rotation===========================
mesh.rotation.reorder("YXZ");
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.3;
//==============================Rotation===========================
scene.add(mesh);

//==============================Group===========================
const group = new THREE.Group();
group.position.y = 2; //can change the group pos add everything else in group will be changed
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: 0x0000ff,
  })
);
group.add(cube1); //add in group

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: 0xff0000,
  })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: 0x00ff00,
  })
);
cube3.position.x = 2;
group.add(cube3);
//==============================Group===========================

//Axis Helper
const axisHelper = new THREE.AxesHelper(10); //for to see a gizmo for knowing the axis - 10 is the size
scene.add(axisHelper);

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
scene.add(camera);
console.log(mesh.position.distanceTo(camera.position)); //distance between mesh and the camera

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
