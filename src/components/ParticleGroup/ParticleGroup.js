"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleGroup = ({
  height = window.innerHeight,
  width = window.innerWidth,
}) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      // window.innerWidth / 600,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    // renderer.setSize(window.innerWidth, 600);
    mountRef.current.appendChild(renderer.domElement);

    // Create particle geometry
    const particles = new THREE.BufferGeometry();
    const particleCount = 4500;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      let theta = Math.random() * 2 * Math.PI;
      let phi = Math.acos(2 * Math.random() - 1);
      // let radius = 2.5 + Math.random() * 0.8;

      let rMin = 3; // Defines the size of the gap
      let rMax = 3.3; // Outer boundary (2.5 + 0.8)
      let radius = Math.sqrt(
        Math.random() * (rMax * rMax - rMin * rMin) + rMin * rMin
      );

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
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

export default ParticleGroup;
