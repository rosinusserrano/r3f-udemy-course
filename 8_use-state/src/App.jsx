import Box from "./Box"
import { Canvas } from "@react-three/fiber"

export default function App() {
    return (
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Box position={[-1, 0, 0]} xRot={1} yRot={0} name={"A"}/>
        <Box position={[1, 0, 0]} xRot={0} yRot={1} name={"B"}/>
      </Canvas>
    )
  }