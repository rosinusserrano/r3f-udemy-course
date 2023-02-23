import { useFrame } from "@react-three/fiber"
import { useRef, useEffect } from "react"

export default function Box(props) {
  const ref = useRef()

  useFrame((state, delta) => {
    // console.log(state)
    ref.current.rotation.x += props.xRot * delta
    ref.current.rotation.x %= 2 * Math.PI
    ref.current.rotation.y += props.yRot * delta
    ref.current.rotation.y %= 2 * Math.PI
  })

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}