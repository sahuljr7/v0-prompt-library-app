'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Start exploring thousands of AI prompts today and unlock your creative potential
        </p>

        <Link
          href="/library"
          className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:translate-y-[-2px]"
        >
          <span>Get Started Now</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
