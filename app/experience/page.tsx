'use client';

import Link from 'next/link';
import ShaderGradientBg from '../components/ShaderGradientBg';

const experiences = [
  {
    role: 'Research Assistant',
    org: 'University of Florida',
    period: 'Aug 2025 - Present',
    bullets: [
      'Conducted a literature review on natural language to logic translation methods, synthesizing findings into a technical report that supported ongoing research efforts within Dr. Sumit Jha\'s group.',
      'Benchmarked LLM outputs across a 28K-pair NL2TL dataset, grading translation quality across multiple model configurations and producing progress metrics that guided model and benchmark refinement.',
      'Developed a multimodal NL+Vision-to-LTL benchmark with 200 datapoints, evaluating multiple LLMs on logical equivalence and identifying recurring, systematic failures in temporal logic generation.',
    ],
  },
  {
    role: 'AI Engineering Intern',
    org: 'Universal Creative',
    period: 'Jun 2026 - Aug 2026',
    bullets: [
      'Engineered improvements to an end-to-end Gaussian Splatting pipeline, processing aerial and handheld imagery through data preparation, geometric mapping, and training workflows to improve 3D environment quality.',
      'Prototyped a conversational construction coordination workflow using an enterprise visual-intelligence platform with a Microsoft Teams Bot proof-of-concept for project-based reporting and ticket management.',
      'Evaluated Python application infrastructure by building a custom application within a standardized platform ecosystem, documenting onboarding friction and gaps in developer documentation.',
    ],
  },
  {
    role: 'Research Intern',
    org: 'Augusta University',
    period: 'Jun 2025 - Dec 2025',
    bullets: [
      'Collaborated with Dr. Yuyan Bao and PhD student Shichen Gao to integrate Knowledge Graph and LLM techniques while applying discrete mathematics to prepare the system for 1,000+ complex user prompts.',
      'Assisted in multiple instance learning experiments, contributing to early results that demonstrated up to a 12% improvement in recommendation precision across initial testing scenarios and datasets.',
    ],
  },
  {
    role: 'AI Engineering Intern',
    org: 'SmartStickies',
    period: 'Sep 2024 - Nov 2024',
    bullets: [
      'Researched three transformer architectures and LSTM variants using 20K+ open-source interaction records, building predictive models that supported adaptive interface testing across multiple user scenarios.',
      'Designed and tested a Workflow Generator Tool that dynamically adjusted screen layouts, tested across three businesses, and integrated into production trials serving 100+ end users.',
    ],
  },
];

const involvement = [
  {
    org: 'UF Computing Student Union',
    role: 'Software Developer',
    period: 'Oct 2025 - Present',
  },
  {
    org: 'UF Society of Asian Scientists & Engineers',
    role: 'SASEHacks Workshop Committee',
    period: 'Oct 2025 - Mar 2026',
  },
];

export default function Experience() {
  return (
    <main className="min-h-screen bg-grid-pattern pt-24 pb-20 relative">
      <ShaderGradientBg color1="#0a0a0a" color2="#86efac" color3="#4ade80" />
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-accent-cyan transition-colors text-sm font-medium mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          Back
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          <span className="text-[#86efac]">Experience</span>
        </h1>
        <p className="text-zinc-500 mb-16">Professional work</p>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <article
              key={`${exp.org}-${exp.role}`}
              className="rounded-2xl p-6 lg:p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[#86efac]/30 transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white">{exp.role}</h2>
                  <p className="text-accent-cyan font-medium">{exp.org}</p>
                </div>
                <span className="text-zinc-500 text-sm font-mono">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-zinc-400 leading-relaxed">
                    <span className="text-[#86efac]/70 mt-1.5 shrink-0">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-2">School Involvement</h2>
          <p className="text-zinc-500 mb-8 text-sm">Campus organizations</p>
          <div className="space-y-4">
            {involvement.map((item) => (
              <div
                key={item.org}
                className="rounded-xl px-5 py-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[#86efac]/30 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.role}</h3>
                    <p className="text-accent-cyan/80 text-sm">{item.org}</p>
                  </div>
                  <span className="text-zinc-500 text-sm font-mono">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-20 py-8 text-center text-zinc-600 text-sm border-t border-[var(--border-subtle)]">
        © 2026 Taran Raj
      </footer>
    </main>
  );
}
