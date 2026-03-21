'use client';

import { useEffect, useState, useMemo } from 'react';
import { Prompt } from '@/lib/types';
import { loadPromptsFromFiles } from '@/lib/prompt-loader';
import { useFavorites } from '@/components/providers/favorites-provider';
import { PromptList } from '../prompt-list';
import { Skeleton } from '@/components/ui/skeleton';

export function LibraryFavorites() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { favorites, toggleFavorite } = useFavorites();
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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

  const favoritePrompts = useMemo(() => {
    return prompts.filter((p) => favorites.has(p.id));
  }, [prompts, favorites]);

  const handlePromptClick = (prompt: Prompt) => {
    setSelectedPrompt(prompt);
    setIsPreviewOpen(true);
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="mb-6 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
          Favorite Prompts
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          {favoritePrompts.length} saved prompt{favoritePrompts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-lg" />
            ))}
          </div>
        ) : favoritePrompts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No favorite prompts yet</p>
            <p className="text-sm text-muted-foreground">
              Star prompts to add them to your favorites
            </p>
          </div>
        ) : (
          <PromptList
            prompts={favoritePrompts}
            onFavoriteToggle={toggleFavorite}
            favorites={favorites}
            onPromptClick={handlePromptClick}
          />
        )}
      </div>
    </div>
  );
}
