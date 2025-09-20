import Image from 'next/image';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '5+', label: 'Happy Clients' },
  { value: '2+', label: 'Years Experience' },
  { value: '3+', label: 'Companies Served' },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-80 md:h-full">
            <Image
              src="https://picsum.photos/seed/about-ahsan/600/800"
              alt="Ahsan Imam Khan"
              fill
              className="object-cover rounded-lg"
              data-ai-hint="man portrait"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-primary mb-2 font-semibold">
              Passionate developer crafting digital experiences with precision and creativity
            </p>
            <p className="text-muted-foreground mb-6">
              I am a B.Tech Computer Science student at MIT-WPU. I am passionate about coding, exploring new technologies, and turning ideas into real-world applications.
            </p>
            <p className="text-muted-foreground mb-8">
              I love collaborating on projects that challenge me to grow and innovate. When I'm not coding, you can find me exploring new technologies and continuously improving my skills.
            </p>
            <Button>Get In Touch</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
