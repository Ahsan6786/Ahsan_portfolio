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
    }
  }

  if (loading) return null;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.contact.form.name}</FormLabel>
              <FormControl>
                <Input placeholder={translations.contact.form.namePlaceholder} {...field} aria-label={translations.contact.form.name}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.contact.form.email}</FormLabel>
              <FormControl>
                <Input placeholder={translations.contact.form.emailPlaceholder} {...field} aria-label={translations.contact.form.email} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.contact.form.subject}</FormLabel>
              <FormControl>
                <Input placeholder={translations.contact.form.subjectPlaceholder} {...field} aria-label={translations.contact.form.subject} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.contact.form.message}</FormLabel>
              <FormControl>
                <Textarea placeholder={translations.contact.form.messagePlaceholder} {...field} aria-label={translations.contact.form.message} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="default" className="w-full bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">{translations.contact.form.sendMessage}</Button>
      </form>
    </Form>
  );
}
