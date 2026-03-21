'use client';

import { BarChart3, TrendingUp, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAnalytics } from '@/components/providers/analytics-provider';
import { useFavorites } from '@/components/providers/favorites-provider';
import type { LibraryView } from '../library-view-switcher';

interface LibraryHomeProps {
  onNavigate: (view: LibraryView) => void;
}

export function LibraryHome({ onNavigate }: LibraryHomeProps) {
  const { getMostCopied, getRecentlyCopied, getMostViewed } = useAnalytics();
  const { favorites } = useFavorites();

  const mostCopied = getMostCopied(5);
  const recentlyCopied = getRecentlyCopied(5);
  const mostViewed = getMostViewed(5);

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto w-full">
      {/* Welcome Section */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
          Welcome to PromptLib
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Discover and organize thousands of AI prompts for your creative workflow
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
        <Card className="p-3 sm:p-4 bg-secondary/40 border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">Favorites</p>
              <p className="text-lg sm:text-2xl font-bold text-foreground mt-1">
                {favorites.size}
              </p>
            </div>
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
        </Card>

        <Card className="p-3 sm:p-4 bg-secondary/40 border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">Most Used</p>
              <p className="text-lg sm:text-2xl font-bold text-foreground mt-1">
                {mostCopied[0]?.copyCount || 0}
              </p>
            </div>
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
        </Card>

        <Card className="p-3 sm:p-4 bg-secondary/40 border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">Recently Used</p>
              <p className="text-lg sm:text-2xl font-bold text-foreground mt-1">
                {recentlyCopied.length}
              </p>
            </div>
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
        </Card>

        <Card className="p-3 sm:p-4 bg-secondary/40 border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">Viewed</p>
              <p className="text-lg sm:text-2xl font-bold text-foreground mt-1">
                {mostViewed[0]?.viewCount || 0}
              </p>
            </div>
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <Card className="p-6 bg-secondary/40 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer" onClick={() => onNavigate('browse')}>
          <div className="space-y-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-lg">📚</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Browse All Prompts</h3>
            <p className="text-sm text-muted-foreground">
              Explore the complete library of prompts across all categories
            </p>
          </div>
        </Card>

        <Card className="p-6 bg-secondary/40 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer" onClick={() => onNavigate('add')}>
          <div className="space-y-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-lg">✨</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Create New Prompt</h3>
            <p className="text-sm text-muted-foreground">
              Share your own AI prompts with the community
            </p>
          </div>
        </Card>
      </div>

      {/* Most Used Prompts */}
      {mostCopied.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Most Used Prompts</h2>
          <div className="space-y-2">
            {mostCopied.map((item) => (
              <Card key={item.promptId} className="p-4 bg-secondary/40 border-border hover:border-primary/50 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <p className="text-sm font-semibold text-primary">{item.copyCount} copies</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Recently Used */}
      {recentlyCopied.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Recently Used</h2>
          <div className="space-y-2">
            {recentlyCopied.slice(0, 3).map((item) => (
              <Card key={item.promptId} className="p-4 bg-secondary/40 border-border hover:border-primary/50 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {new Date(item.lastCopied).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <p className="text-sm font-semibold text-muted-foreground">Copied</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
