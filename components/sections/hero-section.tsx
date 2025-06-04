// components/sections/hero-section.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio-data';

// Dynamically import the 3D scene so it's only loaded when needed
const Hero3D = dynamic(() => import('../ui/hero-3d'), { ssr: false });

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    if (!shouldReduceMotion) {
      // Only load the heavy 3D scene when the user hasn't opted out of motion
      setShow3D(true);
    }
  }, [shouldReduceMotion]);

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Render a static background for users that prefer reduced motion */}
      {!show3D && (
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      )}
      {show3D && <Hero3D />}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
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