'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
      <Input
        type="text"
        placeholder="Search prompts..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-9 sm:pl-10 bg-secondary border-border hover:border-primary/50 transition-colors text-sm sm:text-base py-2 sm:py-2.5"
      />
    </div>
  );
}
