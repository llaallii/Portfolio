'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { personalInfo, skills } from '@/data/portfolio-data';

export default function AboutPage() {
  const coreSkills = skills.filter(skill => skill.level === 'expert').slice(0, 6);

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
              About{' '}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Passionate systems engineer with a focus on medical device development, 
              automation, and creating innovative solutions that make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Systems Integration Engineer at SHL Medical, where I specialize in 
                  medical device development, test automation, and regulatory compliance. 
                  My journey in engineering has been driven by a passion for creating 
                  solutions that bridge complex technical requirements with real-world applications.
                </p>
                <p>
                  With a Master's degree in Systems and Control Engineering from Taipei Tech, 
                  I've developed expertise in requirements engineering, cross-functional 
                  collaboration, and system integration. My experience spans from developing 
                  Python-based automation systems to ensuring compliance with ISO standards 
                  in the medical device industry.
                </p>
                <p>
                  Currently based in Taiwan, I'm passionate about continuous learning and 
                  contributing to projects that make a meaningful impact. Whether it's 
                  optimizing test processes, implementing new automation solutions, or 
                  collaborating with diverse teams, I thrive on solving complex challenges.
                </p>
              </div>
            </motion.div>

            {/* Skills & Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Core Expertise</CardTitle>
                  <CardDescription>
                    Key areas where I excel and create value
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {coreSkills.map((skill) => (
                      <Badge key={skill.id} variant="secondary" className="justify-center py-2">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Personal Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Specialization</span>
                    <span>Systems Engineering</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industry Focus</span>
                    <span>Medical Devices</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Languages</span>
                    <span>English, Mandarin, Hindi</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What Drives Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Creating solutions that improve people's lives",
                      "Continuous learning and skill development",
                      "Collaborating with diverse, talented teams",
                      "Pushing the boundaries of what's possible"
                    ].map((drive, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{drive}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide my work and decision-making
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "I believe in delivering exceptional work that meets the highest standards, especially in critical applications like medical devices."
              },
              {
                title: "Continuous Improvement",
                description: "Always looking for ways to optimize processes, learn new technologies, and enhance both personal and team capabilities."
              },
              {
                title: "Collaboration",
                description: "The best solutions come from diverse perspectives and effective teamwork across different disciplines and backgrounds."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
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