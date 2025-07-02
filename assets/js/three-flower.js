// 3D Flower Animation
function init3DFlower() {
    const container = document.getElementById('flower-3d-container');
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create flower
    const flower = new THREE.Group();
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0xff69b4,
        transparent: true,
        opacity: 0.6
    });

    // Add petals
    for (let i = 0; i < 8; i++) {
        const petal = new THREE.Mesh(geometry, material);
        petal.scale.set(0.5, 1, 0.2);
        petal.position.x = Math.sin(i * Math.PI/4) * 2;
        petal.position.y = Math.cos(i * Math.PI/4) * 2;
        flower.add(petal);
    }

    // Add center
    const center = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0xffff00 })
    );
    flower.add(center);
    scene.add(flower);
    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        flower.rotation.x += 0.005;
        flower.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Initialize when page loads
window.addEventListener('load', init3DFlower);
