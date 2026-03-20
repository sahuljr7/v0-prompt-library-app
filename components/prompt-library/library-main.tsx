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

export function PromptLibraryMain() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
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
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      {!isLoading && (
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          promptCounts={promptCounts}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-border bg-secondary/20 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-2">
              <h1 className="text-3xl font-bold text-foreground">Prompt Library</h1>
              <p className="text-muted-foreground mt-1">
                Discover and organize AI prompts for your creative workflow
              </p>
            </div>
            <div className="mt-4">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 max-w-7xl mx-auto">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
