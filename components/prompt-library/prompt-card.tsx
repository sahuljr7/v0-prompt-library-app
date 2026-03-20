'use client';

import { Copy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Prompt } from '@/lib/types';

interface PromptCardProps {
  prompt: Prompt;
  isFavorite: boolean;
  onFavoriteToggle: (id: string) => void;
  onClick?: () => void;
}

export function PromptCard({ prompt, isFavorite, onFavoriteToggle, onClick }: PromptCardProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      toast.success('Copied to clipboard!', {
        description: prompt.title,
      });
    } catch (error) {
      toast.error('Failed to copy');
    }
  };

  return (
    <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300 group bg-secondary/40 border-border cursor-pointer" onClick={onClick}>
      <div className="p-5 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {prompt.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {prompt.description}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onFavoriteToggle(prompt.id)}
            className="flex-shrink-0"
          >
            <Star
              className="w-5 h-5 transition-all"
              fill={isFavorite ? 'currentColor' : 'none'}
              color={isFavorite ? '#fbbf24' : 'currentColor'}
            />
          </Button>
        </div>

        {/* Tags */}
        {prompt.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {prompt.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
            {prompt.tags.length > 3 && (
              <span className="text-xs text-muted-foreground">+{prompt.tags.length - 3}</span>
            )}
          </div>
        )}

        {/* Content Preview */}
        <div className="flex-1 mb-4">
          <p className="text-xs text-muted-foreground line-clamp-3">
            {prompt.content.substring(0, 200)}...
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <span className="text-xs text-muted-foreground">{prompt.category}</span>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopy}
            className="gap-2 text-xs"
          >
            <Copy className="w-4 h-4" />
            Copy
          </Button>
        </div>
      </div>
    </Card>
  );
}
