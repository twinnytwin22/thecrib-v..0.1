'use client'
import { Canvas } from "@react-three/fiber";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { Stage, Environment, OrbitControls } from "@react-three/drei";
function Crib3D() {
    
    const materials = useLoader(MTLLoader, "/assets/model/trippycribrevise.mtl");
    const obj = useLoader(OBJLoader, "/assets/model/trippycribrevise.obj", (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    });
  
    return (
    <mesh>
      <primitive object={obj}  scale={[0.00045, 0.00045, 0.00045]} />
    </mesh>)
   ;
  };
  
export default function CribScene() {
    return (
       
<div className="flex w-full max-w-screen h-96 mb-10 md:mb-0">
        <Canvas camera={{ fov: 5, position: [0, 5, 0] }} resize={{ scroll: false  }} style={{ width: '100%', padding: 30, overflow: 'vsible'}}>
           <Stage >
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
            <Crib3D/>
            <OrbitControls makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 3}  enableZoom={false}/>
           <Environment preset="city" />
            </Stage>
        </Canvas>
        </div>
    );
  }


  