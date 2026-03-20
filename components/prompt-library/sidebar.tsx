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
    <div className="w-64 bg-secondary/30 border-r border-border flex flex-col h-full">
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Categories</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {Object.values(promptCounts).reduce((a, b) => a + b, 0)} total prompts
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          <Button
            variant={selectedCategory === null ? 'default' : 'ghost'}
            className="w-full justify-between"
            onClick={() => onSelectCategory(null)}
          >
            <span>All Prompts</span>
            <span className="text-xs bg-muted px-2 py-1 rounded">
              {Object.values(promptCounts).reduce((a, b) => a + b, 0)}
            </span>
          </Button>

          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'ghost'}
              className="w-full justify-between"
              onClick={() => onSelectCategory(category)}
            >
              <span>{category}</span>
              <span className="text-xs bg-muted px-2 py-1 rounded">
                {promptCounts[category] || 0}
              </span>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
