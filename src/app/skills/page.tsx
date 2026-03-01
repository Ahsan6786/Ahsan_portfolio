"use client";

import { useRouter } from "navigation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

const allProjects = [
  {
    title: "Bling",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "FessUp!",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "React"],
    detailsPage: "/projects/fessup"
  },
  {
    title: "MIT WPU Chat Assist",
    tags: ["Next.js", "Firebase", "Gemini AI", "AI", "React"],
    detailsPage: "/projects/mit-chat-assist"
  },
  {
    title: "Mitra AI",
    tags: ["AI", "Next.js", "Web App", "Firebase", "Tailwind CSS", "React"],
    detailsPage: "/projects/mitra-ai"
  },
  {
    title: "Ahsanverse",
    tags: ["Blockchain", "Web3", "Solidity", "React"],
  },
  {
    title: "News Archive",
    tags: ["Web App", "API", "JavaScript", "HTML", "CSS"],
    detailsPage: "/projects/news-archive",
  },
  {
    title: "Portfolio Website",
    tags: ["Next.js", "ShadCN UI", "Tailwind CSS", "React"],
  },
];

const allSkillsWithLogos = [
    { name: "React", logo: "/react.png" },
    { name: "Next.js", logo: "/next_js.png?v=2" },
    { name: "JavaScript", logo: "/java_script.png" },
    { name: "HTML", logo: "/html.png" },
    { name: "CSS", logo: "/css.png" },
    { name: "Tailwind CSS", logo: "/tailwind-css.png" },
    { name: "Firebase", logo: "/firebase.png" },
    { name: "Python", logo: "/Python.png" },
    { name: "MySQL", logo: "/mysql.png" },
    { name: "Solidity", logo: "/download.png" },
];

const getProjectsForSkill = (skill: string) => {
    return allProjects.filter(project => project.tags.includes(skill));
}


export default function SkillsPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;
  
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <section className="py-8 md:py-16">
          <AnimateOnScroll>
            <div className="mb-8">
                <Button onClick={() => router.back()} variant="ghost" size="icon" className="hover:bg-accent border border-transparent hover:border-border rounded-full">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="sr-only">Back</span>
                </Button>
            </div>
            <div className="text-center mb-12 relative">
              <h2 className="text-4xl md:text-5xl font-bold">{translations.skills.title}</h2>
              <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words">
                Expertise
              </p>
              <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                Click on a skill to see the projects where it was used. This section highlights my technical abilities and how I apply them in real-world applications.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {allSkillsWithLogos.map(skill => {
                        const projects = getProjectsForSkill(skill.name);
                        return (
                            <AccordionItem value={skill.name} key={skill.name} className="border-b border-border/50">
                                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-8 h-8">
                                            <Image src={skill.logo} alt={`${skill.name} logo`} fill sizes="2rem" className="object-contain"/>
                                        </div>
                                        <span>{skill.name}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pl-16 pb-6">
                                    {projects.length > 0 ? (
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-muted-foreground mb-3">Used in projects:</h4>
                                            <ul className="list-disc list-inside space-y-2">
                                                {projects.map(project => (
                                                    <li key={project.title}>
                                                        {project.detailsPage ? (
                                                            <Link href={project.detailsPage} className="hover:text-primary hover:underline transition-colors">{project.title}</Link>
                                                        ) : (
                                                            <span>{project.title}</span>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <p className="text-muted-foreground italic">No specific projects to show for this skill yet.</p>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </div>

          </AnimateOnScroll>
        </section>
      </div>
    </div>
  );
}