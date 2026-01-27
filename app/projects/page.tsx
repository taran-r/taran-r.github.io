'use client';

import Link from 'next/link';

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="pt-12 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition font-medium mb-6">
            <ArrowLeftIcon />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Here are some of my featured works</p>
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* Insighter */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-full h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white text-lg font-semibold shadow-lg overflow-hidden">
                    <img 
                      src="/insighter-demo.png" 
                      alt="Insighter" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="text-center px-4">Insighter<br/>Screenshot</div>';
                      }}
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Insighter
                    </h3>
                    <a 
                      href="https://github.com/taran-r/Insighter" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      aria-label="View Insighter on GitHub"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-full text-sm font-bold shadow-md">
                      🏆 ShellHacks 2025
                    </span>
                    <span className="inline-block ml-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                      2nd Place - Capital One | Top 3 - First Time Hacker
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    Insighter is an AI-powered financial analysis dashboard that makes professional-grade investment tools accessible without the $30k+ cost of platforms like Bloomberg Terminal. It combines live market data with specialized AI agents that provide research, portfolio advice, and sentiment analysis through an interactive interface designed for multitasking.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">FastAPI (Python)</span>
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Next.js (TypeScript)</span>
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">React</span>
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Node.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* (L)Earning */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-full h-48 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center text-white text-lg font-semibold shadow-lg overflow-hidden">
                    <img 
                      src="/(L)earning dash.png" 
                      alt="(L)Earning" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="text-center px-4">(L)Earning<br/>Screenshot</div>';
                      }}
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      (L)Earning
                    </h3>
                    <a 
                      href="https://github.com/taran-r/-L-Earning" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      aria-label="View (L)Earning on GitHub"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    (L)Earning is an educational fintech platform that helps students and travelers understand why transportation and travel spending adds up, not just how much was spent. Rather than simply showing raw totals, it analyzes transaction data to reveal hidden fees, convenience tradeoffs, and spending patterns, then uses AI to explain these behaviors. (L)Earning makes financial literacy more accessible without relying on rigid budgets or prescriptive advice.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">FastAPI (Python)</span>
                    <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">Next.js (TypeScript)</span>
                    <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">React</span>
                    <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">Node.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* UF Study Buddy */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white text-lg font-semibold shadow-lg overflow-hidden">
                    <img 
                      src="/uf-study-buddy.png" 
                      alt="UF Study Buddy" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="text-center px-4">UF Study Buddy<br/>Screenshot</div>';
                      }}
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      UF Study Buddy
                    </h3>
                    <a 
                      href="https://github.com/taran-r/uf-study-buddy" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      aria-label="View UF Study Buddy on GitHub"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    The UF Study Buddy helps University of Florida students quickly find course information by using AI to answer questions based on actual UF syllabi. Instead of digging through PDFs for dates, policies, or grading breakdowns, students simply select their course and ask questions to get instant, AI-powered answers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Flask (Python)</span>
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">HTML</span>
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">CSS</span>
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Website */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-full h-48 bg-gradient-to-br from-pink-400 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg font-semibold shadow-lg overflow-hidden">
                    <img 
                      src="/portfolio.png" 
                      alt="Portfolio Website" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="text-center px-4">Portfolio<br/>Screenshot</div>';
                      }}
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Personal Portfolio Website
                    </h3>
                    <a 
                      href="https://github.com/taran-r/taran-r.github.io" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      aria-label="View Portfolio Website on GitHub"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    A modern, responsive portfolio website built to showcase my projects, experience, and skills. Features a clean design with smooth animations and dark mode support for an optimal viewing experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium">Next.js (TypeScript)</span>
                    <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium">React</span>
                    <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 dark:bg-black text-white text-center">
        <p className="text-slate-300">© 2025 Taran Raj. All rights reserved.</p>
      </footer>
    </main>
  );
}
