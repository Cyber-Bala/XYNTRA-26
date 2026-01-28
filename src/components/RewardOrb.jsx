import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function RewardOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} />

      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#7f5cff"
            distort={0.4}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Float>
    </Canvas>
  );
}
