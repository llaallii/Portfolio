// components/sections/cta-section.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in collaborating on systems engineering projects or discussing 
            opportunities in medical device development? Let's connect and explore 
            how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">View Portfolio</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}