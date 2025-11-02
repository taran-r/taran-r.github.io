'use client';

import Link from 'next/link';

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
  </svg>
);

export default function Experience() {
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
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">My professional journey</p>
        </div>
      </div>

      {/* Experience Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* University of Florida */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Research Assistant</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">University of Florida</p>
                </div>
                <span className="text-slate-600 dark:text-slate-400 font-semibold bg-slate-100 dark:bg-slate-700 px-4 py-1 rounded-full">Aug 2025 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Conducting a literature review on natural language to logic translation methods, synthesizing findings into a technical report shared with Dr. Sumit Jha's group.</li>
                <li>Benchmarking outputs from a 28K-pair NL2TL dataset utilizing LLM-based approaches, producing progress metrics that inform model refinement.</li>
                <li>Developing a baseline NL2TL translation system with LLMs, expected to increase the accuracy of temporal logic generation in preliminary testing by 15–20%.</li>
              </ul>
            </div>

            {/* Augusta University */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Research Intern</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Augusta University</p>
                </div>
                <span className="text-slate-600 dark:text-slate-400 font-semibold bg-slate-100 dark:bg-slate-700 px-4 py-1 rounded-full">Jun 2025 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Collaborating with Dr. Yuyan Bao and PhD student Shichen Gao to integrate Knowledge Graph and LLM techniques while applying discrete mathematics principles, enhancing system accuracy, and preparing it to handle 1,000+ complex user-generated prompts.</li>
                <li>Assisting in multiple instance learning experiments, contributing to early results that showed up to a 12% improvement in recommendation precision.</li>
              </ul>
            </div>

            {/* SmartStickies */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">AI Engineering Intern</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">SmartStickies</p>
                </div>
                <span className="text-slate-600 dark:text-slate-400 font-semibold bg-slate-100 dark:bg-slate-700 px-4 py-1 rounded-full">Sep 2024 - Nov 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Researched three transformer architectures and LSTM variants using 20K+ open-source interaction records, building predictive models that supported adaptive interface testing across multiple user scenarios.</li>
                <li>Designed and tested a Workflow Generator Tool that dynamically adjusted screen layouts, tested across three businesses, and integrated into production trials serving 100+ end users.</li>
              </ul>
            </div>

            {/* Pinnacle Full-Stack */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Python Programming Intern</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Pinnacle Full-Stack</p>
                </div>
                <span className="text-slate-600 dark:text-slate-400 font-semibold bg-slate-100 dark:bg-slate-700 px-4 py-1 rounded-full">Aug 2024 - Sep 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Built three customizable Python applications through Tkinter, including a password generator, a weather forecast tool using the OpenWeatherMap API, and a translator app leveraging the GoogleTrans library.</li>
                <li>Streamlined API data handling and virtual environment setup, cutting average API response latency by 200ms and improving reliability during local testing in VS Code.</li>
              </ul>
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
