export interface PersonalInfo {
  readonly name: string;
  readonly monogram: string;
  readonly title: string;
  readonly location: string;
  readonly bio: string;
  readonly status: string;
  readonly email: string;
  readonly github: string;
  readonly linkedin: string;
  readonly avatarDefault?: string;
  readonly avatarHover?: string;
}

export interface ProjectItem {
  readonly title: string;
  readonly role: string;
  readonly description: string;
  readonly category: "Full-Stack" | "Frontend" | "Data Analytics";
  readonly previewType: "sales-dashboard" | "mern-app" | "python-analytics";
  readonly techIcons: readonly string[];
  readonly problem?: string;
  readonly solution?: string;
  readonly impact?: string;
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

export interface PortfolioData {
  readonly personal: PersonalInfo;
  readonly projects: readonly ProjectItem[];
  readonly technologies: readonly SkillItem[];
  readonly experience: readonly ExperienceItem[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Hezekiah Shem Baling",
    monogram: "HSB",
    title: "Full-Stack Web Developer & Data Analyst",
    location: "Philippines",
    bio: "I build responsive, type-safe full stack web applications and transform chaotic business spreadsheets into automated executive dashboards with SQL, Python, and Power BI—helping founders and operational teams save 10+ hours of manual work every week and make confident, data-backed decisions.",
    status: "Open to new opportunities",
    email: "shemcena@gmail.com",
    github: "https://github.com/ShemCena",
    linkedin: "https://www.linkedin.com/in/hezekiah-shem-baling-07482427b/",
    avatarDefault: "/profile-default.svg",
    avatarHover: "/profile-hover.svg",
  },

  projects: [
    {
      title: "Sales Analytics & Business Intelligence Engine",
      role: "Data Analyst & SQL Developer",
      description:
        "An automated sales data warehouse and executive Power BI dashboard that replaces 6+ hours of weekly manual spreadsheet reporting with real-time tracking of revenue, profit margins, and inventory turns.",
      category: "Data Analytics",
      previewType: "sales-dashboard",
      techIcons: ["powerbi", "sql", "excel"],
      githubUrl: "https://github.com/ShemCena",
      featured: true,
    },
    {
      title: "MERN Full-Stack Business Application",
      role: "Full-Stack Developer",
      description:
        "A responsive operational platform built with React 19, TypeScript, Express REST APIs, and MongoDB—providing teams with secure role-based access, automated workflows, and sub-second data operations.",
      category: "Full-Stack",
      previewType: "mern-app",
      techIcons: ["mongodb", "express", "react", "nodejs"],
      githubUrl: "https://github.com/ShemCena",
      featured: true,
    },
    {
      title: "Automated Python Data Pipeline",
      role: "Data Analyst & Python Engineer",
      description:
        "An automated ETL pipeline that extracts, validates, and cleans multi-source commercial datasets, transforming raw transactional chaos into standardized PostgreSQL schemas with zero data loss.",
      category: "Data Analytics",
      previewType: "python-analytics",
      techIcons: ["python", "postgresql", "excel"],
      githubUrl: "https://github.com/ShemCena",
      featured: true,
    },
  ],

  technologies: [
    // Row 1: Web Frontend, Backend & Deployment (12 items)
    { name: "HTML5", category: "fullstack", iconKey: "html" },
    { name: "CSS3", category: "fullstack", iconKey: "css" },
    { name: "JavaScript", category: "fullstack", iconKey: "javascript" },
    { name: "TypeScript", category: "fullstack", iconKey: "typescript" },
    { name: "React", category: "fullstack", iconKey: "react" },
    { name: "Tailwind CSS", category: "fullstack", iconKey: "tailwind" },
    { name: "Node.js", category: "fullstack", iconKey: "node" },
    { name: "Express.js", category: "fullstack", iconKey: "express" },
    { name: "PHP", category: "fullstack", iconKey: "php" },
    { name: "Laravel", category: "fullstack", iconKey: "laravel" },
    { name: "Vercel", category: "tooling", iconKey: "vercel" },
    { name: "Next.js", category: "fullstack", iconKey: "next" },

    // Row 2: Databases, Cloud, Analytics & AI (12 items)
    { name: "Python", category: "analytics", iconKey: "python" },
    { name: "PostgreSQL", category: "database", iconKey: "postgresql" },
    { name: "MySQL", category: "database", iconKey: "mysql" },
    { name: "MongoDB", category: "database", iconKey: "mongodb" },
    { name: "Supabase", category: "database", iconKey: "supabase" },
    { name: "SQL", category: "database", iconKey: "sql" },
    { name: "Power BI", category: "analytics", iconKey: "powerbi" },
    { name: "Microsoft Excel", category: "analytics", iconKey: "excel" },
    { name: "Claude AI", category: "ai", iconKey: "claude" },
    { name: "OpenAI", category: "ai", iconKey: "openai" },
    { name: "Google Antigravity", category: "ai", iconKey: "antigravity" },
    { name: "Git & GitHub", category: "tooling", iconKey: "git" },
  ],

  experience: [
    {
      period: "Present",
      role: "Full-Stack Developer & Quantitative Analyst",
      organization: "Client Solutions & Production Engineering",
      location: "Philippines · Remote · Worldwide Availability",
      description:
        "Delivering custom MERN web platforms, automated SQL warehouses, and data automation for founders, businesses, and startups.",
      highlights: [
        "Engineering high-performance web applications using React 19, TypeScript, and Node.js with sub-second page loads and clean component architecture.",
        "Designing 3NF normalized schemas in MySQL & PostgreSQL, optimizing indexing strategies to accelerate reporting queries and eliminate bottlenecks.",
        "Developing automated Python ETL pipelines and executive Power BI dashboards that replace manual spreadsheet updates with real-time business visibility.",
      ],
    },
  ],
};
