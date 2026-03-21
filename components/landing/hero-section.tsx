'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10"></div>
      <div className="absolute top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-primary/20">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-primary">Introducing PromptLib</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Premium AI Prompts
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              For Every Creator
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Discover thousands of expertly-crafted AI prompts. From content creation to coding, design to writing—everything you need to unlock your creativity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Link
              href="/library"
              className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:translate-y-[-2px] text-sm sm:text-base"
            >
              <span>Explore Prompts</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/features"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-border bg-secondary/50 text-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-secondary transition-all duration-300 hover:border-primary/50 text-sm sm:text-base"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-sm sm:max-w-md mx-auto pt-6 sm:pt-8 border-t border-border">
            {[
              { label: 'Prompts', value: '1000+' },
              { label: 'Categories', value: '4' },
              { label: 'Users', value: '5K+' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">{value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
