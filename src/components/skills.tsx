import { Code, Component, Database, Wind } from "lucide-react";
import { AnimatedSkillBar } from "./animated-skill-bar";
import { ScrollReveal } from "./scroll-reveal";

const skills = [
  { name: "React & Next.js", level: 95, icon: <Component className="h-8 w-8 text-accent" /> },
  { name: "TypeScript", level: 90, icon: <Code className="h-8 w-8 text-accent" /> },
  { name: "Tailwind CSS", level: 98, icon: <Wind className="h-8 w-8 text-accent" /> },
  { name: "Node.js & Databases", level: 85, icon: <Database className="h-8 w-8 text-accent" /> },
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                Technical Skills
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A showcase of my expertise in modern web development technologies.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl items-start gap-8 py-12 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 100}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                  {skill.icon}
                </div>
                <div className="w-full space-y-2">
                  <h3 className="text-lg font-bold">{skill.name}</h3>
                  <AnimatedSkillBar value={skill.level} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
