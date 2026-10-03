import { useEffect, useState } from 'react';
import { ChromaFlow, FilmGrain, FlutedGlass, Shader, Swirl } from 'shaders/react';

export default function ShaderBackdrop() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  return (
    <div className="shader-backdrop" aria-hidden="true">
      <div className="shader-fallback" />
      {!reducedMotion && (
        <div className="shader-canvas-layer">
          <Shader>
            <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
            <ChromaFlow
              baseColor="#ffffff"
              upColor="#ff5f03"
              downColor="#ff5f03"
              leftColor="#ff5f03"
              rightColor="#ff5f03"
              momentum={13}
              radius={3.5}
            />
            <FlutedGlass
              aberration={0.61}
              angle={31}
              frequency={8}
              highlight={0.12}
              highlightSoftness={0}
              lightAngle={-90}
              refraction={4}
              shape="rounded"
              softness={1}
              speed={0.15}
            />
            <FilmGrain strength={0.05} />
          </Shader>
        </div>
      )}
    </div>
  );
}
