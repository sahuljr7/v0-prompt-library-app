'use client';

import { useState } from 'react';
import { LibraryNavbar } from '@/components/navigation/library-navbar';
import { Footer } from '@/components/navigation/footer';
import { LibraryViewSwitcher, type LibraryView } from '@/components/prompt-library/library-view-switcher';
import { useFavorites } from '@/components/providers/favorites-provider';

export default function LibraryPage() {
  const [currentView, setCurrentView] = useState<LibraryView>('browse');
  const [searchQuery, setSearchQuery] = useState('');
  const { favorites } = useFavorites();

  const handleViewChange = (view: LibraryView) => {
    setCurrentView(view);
  };

  return (
    <>
      <LibraryNavbar 
        currentView={currentView}
        onViewChange={handleViewChange}
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        favoritesCount={favorites.size}
      />
      <main className="min-h-[calc(100vh-200px)]">
        <LibraryViewSwitcher 
          currentView={currentView}
          onViewChange={handleViewChange}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </main>
      <Footer />
    </>
  );
}
