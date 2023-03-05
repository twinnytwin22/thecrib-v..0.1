"use client";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { Stage, Environment, OrbitControls } from "@react-three/drei";
function CribNFT3D() {
  const glbURL =
    "https://arweave.net/4RPm5kqpTObfPB2ddV2VjDroL1FKSgMn_iiQ3dc0y88";
  const glb = useLoader(GLTFLoader, `${glbURL}`);

  return (
    <mesh>
      <primitive object={glb} scale={[0.0003, 0.0003, 0.0003]} />
    </mesh>
  );
}

export default function CribNFTScene() {
  return (
    <div className="flex w-full max-w-screen lg:h-96 md:h-64">
      <Canvas
        camera={{ fov: 5, position: [0, 5, 0] }}
        resize={{ scroll: false }}
        style={{ width: "100%", padding: 30, overflow: "vsible" }}
      >
        <Stage>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <CribNFT3D />
          <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 3}
            enableZoom={false}
          />
          <Environment preset="city" />
        </Stage>
      </Canvas>
    </div>
  );
}
