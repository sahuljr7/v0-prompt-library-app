'use client';

import Link from 'next/link';
import { Star, Plus, Home, Search } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import type { LibraryView } from '@/components/prompt-library/library-view-switcher';

interface LibraryNavbarProps {
  currentView?: LibraryView;
  onViewChange?: (view: LibraryView) => void;
  favoritesCount?: number;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

export function LibraryNavbar({ 
  currentView = 'browse',
  onViewChange,
  favoritesCount = 0,
  searchValue = '',
  onSearchChange
}: LibraryNavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-3 lg:gap-4">
          {/* Left: Logo */}
          <Link href="/library" className="flex items-center space-x-1.5 sm:space-x-2 group flex-shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
              <span className="text-white font-bold text-sm sm:text-lg">P</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-bold text-foreground leading-none">PromptLib</span>
              <span className="text-xs text-muted-foreground">Library</span>
            </div>
          </Link>

          {/* Center: Search Bar (Primary) */}
          {onSearchChange && (
            <div className="hidden sm:flex flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search prompts..."
                  value={searchValue}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-9 bg-secondary border-border hover:border-primary/50 transition-colors text-sm py-2 rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Quick Navigation Links */}
          <div className="hidden lg:flex items-center space-x-0.5">
            <Button
              variant={currentView === 'home' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange?.('home')}
              className="inline-flex items-center space-x-1.5 text-sm h-8"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Button>
            <Button
              variant={currentView === 'browse' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange?.('browse')}
              className="inline-flex items-center space-x-1.5 text-sm h-8"
            >
              <span>Browse</span>
            </Button>
            <Button
              variant={currentView === 'favorites' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange?.('favorites')}
              className="inline-flex items-center space-x-1.5 text-sm h-8"
            >
              <Star className="w-4 h-4" />
              <span>Favorites</span>
              {favoritesCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary/20 text-primary rounded-full font-semibold">
                  {favoritesCount}
                </span>
              )}
            </Button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 ml-auto">
            {/* Add Prompt Button */}
            <Button
              onClick={() => onViewChange?.('add')}
              className="inline-flex items-center space-x-1.5 text-xs sm:text-sm h-8 sm:h-9 px-2.5 sm:px-4 bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Add Prompt</span>
              <span className="inline sm:hidden">Add</span>
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
