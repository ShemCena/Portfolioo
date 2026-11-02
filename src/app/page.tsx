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
import { PageLoader } from "@/components/page-loader";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-ink dark:text-white transition-colors">
      <PageLoader />
      <Navbar />
      <main className="max-w-2xl w-full mx-auto px-4 sm:px-6">
        <Hero />
        <ScrollReveal delayMs={60}>
          <WhatICanOffer />
        </ScrollReveal>
        <ScrollReveal delayMs={60}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal delayMs={60}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal delayMs={60}>
          <Experience />
        </ScrollReveal>
        <ScrollReveal delayMs={60}>
          <OutsideTheIDE />
        </ScrollReveal>
        <ScrollReveal delayMs={60}>
          <Contact />
        </ScrollReveal>
        <Footer />
      </main>
      <Chatbot />
    </div>
  );
}
