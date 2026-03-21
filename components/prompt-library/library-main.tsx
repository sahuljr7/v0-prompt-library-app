'use client';

import { useEffect, useState, useMemo } from 'react';
import { Prompt } from '@/lib/types';
import { loadPromptsFromFiles, getCategories, filterPrompts } from '@/lib/prompt-loader';
import { SearchBar } from './search-bar';
import { Sidebar } from './sidebar';
import { PromptList } from './prompt-list';
import { PreviewModal } from './preview-modal';
import { useFavorites } from '@/components/providers/favorites-provider';
import { Skeleton } from '@/components/ui/skeleton';

interface PromptLibraryMainProps {
  initialSearch?: string;
}

export function PromptLibraryMain({ initialSearch = '' }: PromptLibraryMainProps) {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  const { favorites, toggleFavorite } = useFavorites();

  // Load prompts on mount
  useEffect(() => {
    const loadPrompts = async () => {
      try {
        const loadedPrompts = await loadPromptsFromFiles();
        setPrompts(loadedPrompts);
      } catch (error) {
        console.error('Failed to load prompts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPrompts();
  }, []);

  // Get categories and calculate counts
  const categories = useMemo(() => getCategories(prompts), [prompts]);
  
  const promptCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach((cat) => {
      counts[cat] = prompts.filter((p) => p.category === cat).length;
    });
    return counts;
  }, [prompts, categories]);

  // Filter prompts based on search and category
  const filteredPrompts = useMemo(() => {
    return filterPrompts(prompts, searchQuery, selectedCategory, favorites);
  }, [prompts, searchQuery, selectedCategory, favorites]);

  const handlePromptClick = (prompt: Prompt) => {
    setSelectedPrompt(prompt);
    setIsPreviewOpen(true);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      {/* Sidebar - Hidden on mobile, visible on lg */}
      {!isLoading && (
        <div className="hidden lg:block lg:w-64 border-r border-border bg-secondary/30">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            promptCounts={promptCounts}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-border bg-secondary/20 p-4 sm:p-6">
          <div className="max-w-7xl mx-auto w-full px-2 sm:px-0">
            <div className="mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Prompt Library</h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">
                Discover and organize AI prompts for your creative workflow
              </p>
            </div>
            <div className="mt-4">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>
        </div>

        {/* Mobile Category Filter */}
        {!isLoading && (
          <div className="lg:hidden border-b border-border overflow-x-auto">
            <div className="flex gap-2 p-3 sm:p-4 whitespace-nowrap">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === null
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 max-w-7xl mx-auto w-full">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-64 rounded-lg" />
                ))}
              </div>
            ) : (
                <>
                <PromptList
                  prompts={filteredPrompts}
                  onFavoriteToggle={toggleFavorite}
                  favorites={favorites}
                  onPromptClick={handlePromptClick}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {selectedPrompt && (
        <PreviewModal
          prompt={selectedPrompt}
          isOpen={isPreviewOpen}
          onClose={() => {
            setIsPreviewOpen(false);
            setSelectedPrompt(null);
          }}
          isFavorite={favorites.has(selectedPrompt.id)}
          onFavoriteToggle={toggleFavorite}
        />
      )}
    </div>
  );
}
