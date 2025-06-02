'use client';

// app/skills/page.tsx
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { skills } from '@/data/portfolio-data';

const skillCategories = [
  { key: 'technical', title: 'Technical Skills', description: 'Core programming and engineering competencies' },
  { key: 'frameworks', title: 'Standards & Frameworks', description: 'Industry standards and methodologies' },
  { key: 'tools', title: 'Tools & Technologies', description: 'Software tools and development environments' },
  { key: 'soft', title: 'Professional Skills', description: 'Leadership and collaboration capabilities' }
];

const levelColors = {
  beginner: 'bg-red-500',
  intermediate: 'bg-yellow-500',
  advanced: 'bg-blue-500',
  expert: 'bg-green-500'
};

const levelValues = {
  beginner: 25,
  intermediate: 50,
  advanced: 75,
  expert: 100
};

export default function SkillsPage() {
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
              Skills &{' '}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise, professional skills, 
              and industry knowledge developed through years of experience in systems 
              engineering and medical device development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const categorySkills = skills.filter(skill => skill.category === category.key);
              const expertSkills = categorySkills.filter(skill => skill.level === 'expert').length;
              
              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {categorySkills.length}
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {category.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {expertSkills} Expert Level
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills by Category */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => {
              const categorySkills = skills.filter(skill => skill.category === category.key);
              
              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Card className="h-full hover:shadow-md transition-shadow">
                          <CardHeader className="pb-4">
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-lg">{skill.name}</CardTitle>
                              <Badge 
                                variant="outline" 
                                className={`${levelColors[skill.level]} text-white border-0`}
                              >
                                {skill.level}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Proficiency</span>
                                <span>{levelValues[skill.level]}%</span>
                              </div>
                              <Progress 
                                value={levelValues[skill.level]} 
                                className="h-2"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skill Level Legend */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-6">Proficiency Levels</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {Object.entries(levelColors).map(([level, color]) => (
                <div key={level} className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded ${color}`}></div>
                  <span className="text-sm capitalize">{level}</span>
                  <span className="text-xs text-muted-foreground">
                    ({levelValues[level as keyof typeof levelValues]}%)
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="py-20 px-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
            <p className="text-lg text-muted-foreground">
              Academic background and professional certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Master's Degree</CardTitle>
                <CardDescription>Systems and Control Engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Taipei Tech, Taiwan</p>
                <p className="text-sm text-muted-foreground">
                  Specialized in control systems, automation, and signal processing. 
                  Conducted research in noise reduction algorithms using machine learning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
                <CardDescription>Industry Certifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>ISO 13485 (Medical Devices)</span>
                    <Badge variant="outline">Certified</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>ISO 14971 (Risk Management)</span>
                    <Badge variant="outline">Certified</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>DFMEA Methodology</span>
                    <Badge variant="outline">Certified</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}