let cameraPan = 0;
let wwidth = window.innerWidth;
//CANVAS - SCENE

let renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas'),
  antialias: true,
  setPixelRatio: (window.devicePixelRatio),
});

renderer.setSize(wwidth, window.innerHeight);
renderer.setClearColor(0x6e727a);
var camera = new THREE.PerspectiveCamera(35,
  window.innerWidth / window.innerHeight, 0.1, 3000);
var scene = new THREE.Scene();
camera.position.set(0, 40, 200);


// LIGHTS
var light = new THREE.AmbientLight(0xffffff, 0.2);
//scene.add(light);

// var light = new THREE.PointLight(0xc9cbff, 1);
// scene.add(light);
//MESHES
//background
var cloudTex = new THREE.TextureLoader().load("images/cloud.png");
var geometry = new THREE.PlaneBufferGeometry(100, 35);
var material = new THREE.MeshBasicMaterial({
  map: cloudTex,
  transparent: true,
});
var cloud = new THREE.Mesh(geometry, material);
cloud.position.set(100, 60, 100);

var lionTex = new THREE.TextureLoader().load("images/coverlion.png");

var geometry2 = new THREE.PlaneBufferGeometry(114, 66);
var material2 = new THREE.MeshBasicMaterial({
  map: lionTex,
  transparent: true,
});
var lion = new THREE.Mesh(geometry2, material2);
lion.position.set(0, -30, 0);

//OrbitControls
// var controls = new THREE.OrbitControls(camera);
// camera.position.set(0, 0, 400);
// controls.update();
//RENDER
scene.add(cloud);
scene.add(lion);
renderer.render(scene, camera);

//get mousemove
window.addEventListener('mousemove', getX);
let mouseX = 0;

function getX(e) {
  mouseX = e.clientX;

}
//tilt

requestAnimationFrame(render);

function render() {
  camera.lookAt(0, 0, -50);
  scrollY = window.pageYOffset;
  renderer.render(scene, camera);
  requestAnimationFrame(render);

  if (mouseX < wwidth / 2 && cameraPan > -0.1) {
    cameraPan -= 0.002
  };
  if (mouseX > wwidth / 2 && cameraPan < 0.1) {
    cameraPan += 0.002
  };

  lion.position.y = scrollY / 30;
  cloud.position.x = 100 + scrollY / 30;
  camera.position.x = Math.sin(cameraPan) * 400;
  camera.position.z = Math.cos(cameraPan) * 400;
  //controls.update();
}

export default renderer;
