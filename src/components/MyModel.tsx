import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";

export function Coffe(props: { isAnimate: boolean }) {
  const { nodes, materials } = useGLTF(
    "/my-personal-website/3dmodels/TassNescafeMel/TassNescafeMel.glb",
  );

  const myMesh = useRef(null);
  const [moveDirection, setMoveDirection] = useState("up");
  function move(current: any) {
    if (moveDirection == "up" && current.position.y < 0.3) {
      current.position.y += 0.06;
    } else if (moveDirection == "up") {
      setMoveDirection("down");
    }
    if (moveDirection == "down" && current.position.y > -0.5) {
      current.position.y -= 0.04;
    } else if (moveDirection == "down") {
      for (let index = 0; index < 20; index++) {
        current.position.y -= index / 10000;
      }
      setMoveDirection("up");
    }
  }

  useFrame(() => {
    const current = myMesh.current as any;
    if (props.isAnimate) {
      // current.rotation.x += 0.01;
      current.rotation.y += 0.02;
      // current.rotation.z += 0.01;
      move(current);
    } else {
      current.position.set(0, 0, 0);
    }
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={myMesh}
        geometry={(nodes.Tass_Nescafe as any).geometry}
        material={materials["Material.010"]}
        scale={1}
      />
    </group>
  );
}

useGLTF.preload("/3dmodels/TassNescafeMel/TassNescafeMel.glb");

export default function MyModel() {
  const [isAnimate, setIsAnimate] = useState(true);
  return (
    <div
      className="canvas-conatiner relative rounded-xl w-full h-full lg:w-2/5 w-sreen md:mr-0 md:h-4/5"
      onMouseMove={() => setIsAnimate(false)}
      onPointerLeave={() => setIsAnimate(true)}
      onTouchMove={() => setIsAnimate(false)}
    >
      <p className="absolute text-black bottom-0 right-0 pr-4">
        Yeaaa, It's just a bouncing cup.😎 <br />
        You can control it.
      </p>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={Math.PI / 2} />
        <Coffe isAnimate={isAnimate} />
      </Canvas>
    </div>
  );
}
