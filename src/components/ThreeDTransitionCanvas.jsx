import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Neon Particle Field
function CyberParticles({ count = 100, color = '#00f0ff' }) {
  const mesh = useRef();
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 30;
      const speed = 0.05 + Math.random() * 0.1;
      temp.push({ x, y, z, speed, originalZ: z });
    }
    return temp;
  }, [count]);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    particles.forEach((p, i) => {
      p.z += p.speed * 15 * delta;
      if (p.z > 10) p.z = -20;
      
      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.setScalar(0.08);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.5, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </instancedMesh>
  );
}

// Glowing Grid Tunnel Floor
function CyberGrid({ color = '#b026ff' }) {
  const gridRef = useRef();

  useFrame((state, delta) => {
    if (gridRef.current) {
      gridRef.current.position.z += delta * 4;
      if (gridRef.current.position.z > 2) gridRef.current.position.z = 0;
    }
  });

  return (
    <group ref={gridRef} position={[0, -3, 0]} rotation={[-Math.PI / 2.5, 0, 0]}>
      <gridHelper args={[60, 40, color, color]} />
    </group>
  );
}

export default function ThreeDTransitionCanvas({ activeColor = '#00f0ff', isAnimating = false }) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGLError, setHasWebGLError] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Kung may WebGL issue sa extension o device, huwag nang i-render ang 3D canvas
  if (prefersReducedMotion || !isAnimating || hasWebGLError) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 99,
      opacity: isAnimating ? 0.85 : 0,
      transition: 'opacity 0.3s ease-in-out'
    }}>
      <Canvas 
        camera={{ position: [0, 0, isMobile ? 12 : 8], fov: isMobile ? 75 : 60 }} 
        gl={{ powerPreference: 'default', antialias: false, failIfMajorPerformanceCaveat: false }} 
        style={{ pointerEvents: 'none', width: '100%', height: '100%' }}
        onCreated={({ gl }) => {
          // Verify if WebGL context was created properly
          if (!gl) setHasWebGLError(true);
        }}
        onError={() => setHasWebGLError(true)}
      >
        <ambientLight intensity={0.5} />
        <CyberParticles count={isMobile ? 50 : 150} color={activeColor} />
        <CyberGrid color={activeColor} />
      </Canvas>
    </div>
  );
}