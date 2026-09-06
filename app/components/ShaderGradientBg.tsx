'use client';

import dynamic from 'next/dynamic';

const ShaderGradientCanvas = dynamic(
  () => import('../../vendor/shadergradient.js').then((mod) => mod.ShaderGradientCanvas),
  { ssr: false }
);

const ShaderGradient = dynamic(
  () => import('../../vendor/shadergradient.js').then((mod) => mod.ShaderGradient),
  { ssr: false }
);

type ShaderGradientBgProps = {
  color1?: string;
  color2?: string;
  color3?: string;
};

export default function ShaderGradientBg({
  color1 = '#22d3ee',
  color2 = '#a78bfa',
  color3 = '#0ea5e9',
}: ShaderGradientBgProps) {
  return (
    <div
      className="fixed inset-0 -z-10 w-full h-full min-w-full min-h-full"
      style={{ isolation: 'isolate' }}
    >
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
        pixelDensity={1.5}
        fov={50}
      >
        <ShaderGradient
          color1={color1}
          color2={color2}
          color3={color3}
          cDistance={3}
          cPolarAngle={90}
          animate="on"
          uSpeed={0.3}
          uStrength={3}
          brightness={0.6}
        />
      </ShaderGradientCanvas>
      <div
        className="absolute inset-0 bg-[var(--bg-base)]/70"
        aria-hidden
      />
    </div>
  );
}
