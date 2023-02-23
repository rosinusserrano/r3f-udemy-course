import { useFrame } from '@react-three/fiber'
import { useRef, useState, useMemo } from 'react'
import * as THREE from 'three'

export default function Box(props) {
  const ref = useRef()

  const [geometryIndex, setGeometryIndex] = useState(0)
  const geometries = useMemo(() => [
    new THREE.BoxGeometry(),
    new THREE.ConeGeometry(),
    new THREE.SphereGeometry(0.75),
    new THREE.LatheGeometry()
  ], [])

  useFrame((_, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += 0.3 * delta
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => {
        setGeometryIndex((geometryIndex + 1) % geometries.length)
      }}
      scale={1}
      geometry={geometries[geometryIndex]}>
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  )
}
