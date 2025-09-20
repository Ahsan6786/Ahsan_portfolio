import { Progress } from "@/components/ui/progress";

const frontendSkills = [
  { name: 'HTML/CSS', value: 95 },
  { name: 'JavaScript', value: 90 },
  { name: 'React', value: 85 },
  { name: 'Bootstrap', value: 80 },
];

const backendSkills = [
  { name: 'Java', value: 80 },
  { name: 'MySQL', value: 85 },
  { name: 'Blockchain', value: 75 },
  { name: 'APIs', value: 85 },
];

const toolsSkills = [
  { name: 'Git/GitHub', value: 90 },
  { name: 'Vercel', value: 85 },
  { name: 'AWS', value: 75 },
  { name: 'Solidity', value: 70 },
];

function SkillCategory({ title, skills }: { title: string; skills: { name: string; value: number }[] }) {
  return (
    <div className="bg-card p-8 rounded-lg">
      <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
      <div className="space-y-4">
        {skills.map(skill => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-muted-foreground">{skill.name}</span>
              <span className="text-sm font-medium text-primary">{skill.value}%</span>
            </div>
            <Progress value={skill.value} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Technical Skills</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Technologies I use to build modern, responsive applications
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend & Database" skills={backendSkills} />
          <SkillCategory title="Tools & Technologies" skills={toolsSkills} />
        </div>
      </div>
    </section>
  );
}
