import React from "react";
import {
  Code2,
  Layout,
  Database,
  Github,
  Terminal,
  Linkedin,
  Twitter,
  Cloud,
  Brain,
  Cpu,
  Blocks,
} from "lucide-react";
import type {
  Experience,
  PersonalInfo,
  Project,
  Skill,
  SocialLink,
  Education,
  LearningItem,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Youssef Labrahmi",
  role: "Human Software Engineer",
  email: "youssef0labrahmi@gmail.com",
  availability: true,
  bio: "Crafting elegant solutions through code",
  resumeUrl: "/youssef-labrahmi.pdf",
  location: "Morocco",
};

export const skills: Skill[] = [
  {
    name: "Frontend",
    icon: Layout,
    description: "Building responsive interfaces",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Three.js",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    icon: Code2,
    description: "Server-side development",
    technologies: [
      "Nest JS",
      "Django",
      "Laravel",
      "Design Patterns",
      "Microservices",
    ],
  },
  {
    name: "Systems",
    icon: Terminal,
    description: "Low-level programming",
    technologies: ["C/C++", "Bash", "Linux", "System Admin", "Networking"],
  },
  {
    name: "DevOps",
    icon: Cloud,
    description: "Development operations",
    technologies: ["Docker", "CI/CD", "Nginx", "Git", "AWS"],
  },
  {
    name: "Database",
    icon: Database,
    description: "Data management",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "SQL"],
  },
  {
    name: "Other",
    icon: Terminal,
    description: "Additional expertise",
    technologies: [
      "IoT",
      "Resberry Pi",
      "Adobe Tools",
      "Design Patterns",
      "...",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Inception-42",
    description:
      "containerized infrastructure using Docker, consisting of Nginx, MariaDB, and WordPress. The containers are orchestrated using Docker Compose, and custom images are created for each service.",
    image: "/projects/inception/project.png",
    technologies: ["Docker", "System administration"],
    github: "https://github.com/Labrahmi/Inception-42",
    live: "#",
    category: "DevOps",
  },
  {
    title: "ThreeJS Game",
    description:
      "A 3D game built using Three.js. The game features a player character that can move around a scene, with lighting and textures applied to the environment.",
    image: "/projects/threejsGame/project.png",
    technologies: ["Three.js", "TypeScript", "React"],
    github: "https://github.com/Labrahmi/Game3d",
    live: "#",
    category: "Frontend",
  },
  {
    title: "CanteenApp",
    description:
      "Electron.js and Node.js desktop app for school canteen management, providing comprehensive tools for tracking items, transactions, and user data.",
    image: "/projects/canteenApp/project_2.png",
    technologies: ["Electron.js", "Tailwind CSS", "Node.js"],
    github: "https://github.com/Labrahmi/CanteenApp",
    live: "#",
    category: "Frontend",
  },
  {
    title: "Web Server",
    description:
      "HTTP Server built using C/C++. the project aims to teach server socket fundamentals, non blocking, file descriptors monitoring, team collaboration..",
    image: "/projects/WebServer/project.png",
    technologies: [
      "C/C++",
      "Unix",
      "Network Programming",
      "System Administration",
      "Object-Oriented Programming",
    ],
    github: "https://github.com/Labrahmi/WebServer",
    live: "#",
    category: "Backend",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "1337 Coding School",
    location: "Tetouan Metropolitan Area, Morocco",
    status: "Internship",
    period: "Nov 2024 - Present",
    description: [
      "Building smart, high-performance solutions using modern tech stack",
      "Creating scalable and user-friendly applications for business growth",
      "Implementing future-proof systems with latest technologies",
      "Working on-site as part of the development team",
    ],
    skills: ["TypeScript", "Next.js", "Nest.js", "PostgreSQL", "System Design"],
    color: "from-blue-500/10 via-indigo-500/10 to-purple-500/10",
    link: "https://1337.ma",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "London Academy",
    location: "Casablanca-Settat, Morocco",
    status: "Full-time",
    period: "Apr 2024 - Nov 2024",
    description: [
      "Designed and developed a cross-platform Canteen Management System using Electron.js, Node.js, Express, and MongoDB",
      "Led a team of 3 developers to create a Smart Attendance System using IoT devices and web application",
      "Deployed and maintained Samsung Knox for managing 500+ devices across Casablanca and Rabat campuses",
      "Streamlined operations through custom Python and Bash scripts for data handling and administrative tasks",
      "Oversaw badge automation scripts for student and staff ID generation",
    ],
    skills: ["Nest.js", "IoT", "Python", "Bash", "MERN Stack"],
    color: "from-green-500/10 via-emerald-500/10 to-teal-500/10",
    link: "https://londonacademy.ma",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Upwork",
    location: "Remote",
    status: "Freelance",
    period: "Mar 2024 - Apr 2024",
    description: [
      "Developed full-stack web applications for various clients",
      "Implemented responsive and user-friendly interfaces",
      "Delivered high-quality solutions within project timelines",
    ],
    skills: ["Nest.js", "MongoDB", "Node.js", "Web Development", "Rest APIs"],
    color: "from-purple-500/10 via-pink-500/10 to-rose-500/10",
    link: "https://www.upwork.com",
  },
];

export const education: Education[] = [
  {
    id: 1,
    title: "Software Engineering",
    institution: "1337 Coding School",
    period: "Sep 2022 - Present",
    description:
      "Peer-to-peer learning program focusing on software engineering and computer science fundamentals",
  },
  {
    id: 2,
    title: "Professional Bachelor in Information Technology",
    institution: "Université Abdelmalek Essaâdi Tétouan",
    period: "Sep 2022 - Jul 2023",
    description:
      "Bachelor's degree focused on advanced computer science and software development",
  },
  {
    id: 3,
    title: "Higher Technician Diploma (BTS) in Information Technology",
    institution: "Preparatory class of Lissane Eddine Ibn Al-Khatib",
    period: "2020 - 2022",
    description:
      "Technical diploma with focus on programming and network administration",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Labrahmi",
    icon: Github,
    color: "group-hover:text-[#333] group-hover:bg-white/90",
    description: "Code repositories",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/labrahmiy",
    icon: Linkedin,
    color: "group-hover:text-white group-hover:bg-[#0077b5]",
    description: "Professional profile",
  },
  {
    name: "X",
    url: "https://x.com/youssef__io",
    icon: Twitter,
    color: "group-hover:text-white group-hover:bg-[#0077b5]",
    description: "Social media presence",
  },
];

export const navigationLinks = [
  { name: "Home", href: "#top" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export const currentlyLearning: LearningItem[] = [
  {
    title: "Natural Language Processing",
    description:
      "Building applications that can understand and generate human language using machine learning and deep learning techniques. Focusing on text classification, sentiment analysis, language generation, and chatbot development with frameworks like TensorFlow and PyTorch",
    progress: 10,
    startedDate: "2025",
    icon: Brain,
  },
  {
    title: "Advanced Web 3D Graphics",
    description:
      "Exploring advanced 3D rendering techniques in web browsers using WebGL and WebGPU APIs. Learning core graphics programming concepts like shaders, textures, lighting, and animation while building interactive 3D visualizations and experiences. Focusing on performance optimization and cross-browser compatibility.",
    progress: 30,
    startedDate: "2024",
    icon: Brain,
  },
  {
    title: "Cloud Computing",
    description:
      "Learning how to deploy and manage cloud-based applications and services using cloud platforms like AWS, Azure, or Google Cloud. Focusing on cloud architecture, scalability, security, and cost optimization.",
    progress: 10,
    startedDate: "2025",
    icon: Cloud,
  },
];
