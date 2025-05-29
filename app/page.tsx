'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Zap, Users, Award, Briefcase } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Ratan Bunkar
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white/80 hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ratan Bunkar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
              Systems Integration Engineer specializing in medical device development, test automation, and regulatory compliance. 
              Passionate about creating innovative solutions that bridge engineering excellence with real-world impact.
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:ratanbunkar2@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <p className="text-lg text-white/80 max-w-4xl mx-auto">
              Results-driven Systems Engineer with extensive experience in product development, test automation, 
              and regulatory compliance. Currently working at SHL Medical, I specialize in requirements engineering, 
              cross-functional collaboration, and system integration for medical device development.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Briefcase, 
                title: 'Systems Engineering', 
                desc: 'Requirements engineering, DFMEA, design transfer, and regulatory compliance (ISO 13485, ISO 14971)' 
              },
              { 
                icon: Code, 
                title: 'Test Automation', 
                desc: 'Python-based automation, custom jigs, Computer-Aided Test Systems (CATS), and validation protocols' 
              },
              { 
                icon: Users, 
                title: 'Cross-Functional Leadership', 
                desc: 'Collaborating with mechanical, electrical, software, and safety teams to deliver compliant products' 
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Experience</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              My journey in systems engineering and medical device development
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                company: 'SHL Medical',
                position: 'System Engineer',
                period: 'May 2023 - Present',
                location: 'Taiwan',
                achievements: [
                  'Led requirements engineering across manufacturing, reliability, and user functionality domains',
                  'Developed Python-based automation for Computer-Aided Test Systems (CATS)',
                  'Supported DFMEA processes in compliance with ISO 13485 and ISO 14971',
                  'Created custom test fixtures and equipment specifications for product verification'
                ]
              },
              {
                company: 'Taipei Tech - Systems and Control Lab',
                position: 'Research Assistant',
                period: '2021 - 2023',
                location: 'Taipei, Taiwan',
                achievements: [
                  'Developed noise reduction algorithms using Non-Negative Matrix Factorization (NMF)',
                  'Co-authored research paper presented at ICSS&E 2022',
                  'Received Taipei Tech International Student Scholarship for academic excellence',
                  'Conducted peer review activities for academic journals and conferences'
                ]
              },
              {
                company: 'DCM Engineering Products', 
                position: 'Control Systems Engineering Intern',
                period: 'Mar - Aug 2019',
                location: 'India',
                achievements: [
                  'Implemented PLC-based control systems using Ladder Logic and Simatic Step 7',
                  'Developed HMI systems for intuitive operator control and monitoring',
                  'Created system documentation and control flow diagrams',
                  'Reduced machine downtime through efficient system commissioning'
                ]
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.position}</h3>
                    <h4 className="text-xl text-blue-400 mb-2">{job.company}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80">{job.period}</p>
                    <p className="text-white/60">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-white/70 flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Key Projects</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Major projects showcasing my expertise in medical device development and systems engineering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Elexy - Electromechanical Autoinjector',
                desc: 'Led development of Power Unit Test Bench, authored IQC protocols, and identified critical design failures across electronics and mechanical components.',
                tech: ['Python', 'Test Automation', 'DFMEA', 'IQC Protocols'],
                category: 'Medical Device'
              },
              {
                title: 'SmartHub - Wireless Data Collector',
                desc: 'Delivered complete A-phase development including SRS, SDS, system verification, and BLE data transmission to cloud infrastructure.',
                tech: ['BLE', 'Cloud Integration', 'System Integration', 'Requirements Engineering'],
                category: 'IoT Device'
              },
              {
                title: 'Molly cCap - BLE Autoinjector Cap',
                desc: 'Leading systems engineering for BLE-enabled autoinjector cap with custom test fixture development and automated testing software.',
                tech: ['BLE', 'Test Fixtures', 'Python Automation', 'Hardware Design'],
                category: 'Medical Device'
              },
              {
                title: 'NMF Noise Reduction Algorithm',
                desc: 'Developed and validated noise reduction algorithm using Non-Negative Matrix Factorization, presented at ICSS&E 2022.',
                tech: ['Python', 'Signal Processing', 'Machine Learning', 'Research'],
                category: 'Research'
              },
              {
                title: 'Industrial PLC Systems',
                desc: 'Implemented scalable PLC-based control systems with HMI interfaces for manufacturing automation and process optimization.',
                tech: ['Ladder Logic', 'Simatic Step 7', 'HMI', 'SCADA'],
                category: 'Automation'
              },
              {
                title: 'Computer-Aided Test Systems',
                desc: 'Designed and programmed CATS for automated verification of medical device functionality and regulatory compliance.',
                tech: ['Python', 'Test Automation', 'Regulatory Compliance', 'Validation'],
                category: 'Test Systems'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-lg rounded-full text-white text-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Technical expertise spanning systems engineering, automation, and regulatory compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Python', 'Systems Engineering', 'ISO 13485', 'ISO 14971',
              'Test Automation', 'DFMEA', 'Requirements Engineering', 'PLC Programming',
              'Ladder Logic', 'SysML', 'UML', 'Regulatory Compliance',
              'Medical Devices', 'BLE', 'React', 'Node.js',
              'Machine Learning', 'Signal Processing', 'Docker', 'Git'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-lg font-semibold text-white">{skill}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Interested in collaborating on systems engineering projects or discussing opportunities in medical device development? 
              Let's connect and explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:ratanbunkar2@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <span className="mr-2">📍</span>
                Taoyuan City, Taiwan
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Ratan Bunkar. Systems Integration Engineer specializing in medical device development.
          </p>
        </div>
      </footer>
    </div>
  );
}