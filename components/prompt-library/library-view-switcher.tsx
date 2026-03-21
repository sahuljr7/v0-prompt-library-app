'use client';

import { PromptLibraryBrowse } from './views/library-browse';
import { LibraryHome } from './views/library-home';
import { LibraryFavorites } from './views/library-favorites';
import { AddPromptForm } from './views/add-prompt-form';

export type LibraryView = 'home' | 'browse' | 'favorites' | 'add';

interface LibraryViewSwitcherProps {
  currentView?: LibraryView;
  onViewChange?: (view: LibraryView) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export function LibraryViewSwitcher({ 
  currentView = 'browse',
  onViewChange,
  searchQuery = '',
  onSearchChange
}: LibraryViewSwitcherProps) {
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <LibraryHome onNavigate={onViewChange} />;
      case 'browse':
        return (
          <PromptLibraryBrowse 
            initialSearch={searchQuery}
            onSearchChange={onSearchChange}
          />
        );
      case 'favorites':
        return <LibraryFavorites />;
      case 'add':
        return <AddPromptForm onSuccess={() => onViewChange?.('browse')} />;
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
