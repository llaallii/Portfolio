export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'best-practices-for-medical-device-test-automation',
    title: 'Best Practices for Medical Device Test Automation',
    excerpt:
      'Exploring effective strategies for implementing automated testing in medical device development while maintaining regulatory compliance.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Automation',
    tags: ['Medical Devices', 'Test Automation', 'ISO 13485'],
  },
  {
    id: '2',
    slug: 'requirements-engineering-in-complex-systems',
    title: 'Requirements Engineering in Complex Systems',
    excerpt:
      'A deep dive into how proper requirements engineering can make or break complex system implementations.',
    date: '2024-01-08',
    readTime: '6 min read',
    category: 'Systems Engineering',
    tags: ['Requirements', 'Systems', 'Engineering'],
  },
  {
    id: '3',
    slug: 'python-for-engineering-automation',
    title: 'Python for Engineering Automation',
    excerpt:
      'How Python has transformed our approach to engineering automation and the tools that make it possible.',
    date: '2024-01-01',
    readTime: '10 min read',
    category: 'Programming',
    tags: ['Python', 'Automation', 'Engineering'],
  },
];
