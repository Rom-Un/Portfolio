import { useGLTF } from '@react-three/drei'

export default function DebugGLB() {
  const { nodes, materials } = useGLTF('/src/assets/3d/test.glb')

  console.log('NODES:', nodes)
  console.log('MATERIALS:', materials)

  return null
}

