import { Prompt } from './types';
import { parsePromptMarkdown } from './prompt-parser';

export async function loadPromptsFromFiles(): Promise<Prompt[]> {
  const categories = ['youtube', 'coding', 'design', 'writing'];
  const allPrompts: Prompt[] = [];
  
  for (const category of categories) {
    try {
      const response = await fetch(`/prompts/${category}.md`);
      if (!response.ok) continue;
      
      const markdown = await response.text();
      const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
      const prompts = parsePromptMarkdown(markdown, categoryName);
      
      allPrompts.push(...prompts);
    } catch (error) {
      console.error(`Failed to load ${category} prompts:`, error);
    }
  }
  
  return allPrompts;
}

export function getCategories(prompts: Prompt[]): string[] {
  const categories = new Set(prompts.map(p => p.category));
  return Array.from(categories).sort();
}

export function filterPrompts(
  prompts: Prompt[],
  searchQuery: string,
  category: string | null,
  favorites: Set<string>
): Prompt[] {
  return prompts
    .map(p => ({
      ...p,
      isFavorite: favorites.has(p.id),
    }))
    .filter(p => {
      const matchesSearch = !searchQuery || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = !category || p.category === category;
      
      return matchesSearch && matchesCategory;
    });
}
