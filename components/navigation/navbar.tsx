'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 group flex-shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
              <span className="text-white font-bold text-sm sm:text-lg">P</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground hidden sm:inline">PromptLib</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/features', label: 'Features' },
              { href: '/about', label: 'About' },
              { href: '/library', label: 'Library' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-2 lg:px-4 py-2 rounded-lg transition-all duration-300 text-xs lg:text-sm font-medium ${
                  isActive(href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
