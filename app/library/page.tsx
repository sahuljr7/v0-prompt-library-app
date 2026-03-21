'use client';

import { useState } from 'react';
import { LibraryNavbar } from '@/components/navigation/library-navbar';
import { Footer } from '@/components/navigation/footer';
import { PromptLibraryMain } from '@/components/prompt-library/library-main';

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <LibraryNavbar 
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <main className="min-h-[calc(100vh-200px)]">
        <PromptLibraryMain initialSearch={searchQuery} />
      </main>
      <Footer />
    </>
  );
}
