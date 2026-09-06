'use client';

import Link from 'next/link';
import { useState } from 'react';
import ShaderGradientBg from './components/ShaderGradientBg';

const GitHubIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);

export default function Home() {
  const [headshotError, setHeadshotError] = useState(false);

  return (
    <main className="min-h-screen bg-grid-pattern pt-20 relative">
      <ShaderGradientBg color1="#0a0a0a" color2="#7dd3fc" color3="#0c4a6e" />
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-20 lg:px-16 lg:py-28 max-w-7xl mx-auto overflow-hidden">
        <div className="relative z-10 flex-1 max-w-2xl">
          <p className="font-mono text-sm text-accent-cyan mb-4 tracking-wider">// Hi, I&apos;m</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="text-accent-cyan">
              Taran Raj
            </span>
          </h1>
          <p className="text-base md:text-lg text-zinc-300 mb-10 leading-relaxed rounded-2xl bg-zinc-800/70 border border-zinc-700/50 px-5 py-4 backdrop-blur-sm">
            Computer science student at University of Florida with interests in machine learning, cybersecurity, and creating secure and efficient systems. Reach out:{' '}
            <a href="mailto:tarankraj@outlook.com" className="text-accent-cyan hover:underline underline-offset-2">
              tarankraj@outlook.com
            </a>
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/projects"
              className="group px-6 py-3 bg-accent-cyan text-zinc-900 font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all flex items-center gap-2"
            >
              View Projects
              <ArrowIcon />
            </Link>
            <Link
              href="/experience"
              className="px-6 py-3 border border-zinc-600 text-zinc-300 font-semibold rounded-lg hover:border-accent-cyan hover:text-accent-cyan transition-all"
            >
              Experience
            </Link>
            <Link
              href="/skills"
              className="px-6 py-3 border border-zinc-600 text-zinc-300 font-semibold rounded-lg hover:border-accent-violet hover:text-accent-violet transition-all"
            >
              Skills
            </Link>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/taran-r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-accent-cyan transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com/in/taranraj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-accent-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-7 h-7" />
            </a>
          </div>
        </div>

        <div className="relative z-10 flex-shrink-0">
          <div className="relative">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1.5 ring-2 ring-accent-cyan/60">
              {headshotError ? (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-cyan/30 to-accent-violet/30 flex items-center justify-center font-bold text-4xl md:text-5xl text-accent-cyan">
                  TR
                </div>
              ) : (
                <img
                  src="/Headshot.jpg"
                  alt="Taran Raj"
                  className="w-full h-full rounded-full object-cover"
                  onError={() => setHeadshotError(true)}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-[var(--border-subtle)]">
        © 2026 Taran Raj
      </footer>
    </main>
  );
}
