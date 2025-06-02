// app/page.tsx
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutPreviewSection } from '@/components/sections/about-preview-section';
import { ExperiencePreviewSection } from '@/components/sections/experience-preview-section';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects-section';
import { SkillsPreviewSection } from '@/components/sections/skills-preview-section';
import { CTASection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutPreviewSection />
      <ExperiencePreviewSection />
      <FeaturedProjectsSection />
      <SkillsPreviewSection />
      <CTASection />
      <Footer />
    </div>
  );
}