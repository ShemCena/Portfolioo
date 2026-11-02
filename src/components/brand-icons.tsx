import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function HtmlIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>HTML5</title>
      <path d="M3 2L5 20.2L12 22L19 20.2L21 2H3Z" fill="#E44D26" />
      <path d="M12 3.8V20.2L17.5 18.7L19.2 3.8H12Z" fill="#F16529" />
      <path d="M7 6.5H17L16.7 9H9.6L9.9 12H16.4L15.9 16.5L12 17.5L8.1 16.5L7.8 13.5H10.1L10.3 14.8L12 15.3L13.7 14.8L13.9 13H7.6L7 6.5Z" fill="#FFFFFF" />
    </svg>
  );
}

export function CssIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>CSS3</title>
      <path d="M3 2L5 20.2L12 22L19 20.2L21 2H3Z" fill="#1572B6" />
      <path d="M12 3.8V20.2L17.5 18.7L19.2 3.8H12Z" fill="#33A9DC" />
      <path d="M7 6.5H17L16.7 9H9.6L9.9 11.5H16.4L15.9 16.5L12 17.5L8.1 16.5L7.8 13.5H10.1L10.3 14.8L12 15.3L13.7 14.8L14 11.5H7.5L7 6.5Z" fill="#FFFFFF" />
    </svg>
  );
}

export function JavascriptIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>JavaScript</title>
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path
        d="M6.5 16.2C7 17.2 7.8 17.8 9.1 17.8C10.3 17.8 11.1 17.2 11.1 16.1C11.1 15 10.3 14.4 9 13.9C7.2 13.1 5.9 12.3 5.9 10.3C5.9 8.4 7.4 6.9 9.5 6.9C10.9 6.9 12 7.6 12.7 8.8L11 9.9C10.6 9.2 10.1 8.8 9.5 8.8C8.8 8.8 8.3 9.2 8.3 9.9C8.3 10.7 8.9 11.1 10.1 11.6C12.1 12.4 13.5 13.3 13.5 15.6C13.5 17.7 11.8 19.3 9.2 19.3C7.3 19.3 5.8 18.3 5 16.8L6.5 16.2ZM15.6 17.4C16.3 17.7 17.1 17.8 17.8 17.8C19.4 17.8 20.3 17.1 20.3 15.5V7.2H18V15.4C18 16.1 17.6 16.3 17.1 16.3C16.6 16.3 16.2 16.1 16 15.9L15.6 17.4Z"
        fill="#000000"
      />
    </svg>
  );
}

export function ReactIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none" {...props}>
      <title>React</title>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 180 180" className={className} fill="none" {...props}>
      <title>Next.js</title>
      <circle cx="90" cy="90" r="90" fill="currentColor" />
      <path
        d="M149.508 157.538L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.174 149.508 157.538Z"
        fill="#ffffff"
      />
      <rect x="115" y="54" width="12" height="72" fill="#ffffff" />
    </svg>
  );
}

export function NodejsIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>Node.js</title>
      <path
        d="M12 2.5L3.34 7.5V17.5L12 22.5L20.66 17.5V7.5L12 2.5Z"
        stroke="#5FA04E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 6.5V17.5M12 17.5L7 14.5M12 17.5L17 14.5"
        stroke="#5FA04E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExpressIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" {...props}>
      <title>Express.js</title>
      <path d="M11.666 4.333c-3.238 0-5.864 2.626-5.864 5.864 0 .426.046.842.134 1.242-1.993.426-3.486 2.192-3.486 4.311 0 2.43 1.97 4.4 4.4 4.4h10.29c2.844 0 5.15-2.306 5.15-5.15 0-2.61-1.944-4.767-4.475-5.097-.47-2.92-2.986-5.15-6.049-5.15z" />
    </svg>
  );
}

export function PythonIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>Python</title>
      <path
        d="M11.922 2C6.98 2 7.288 4.143 7.288 4.143L7.294 6.363H12V7.1H4.21s-3.21.363-3.21 5.344c0 4.982 2.8 4.8 2.8 4.8h1.67v-2.36s-.09-2.8 2.74-2.8h4.69s2.68.044 2.68-2.626V4.625S15.932 2 11.922 2zm-1.8 1.48a.95.95 0 11.002 1.9.95.95 0 01-.002-1.9z"
        fill="#3776AB"
      />
      <path
        d="M12.078 22c4.942 0 4.634-2.143 4.634-2.143l-.006-2.22H12V16.9h7.79s3.21-.363 3.21-5.344c0-4.982-2.8-4.8-2.8-4.8h-1.67v2.36s.09 2.8-2.74 2.8h-4.69s-2.68-.044-2.68 2.626v4.832S8.068 22 12.078 22zm1.8-1.48a.95.95 0 11-.002-1.9.95.95 0 01.002 1.9z"
        fill="#FFD438"
      />
    </svg>
  );
}

export function PostgresIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>PostgreSQL</title>
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.93c-2.8.2-5.1-1.6-5.5-4.2-.1-.7.4-1.3 1.1-1.3.6 0 1.1.4 1.2 1 .3 1.6 1.7 2.7 3.4 2.5 1.5-.2 2.6-1.5 2.6-3s-1.1-2.8-2.6-3c-.6-.1-1.2-.2-1.8-.4-.3-.1-.5-.4-.5-.7 0-.4.3-.8.7-.8 1.7.3 3.1 1.7 3.3 3.5.2 2.7-1.6 5.2-4.3 5.4l2.4 1z"
        fill="#4169E1"
      />
    </svg>
  );
}

export function MysqlIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>MySQL</title>
      <path
        d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm4.5 13.5c-.8.8-1.9 1.3-3.1 1.3-1.6 0-3-1-3.6-2.4l1.4-.7c.3.9 1.2 1.5 2.2 1.5.8 0 1.5-.3 2-.8l1.1 1.1zm.5-4.5h-2.5v-1.5H17v1.5zm-5-3.5H9.5V7H12v1.5z"
        fill="#00758F"
      />
    </svg>
  );
}

export function MongodbIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>MongoDB</title>
      <path
        d="M12.003 2.158c-.144.153-2.656 2.87-3.037 6.136-.372 3.197.668 5.768 1.948 7.373.91 1.14 1.092 1.674 1.092 2.175 0 1.284-.003 4.004-.003 4.004s1.777-1.464 2.378-2.637c.725-1.417.848-3.047.848-4.492 0-3.327-1.41-6.732-2.63-9.589-.187-.435-.453-.94-.596-.97z"
        fill="#47A248"
      />
    </svg>
  );
}

export function PowerbiIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>Power BI</title>
      <rect x="3" y="10" width="4.5" height="11" rx="1" fill="#F2C811" />
      <rect x="9.5" y="6" width="4.5" height="15" rx="1" fill="#E6AD10" />
      <rect x="16" y="3" width="4.5" height="18" rx="1" fill="#D3970A" />
    </svg>
  );
}

export function ExcelIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>Microsoft Excel</title>
      <rect x="3" y="3" width="18" height="18" rx="2.5" fill="#217346" />
      <path d="M8 8L16 16M16 8L8 16" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>Tailwind CSS</title>
      <path
        d="M6.5 10.5C7.5 7 10 5.5 14 6C12.5 7.5 12.25 9.25 13.25 11.25C14.25 13.25 16 14 17.5 18C15 19.5 12.5 19 10 16.5C8.75 15.25 8 13.25 6.5 10.5Z"
        fill="#06B6D4"
      />
      <path
        d="M2.5 16.5C3.5 13 6 11.5 10 12C8.5 13.5 8.25 15.25 9.25 17.25C10.25 19.25 12 20 13.5 24C11 25.5 8.5 25 6 22.5C4.75 21.25 4 19.25 2.5 16.5Z"
        fill="#38BDF8"
        transform="scale(0.8) translate(1, -2)"
      />
    </svg>
  );
}

export function TypescriptIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>TypeScript</title>
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path
        d="M6 10H13M9.5 10V18M14.5 15.5C14.8 16.5 15.7 17.2 17 17.2C18.4 17.2 19.2 16.4 19.2 15.3C19.2 13.8 17.7 13.4 16.2 12.8C14.7 12.2 13.4 11.4 13.4 9.8C13.4 8.2 14.8 7 16.7 7C18.3 7 19.4 7.8 19.8 9.2"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ClaudeIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>Claude AI</title>
      <path
        d="M13.84 2.5C13.52 2.05 12.88 1.95 12.43 2.27L10.15 3.9C9.7 4.22 9.6 4.86 9.92 5.31L11.23 7.18L7.22 7.02C6.67 7 6.2 7.41 6.13 7.96L5.8 10.38C5.73 10.93 6.14 11.4 6.69 11.47L10.5 11.95L8.03 14.9C7.68 15.32 7.74 15.95 8.16 16.3L9.9 17.76C10.32 18.11 10.95 18.05 11.3 17.63L13.3 15.24L14.66 18.87C14.85 19.38 15.42 19.66 15.93 19.47L18.18 18.63C18.69 18.44 18.97 17.87 18.78 17.36L17.2 13.12L20.67 11.66C21.18 11.44 21.43 10.86 21.21 10.35L20.31 8.24C20.09 7.73 19.51 7.48 19 7.7L15.3 9.28L15.46 5.48C15.48 4.93 15.1 4.46 14.55 4.42L12.13 4.25L13.84 2.5Z"
        fill="#CC785C"
      />
    </svg>
  );
}

export function OpenaiIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <title>OpenAI</title>
      <path d="M12 2a4.5 4.5 0 0 0-4.3 3.2 4.5 4.5 0 0 0-3.3 2.5 4.5 4.5 0 0 0 .5 4.9 4.5 4.5 0 0 0-.5 4.9 4.5 4.5 0 0 0 3.3 2.5A4.5 4.5 0 0 0 12 22a4.5 4.5 0 0 0 4.3-3.2 4.5 4.5 0 0 0 3.3-2.5 4.5 4.5 0 0 0-.5-4.9 4.5 4.5 0 0 0 .5-4.9 4.5 4.5 0 0 0-3.3-2.5A4.5 4.5 0 0 0 12 2Z" fill="#10A37F" stroke="none" />
      <circle cx="12" cy="12" r="3.2" fill="#ffffff" stroke="none" />
    </svg>
  );
}

export function AntigravityIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>Google Antigravity</title>
      <defs>
        <linearGradient id="ag-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset="0.33" stopColor="#EA4335" />
          <stop offset="0.66" stopColor="#FBBC05" />
          <stop offset="1" stopColor="#34A853" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L21 8.5V15.5L12 22L3 15.5V8.5L12 2Z"
        stroke="url(#ag-grad)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 6L16 11H8L12 6Z" fill="#4285F4" />
      <path d="M12 12L15 16H9L12 12Z" fill="#34A853" />
      <circle cx="12" cy="18.5" r="1.2" fill="#FBBC05" />
    </svg>
  );
}

export function GitIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>Git</title>
      <path
        d="M21.7 10.6L13.4 2.3c-.4-.4-1-.4-1.4 0l-2.1 2.1 3.2 3.2c.4-.1.9 0 1.2.3.4.4.4 1.1 0 1.5-.4.4-1.1.4-1.5 0-.3-.3-.4-.8-.3-1.2L9.4 5.1 2.3 12.2c-.4.4-.4 1 0 1.4l8.3 8.3c.4.4 1 .4 1.4 0l9.7-9.7c.4-.4.4-1.1 0-1.6zm-10.3 8.3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
        fill="#F05032"
      />
    </svg>
  );
}

export function DatabaseGenericIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <title>Database</title>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function RestApiIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <title>REST API</title>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

export function TechIcon({
  name,
  className = "w-4 h-4",
  size,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (normalized) {
    case "html":
    case "html5":
      return <HtmlIcon className={className} size={size} />;
    case "css":
    case "css3":
      return <CssIcon className={className} size={size} />;
    case "javascript":
    case "js":
      return <JavascriptIcon className={className} size={size} />;
    case "react":
    case "reactjs":
    case "react19":
      return <ReactIcon className={className} size={size} />;
    case "next":
    case "nextjs":
    case "next15":
      return <NextjsIcon className={className} size={size} />;
    case "node":
    case "nodejs":
      return <NodejsIcon className={className} size={size} />;
    case "express":
    case "expressjs":
      return <ExpressIcon className={className} size={size} />;
    case "python":
      return <PythonIcon className={className} size={size} />;
    case "postgres":
    case "postgresql":
      return <PostgresIcon className={className} size={size} />;
    case "mysql":
      return <MysqlIcon className={className} size={size} />;
    case "mongodb":
    case "mongo":
      return <MongodbIcon className={className} size={size} />;
    case "powerbi":
      return <PowerbiIcon className={className} size={size} />;
    case "excel":
    case "microsoftexcel":
      return <ExcelIcon className={className} size={size} />;
    case "tailwind":
    case "tailwindcss":
      return <TailwindIcon className={className} size={size} />;
    case "typescript":
    case "ts":
      return <TypescriptIcon className={className} size={size} />;
    case "claude":
    case "claudeai":
    case "anthropic":
      return <ClaudeIcon className={className} size={size} />;
    case "openai":
    case "chatgpt":
      return <OpenaiIcon className={className} size={size} />;
    case "antigravity":
    case "agy":
    case "googleantigravity":
      return <AntigravityIcon className={className} size={size} />;
    case "git":
      return <GitIcon className={className} size={size} />;
    case "sql":
      return <DatabaseGenericIcon className={className} size={size} />;
    case "rest":
    case "restapi":
    case "restapis":
      return <RestApiIcon className={className} size={size} />;
    default:
      return <DatabaseGenericIcon className={className} size={size} />;
  }
}
