import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'

const ORANGE = '#ff5a00'
const WHITE = '#f5f5f5'

const getScroll = () => {
  const max = document.body.scrollHeight - window.innerHeight
  return max > 0 ? window.scrollY / max : 0
}

/* deterministic pseudo-random so render stays pure */
const rand = (n) => {
  const x = Math.sin(n * 127.1) * 43758.5453
  return x - Math.floor(x)
}

const makeLayer = (count, spread, seed) => {
  const arr = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    arr[i * 3] = (rand(i + seed) - 0.5) * spread
    arr[i * 3 + 1] = (rand(i + seed + 500) - 0.5) * spread * 1.6
    arr[i * 3 + 2] = (rand(i + seed + 1000) - 0.5) * spread * 0.6
  }
  return arr
}

/* three depth layers: far moves slow, near moves fast = parallax */
const LAYERS = [
  { data: makeLayer(250, 40, 1), size: 1.5, opacity: 0.35, speed: 2, color: WHITE },
  { data: makeLayer(120, 30, 2000), size: 2.2, opacity: 0.6, speed: 6, color: WHITE },
  { data: makeLayer(40, 24, 4000), size: 3.2, opacity: 0.9, speed: 12, color: ORANGE },
]

function ParticleLayer({ data, size, opacity, speed, color }) {
  const ref = useRef()
  useFrame((_, dt) => {
    ref.current.position.y = MathUtils.damp(ref.current.position.y, getScroll() * speed, 4, dt)
    ref.current.rotation.y += dt * 0.01
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        sizeAttenuation={false}
        transparent
        opacity={opacity}
      />
    </points>
  )
}

function Ring({ radius, rotation, speed }) {
  const ref = useRef()
  useFrame((_, dt) => {
    ref.current.rotation.z += dt * speed
  })
  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, 0.006, 8, 160]} />
      <meshBasicMaterial color={WHITE} transparent opacity={0.35} />
    </mesh>
  )
}

function Hero3D() {
  const group = useRef()
  const core = useRef()

  useFrame((state, dt) => {
    const p = getScroll()
    const mobile = state.size.width < 768
    const targetX = mobile ? 0 : Math.cos(p * Math.PI * 3) * 2.6
    const targetY = mobile ? 1.2 - p * 2 : p * 3 - 0.2
    group.current.position.x = MathUtils.damp(group.current.position.x, targetX, 3, dt)
    group.current.position.y = MathUtils.damp(group.current.position.y, targetY, 3, dt)

    const s = mobile ? 0.7 : 1 + Math.sin(p * Math.PI) * 0.25
    group.current.scale.setScalar(MathUtils.damp(group.current.scale.x, s, 3, dt))

    core.current.rotation.y += dt * (0.2 + p * 1.2)
    core.current.rotation.x += dt * 0.08
  })

  return (
    <group ref={group}>
      <group ref={core}>
        {/* black shell hides the back wireframe lines for a clean look */}
        <mesh>
          <icosahedronGeometry args={[1.58, 2]} />
          <meshBasicMaterial color="#0a0a0a" />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.6, 2]} />
          <meshBasicMaterial color={ORANGE} wireframe />
        </mesh>
      </group>
      <Ring radius={2.4} rotation={[1.2, 0.2, 0]} speed={0.15} />
      <Ring radius={3.0} rotation={[0.4, 1.0, 0]} speed={-0.1} />
    </group>
  )
}

function CameraRig() {
  useFrame((state, dt) => {
    const cam = state.camera
    cam.position.x = MathUtils.damp(cam.position.x, state.pointer.x * 0.6, 3, dt)
    cam.position.y = MathUtils.damp(cam.position.y, state.pointer.y * 0.4, 3, dt)
    cam.lookAt(0, 0, 0)
  })
  return null
}

export default function Scene() {
  return (
    <>
      <CameraRig />
      <Hero3D />
      {LAYERS.map((l, i) => (
        <ParticleLayer key={i} {...l} />
      ))}
    </>
  )
}