import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { PromptLibraryMain } from '@/components/prompt-library/library-main';

export const metadata = {
  title: 'Prompt Library',
  description: 'Browse and explore thousands of AI prompts',
};

export default function LibraryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-200px)]">
        <PromptLibraryMain />
      </main>
      <Footer />
    </>
  );
}
