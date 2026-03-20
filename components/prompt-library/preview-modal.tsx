'use client';

import { Copy, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Prompt } from '@/lib/types';

interface PreviewModalProps {
  prompt: Prompt | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onFavoriteToggle: (id: string) => void;
}

export function PreviewModal({
  prompt,
  isOpen,
  onClose,
  isFavorite,
  onFavoriteToggle,
}: PreviewModalProps) {
  if (!prompt) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-96 overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl">{prompt.title}</DialogTitle>
              <DialogDescription className="mt-2">{prompt.description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Tags */}
        {prompt.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {prompt.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                #{tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="bg-secondary/50 rounded-lg p-4 my-4">
          <p className="text-sm text-muted-foreground whitespace-pre-wrap font-mono text-xs">
            {prompt.content}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground">{prompt.category}</span>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => onFavoriteToggle(prompt.id)}
            >
              {isFavorite ? '✓ Favorited' : 'Add to Favorites'}
            </Button>
            <Button size="sm" onClick={handleCopy} className="gap-2">
              <Copy className="w-4 h-4" />
              Copy
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
