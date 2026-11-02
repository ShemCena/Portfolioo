const fs = require("fs");
const path = require("path");

const pageContent = `import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturedWork } from "@/components/featured-work";
import { Stats } from "@/components/stats";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Certifications } from "@/components/certifications";
import { Community } from "@/components/community";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-ink dark:text-white transition-colors selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300">
      <Navbar />
      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6">
        <Hero />
        <FeaturedWork />
        <Stats />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Community />
        <About />
        <Contact />
        <Footer />
      </main>
      <FloatingCTA />
    </div>
  );
}
`;

const targetPath = path.join(__dirname, "../src/app/page.tsx");
fs.writeFileSync(targetPath, pageContent, "utf8");
console.log("Successfully wrote src/app/page.tsx with all 10 core sections!");
