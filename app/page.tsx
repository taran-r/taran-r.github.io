'use client';

import Link from 'next/link';

// Icon Components
const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headshot */}
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/30">
            <img 
              src="/Headshot.jpg" 
              alt="Taran Raj" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-blue-500', 'to-blue-700', 'flex', 'items-center', 'justify-center');
                e.currentTarget.parentElement!.innerHTML = '<span class="text-white text-5xl font-bold">TR</span>';
              }}
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Taran Raj</span>
        </h1>
        
        <p className="text-2xl text-slate-700 dark:text-slate-300 mb-6 font-medium">
          AI/ML Enthusiast | Research Assistant | Full-Stack Developer
        </p>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Hello, my name is Taran Raj and I am studying computer science at the University of Florida (Go Gators!!!). My interests surround machine learning, cybersecurity, and exploring how technology can create secure and efficient systems. If you would like to get in contact, send me an email: tarankraj@outlook.com.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          <a 
            href="https://github.com/taran-r" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            aria-label="GitHub Profile"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
          <a 
            href="https://linkedin.com/in/taranraj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link 
            href="/projects"
            className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-2"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
              Projects
            </h2>
            <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium">
              View Projects
              <ArrowRightIcon />
            </div>
          </Link>

          <Link 
            href="/experience"
            className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-2"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
              Experience
            </h2>
            <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium">
              View Experience
              <ArrowRightIcon />
            </div>
          </Link>

          <Link 
            href="/skills"
            className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-2"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
              Skills
            </h2>
            <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium">
              View Skills
              <ArrowRightIcon />
            </div>
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-slate-600 dark:text-slate-400 text-sm">
          <p>© 2025 Taran Raj. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
