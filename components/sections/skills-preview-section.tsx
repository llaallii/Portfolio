// components/sections/skills-preview-section.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { skills } from '@/data/portfolio-data';

export function SkillsPreviewSection() {
  const topSkills = skills.filter(skill => skill.level === 'expert').slice(0, 8);

  return (
    <section className="py-20 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Technical expertise spanning systems engineering, automation, and regulatory compliance
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {topSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-sm">{skill.name}</h3>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {skill.level}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline">
            <Link href="/skills">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}