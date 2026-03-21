'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border mt-12 sm:mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-1.5 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs sm:text-lg">P</span>
              </div>
              <span className="text-sm sm:text-lg font-bold text-foreground">PromptLib</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
              Premium AI prompts
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-4">Product</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/features', label: 'Features' },
                { href: '/library', label: 'Library' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-4">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { href: '/about', label: 'About' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-4">Follow</h3>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex-shrink-0"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-6 sm:my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {currentYear} PromptLib. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
