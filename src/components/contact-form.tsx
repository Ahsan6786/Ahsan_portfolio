"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Loader2, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const { toast } = useToast();
  const { translations, loading } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        ...values,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. Your message has been stored.",
      });
      form.reset();
    } catch (e) {
      console.error("Error adding document: ", e);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (loading) return null;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Dual Column Grid for Name and Email on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase flex items-center gap-1.5">
                  <span>{translations.contact.form.name}</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">*</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder={translations.contact.form.namePlaceholder} 
                    {...field} 
                    aria-label={translations.contact.form.name}
                    className="bg-background/50 dark:bg-black/20 border border-border dark:border-yellow-500/10 focus-visible:ring-1 focus-visible:ring-yellow-500 focus-visible:border-yellow-500 rounded-xl h-11 transition-all"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase flex items-center gap-1.5">
                  <span>{translations.contact.form.email}</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">*</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder={translations.contact.form.emailPlaceholder} 
                    {...field} 
                    aria-label={translations.contact.form.email} 
                    className="bg-background/50 dark:bg-black/20 border border-border dark:border-yellow-500/10 focus-visible:ring-1 focus-visible:ring-yellow-500 focus-visible:border-yellow-500 rounded-xl h-11 transition-all"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
        </div>

        {/* Subject (Full Width) */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase flex items-center gap-1.5">
                <span>{translations.contact.form.subject}</span>
                <span className="text-yellow-600 dark:text-yellow-400 font-bold">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder={translations.contact.form.subjectPlaceholder} 
                  {...field} 
                  aria-label={translations.contact.form.subject} 
                  className="bg-background/50 dark:bg-black/20 border border-border dark:border-yellow-500/10 focus-visible:ring-1 focus-visible:ring-yellow-500 focus-visible:border-yellow-500 rounded-xl h-11 transition-all"
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />

        {/* Message Description */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase flex items-center gap-1.5">
                <span>{translations.contact.form.message}</span>
                <span className="text-yellow-600 dark:text-yellow-400 font-bold">*</span>
              </FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={translations.contact.form.messagePlaceholder} 
                  {...field} 
                  aria-label={translations.contact.form.message} 
                  rows={5}
                  className="bg-background/50 dark:bg-black/20 border border-border dark:border-yellow-500/10 focus-visible:ring-1 focus-visible:ring-yellow-500 focus-visible:border-yellow-500 rounded-xl resize-none transition-all"
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />

        {/* Luxury Gold Submit Button */}
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/95 px-8 py-6 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-primary-foreground" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
