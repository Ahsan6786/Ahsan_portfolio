import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const games = [
  {
    title: 'Snake Game',
    description: 'Classic snake game with modern twist',
    difficulty: 'Medium',
    image: 'https://picsum.photos/seed/snake-game/400/200',
    aiHint: 'snake game'
  },
  {
    title: 'Memory Cards',
    description: 'Test your memory with card matching',
    difficulty: 'Easy',
    image: 'https://picsum.photos/seed/memory-game/400/200',
    aiHint: 'memory cards'
  },
  {
    title: 'Tic Tac Toe',
    description: 'Strategic thinking game',
    difficulty: 'Easy',
    image: 'https://picsum.photos/seed/tic-tac-toe/400/200',
    aiHint: 'tic tac toe'
  },
  {
    title: 'Typing Speed Test',
    description: 'Check your typing speed and accuracy',
    difficulty: 'Easy',
    image: 'https://picsum.photos/seed/typing-test/400/200',
    aiHint: 'typing speed'
  },
];

export function Games() {
  return (
    <section id="games" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Interactive Games</h2>
        <p className="text-muted-foreground text-center mb-12">
          Have some fun with these interactive games I've built! Test your skills and enjoy playing.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <Card key={game.title} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative w-full h-40">
                  <Image src={game.image} alt={game.title} layout="fill" objectFit="cover" data-ai-hint={game.aiHint} />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-bold">{game.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-1">{game.description}</CardDescription>
                <Badge variant="secondary" className="mt-2">{game.difficulty}</Badge>
              </CardContent>
              <CardFooter className="p-4">
                <Button variant="outline" className="w-full">Play Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
