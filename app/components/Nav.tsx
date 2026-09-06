'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
];

const scrollbarByPath: Record<string, string> = {
  '/': '#7dd3fc',
  '/projects': '#ffdab9',
  '/experience': '#86efac',
  '/skills': '#f9a8d4',
};

export default function Nav() {
  const pathname = usePathname();

  useEffect(() => {
    const color = scrollbarByPath[pathname] ?? '#7dd3fc';
    document.documentElement.style.setProperty('--scrollbar-color', color);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center">
        <div className="flex gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-[var(--accent-cyan)]' 
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
