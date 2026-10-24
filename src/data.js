export const profile = {
  name: "Raman Dangol",
  email: "dangolraman3@gmail.com",
  phone: "+977 9763774451",
  github: "https://github.com/raman1224",
  linkedin: "https://linkedin.com/in/dangol1224",
  whatsapp: "https://wa.me/+9779763774451",
}

export const aboutLinks = [
  ["Newar Samaj", "https://newarsamaj-eight.vercel.app"],
  ["Medicare Nepal", "https://medicarenepal.vercel.app/"],
  ["Jobde", "https://jobde.vercel.app"],
  ["MausamNow", "https://mausamnow-orpin.vercel.app"],
  ["DANGOL AI", "https://raman1224.github.io/DANGOL_AI"],
  ["Translator AI", "https://raman1224.github.io/englishtonepali/"],
]

export const highlights = [
  { icon: "Code", title: "Frontend Development", description: "Experienced in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Next js, Api Integration, Rest API, Git and GitHub etc" },
  { icon: "Code", title: "Backend Development", description: "Experienced in Node.js, Express.js, MongoDB, Authentication, REST API, JavaScript, TypeScript and Render etc." },
  { icon: "Lightbulb", title: "AI Innovation", description: "Creator of AI-powered Web applications including Newar Samaj, Medicare Nepal, and Translator AI" },
  { icon: "Users", title: "Learning Journey", description: "Continuously expanding knowledge through personal projects and coursework" },
]

export const skillCategories = [
  { title: "Frontend Development", skills: [
    ["HTML", 99, "Advanced"], ["CSS", 99, "Advanced"], ["Tailwind CSS", 95, "Advanced"], ["JavaScript", 95, "Advanced"],
    ["TypeScript", 90, "Full"], ["React.js", 95, "Advanced"], ["Next.js", 96, "Advanced"], ["Responsive Design", 95, "Advanced"], ["API Integration", 90, "Advanced"] ] },
  { title: "Backend & Database", skills: [
    ["Node.js", 100, "Advanced"], ["Express.js", 88, "Advanced"], ["Authentication", 90, "Advanced"], ["MongoDB", 99, "Advanced"], ["PostgreSQL", 90, "Advanced"], ["Redis", 85, "Full"] ] },
  { title: "Programming Languages", skills: [["Python", 80, "Intermediate"], ["C", 85, "Full"], ["JavaScript", 95, "Advanced"]] },
  { title: "Tools & Version Control", skills: [
    ["Git", 100, "Advanced"], ["GitHub", 100, "Advanced"], ["Docker", 80, "Intermediate"], ["CI/CD", 75, "Intermediate"], ["Figma", 90, "Advanced"], ["Vercel", 100, "Advanced"], ["Render", 90, "Advanced"] ] },
]

export const experiences = [
  { title: "MERN Stack Developer Intern", company: "SRIYOG Consulting", period: "Jun 2026 - Aug 2026", location: "Kathmandu, Nepal", type: "Internship",
    description: "Worked on full-stack web applications using the MERN stack and Next.js, building modern frontend interfaces, secure backend APIs, CMS features, and optimizing application performance for production-ready projects.",
    achievements: [
      "Developed responsive web applications using React, Next.js, TypeScript, and Tailwind CSS",
      "Built a complete Admin CMS with authentication, role-based access control, and CRUD operations",
      "Implemented Blog, Gallery, Events, Notices, and Popup management modules",
      "Integrated Supabase Authentication, PostgreSQL, Row Level Security (RLS), and Storage",
      "Migrated backend from MongoDB and Cloudinary to Supabase for improved security and scalability",
      "Created reusable UI components and optimized applications using code splitting and lazy loading",
      "Implemented SEO best practices including metadata, sitemap, robots.txt, and structured layouts",
      "Collaborated with senior developers using Git and GitHub in an Agile workflow",
      "Improved website performance, responsiveness, accessibility, and overall user experience",
    ], current: true },
  { title: "Next.js Developer Intern", company: "Inflancer Technology", period: "Jan 2026 - March 2026", location: "Kathmandu, Nepal", type: "Internship",
    description: "Worked on building and improving modern, scalable frontend applications using Next.js and TypeScript while collaborating closely with backend developers.",
    achievements: [
      "Developed and enhanced modern UI using Next.js, TypeScript, and Tailwind CSS",
      "Integrated REST APIs provided by backend developers and implemented full CRUD functionality",
      "Worked with Redux for state management and handled complex frontend logic",
      "Collaborated with backend services built using Node.js and MongoDB",
      "Used Postman for API testing and validation",
      "Implemented smooth animations and interactions using Framer Motion",
      "Focused on responsive design, performance optimization, and clean UI/UX",
      "Tested API flows and frontend logic using Jest",
    ], current: false },
  { title: "OJT Trainee", company: "MMSS", period: "May 2024 - Nov 2024", location: "Nuwakot, Nepal", type: "On-the-Job Training",
    description: "Gained practical experience in web development through real-world projects and team collaboration.",
    achievements: [
      "Developed a school news portal using HTML, CSS, JavaScript, PHP, and SQL",
      "Implemented responsive design and used XAMPP server for local development",
      "Focused on debugging and optimizing the portal for better performance",
      "Collaborated with team members and received mentorship from experienced developers",
    ], current: false },
]

export const projects = [
  {
    title: "NEWAR SAMAJ",
    description:
      "Community website for Newar Samaj with event management and member portal.",
    image: "newarsamaj.png",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "https://newarsamaj.vercel.app/",
    githubUrl: "https://github.com/raman1224/newarsamaj",
    featured: false,
  },
  {
    title: "Medicare Nepal",
    description:
      "Healthcare platform focused on accessible health information, medicine details, symptom guidance, and discovering hospitals and blood donation resources in Nepal.",
    image: "workspace.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini AI",
      "REST APIs",
    ],
    liveUrl: "https://medicarenepal.vercel.app/",
    githubUrl: "https://github.com/raman1224/medicare-ai",
    featured: false,
  },
  {
    title: "Jobde",
    description:
      "Job portal connecting employers and job seekers, with job publishing, applications, and role-based access, built for a streamlined hiring experience.",
    image: "logo.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "RBAC",
      "Redis",
      "Docker",
      "GitHub Actions CI/CD",
    ],
    liveUrl: "https://jobde.vercel.app/",
    githubUrl: "https://github.com/raman1224/Jobde",
    featured: true,
  },
  {
    title: "Volleyball Tournament",
    description:
      "Full-stack tournament management platform for team registration, player and jersey management, payment verification, and tournament administration, with secure access for participants and administrators.",
    image: "vbt.jpeg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Authentication",
      "RBAC",
      "OTP Verification",
      "Payment Integration",
    ],
    liveUrl: "https://nbycvolleyballtournament.vercel.app/",
    githubUrl: "https://github.com/raman1224/samdhicup",
    featured: true,
  },
  {
    title: "DANGOL AI",
    description:
      "AI-powered web application exploring intelligent features and AI integration through a lightweight, interactive user interface.",
    image: "g5.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "AI Integration",
    ],
    liveUrl: "https://dangolai.vercel.app/",
    githubUrl: "https://github.com/raman1224/dangolai",
    featured: true,
  },
  {
    title: "Life Positive Mission (LPM)",
    description:
      "Responsive website for an international nonprofit organization, featuring SEO optimization and a Supabase-powered admin dashboard for managing pages, team members, events, FAQs, gallery content, and contact information.",
    image: "lpm.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Row-Level Security",
      "CRUD Operations",
      "SEO",
      "Framer Motion",
    ],
    liveUrl: "https://lpm.org.np/",
    githubUrl: "https://github.com/BroadPress/lpm.org.np/tree/Raman",
    featured: true,
  },
  {
    title: "SSRVM",
    description:
      "School website with a content management system for managing blogs, events, gallery images, notices, and news. Includes database-backed content, authentication, role-based access control, and cloud media storage.",
    image: "ssrvm.png",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "RBAC",
      "Row-Level Security",
      "Cloud Storage",
      "CRUD Operations",
    ],
    liveUrl: "https://ssrvm.edu.np/",
    githubUrl: "https://github.com/raman1224/ssrvm.edu.np",
    featured: true,
  },
];
export const education = [
  { degree: "Bachelor of Information Technology", institution: "Texas College of Management and IT", period: "2024 – Present", location: "Kathmandu, Nepal", gpa: "---/4.0", status: "Currently Pursuing",
    description: "Focusing on full-stack development, software engineering principles, and modern web technologies.",
    subjects: ["Data Structures & Algorithms", "AI Development", "Database Management Systems", "Web Development", "Software Engineering", "Object-Oriented Programming", "Computer Networks"], current: true },
  { degree: "+2 in Computer Engineering", institution: "Mahendra Maheshdev Secondary School", period: "2020 - 2024", location: "Nuwakot, Nepal", gpa: "3.52 / 4.0", status: "Completed",
    description: "Built strong foundation in computer Engineering fundamentals and programming concepts.",
    subjects: ["C++", "C", "C-Sharp", "Mathematics", "Physics", "Chemistry"], current: false },
]