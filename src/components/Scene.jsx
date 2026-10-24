import { useMemo, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Points, PointMaterial } from "@react-three/drei"

const cubes = [[-4, 2, -2], [4.5, -1.5, -3], [-3, -3, 0], [3, 3, -4], [0, -4, -2], [-5.5, 0, -5]]

function World({ dark }) {
  const group = useRef()
  const knot = useRef()
  const core = useRef()
  const { viewport } = useThree()
  const ink = dark ? "#ebe8dd" : "#0c1230"
  const gold = dark ? "#f4b942" : "#a86300"
  const blue = dark ? "#8fa6ff" : "#2b46d9"

  const dust = useMemo(() => {
    const a = new Float32Array(2100)
    for (let i = 0; i < a.length; i++) a[i] = (Math.random() - 0.5) * 24
    return a
  }, [])

  useFrame(({ pointer, camera }, dt) => {
    const max = document.documentElement.scrollHeight - window.innerHeight || 1
    const p = window.scrollY / max
    const k = Math.min(1, viewport.width / 10)
    const g = group.current
    g.scale.setScalar(0.7 + 0.3 * k)
    g.rotation.y += (p * Math.PI * 4 + pointer.x * 0.5 - g.rotation.y) * 0.05
    g.rotation.x += (p * 1.4 - pointer.y * 0.35 - g.rotation.x) * 0.05
    g.position.x += (Math.cos(p * Math.PI * 3) * 2.6 * k - g.position.x) * 0.04
    g.position.y += (-p * 1.5 - g.position.y) * 0.04
    knot.current.rotation.z += dt * 0.12
    core.current.rotation.x += dt * 0.5
    core.current.rotation.y += dt * 0.35
    camera.position.z += (9 - p * 2.5 - camera.position.z) * 0.05
  })

  return (
    <group ref={group}>
      <mesh ref={knot}>
        <torusKnotGeometry args={[1.7, 0.42, 180, 18, 2, 3]} />
        <meshBasicMaterial color={ink} wireframe transparent opacity={0.3} />
      </mesh>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshBasicMaterial color={gold} wireframe />
      </mesh>
      <mesh rotation={[1.2, 0, 0.4]}>
        <torusGeometry args={[2.9, 0.012, 8, 120]} />
        <meshBasicMaterial color={blue} />
      </mesh>
      <mesh rotation={[0.3, 1.1, 0]}>
        <torusGeometry args={[3.5, 0.012, 8, 120]} />
        <meshBasicMaterial color={gold} />
      </mesh>
      {cubes.map((pos, i) => (
        <Float key={i} speed={1.2 + i * 0.2} rotationIntensity={1.6} floatIntensity={1.4}>
          <mesh position={pos}>
            <boxGeometry args={[0.55, 0.55, 0.55]} />
            <meshBasicMaterial color={i % 2 ? blue : ink} wireframe transparent opacity={0.7} />
          </mesh>
        </Float>
      ))}
      <Points positions={dust} stride={3}>
        <PointMaterial size={0.03} color={ink} transparent opacity={0.45} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  )
}

export default function Scene({ dark }) {
  return (
    <div id="scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 9], fov: 50 }} dpr={[1, 1.75]}>
        <World dark={dark} />
      </Canvas>
    </div>
  )
}