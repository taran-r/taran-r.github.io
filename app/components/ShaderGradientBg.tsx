'use client';

import dynamic from 'next/dynamic';
import { Component, type ReactNode, useEffect, useState } from 'react';

const ShaderGradientInner = dynamic(
  () =>
    import('./ShaderGradientInner').catch(() => ({
      default: () => null,
    })),
  {
    ssr: false,
    loading: () => null,
  }
);

type ShaderGradientBgProps = {
  color1?: string;
  color2?: string;
  color3?: string;
};

class GradientErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export default function ShaderGradientBg({
  color1 = '#22d3ee',
  color2 = '#a78bfa',
  color3 = '#0ea5e9',
}: ShaderGradientBgProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 w-full h-full min-w-full min-h-full"
      style={{ isolation: 'isolate' }}
    >
      {mounted && (
        <GradientErrorBoundary>
          <ShaderGradientInner color1={color1} color2={color2} color3={color3} />
        </GradientErrorBoundary>
      )}
      <div className="absolute inset-0 bg-[var(--bg-base)]/70" aria-hidden />
    </div>
  );
}
