'use client';

import { Zap, Search, Heart, Copy, BookOpen, Sparkles } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Curated Collection',
    description: 'Handpicked prompts from expert creators and developers',
  },
  {
    icon: Search,
    title: 'Easy Discovery',
    description: 'Powerful search and filtering to find exactly what you need',
  },
  {
    icon: Heart,
    title: 'Save Favorites',
    description: 'Bookmark your favorite prompts for quick access anytime',
  },
  {
    icon: Copy,
    title: 'One-Click Copy',
    description: 'Instantly copy prompts to your clipboard with one click',
  },
  {
    icon: Sparkles,
    title: 'Regular Updates',
    description: 'New and trending prompts added daily',
  },
  {
    icon: Zap,
    title: 'Optimized Speed',
    description: 'Lightning-fast search and seamless performance',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Everything You Need
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make prompt discovery and usage effortless
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-4 sm:p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
