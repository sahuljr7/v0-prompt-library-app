import { Prompt } from './types';

export function parsePromptMarkdown(
  markdown: string,
  category: string
): Prompt[] {
  const prompts: Prompt[] = [];
  
  // Split by ## (level 2 headings which represent prompt titles)
  const sections = markdown.split(/\n## /);
  
  // Remove the first item if it's the category header (# Category: ...)
  if (sections[0].startsWith('# Category:')) {
    sections.shift();
  }
  
  sections.forEach((section, index) => {
    const lines = section.split('\n');
    const title = lines[0].trim();
    
    if (!title) return;
    
    let description = '';
    let content = '';
    let inCodeBlock = false;
    let contentLines: string[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('**Description**:')) {
        description = line.replace('**Description**:', '').trim();
      } else if (line.startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        if (inCodeBlock) {
          contentLines.push(line);
        } else {
          contentLines.push(line);
        }
      } else if (inCodeBlock || line.trim()) {
        contentLines.push(line);
      }
    }
    
    content = contentLines.join('\n').trim();
    
    // Generate ID based on category and title
    const id = `${category}-${title}`
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    
    // Extract tags from description (look for #tag patterns)
    const tagMatches = description.match(/#\w+/g) || [];
    const tags = tagMatches.map(tag => tag.substring(1));
    
    if (title && content) {
      prompts.push({
        id,
        category,
        title,
        description,
        content,
        isFavorite: false,
        tags,
      });
    }
  });
  
  return prompts;
}
