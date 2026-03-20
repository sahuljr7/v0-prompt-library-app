'use client';

import { Prompt } from '@/lib/types';
import { PromptCard } from './prompt-card';
import { Empty } from '@/components/ui/empty';

interface PromptListProps {
  prompts: Prompt[];
  onFavoriteToggle: (id: string) => void;
  favorites: Set<string>;
  onPromptClick?: (prompt: Prompt) => void;
}

export function PromptList({
  prompts,
  onFavoriteToggle,
  favorites,
  onPromptClick,
}: PromptListProps) {
  if (prompts.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <Empty
          icon="Search"
          title="No prompts found"
          description="Try adjusting your search or selecting a different category"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
      {prompts.map((prompt, index) => (
        <div
          key={prompt.id}
          style={{ animationDelay: `${index * 75}ms` }}
        >
          <PromptCard
            prompt={prompt}
            isFavorite={favorites.has(prompt.id)}
            onFavoriteToggle={onFavoriteToggle}
            onClick={() => onPromptClick?.(prompt)}
          />
        </div>
      ))}
    </div>
  );
}
