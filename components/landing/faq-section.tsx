'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What prompts are included in the library?',
    answer:
      'Our library contains 1000+ prompts across multiple categories including YouTube content creation, coding, design, and writing. Each prompt is carefully curated and tested.',
  },
  {
    question: 'Can I use these prompts with any AI model?',
    answer:
      'Yes! Our prompts are designed to work with popular AI models like ChatGPT, Claude, Gemini, and more. You can copy and paste them into any AI assistant.',
  },
  {
    question: 'How often are new prompts added?',
    answer:
      'We add new prompts daily to keep the library fresh and relevant. You can filter by "New" to see the latest additions.',
  },
  {
    question: 'Can I save my favorite prompts?',
    answer:
      'Absolutely! Click the heart icon to save any prompt to your favorites. Your favorites are saved locally on your device.',
  },
  {
    question: 'Is there a mobile app?',
    answer:
      'Currently, PromptLib is fully optimized for mobile browsers. A dedicated app may be coming in the future.',
  },
  {
    question: 'Can I submit my own prompts?',
    answer:
      'We would love to hear from you! Contact us about contributing prompts to our library.',
  },
];

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Find answers to common questions about PromptLib
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full text-left p-3 sm:p-4 md:p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start sm:items-center justify-between gap-3">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 mt-0.5 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {expandedIndex === index && (
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed animate-fade-in">
                  {faq.answer}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
