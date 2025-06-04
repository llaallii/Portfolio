// components/sections/hero-section.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio-data';
import { Suspense, lazy } from 'react';
import HolographicText from '@/components/3d/HolographicText';
import TechnicalMetrics from '@/components/3d/TechnicalMetrics';

const ThreeDHeroBackground = lazy(() => import('@/components/3d/3DHeroBackground'));

export function HeroSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden h-[100vh]">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <Suspense fallback={null}>
        <ThreeDHeroBackground />
      </Suspense>
      <div className="container relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <HolographicText>{personalInfo.name}</HolographicText>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-2">
            Systems Integration &amp; Medical Device Engineer
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {personalInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
            <div className="flex justify-center space-x-4">
              {[
                { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: personalInfo.social.email, label: 'Email' }
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={href}>
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{label}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
            <TechnicalMetrics />
          </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center mt-16"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
