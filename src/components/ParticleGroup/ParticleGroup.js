// "use client";

// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// const ParticleGroup = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     let camera, scene, renderer;
//     const v = new THREE.Vector2();
//     let r;

//     const init = () => {
//       renderer = new THREE.WebGLRenderer();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       renderer.setPixelRatio(window.devicePixelRatio);
//       mountRef.current.appendChild(renderer.domElement);

//       scene = new THREE.Scene();

//       camera = new THREE.PerspectiveCamera(
//         45,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//       );
//       camera.position.set(1, -1, 3);

//       const controls = new OrbitControls(camera, renderer.domElement);

//       window.addEventListener("resize", onWindowResize);
//       randomPoints();
//       animate();
//     };

//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     const randomPoints = () => {
//       const geometry = new THREE.BufferGeometry();
//       const positions = [];

//       for (let i = 0; i < 50000; i++) {
//         const phi = Math.random() * Math.PI * 2;
//         r = Math.pow(Math.random(), 1 / 6) + 0.2;

//         v.x = r * Math.cos(phi);
//         v.y = r * Math.sin(phi);

//         positions.push(v.x, v.y, 0);
//       }

//       geometry.setAttribute(
//         "position",
//         new THREE.Float32BufferAttribute(positions, 3)
//       );
//       const material = new THREE.PointsMaterial({
//         color: 0xffffff,
//         size: 0.001,
//       });
//       const particles = new THREE.Points(geometry, material);
//       scene.add(particles);
//     };

//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };

//     init();

//     return () => {
//       window.removeEventListener("resize", onWindowResize);
//       mountRef.current.removeChild(renderer.domElement);
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
// };

// export default ParticleGroup;

"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleGroup = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create particle geometry
    const particles = new THREE.BufferGeometry();
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      let theta = Math.random() * 2 * Math.PI;
      let phi = Math.acos(2 * Math.random() - 1);
      let radius = 2.5 + Math.random() * 1.1;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.015,
      transparent: true,
      opacity: 1,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.0005;
      particleSystem.rotation.x += 0.00025;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default ParticleGroup;
