const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set(0, 5, 10);
camera.fov = 50;
camera.updateProjectionMatrix();

const textureLoader = new THREE.TextureLoader();
const concreteTexture = textureLoader.load("assets/concrete.jpg");
const metalTexture = textureLoader.load("assets/metal.jpg");
const woodTexture = textureLoader.load("assets/wood.jpg");
const hammerTexture = textureLoader.load("assets/hammer.png");

const roofMaterial = new THREE.MeshStandardMaterial({ map: woodTexture });
const roofGeometry = new THREE.BoxGeometry(40, -10, 40); 
const roofMesh = new THREE.Mesh(roofGeometry, roofMaterial);
roofMesh.position.set(0, 10, 1); 
scene.add(roofMesh);

const wallMaterial = new THREE.MeshStandardMaterial({ map: concreteTexture });

const frontWallGeometry = new THREE.BoxGeometry(40, 15, 2);
const frontWallMesh = new THREE.Mesh(frontWallGeometry, wallMaterial);
frontWallMesh.position.set(0, 5, -20); // Positioning the front wall
scene.add(frontWallMesh);

const backWallGeometry = new THREE.BoxGeometry(40, 15, 2);
const backWallMesh = new THREE.Mesh(backWallGeometry, wallMaterial);
backWallMesh.position.set(0, 5, 20); // Positioning the back wall
scene.add(backWallMesh);

const leftWallGeometry = new THREE.BoxGeometry(2, 15, 40);
const leftWallMesh = new THREE.Mesh(leftWallGeometry, wallMaterial);
leftWallMesh.position.set(-20, 5, 1); // Positioning the left wall
scene.add(leftWallMesh);

const rightWallGeometry = new THREE.BoxGeometry(2, 15, 40);
const rightWallMesh = new THREE.Mesh(rightWallGeometry, wallMaterial);
rightWallMesh.position.set(20, 5, 1); // Positioning the right wall
scene.add(rightWallMesh);

const floorMaterial = new THREE.MeshStandardMaterial({ map: woodTexture });
const floorGeometry = new THREE.PlaneGeometry(40, 40);
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.rotation.x = -Math.PI / 2;
floorMesh.position.y = 0;
scene.add(floorMesh);

const shelfMaterial = new THREE.MeshStandardMaterial({ map: woodTexture });
const shelfGeometry = new THREE.BoxGeometry(20, 1, 6); 
const shelfMesh = new THREE.Mesh(shelfGeometry, shelfMaterial);
shelfMesh.position.set(0, 6, -15); 
scene.add(shelfMesh);

const chairMaterial = new THREE.MeshStandardMaterial({ map: woodTexture });

const tableGeometry = new THREE.BoxGeometry(15, 0.5, 5);
const tableMesh = new THREE.Mesh(tableGeometry, chairMaterial);
tableMesh.position.set(0, 3.5, -3); 
scene.add(tableMesh);

const legGeometry = new THREE.CylinderGeometry(0.3, 0.3, 7, 10);

const frontLeftLeg = new THREE.Mesh(legGeometry, chairMaterial);
frontLeftLeg.position.set(-7, 0, -1); 
scene.add(frontLeftLeg);

const frontRightLeg = new THREE.Mesh(legGeometry, chairMaterial);
frontRightLeg.position.set(-6, 0, -3);
scene.add(frontRightLeg);

const backLeftLeg = new THREE.Mesh(legGeometry, chairMaterial);
backLeftLeg.position.set(7, 0, -1);
scene.add(backLeftLeg);

const backRightLeg = new THREE.Mesh(legGeometry, chairMaterial);
backRightLeg.position.set(6, 0, -3);
scene.add(backRightLeg);

const cabinetMaterial = new THREE.MeshStandardMaterial({ map: metalTexture });
const cabinetGeometry = new THREE.BoxGeometry(3, 8, 5);
const cabinetMesh = new THREE.Mesh(cabinetGeometry, cabinetMaterial);
cabinetMesh.position.set(13, 3, -5);
scene.add(cabinetMesh);

const ambientLight = new THREE.AmbientLight("white", 0.2); 
scene.add(ambientLight)

const overheadLight = new THREE.PointLight(0xffffff, 1, 100);
overheadLight.position.set(0, 10, 0);
scene.add(overheadLight);

const spotlight = new THREE.SpotLight(0xffddaa, 2, 30, Math.PI / 6);
spotlight.angle = Math.PI;
spotlight.penumbra = 0.5; 
spotlight.position.set(5, 8, -10);
spotlight.target = backWallMesh;
spotlight.intensity = 2; 
spotlight.color.set(0xff0000); 
spotlight.distance = 50; 


scene.add(spotlight);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
