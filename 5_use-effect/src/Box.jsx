import { useRef, useEffect } from "react"

export default function Box(props) {
  const ref = useRef()

  useEffect(() => {
    console.log(ref)
  })

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}