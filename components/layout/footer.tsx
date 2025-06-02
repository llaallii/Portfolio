// components/layout/footer.tsx
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { personalInfo } from '@/data/portfolio-data';

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Experience', href: '/experience' },
      { name: 'Projects', href: '/projects' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'Skills', href: '/skills' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
  },
];

const socialLinks = [
  { name: 'GitHub', href: personalInfo.social.github, icon: Github },
  { name: 'LinkedIn', href: personalInfo.social.linkedin, icon: Linkedin },
  { name: 'Email', href: personalInfo.social.email, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Ratan Bunkar
            </h3>
            <p className="text-sm text-muted-foreground">
              Systems Integration Engineer specializing in medical device development and automation.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button key={link.name} variant="ghost" size="icon" asChild>
                    <Link href={link.href}>
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup (for future blog functionality) */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to get notified about new blog posts and updates.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 text-sm border rounded-md bg-background"
              />
              <Button size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Ratan Bunkar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, TypeScript, and shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}