import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "AI-Powered Development",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Cyber Security Expert",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "AI-Powered Full Stack Developer",
    companyName: "Freelance & Self-Employed",
    icon: meta,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Developing intelligent web applications using AI tools like Cursor and Zencoder with 9-10 months of hands-on experience.",
      "Building secure, scalable full-stack applications with MERN stack technologies.",
      "Implementing AI-assisted code generation, optimization, and debugging across multiple programming languages.",
      "Creating robust authentication systems with multi-factor authentication, JWT, and advanced encryption.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    companyName: "Self-Taught & YouTube Learning",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Mastered MERN stack development through comprehensive YouTube courses and self-learning.",
      "Built multiple full-featured applications including e-commerce platforms, task management systems, and portfolio websites.",
      "Implemented responsive design and modern UI/UX principles in all projects.",
      "Gained 1.5+ years of practical experience in full-stack web development.",
    ],
  },
  {
    title: "Cyber Security Specialist",
    companyName: "Certified Professional",
    icon: shopify,
    iconBg: "#383E56",
    date: "2023 - 2025",
    points: [
      "Certified Ethical Hacker (CEH) with expertise in identifying and fixing critical vulnerabilities.",
      "Certified Ethical Forensics (CEF) with digital forensics and investigation skills.",
      "UPIFS Cyber Forensic certification with law enforcement background.",
      "Developed automated vulnerability scanning tools for web applications.",
    ],
  },
  {
    title: "Student - BCA",
    companyName: "IIMT University",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2022 - 2025",
    points: [
      "Comprehensive study in computer applications, software development, and modern programming paradigms.",
      "Focus on AI development, cybersecurity, and full-stack web technologies.",
      "Active learning through projects and practical implementation of theoretical concepts.",
      "Building a strong foundation for advanced software development and security practices.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Shivanshu's expertise in cybersecurity is exceptional. He helped us identify and fix critical vulnerabilities that could have cost us millions. His attention to detail and proactive approach is unmatched.",
    name: "Priya Sharma",
    designation: "CTO",
    company: "TechCorp Solutions",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Shivanshu was a game-changer for our development team. His MERN stack expertise and security-first approach helped us build robust applications that our clients love.",
    name: "Rajesh Kumar",
    designation: "Lead Developer",
    company: "InnovateLab",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Shivanshu's portfolio website itself is a testament to his skills. The 3D animations, smooth interactions, and attention to detail showcase his technical prowess perfectly.",
    name: "Anjali Patel",
    designation: "UI/UX Designer",
    company: "CreativeStudio",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "SurakshaSetu",
    description:
      "Enterprise-grade AI-powered fraud detection platform. Real-time protection from email fraud, SMS/call scams, financial fraud, and cyber threats. 95%+ accuracy, sub-100ms latency, instant multi-channel alerts via mobile app, web dashboard, and WhatsApp bot.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "green-text-gradient",
      },
      {
        name: "fraud-detection",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
    visitLink: "https://surakhsa-setu.netlify.app",
  },
  {
    name: "AI Career Mentor",
    description:
      "An intelligent career guidance platform that helps professionals navigate their AI and tech career paths with personalized mentorship. Features AI-powered recommendations and career guidance.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "mentorship",
        color: "green-text-gradient",
      },
      {
        name: "career",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
    visitLink: "https://ai-tech-mentor.netlify.app",
  },
  {
    name: "Githacks",
    description:
      "A comprehensive cybersecurity learning platform offering advanced ethical hacking training and digital defense education. Features hands-on security challenges and professional training modules.",
    tags: [
      {
        name: "cybersecurity",
        color: "blue-text-gradient",
      },
      {
        name: "ethical-hacking",
        color: "green-text-gradient",
      },
      {
        name: "training",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
    visitLink: "https://githackscyber.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
