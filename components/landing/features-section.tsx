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
    <section className="py-20 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make prompt discovery and usage effortless
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
