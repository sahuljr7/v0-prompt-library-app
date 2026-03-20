import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Zap, Search, Heart, Copy, BookOpen, Sparkles, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: BookOpen,
    title: 'Curated Collection',
    description:
      'Our team of AI experts curates and tests every prompt to ensure quality. Each prompt is categorized and tagged for easy discovery.',
  },
  {
    icon: Search,
    title: 'Powerful Search',
    description:
      'Search across 1000+ prompts instantly. Filter by category, tags, and more to find exactly what you need in seconds.',
  },
  {
    icon: Heart,
    title: 'Save Favorites',
    description:
      'Create a personalized collection of your favorite prompts. Your favorites are synced across devices using your browser storage.',
  },
  {
    icon: Copy,
    title: 'One-Click Copy',
    description:
      'Copy any prompt with a single click. Get instant feedback with our toast notifications confirming the action.',
  },
  {
    icon: Sparkles,
    title: 'Regular Updates',
    description:
      'New prompts are added daily to keep our library fresh and relevant. Explore trending prompts and new categories.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Built with modern web technologies for blazing-fast performance. Instant search results and smooth animations.',
  },
  {
    icon: Clock,
    title: 'Always Available',
    description:
      'Access your prompt library anytime, anywhere. Works perfectly on desktop, tablet, and mobile devices.',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description:
      'Share prompts with colleagues and friends. Copy and paste directly or integrate with your favorite AI tools.',
  },
];

export const metadata = {
  title: 'Features - PromptLib',
  description: 'Discover all the features that make PromptLib the best prompt library',
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-20 pb-16 sm:pt-32 sm:pb-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                Powerful Features
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to discover, organize, and use AI prompts effectively
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex gap-6 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experience the Power of PromptLib
            </h2>
            <Link
              href="/library"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:translate-y-[-2px]"
            >
              Explore Prompts
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
