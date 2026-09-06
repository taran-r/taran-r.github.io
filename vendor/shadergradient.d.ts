import type { ComponentType, CSSProperties, ReactNode } from 'react';

export const ShaderGradientCanvas: ComponentType<{
  children?: ReactNode;
  style?: CSSProperties;
  pixelDensity?: number;
  fov?: number;
  lazyLoad?: boolean;
  className?: string;
}>;

export const ShaderGradient: ComponentType<Record<string, unknown>>;
