import { Component, ReactNode, Suspense, lazy } from 'react'

// Reference shader stack. If the `shaders` package fails to load/render, we fall back to a CSS approximation.
const Impl = lazy(async () => {
  const m: any = await import('shaders/react')
  const { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } = m
  return {
    default: () => (
      <Shader className="w-full h-full">
        <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
        <ChromaFlow baseColor="#ffffff" downColor="#ff5f03" leftColor="#ff5f03" rightColor="#ff5f03" upColor="#ff5f03" momentum={13} radius={3.5} />
        <FlutedGlass aberration={0.61} angle={31} frequency={8} highlight={0.12} highlightSoftness={0} lightAngle={-90} refraction={4} shape="rounded" softness={1} speed={0.15} />
        <FilmGrain strength={0.05} />
      </Shader>
    ),
  }
})

class Boundary extends Component<{ children: ReactNode }, { err: boolean }> {
  state = { err: false }
  static getDerivedStateFromError() { return { err: true } }
  render() { return this.state.err ? <div className="shader-fallback w-full h-full" /> : this.props.children }
}

export default function HeroShader() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
      <Boundary><Suspense fallback={<div className="shader-fallback w-full h-full" />}><Impl /></Suspense></Boundary>
    </div>
  )
}
