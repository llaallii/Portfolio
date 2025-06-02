// data/portfolio-data.ts

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'soft' | 'tools' | 'frameworks';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export const personalInfo = {
  name: "Ratan Bunkar",
  title: "Systems Integration Engineer",
  email: "ratanbunkar2@gmail.com",
  location: "Taoyuan City, Taiwan",
  description: "Systems Integration Engineer specializing in medical device development, test automation, and regulatory compliance. Passionate about creating innovative solutions that bridge engineering excellence with real-world impact.",
  social: {
    github: "#",
    linkedin: "#",
    email: "mailto:ratanbunkar2@gmail.com"
  }
};

export const experiences: Experience[] = [
  {
    id: "shl-medical",
    company: "SHL Medical",
    position: "System Engineer",
    period: "May 2023 - Present",
    location: "Taiwan",
    description: "Leading requirements engineering across manufacturing, reliability, and user functionality domains",
    achievements: [
      "Led requirements engineering across manufacturing, reliability, and user functionality domains",
      "Developed Python-based automation for Computer-Aided Test Systems (CATS)",
      "Supported DFMEA processes in compliance with ISO 13485 and ISO 14971",
      "Created custom test fixtures and equipment specifications for product verification"
    ],
    technologies: ["Python", "ISO 13485", "ISO 14971", "DFMEA", "Test Automation"]
  },
  {
    id: "taipei-tech",
    company: "Taipei Tech - Systems and Control Lab",
    position: "Research Assistant",
    period: "2021 - 2023",
    location: "Taipei, Taiwan",
    description: "Conducted research on noise reduction algorithms and signal processing",
    achievements: [
      "Developed noise reduction algorithms using Non-Negative Matrix Factorization (NMF)",
      "Co-authored research paper presented at ICSS&E 2022",
      "Received Taipei Tech International Student Scholarship for academic excellence",
      "Conducted peer review activities for academic journals and conferences"
    ],
    technologies: ["Python", "Machine Learning", "Signal Processing", "Research"]
  },
  {
    id: "dcm-engineering",
    company: "DCM Engineering Products",
    position: "Control Systems Engineering Intern",
    period: "Mar - Aug 2019",
    location: "India",
    description: "Implemented PLC-based control systems for industrial automation",
    achievements: [
      "Implemented PLC-based control systems using Ladder Logic and Simatic Step 7",
      "Developed HMI systems for intuitive operator control and monitoring",
      "Created system documentation and control flow diagrams",
      "Reduced machine downtime through efficient system commissioning"
    ],
    technologies: ["PLC Programming", "Ladder Logic", "Simatic Step 7", "HMI", "SCADA"]
  }
];

export const projects: Project[] = [
  {
    id: "elexy-autoinjector",
    title: "Elexy - Electromechanical Autoinjector",
    description: "Led development of Power Unit Test Bench, authored IQC protocols, and identified critical design failures across electronics and mechanical components.",
    longDescription: "Comprehensive development project for an electromechanical autoinjector device, focusing on power unit testing, quality control protocols, and system reliability analysis.",
    technologies: ["Python", "Test Automation", "DFMEA", "IQC Protocols"],
    category: "Medical Device",
    featured: true
  },
  {
    id: "smarthub-collector",
    title: "SmartHub - Wireless Data Collector",
    description: "Delivered complete A-phase development including SRS, SDS, system verification, and BLE data transmission to cloud infrastructure.",
    longDescription: "End-to-end development of a wireless data collection system with cloud integration capabilities, focusing on system requirements and design specifications.",
    technologies: ["BLE", "Cloud Integration", "System Integration", "Requirements Engineering"],
    category: "IoT Device",
    featured: true
  },
  {
    id: "molly-ccap",
    title: "Molly cCap - BLE Autoinjector Cap",
    description: "Leading systems engineering for BLE-enabled autoinjector cap with custom test fixture development and automated testing software.",
    longDescription: "Advanced medical device project involving Bluetooth Low Energy integration, custom hardware design, and comprehensive testing frameworks.",
    technologies: ["BLE", "Test Fixtures", "Python Automation", "Hardware Design"],
    category: "Medical Device",
    featured: true
  },
  {
    id: "nmf-noise-reduction",
    title: "NMF Noise Reduction Algorithm",
    description: "Developed and validated noise reduction algorithm using Non-Negative Matrix Factorization, presented at ICSS&E 2022.",
    longDescription: "Research project focused on advanced signal processing techniques for noise reduction using machine learning algorithms.",
    technologies: ["Python", "Signal Processing", "Machine Learning", "Research"],
    category: "Research",
    featured: false
  },
  {
    id: "industrial-plc",
    title: "Industrial PLC Systems",
    description: "Implemented scalable PLC-based control systems with HMI interfaces for manufacturing automation and process optimization.",
    longDescription: "Industrial automation project involving programmable logic controllers, human-machine interfaces, and SCADA systems for manufacturing optimization.",
    technologies: ["Ladder Logic", "Simatic Step 7", "HMI", "SCADA"],
    category: "Automation",
    featured: false
  },
  {
    id: "cats-system",
    title: "Computer-Aided Test Systems",
    description: "Designed and programmed CATS for automated verification of medical device functionality and regulatory compliance.",
    longDescription: "Automated testing system designed for medical device verification, ensuring compliance with regulatory standards and improving testing efficiency.",
    technologies: ["Python", "Test Automation", "Regulatory Compliance", "Validation"],
    category: "Test Systems",
    featured: false
  }
];

export const skills: Skill[] = [
  // Technical Skills
  { id: "python", name: "Python", category: "technical", level: "expert" },
  { id: "systems-engineering", name: "Systems Engineering", category: "technical", level: "expert" },
  { id: "test-automation", name: "Test Automation", category: "technical", level: "expert" },
  { id: "plc-programming", name: "PLC Programming", category: "technical", level: "advanced" },
  { id: "machine-learning", name: "Machine Learning", category: "technical", level: "intermediate" },
  { id: "signal-processing", name: "Signal Processing", category: "technical", level: "advanced" },
  
  // Frameworks & Tools
  { id: "iso-13485", name: "ISO 13485", category: "frameworks", level: "expert" },
  { id: "iso-14971", name: "ISO 14971", category: "frameworks", level: "expert" },
  { id: "dfmea", name: "DFMEA", category: "frameworks", level: "advanced" },
  { id: "requirements-engineering", name: "Requirements Engineering", category: "frameworks", level: "expert" },
  
  // Tools
  { id: "ladder-logic", name: "Ladder Logic", category: "tools", level: "advanced" },
  { id: "simatic-step7", name: "Simatic Step 7", category: "tools", level: "advanced" },
  { id: "sysml", name: "SysML", category: "tools", level: "intermediate" },
  { id: "uml", name: "UML", category: "tools", level: "intermediate" },
  { id: "docker", name: "Docker", category: "tools", level: "intermediate" },
  { id: "git", name: "Git", category: "tools", level: "advanced" },
  
  // Soft Skills
  { id: "cross-functional-leadership", name: "Cross-Functional Leadership", category: "soft", level: "expert" },
  { id: "regulatory-compliance", name: "Regulatory Compliance", category: "soft", level: "expert" },
  { id: "technical-documentation", name: "Technical Documentation", category: "soft", level: "expert" },
  { id: "project-management", name: "Project Management", category: "soft", level: "advanced" }
];