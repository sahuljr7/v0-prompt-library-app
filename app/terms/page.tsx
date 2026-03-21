import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';

export const metadata = {
  title: 'Terms of Service - PromptLib',
  description: 'Terms of Service for PromptLib',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-20 pb-16 sm:pt-32 sm:pb-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
                Terms of Service
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Last updated: March 21, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12 sm:py-20 lg:py-32">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="prose prose-invert max-w-none space-y-6 sm:space-y-8 text-muted-foreground">
              <div className="animate-fade-in">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  By accessing and using the PromptLib website and services, you accept and agree to be bound by and comply with these Terms of Service. If you do not agree to abide by the above, please do not use this service. We reserve the right to update these terms at any time without notice.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">2. Use License</h2>
                <p className="text-sm sm:text-base leading-relaxed mb-3">
                  Permission is granted to temporarily download one copy of the materials (information or software) on PromptLib for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer or modify any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notices from materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  <li>Use the materials for any unlawful purpose or in violation of any applicable laws</li>
                </ul>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">3. Disclaimer</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  The materials on PromptLib are provided on an "as is" basis. PromptLib makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">4. Limitations</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  In no event shall PromptLib or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PromptLib, even if we or one of our authorized representatives has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">5. Accuracy of Materials</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  The materials appearing on PromptLib could include technical, typographical, or photographic errors. PromptLib does not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">6. Materials and Content</h2>
                <p className="text-sm sm:text-base leading-relaxed mb-3">
                  The materials and prompts displayed on PromptLib are provided for educational and creative purposes. Users are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                  <li>Ensuring their use complies with all applicable laws and regulations</li>
                  <li>Respecting intellectual property rights of content creators</li>
                  <li>Using prompts responsibly and ethically</li>
                  <li>Not creating misleading or harmful content</li>
                  <li>Obtaining necessary permissions for commercial use of AI-generated content</li>
                </ul>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">7. Limitations of Liability</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  In no case shall PromptLib, its owners, or its suppliers be liable for any damages or loss whatsoever (including, without limitation, consequential or incidental damages, loss of profits, or damage to data) resulting from the use or the inability to use the materials on the PromptLib website, even if PromptLib or one of its authorized representatives has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '700ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">8. Revisions and Errata</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  The materials appearing on PromptLib may include errors or inaccuracies. PromptLib makes no commitments to update the materials on our website. PromptLib may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">9. Links</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  PromptLib has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by PromptLib of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '900ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">10. Modifications</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  PromptLib may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '1000ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">11. Governing Law</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where PromptLib is operated, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '1100ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">12. Prohibited Activities</h2>
                <p className="text-sm sm:text-base leading-relaxed mb-3">
                  Users agree not to engage in any of the following prohibited activities:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                  <li>Harassing or causing distress or inconvenience to any person</li>
                  <li>Transmitting obscene or offensive content</li>
                  <li>Disrupting the normal flow of dialogue within our website</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Violating any applicable laws or regulations</li>
                </ul>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '1200ms' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">13. Contact Information</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
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
