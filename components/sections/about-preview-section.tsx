// components/sections/about-preview-section.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AboutPreviewSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Results-driven Systems Engineer with extensive experience in product development, 
            test automation, and regulatory compliance. Currently working at SHL Medical, 
            I specialize in requirements engineering, cross-functional collaboration, 
            and system integration for medical device development.
          </p>
          <Button asChild variant="outline">
            <Link href="/about">
              Learn More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}