import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Smartphone, Database } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: 'Web Development',
    description: 'Building responsive and performant websites with clean code and modern technologies.',
  },
  {
    icon: <Smartphone className="w-12 h-12 text-primary" />,
    title: 'Responsive Design',
    description: 'Creating websites that look great on all devices, from mobile phones to desktops.',
  },
  {
    icon: <Database className="w-12 h-12 text-primary" />,
    title: 'Database Integration',
    description: 'Designing efficient database schemas and integrating them with web applications.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <div className="mx-auto bg-card rounded-full p-4 w-fit">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
