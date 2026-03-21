'use client';

import { Copy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { useAnalytics } from '@/components/providers/analytics-provider';
import { Prompt } from '@/lib/types';

interface PromptCardProps {
  prompt: Prompt;
  isFavorite: boolean;
  onFavoriteToggle: (id: string) => void;
  onClick?: () => void;
}

export function PromptCard({ prompt, isFavorite, onFavoriteToggle, onClick }: PromptCardProps) {
  const { trackCopy } = useAnalytics();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      trackCopy(prompt.id, prompt.title, prompt.category);
      toast.success('Copied to clipboard!', {
        description: prompt.title,
      });
    } catch (error) {
      toast.error('Failed to copy');
    }
  };

  return (
    <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300 group bg-secondary/40 border-border cursor-pointer hover:translate-y-[-4px] animate-fade-in" onClick={onClick}>
      <div className="p-3 sm:p-5 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 sm:gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm sm:text-base text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {prompt.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">
              {prompt.description}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteToggle(prompt.id);
            }}
            className="flex-shrink-0 h-8 w-8 p-0"
          >
            <Star
              className="w-4 h-4 sm:w-5 sm:h-5 transition-all"
              fill={isFavorite ? 'currentColor' : 'none'}
              color={isFavorite ? '#fbbf24' : 'currentColor'}
            />
          </Button>
        </div>

        {/* Tags */}
        {prompt.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {prompt.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
            {prompt.tags.length > 2 && (
              <span className="text-xs text-muted-foreground">+{prompt.tags.length - 2}</span>
            )}
          </div>
        )}

        {/* Content Preview */}
        <div className="flex-1 mb-3 sm:mb-4">
          <p className="text-xs text-muted-foreground line-clamp-2 sm:line-clamp-3">
            {prompt.content.substring(0, 150)}...
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-border/50 gap-2">
          <span className="text-xs text-muted-foreground truncate">{prompt.category}</span>
          <Button
            size="sm"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            className="gap-1 text-xs h-8 px-2 flex-shrink-0"
          >
            <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Copy</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
