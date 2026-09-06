'use client';

import Link from 'next/link';
import ShaderGradientBg from '../components/ShaderGradientBg';

const languages = ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'FastAPI', 'Flask', 'SQL', 'HTML/CSS'];
const tools = ['Git', 'GitHub', 'Azure', 'GCP', 'Docker', 'Linux', 'Unix Shell', 'Jupyter Notebook', 'REST APIs', 'LLM APIs', 'VS Code', 'PostgreSQL', 'Firebase', 'MongoDB', 'GitHub Actions', 'PyTorch', 'NumPy', 'Pandas', 'Parallel Computing', 'Transformer Models'];

const certs = [
  { name: 'NVIDIA Deep Learning Fundamentals', year: '2025', url: 'https://learn.nvidia.com/certificates?id=kVXK2s9JQTe2C_SPJY2jOg' },
  { name: 'University of Florida Python for AI', year: '2025', url: 'https://www.credly.com/badges/82aeaf7b-d15f-4881-ab41-9135a1c3a012/public_url' },
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-grid-pattern pt-24 pb-20 relative">
      <ShaderGradientBg color1="#0a0a0a" color2="#f9a8d4" color3="#fbcfe8" />
      <div className="max-w-5xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-accent-cyan transition-colors text-sm font-medium mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          Back
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          <span className="text-[#f9a8d4]">Skills</span>
        </h1>
        <p className="text-zinc-500 mb-16">Technologies & certifications</p>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="rounded-2xl p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)]">
            <h2 className="text-lg font-bold text-accent-cyan mb-6">Languages & Frameworks</h2>
            <div className="flex flex-wrap gap-3">
              {languages.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-lg bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 text-sm font-medium hover:bg-accent-cyan/20 hover:border-accent-cyan/40 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)]">
            <h2 className="text-lg font-bold text-accent-cyan mb-6">Tools & Platforms</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-lg bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 text-sm font-medium hover:bg-accent-cyan/20 hover:border-accent-cyan/40 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)]">
          <h2 className="text-lg font-bold text-accent-cyan mb-6">Certifications</h2>
          <div className="space-y-4">
            {certs.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-accent-cyan/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-accent-cyan transition-colors">{c.name}</h3>
                  <p className="text-zinc-500 text-sm">{c.year}</p>
                </div>
                <span className="text-accent-cyan text-sm font-medium flex items-center gap-1">
                  View <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-20 py-8 text-center text-zinc-600 text-sm border-t border-[var(--border-subtle)]">
        © 2026 Taran Raj
      </footer>
    </main>
  );
}
