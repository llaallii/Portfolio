'use client';

// app/contact/page.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { personalInfo } from '@/data/portfolio-data';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send me an email anytime',
    value: personalInfo.email,
    href: personalInfo.social.email,
    primary: true
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Based in',
    value: personalInfo.location,
    href: '#'
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'Check out my repositories',
    value: 'github.com/ratanbunkar',
    href: personalInfo.social.github
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Connect professionally',
    value: 'linkedin.com/in/ratanbunkar',
    href: personalInfo.social.linkedin
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!res.ok) {
        throw new Error('Failed to send message');
      }
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Let's{' '}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Interested in collaborating on systems engineering projects or discussing 
              opportunities in medical device development? I'd love to hear from you. 
              Let's explore how we can work together to create innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className={`text-center hover:shadow-md transition-shadow ${
                    method.primary ? 'border-primary/50 bg-primary/5' : ''
                  }`}>
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className={`p-3 rounded-full ${
                          method.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}>
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {method.href !== '#' ? (
                        <Button variant="ghost" size="sm" asChild className="text-sm">
                          <a href={method.href}>{method.value}</a>
                        </Button>
                      ) : (
                        <p className="text-sm text-muted-foreground">{method.value}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageSquare className="mr-2 h-6 w-6" />
                    Send a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    {status === 'success' && (
                      <p className="text-sm text-green-600 text-center">Message sent successfully.</p>
                    )}
                    {status === 'error' && (
                      <p className="text-sm text-red-600 text-center">Failed to send message. Please try again.</p>
                    )}
                    {status === 'loading' && (
                      <p className="text-sm text-muted-foreground text-center">Sending...</p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Discuss Your Project</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in hearing about new opportunities, whether it's 
                  a freelance project, consulting work, or a full-time position. Here are 
                  some areas where I can help:
                </p>
                
                <div className="space-y-4">
                  {[
                    'Medical Device Development',
                    'Systems Engineering & Integration',
                    'Test Automation & Validation',
                    'Regulatory Compliance (ISO 13485, ISO 14971)',
                    'Requirements Engineering',
                    'DFMEA & Risk Management',
                    'Python Automation Solutions',
                    'PLC Programming & Industrial Automation'
                  ].map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Response Time</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  I typically respond to messages within 24-48 hours. For urgent matters, 
                  please mention it in your subject line.
                </p>
                
                <h4 className="font-semibold mb-3">Availability</h4>
                <p className="text-sm text-muted-foreground">
                  Currently based in Taiwan (GMT+8) but available for remote collaboration 
                  worldwide. Open to relocating for the right opportunity.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Prefer Social Media?</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}