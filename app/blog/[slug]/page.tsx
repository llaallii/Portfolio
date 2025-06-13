import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

interface Params {
  params: { slug: string };
}

export default function BlogPostPage({ params }: Params) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 px-4">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-muted-foreground mb-8">{post.excerpt}</p>
          <p>Blog post content coming soon.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
