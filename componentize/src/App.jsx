import Box from "./Box"
import { Canvas } from "@react-three/fiber"

export default function App() {
    return (
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Box />
      </Canvas>
    )
  }