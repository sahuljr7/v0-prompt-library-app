'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface PromptUsage {
  promptId: string;
  title: string;
  category: string;
  copyCount: number;
  viewCount: number;
  lastCopied: number;
  lastViewed: number;
}

interface AnalyticsContextType {
  usage: Map<string, PromptUsage>;
  trackCopy: (promptId: string, title: string, category: string) => void;
  trackView: (promptId: string, title: string, category: string) => void;
  getMostCopied: (limit?: number) => PromptUsage[];
  getRecentlyCopied: (limit?: number) => PromptUsage[];
  getMostViewed: (limit?: number) => PromptUsage[];
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [usage, setUsage] = useState<Map<string, PromptUsage>>(new Map());
  const [isHydrated, setIsHydrated] = useState(false);

  // Load analytics from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('prompt-library-analytics');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const usageMap = new Map(Object.entries(parsed) as [string, PromptUsage][]);
        setUsage(usageMap);
      } catch (error) {
        console.error('Failed to parse analytics:', error);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save analytics to localStorage whenever they change
  useEffect(() => {
    if (isHydrated) {
      const obj = Object.fromEntries(usage);
      localStorage.setItem('prompt-library-analytics', JSON.stringify(obj));
    }
  }, [usage, isHydrated]);

  const trackCopy = (promptId: string, title: string, category: string) => {
    setUsage((prev) => {
      const newUsage = new Map(prev);
      const current = newUsage.get(promptId) || {
        promptId,
        title,
        category,
        copyCount: 0,
        viewCount: 0,
        lastCopied: 0,
        lastViewed: 0,
      };
      newUsage.set(promptId, {
        ...current,
        copyCount: current.copyCount + 1,
        lastCopied: Date.now(),
      });
      return newUsage;
    });
  };

  const trackView = (promptId: string, title: string, category: string) => {
    setUsage((prev) => {
      const newUsage = new Map(prev);
      const current = newUsage.get(promptId) || {
        promptId,
        title,
        category,
        copyCount: 0,
        viewCount: 0,
        lastCopied: 0,
        lastViewed: 0,
      };
      newUsage.set(promptId, {
        ...current,
        viewCount: current.viewCount + 1,
        lastViewed: Date.now(),
      });
      return newUsage;
    });
  };

  const getMostCopied = (limit = 5): PromptUsage[] => {
    return Array.from(usage.values())
      .filter((u) => u.copyCount > 0)
      .sort((a, b) => b.copyCount - a.copyCount)
      .slice(0, limit);
  };

  const getRecentlyCopied = (limit = 5): PromptUsage[] => {
    return Array.from(usage.values())
      .filter((u) => u.lastCopied > 0)
      .sort((a, b) => b.lastCopied - a.lastCopied)
      .slice(0, limit);
  };

  const getMostViewed = (limit = 5): PromptUsage[] => {
    return Array.from(usage.values())
      .filter((u) => u.viewCount > 0)
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, limit);
  };

  return (
    <AnalyticsContext.Provider
      value={{
        usage,
        trackCopy,
        trackView,
        getMostCopied,
        getRecentlyCopied,
        getMostViewed,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within AnalyticsProvider');
  }
  return context;
}
