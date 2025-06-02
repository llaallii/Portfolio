// components/sections/experience-preview-section.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { experiences } from '@/data/portfolio-data';

export function ExperiencePreviewSection() {
  const recentExperience = experiences[0];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Role</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Currently making impact in medical device development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <CardTitle className="text-2xl mb-2">{recentExperience.position}</CardTitle>
                  <CardDescription className="text-xl text-primary">
                    {recentExperience.company}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground">{recentExperience.period}</p>
                  <p className="text-sm text-muted-foreground">{recentExperience.location}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{recentExperience.description}</p>
              <div className="space-y-2 mb-6">
                {recentExperience.achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {recentExperience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              <Button asChild variant="outline">
                <Link href="/experience">
                  View All Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}