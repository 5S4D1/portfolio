import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import Scene from './Scene'

export default function ThreeBackground() {
  return (
    <div className="three-bg">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }} dpr={[1, 2]}>
        <color attach="background" args={['#0a0a0a']} />
        <Scene />
        <EffectComposer>
          <Bloom intensity={0.5} luminanceThreshold={0.2} mipmapBlur />
          <Noise opacity={0.06} blendFunction={BlendFunction.SOFT_LIGHT} />
          <Vignette offset={0.25} darkness={0.8} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}