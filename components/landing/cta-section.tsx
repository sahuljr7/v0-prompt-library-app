'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-12 sm:py-20 lg:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center animate-fade-in">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
          Start exploring thousands of AI prompts today and unlock your creative potential
        </p>

        <Link
          href="/library"
          className="inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:translate-y-[-2px] text-sm sm:text-base"
        >
          <span>Get Started Now</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>
    </section>
  );
}
