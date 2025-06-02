'use client';

// app/experience/page.tsx
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { experiences } from '@/data/portfolio-data';

export default function ExperiencePage() {
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
              Professional{' '}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My journey in systems engineering, medical device development, and automation. 
              Each role has contributed to my expertise in creating innovative solutions 
              that bridge engineering excellence with real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>
              
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="border-2 border-primary/20">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <CardTitle className="text-2xl mb-2">
                              {experience.position}
                            </CardTitle>
                            <CardDescription className="text-xl text-primary font-semibold">
                              {experience.company}
                            </CardDescription>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {experience.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {experience.location}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-6">
                          {experience.description}
                        </p>
                        
                        <div className="space-y-3 mb-6">
                          <h4 className="font-semibold text-sm">Key Achievements:</h4>
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm">Technologies & Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 px-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Skills and expertise developed throughout my professional journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Systems Engineering",
                description: "Requirements engineering, DFMEA, design transfer, and regulatory compliance (ISO 13485, ISO 14971)",
                skills: ["Requirements Engineering", "DFMEA", "ISO Standards", "Design Transfer"]
              },
              {
                title: "Test Automation",
                description: "Python-based automation, custom jigs, Computer-Aided Test Systems (CATS), and validation protocols",
                skills: ["Python", "Test Automation", "CATS", "Validation"]
              },
              {
                title: "Cross-Functional Leadership",
                description: "Collaborating with mechanical, electrical, software, and safety teams to deliver compliant products",
                skills: ["Team Leadership", "Project Management", "Cross-functional Collaboration", "Communication"]
              }
            ].map((competency, index) => (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{competency.title}</CardTitle>
                    <CardDescription>{competency.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {competency.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}