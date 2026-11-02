import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhatICanOffer } from "@/components/what-i-offer";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { OutsideTheIDE } from "@/components/outside-the-ide";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-ink dark:text-white transition-colors">
      <Navbar />
      <main className="max-w-2xl w-full mx-auto px-4 sm:px-6">
        <Hero />
        <WhatICanOffer />
        <Projects />
        <Skills />
        <Experience />
        <OutsideTheIDE />
        <Contact />
        <Footer />
      </main>
      <Chatbot />
    </div>
  );
}
