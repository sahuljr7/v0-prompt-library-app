import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Users, Target, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About PromptLib',
  description: 'Learn more about PromptLib and our mission',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-20 pb-16 sm:pt-32 sm:pb-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                About PromptLib
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Empowering creators and developers with the world's best AI prompts
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  PromptLib was created with a simple mission: to make AI more accessible and useful
                  for everyone. We believe that great prompts can unlock incredible results from AI models.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our team curates the best prompts from the community, tests them rigorously, and
                  organizes them in an intuitive library that's easy to explore and use.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're a content creator, developer, designer, or writer, PromptLib is
                  here to help you work faster and smarter with AI.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-12 border border-primary/20">
                  <div className="space-y-8">
                    {[
                      { icon: Lightbulb, label: 'Innovation' },
                      { icon: Users, label: 'Community' },
                      { icon: Target, label: 'Excellence' },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-lg font-semibold text-foreground">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 sm:py-32 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality First',
                  description:
                    'Every prompt in our library is carefully curated and tested to ensure it delivers results.',
                },
                {
                  title: 'Community Driven',
                  description:
                    'We believe in the power of community feedback to continually improve our offerings.',
                },
                {
                  title: 'Always Accessible',
                  description:
                    'PromptLib is designed to be intuitive and easy to use for creators of all skill levels.',
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of creators already using PromptLib to enhance their workflow
            </p>
            <Link
              href="/library"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:translate-y-[-2px]"
            >
              Explore Library
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
