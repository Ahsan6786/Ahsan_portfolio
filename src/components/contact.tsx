import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./scroll-reveal";

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                Get in Touch
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind or just want to say hi? I'd love to hear from you.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <div className="mx-auto max-w-2xl py-12">
          <ScrollReveal delay={200}>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Name" type="text" />
                    <Input placeholder="Email" type="email" />
                  </div>
                  <Textarea placeholder="Your message" rows={5} />
                  <Button type="submit" size="lg">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
