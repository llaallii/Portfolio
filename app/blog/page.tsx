'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Best Practices for Medical Device Test Automation",
    excerpt: "Exploring effective strategies for implementing automated testing in medical device development while maintaining regulatory compliance.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Automation",
    tags: ["Medical Devices", "Test Automation", "ISO 13485"]
  },
  {
    id: 2,
    title: "Requirements Engineering in Complex Systems",
    excerpt: "A deep dive into how proper requirements engineering can make or break complex system implementations.",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Systems Engineering",
    tags: ["Requirements", "Systems", "Engineering"]
  },
  {
    id: 3,
    title: "Python for Engineering Automation",
    excerpt: "How Python has transformed our approach to engineering automation and the tools that make it possible.",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "Programming",
    tags: ["Python", "Automation", "Engineering"]
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Insights, experiences, and lessons learned from the world of systems engineering, 
              medical device development, and automation. Stay tuned for regular updates!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Blog Coming Soon!</CardTitle>
                <CardDescription>
                  I'm currently working on setting up my blog where I'll share insights 
                  about systems engineering, medical device development, and automation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  In the meantime, feel free to connect with me on LinkedIn or check out 
                  my projects to see what I'm working on.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <a href="https://linkedin.com/in/ratanbunkar" target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/projects">
                      View My Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Planned Content Preview */}
      <section className="py-20 px-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
            <p className="text-lg text-muted-foreground">
              Topics I'll be covering in upcoming blog posts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="ghost" size="sm" disabled className="w-full">
                      Coming Soon
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Want to be notified when I publish new blog posts? 
              Connect with me on LinkedIn for updates.
            </p>
            <Button asChild size="lg">
              <a href="https://linkedin.com/in/ratanbunkar" target="_blank" rel="noopener noreferrer">
                Follow on LinkedIn
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}