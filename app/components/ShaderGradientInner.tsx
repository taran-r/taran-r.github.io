'use client';

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

type Props = {
  color1: string;
  color2: string;
  color3: string;
};

export default function ShaderGradientInner({ color1, color2, color3 }: Props) {
  return (
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
  );
}
