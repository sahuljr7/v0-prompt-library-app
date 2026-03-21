import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';

export const metadata = {
  title: 'Privacy Policy - PromptLib',
  description: 'Privacy Policy for PromptLib',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-20 pb-16 sm:pt-32 sm:pb-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
                Privacy Policy
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Last updated: March 21, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-12 sm:py-20 lg:py-32">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="prose prose-invert max-w-none space-y-6 sm:space-y-8 text-muted-foreground">
              <div className="animate-fade-in">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">1. Introduction</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  PromptLib ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">2. Information We Collect</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Information You Provide</h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                      We collect information you voluntarily provide when you use our service, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base">
                      <li>Account information (email address, preferences)</li>
                      <li>Favorites and bookmarked prompts</li>
                      <li>Search queries and browsing history</li>
                      <li>Communications and feedback you send us</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                      When you visit our website, we automatically collect certain information about your device and usage:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base">
                      <li>IP address and browser type</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring URLs and device information</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
                <p className="text-sm sm:text-base leading-relaxed mb-3">
                  We use the information we collect for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To personalize your experience on our platform</li>
                  <li>To communicate with you about updates and changes</li>
                  <li>To analyze usage patterns and trends</li>
                  <li>To prevent fraud and enhance security</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">4. Information Sharing</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We only share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-sm sm:text-base">
                  <li>With service providers who assist in operating our website and conducting our business</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights and the safety of our users</li>
                </ul>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">5. Data Security</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  We implement comprehensive technical and organizational security measures to protect your personal information. These include encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security, but we commit to maintaining industry-standard protections.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">6. Your Rights and Choices</h2>
                <p className="text-sm sm:text-base leading-relaxed mb-3">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate data</li>
                  <li>Right to delete your information</li>
                  <li>Right to opt-out of certain uses</li>
                  <li>Right to data portability</li>
                </ul>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">7. Cookies and Tracking</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  We use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser, though this may affect functionality of our service. We use both session-based and persistent cookies for various purposes including authentication and analytics.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '700ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">8. Third-Party Links</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  Our website may contain links to third-party websites. This Privacy Policy applies only to PromptLib. We are not responsible for the privacy practices of other websites. We encourage you to review their privacy policies before providing any information.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">9. Policy Changes</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of significant changes by updating the "Last updated" date. Your continued use of our service constitutes acceptance of the updated Privacy Policy.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '900ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">10. Contact Us</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <p className="text-sm sm:text-base leading-relaxed mt-3">
                  Email: <a href="mailto:notsodev425@gmail.com" className="text-primary hover:text-primary/80 transition-colors">notsodev425@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
