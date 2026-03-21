import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - PromptLib',
  description: 'Read articles about AI prompts, creative writing, and productivity',
};

const blogPosts = [
  {
    id: 1,
    title: 'How to Write Effective AI Prompts',
    excerpt: 'Learn the fundamentals of crafting prompts that produce better results from AI models. Discover proven techniques used by professionals.',
    content: `Writing effective AI prompts is both an art and a science. In this comprehensive guide, we'll explore the key principles that make prompts work better.

The foundation of a good prompt is clarity. Be specific about what you want the AI to do. Instead of asking "Write something about AI," try "Write a 500-word blog post introduction about AI prompt engineering best practices."

Structure matters too. Break down complex requests into smaller, manageable parts. Use formatting like bullet points or numbered lists to help the AI understand what you're looking for.

Context is crucial. The more context you provide about your use case, audience, and goals, the better the AI can tailor its response. Don't assume the AI knows your background or constraints.

Remember that iteration is key. Your first prompt might not be perfect, and that's okay. Refine it based on the output you get, and keep improving.`,
    date: 'March 15, 2024',
    category: 'Writing',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Boost Your Productivity with AI: A Developer\'s Guide',
    excerpt: 'Discover how developers can leverage AI prompts to automate tasks, generate code snippets, and write better documentation faster.',
    content: `AI has become an indispensable tool in modern software development. Whether you're building a startup MVP or maintaining legacy code, AI can significantly boost your productivity.

One of the most practical applications is code generation. With the right prompts, AI can help you generate boilerplate code, create test cases, and even suggest optimizations for your existing code.

Documentation is another area where AI excels. Instead of spending hours writing technical documentation, you can use AI to generate comprehensive docs from your code comments and structure.

Code review is also getting smarter. AI can help you identify potential bugs, suggest improvements, and ensure your code follows best practices.

The key is learning how to craft prompts that work with your development workflow. Start small with simple tasks and gradually expand to more complex uses.`,
    date: 'March 10, 2024',
    category: 'Development',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Content Creation at Scale: Using AI Prompts for Marketing',
    excerpt: 'Explore how marketing teams can use AI prompts to create consistent, high-quality content while maintaining brand voice and messaging.',
    content: `Content marketing at scale is challenging, but AI prompts can make it significantly easier. Let's explore how successful marketing teams are using this technology.

First, consistency is key. AI can help maintain a consistent brand voice across multiple pieces of content, from social media posts to blog articles. By establishing clear brand guidelines in your prompts, you ensure quality across channels.

Speed is another major benefit. What used to take hours can now be done in minutes. Create prompts for different content types—headlines, captions, email copy—and generate multiple variations to test.

Personalization at scale is now possible. Use AI to generate tailored content for different audience segments based on their interests and demographics.

The most successful approach combines AI efficiency with human creativity. Use AI to handle repetitive tasks and generate initial drafts, then refine them with human judgment and creativity.`,
    date: 'March 5, 2024',
    category: 'Marketing',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-20 pb-16 sm:pt-32 sm:pb-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
                Blog
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Articles and insights about AI prompts, creativity, and productivity
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 sm:py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="space-y-8 sm:space-y-12">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="pb-8 sm:pb-12 border-b border-border last:border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-2 sm:space-y-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        {post.date}
                      </span>
                      <span className="text-xs text-muted-foreground/60">•</span>
                      <span>{post.category}</span>
                      <span className="text-xs text-muted-foreground/60">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h2>

                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm sm:text-base font-medium group">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
