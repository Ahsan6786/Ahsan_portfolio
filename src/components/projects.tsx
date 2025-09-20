import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Ahsanverse - Blockchain Dapp',
    image: 'https://picsum.photos/seed/ahsanverse/400/225',
    description: 'A decentralized application built on blockchain technology, featuring smart contracts and Web3 integration for a seamless user experience.',
    tags: ['React', 'Solidity', 'Web3.js', 'Blockchain'],
    aiHint: 'blockchain abstract'
  },
  {
    title: 'BJP News Archive',
    image: 'https://picsum.photos/seed/bjp-news/400/225',
    description: 'A comprehensive news archive system that collects, categorizes, and displays news articles with search functionality and user-friendly interface.',
    tags: ['JavaScript', 'React', 'API', 'Database'],
    aiHint: 'news archive'
  },
  {
    title: 'Portfolio',
    image: 'https://picsum.photos/seed/portfolio-project/400/225',
    description: 'A feature-rich code editor with syntax highlighting, multiple language support, and advanced development tools for enhanced productivity.',
    tags: ['React', 'TypeScript', 'Monaco Editor', 'WebAssembly'],
    aiHint: 'code editor'
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-muted-foreground text-center mb-12">
          These are some of my recent projects. Check out my GitHub for more.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader className="p-0">
                <div className="relative w-full aspect-video">
                  <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-t-lg" data-ai-hint={project.aiHint} />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-xl font-bold mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full">Live Demo</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="#">View More on GitHub</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
