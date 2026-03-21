'use client';

import { useState } from 'react';
import { PromptLibraryBrowse } from './views/library-browse';
import { LibraryHome } from './views/library-home';
import { LibraryFavorites } from './views/library-favorites';
import { AddPromptForm } from './views/add-prompt-form';

export type LibraryView = 'home' | 'browse' | 'favorites' | 'add';

interface LibraryViewSwitcherProps {
  initialView?: LibraryView;
  initialSearch?: string;
}

export function LibraryViewSwitcher({ 
  initialView = 'browse',
  initialSearch = ''
}: LibraryViewSwitcherProps) {
  const [currentView, setCurrentView] = useState<LibraryView>(initialView);
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <LibraryHome onNavigate={setCurrentView} />;
      case 'browse':
        return (
          <PromptLibraryBrowse 
            initialSearch={searchQuery}
            onSearchChange={setSearchQuery}
          />
        );
      case 'favorites':
        return <LibraryFavorites />;
      case 'add':
        return <AddPromptForm onSuccess={() => setCurrentView('browse')} />;
      default:
        return <PromptLibraryBrowse initialSearch={searchQuery} />;
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)]">
      {renderView()}
    </div>
  );
}
