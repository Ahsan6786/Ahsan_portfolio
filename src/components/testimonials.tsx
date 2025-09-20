import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Ahsan delivered an exceptional website that perfectly captured our brand identity. His attention to detail and technical expertise made the entire process smooth and efficient. Highly recommend his services!",
    name: "Raj Patel",
    title: "CEO, TechSolutions Mumbai",
    location: "Mumbai, India",
    image: "https://picsum.photos/seed/raj-patel/100/100"
  },
  {
    quote: "Working with Ahsan was a pleasure. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in responsive design and user experience are truly impressive.",
    name: "Priya Sharma",
    title: "Marketing Director, Digital Innovations",
    location: "Delhi, India",
    image: "https://picsum.photos/seed/priya-sharma/100/100"
  },
  {
    quote: "Ahsan's expertise in blockchain technology helped us implement a complex DApp project with ease. His problem-solving abilities and dedication to delivering quality work make him an excellent developer to work with.",
    name: "Amit Kumar",
    title: "CTO, BlockTech India",
    location: "Bangalore, India",
    image: "https://picsum.photos/seed/amit-kumar/100/100"
  },
  {
    quote: "Ahsan transformed our vision into a beautiful, functional website. His communication throughout the project was excellent, and he delivered everything on time. Very professional and skilled developer.",
    name: "Sneha Gupta",
    title: "Founder, StartupHub Chennai",
    location: "Chennai, India",
    image: "https://picsum.photos/seed/sneha-gupta/100/100"
  },
  {
    quote: "Outstanding work! Ahsan's blockchain development skills are top-notch. He built a secure and scalable smart contract system for our fintech application. Definitely our go-to developer for future projects.",
    name: "Vikram Singh",
    title: "Product Manager, TechCorp Pune",
    location: "Pune, India",
    image: "https://picsum.photos/seed/vikram-singh/100/100"
  },
  {
    quote: "Ahsan's full-stack development expertise helped us launch our e-commerce platform successfully. His code quality is excellent, and he's always available for support. Highly satisfied with his work!",
    name: "Kavita Joshi",
    title: "Director, WebSolutions Hyderabad",
    location: "Hyderabad, India",
    image: "https://picsum.photos/seed/kavita-joshi/100/100"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Client Testimonials</h2>
        <p className="text-muted-foreground text-center mb-12">What people say about working with me</p>
        <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="bg-card border-0">
                  <CardContent className="flex flex-col items-center text-center p-8">
                    <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full mb-4"
                      data-ai-hint="person portrait"
                    />
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
