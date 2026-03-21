'use client';

import { PromptLibraryMain } from '../library-main';

interface PromptLibraryBrowseProps {
  initialSearch?: string;
  onSearchChange?: (query: string) => void;
}

export function PromptLibraryBrowse({ initialSearch = '', onSearchChange }: PromptLibraryBrowseProps) {
  return <PromptLibraryMain initialSearch={initialSearch} onSearchChange={onSearchChange} />;
}
