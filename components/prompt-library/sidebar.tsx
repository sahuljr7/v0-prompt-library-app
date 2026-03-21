'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  promptCounts: Record<string, number>;
}

export function Sidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  promptCounts,
}: SidebarProps) {
  return (
    <div className="w-full h-full bg-secondary/30 border-r border-border flex flex-col overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-border animate-fade-in flex-shrink-0">
        <h2 className="text-base sm:text-lg font-semibold text-foreground">Categories</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          {Object.values(promptCounts).reduce((a, b) => a + b, 0)} total prompts
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-3 sm:p-4 space-y-2">
          <Button
            variant={selectedCategory === null ? 'default' : 'ghost'}
            className="w-full justify-between hover:translate-x-1 transition-all duration-300 text-sm h-auto py-2"
            onClick={() => onSelectCategory(null)}
          >
            <span className="truncate">All Prompts</span>
            <span className="text-xs bg-muted px-2 py-1 rounded ml-2 flex-shrink-0">
              {Object.values(promptCounts).reduce((a, b) => a + b, 0)}
            </span>
          </Button>

          {categories.map((category, index) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'ghost'}
              className="w-full justify-between hover:translate-x-1 transition-all duration-300 animate-fade-in text-sm h-auto py-2"
              onClick={() => onSelectCategory(category)}
              style={{ animationDelay: `${(index + 1) * 50}ms` }}
            >
              <span className="truncate">{category}</span>
              <span className="text-xs bg-muted px-2 py-1 rounded ml-2 flex-shrink-0">
                {promptCounts[category] || 0}
              </span>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
