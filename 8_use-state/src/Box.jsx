import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export default function Box(props) {
  const ref = useRef()
  const [rotate, setRotate] = useState(false)
  const [hovered, setHover] = useState(false)


  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.x += props.xRot * delta
      ref.current.rotation.x %= 2 * Math.PI
      ref.current.rotation.y += props.yRot * delta
      ref.current.rotation.y %= 2 * Math.PI
    }
  })

  return (
    <mesh {...props} ref={ref}
      onPointerDown={() => setRotate(true)}
      onPointerUp={() => setRotate(false)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.2 : 1}>
      <boxGeometry />
      <meshBasicMaterial color={hovered ? 0x00ff00 : 0xff0000} wireframe />
    </mesh>
  )
}