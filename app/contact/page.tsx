import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Mail, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact - PromptLib',
  description: 'Get in touch with PromptLib',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-20 pb-16 sm:pt-32 sm:pb-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
                Get in Touch
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                We'd love to hear from you. Send us a message anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-20 lg:py-32">
          <div className="max-w-2xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="text-center space-y-6 sm:space-y-8">
              {/* Contact Message */}
              <div className="animate-fade-in space-y-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Reach Out Today
                  </h2>

                  <div className="bg-secondary/50 border border-border rounded-lg p-6 sm:p-8 mb-6">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                      For any queries, please contact:
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary break-all">
                      notsodev425@gmail.com
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
                    Whether you have questions about our service, want to contribute prompts, or just want to say hello,
                    we're here to help. We typically respond within 24-48 hours.
                  </p>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-10 sm:mt-12">
                <div className="p-4 sm:p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    We aim to respond to all inquiries within 24-48 hours
                  </p>
                </div>

                <div className="p-4 sm:p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    We support all types of inquiries and feedback
                  </p>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                  Have Questions?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Check out our FAQ on the home page for quick answers to common questions.
                </p>
                <a
                  href="/#faq"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm sm:text-base font-medium"
                >
                  View FAQ
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
