'use client';

import Link from 'next/link';
import { useState } from 'react';
import ShaderGradientBg from '../components/ShaderGradientBg';

function ProjectImage({ src, alt, name, accent }: { src: string; alt: string; name: string; accent: string }) {
  const [error, setError] = useState(false);
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${accent} flex items-center justify-center text-white/90 font-semibold overflow-hidden`}>
      {error ? (
        <span className="text-2xl">{name}</span>
      ) : (
        <img src={src} alt={alt} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" onError={() => setError(true)} />
      )}
    </div>
  );
}

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  {
    name: 'Insighter',
    achievement: '2nd Place Capital One & Top 3 First Time Hacker at ShellHacks 2025',
    description: 'AI-powered financial analysis dashboard democratizing Bloomberg Terminal-like tools ($30k+ platforms). Features live market data with specialized AI agents for research, portfolio advice, and sentiment analysis in an interactive multitasking interface.',
    tech: ['FastAPI (Python)', 'Next.js (TypeScript)', 'React', 'Node.js'],
    image: '/insighter-demo.png',
    repo: 'https://github.com/taran-r/Insighter',
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    name: '(L)Earning',
    achievement: null,
    description: 'Educational fintech platform helping students/travelers understand WHY transportation spending adds up, not just HOW MUCH. Analyzes transaction data to reveal hidden fees, convenience tradeoffs, and spending patterns with AI explanations. Makes financial literacy accessible without rigid budgets.',
    tech: ['FastAPI (Python)', 'Next.js (TypeScript)', 'React', 'Node.js'],
    image: '/(L)earning dash.png',
    repo: 'https://github.com/taran-r/-L-Earning',
    accent: 'from-violet-500 to-fuchsia-600',
  },
  {
    name: 'UF Study Buddy',
    achievement: null,
    description: 'AI tool for University of Florida students to quickly find course information from actual syllabi. Students select courses and ask questions for instant AI-powered answers about dates, policies, grading breakdown.',
    tech: ['Flask (Python)', 'HTML', 'CSS', 'JavaScript'],
    image: '/uf-study-buddy.png',
    repo: 'https://github.com/taran-r/uf-study-buddy',
    accent: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Personal Portfolio Website',
    achievement: null,
    description: 'Modern, responsive portfolio with clean design, smooth animations, and dark mode support.',
    tech: ['Next.js (TypeScript)', 'React', 'Tailwind CSS'],
    image: '/portfolio.png',
    repo: 'https://github.com/taran-r/taran-r.github.io',
    accent: 'from-cyan-500 to-blue-600',
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-grid-pattern pt-24 pb-20 relative">
      <ShaderGradientBg color1="#0a0a0a" color2="#ffdab9" color3="#e8b4b8" />
      <div className="max-w-5xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-accent-cyan transition-colors text-sm font-medium mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          Back
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          <span className="text-[#ffdab9]">Projects</span>
        </h1>
        <p className="text-zinc-500 mb-16">Featured work</p>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className="group relative rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-accent-cyan/30 card-glow transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 relative h-56 lg:h-auto lg:min-h-[280px]">
                  <ProjectImage src={project.image} alt={project.name} name={project.name} accent={project.accent} />
                </div>
                <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-accent-cyan transition-colors shrink-0"
                      aria-label={`${project.name} on GitHub`}
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                  {project.achievement && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-amber/20 text-accent-amber text-sm font-medium mb-4 w-fit">
                      🏆 {project.achievement}
                    </span>
                  )}
                  <p className="text-zinc-400 leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 text-sm font-mono border border-zinc-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <footer className="mt-20 py-8 text-center text-zinc-600 text-sm border-t border-[var(--border-subtle)]">
        © 2026 Taran Raj
      </footer>
    </main>
  );
}
