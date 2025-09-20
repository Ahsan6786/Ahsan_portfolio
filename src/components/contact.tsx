import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LocateIcon, MailIcon, PhoneIcon, Linkedin, Github, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: <Linkedin className="w-6 h-6" />, href: '#' },
  { icon: <Github className="w-6 h-6" />, href: '#' },
  { icon: <Twitter className="w-6 h-6" />, href: '#' },
];

const contactInfo = [
  { icon: <LocateIcon className="w-6 h-6 text-primary" />, label: 'Location', value: 'Maharashtra, India' },
  { icon: <MailIcon className="w-6 h-6 text-primary" />, label: 'Email', value: 'ahsanimamkhan06@gmail.com' },
  { icon: <PhoneIcon className="w-6 h-6 text-primary" />, label: 'Phone', value: '+91 9162248786' },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Send Message</h3>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  {info.icon}
                  <div>
                    <h4 className="font-semibold">{info.label}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-primary hover:text-primary/80">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
