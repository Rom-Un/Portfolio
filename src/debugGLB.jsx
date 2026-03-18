import { useGLTF } from '@react-three/drei'
import testGlb from './assets/3d/test.glb'

export default function DebugGLB() {
  const { nodes, materials } = useGLTF(testGlb)

  console.log('NODES:', nodes)
  console.log('MATERIALS:', materials)

  return null
}

