const fs = require("fs");
const path = require("path");

const dataContent = `export interface PersonalInfo {
  readonly name: string;
  readonly monogram: string;
  readonly title: string;
  readonly location: string;
  readonly headline: string;
  readonly bio: string;
  readonly status: string;
  readonly email: string;
  readonly github: string;
  readonly linkedin: string;
  readonly calendly: string;
  readonly avatarDefault?: string;
  readonly avatarHover?: string;
}

export interface FeaturedWorkCompanion {
  readonly tag: string;
  readonly title: string;
  readonly subtitle: string;
}

export interface FeaturedWorkItem {
  readonly badge: string;
  readonly title: string;
  readonly subtitle: string;
  readonly linkText: string;
  readonly linkUrl: string;
  readonly companionCards: readonly FeaturedWorkCompanion[];
}

export interface StatCardItem {
  readonly value: string;
  readonly label: string;
  readonly subtitle: string;
}

export interface ProjectItem {
  readonly title: string;
  readonly role: string;
  readonly description: string;
  readonly category: "Full-Stack" | "Frontend" | "Data Analytics";
  readonly previewType: "sales-dashboard" | "mern-app" | "python-analytics";
  readonly techIcons: readonly string[];
  readonly liveUrl?: string;
  readonly githubUrl?: string;
  readonly featured?: boolean;
}

export interface SkillItem {
  readonly name: string;
  readonly category: "fullstack" | "database" | "analytics" | "tooling" | "ai";
  readonly iconKey: string;
}

export interface ExperienceItem {
  readonly period: string;
  readonly role: string;
  readonly organization: string;
  readonly location: string;
  readonly description: string;
  readonly highlights: readonly string[];
}

export interface CertificationItem {
  readonly date: string;
  readonly title: string;
  readonly issuer: string;
  readonly credentialUrl: string;
  readonly category: "PROFESSIONAL CREDENTIAL" | "RECENT TRAINING";
  readonly skills: readonly string[];
}

export interface CommunityItem {
  readonly organization: string;
  readonly role: string;
  readonly description: string;
  readonly memberId: string;
  readonly verifyUrl: string;
  readonly badgeAccent: string;
}

export interface PortfolioData {
  readonly personal: PersonalInfo;
  readonly featuredWork: FeaturedWorkItem;
  readonly statCards: readonly StatCardItem[];
  readonly projects: readonly ProjectItem[];
  readonly technologies: readonly SkillItem[];
  readonly experience: readonly ExperienceItem[];
  readonly certifications: readonly CertificationItem[];
  readonly community: readonly CommunityItem[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Hezekiah Shem Baling",
    monogram: "HSB",
    title: "Aspiring Full-Stack Developer & Data Analyst",
    location: "Philippines",
    headline: "I Build, Analyze & Optimize.",
    bio: "Aspiring full-stack developer with a data analysis background. I build web applications with the MERN stack and use SQL, Python, Excel and Power BI to turn data into decisions.",
    status: "Open to new opportunities",
    email: "hezekiah.baling@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    calendly: "https://calendly.com",
    avatarDefault: "/profile-default.svg",
    avatarHover: "/profile-hover.svg",
  },

  featuredWork: {
    badge: "Flagship Data Project",
    title: "Sales Analytics & Business Intelligence Engine",
    subtitle: "End-to-End SQL Warehouse & Interactive Executive Dashboard",
    linkText: "View Pipeline ↗",
    linkUrl: "#projects",
    companionCards: [
      {
        tag: "API Architecture",
        title: "Express REST Endpoints",
        subtitle: "Sub-50ms query cache with Redis & Node.js",
      },
      {
        tag: "Data Modeling",
        title: "Relational Schema in 3NF",
        subtitle: "ACID compliant transactions & indexed queries",
      },
    ],
  },

  statCards: [
    {
      value: "4+",
      label: "Core Tech Stacks",
      subtitle: "MERN, PostgreSQL, Python & Power BI",
    },
    {
      value: "10+",
      label: "Projects & Pipelines",
      subtitle: "Web applications & data models built",
    },
    {
      value: "100%",
      label: "Clean Code & Quality",
      subtitle: "Strict TypeScript & verified components",
    },
  ],

  projects: [
    {
      title: "Sales Analytics Dashboard",
      role: "Data Analyst & SQL Developer",
      description:
        "Power BI and SQL dashboard summarizing sales trends, revenue performance, and inventory metrics with structured data modeling.",
      category: "Data Analytics",
      previewType: "sales-dashboard",
      techIcons: ["powerbi", "sql", "excel"],
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "MERN Full-Stack Web Application",
      role: "Full-Stack Developer",
      description:
        "Full-stack web application with a React front end, Express.js REST API endpoints, and MongoDB document storage.",
      category: "Full-Stack",
      previewType: "mern-app",
      techIcons: ["mongodb", "express", "react", "nodejs"],
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Python Data Analysis Pipeline",
      role: "Data Analyst & Python Engineer",
      description:
        "Python notebook cleaning and analyzing public datasets connected to a PostgreSQL database backend for exploratory evaluation.",
      category: "Data Analytics",
      previewType: "python-analytics",
      techIcons: ["python", "postgresql", "excel"],
      githubUrl: "https://github.com",
      featured: true,
    },
  ],

  technologies: [
    { name: "React", category: "fullstack", iconKey: "react" },
    { name: "Node.js", category: "fullstack", iconKey: "nodejs" },
    { name: "Express.js", category: "fullstack", iconKey: "express" },
    { name: "MongoDB", category: "database", iconKey: "mongodb" },
    { name: "TypeScript", category: "fullstack", iconKey: "typescript" },
    { name: "JavaScript", category: "fullstack", iconKey: "typescript" },
    { name: "SQL", category: "database", iconKey: "sql" },
    { name: "PostgreSQL", category: "database", iconKey: "postgresql" },
    { name: "MySQL", category: "database", iconKey: "mysql" },
    { name: "Python", category: "analytics", iconKey: "python" },
    { name: "Microsoft Excel", category: "analytics", iconKey: "excel" },
    { name: "Power BI", category: "analytics", iconKey: "powerbi" },
    { name: "Tailwind CSS", category: "fullstack", iconKey: "tailwind" },
    { name: "Git & GitHub", category: "tooling", iconKey: "git" },
  ],

  experience: [
    {
      period: "Present",
      role: "Aspiring Full-Stack Developer & Analyst",
      organization: "Independent Projects & Continuous Learning",
      location: "Philippines · Remote · Self-Directed",
      description:
        "Building web applications and analysing data to grow as a full-stack developer.",
      highlights: [
        "Building scalable web applications with the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Designing normalized relational schemas and writing analytical queries in MySQL and PostgreSQL.",
        "Developing end-to-end data analytics workflows and visual dashboards in Python, Excel, and Power BI.",
      ],
    },
  ],

  certifications: [
    {
      date: "Oct 2025",
      title: "Associate Data Analyst",
      issuer: "DataCamp",
      credentialUrl: "https://datacamp.com",
      category: "PROFESSIONAL CREDENTIAL",
      skills: ["SQL", "Data Cleaning", "Exploratory Analysis"],
    },
    {
      date: "Jul 2025",
      title: "Meta Front-End Developer Specialization",
      issuer: "Meta / Coursera",
      credentialUrl: "https://coursera.org",
      category: "PROFESSIONAL CREDENTIAL",
      skills: ["React", "JavaScript ES6+", "UI/UX Engineering"],
    },
    {
      date: "Jan 2025",
      title: "Google Data Analytics Professional",
      issuer: "Google",
      credentialUrl: "https://coursera.org",
      category: "RECENT TRAINING",
      skills: ["Spreadsheets", "SQL Queries", "Tableau", "Data Ethics"],
    },
  ],

  community: [
    {
      organization: "Data Analytics Guild Philippines",
      role: "COMMUNITY MEMBER • MANILA",
      description:
        "Active participant in open-source SQL data workshops, exploratory pipeline reviews, and peer code analysis.",
      memberId: "DAG-PH-2026-8819",
      verifyUrl: "https://github.com",
      badgeAccent: "from-emerald-500/20 to-teal-500/10",
    },
    {
      organization: "MERN & Full-Stack Developers PH",
      role: "COMMUNITY CONTRIBUTOR",
      description:
        "Collaborating on modern web application architectures, React performance optimization, and TypeScript adoption.",
      memberId: "MERN-PH-2026-0941",
      verifyUrl: "https://github.com",
      badgeAccent: "from-blue-500/20 to-indigo-500/10",
    },
  ],
};
`;

const targetPath = path.join(__dirname, "../src/lib/data.ts");
fs.writeFileSync(targetPath, dataContent, "utf8");
console.log("Successfully wrote data.ts with full types and schema!");
