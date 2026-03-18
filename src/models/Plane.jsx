import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

export function Plane(props) {
  const ref = useRef();
  const { scene } = useGLTF(planeScene);

  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />
    </group>
  );
}

