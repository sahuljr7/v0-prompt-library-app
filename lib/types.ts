export interface Prompt {
  id: string;
  category: string;
  title: string;
  description: string;
  content: string;
  isFavorite: boolean;
  tags: string[];
}

export interface Category {
  name: string;
  count: number;
}

export interface ParsedPromptFile {
  category: string;
  prompts: Prompt[];
}
