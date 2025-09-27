"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X, Bot, User } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollArea } from "./ui/scroll-area";

type Message = {
  text: string;
  sender: "user" | "bot";
};

const predefinedQA: { keywords: string[]; answer: string | string[] }[] = [
  { keywords: ["hello", "hi", "hey"], answer: "Hello! How can I help you today? I can answer questions about Ahsan's skills, projects, and more." },
  { keywords: ["who", "ahsan", "about"], answer: "Ahsan Imam Khan is a passionate B.Tech Computer Science student at MIT-WPU. He loves coding, exploring new technologies, and turning ideas into real-world applications." },
  { keywords: ["skill", "technologies", "know", "proficient"], answer: "Ahsan is skilled in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Python, MySQL, AWS, and Firebase." },
  { keywords: ["project", "work", "portfolio"], answer: ["Ahsan has completed 6 projects. Some of them are:", "1. Mitra AI: A mental wellness app.", "2. Ahsanverse: A Blockchain Dapp.", "3. News Archive: A news aggregation system.", "You can find more details on the projects section!"] },
  { keywords: ["contact", "email", "phone", "hire"], answer: "You can contact Ahsan via email at ahsanimamkhan06@gmail.com or by phone at +91 9162248786. You can also use the contact form on the website." },
  { keywords: ["certificate", "qualification"], answer: "Ahsan has several certificates, including for the Smart India Hackathon, Python Programming, Financial Planning, and more. You can see all of them on the certificates page." },
  { keywords: ["services", "offer", "do"], answer: "Ahsan offers Full-Stack Development, builds Web Applications, and provides SEO & Performance optimization services." },
  { keywords: ["bye", "thanks", "thank you"], answer: "You're welcome! Feel free to ask if you have more questions. Have a great day!" },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I'm Ahsan's personal assistant. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const lowerCaseInput = inputValue.toLowerCase();
    let response: string | string[] = "I'm sorry, I don't have information about that. Please try asking about Ahsan's skills, projects, or how to contact him.";

    const foundQA = predefinedQA.find(qa => qa.keywords.some(keyword => lowerCaseInput.includes(keyword)));
    
    if (foundQA) {
      response = foundQA.answer;
    }
    
    setTimeout(() => {
      if (Array.isArray(response)) {
        response.forEach((res, index) => {
          setTimeout(() => {
            const botMessage: Message = { text: res, sender: "bot" };
            setMessages((prev) => [...prev, botMessage]);
          }, 500 * (index + 1));
        })
      } else {
        const botMessage: Message = { text: response, sender: "bot" };
        setMessages((prev) => [...prev, botMessage]);
      }
    }, 500);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            onClick={toggleChat}
            size="icon"
            className="rounded-full bg-primary text-primary-foreground h-14 w-14 shadow-lg"
          >
            <AnimatePresence>
              {isOpen ? <X /> : <MessageSquare />}
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-5 z-50 w-[calc(100vw-40px)] max-w-sm"
          >
            <div className="bg-card border rounded-lg shadow-xl flex flex-col h-[60vh] max-h-[500px]">
              <div className="p-4 border-b flex items-center">
                <h3 className="text-lg font-bold">Chat with Ahsan's Assistant</h3>
              </div>

              <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 ${
                        message.sender === "user" ? "justify-end" : ""
                      }`}
                    >
                      {message.sender === "bot" && (
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                          <Bot size={20} />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {message.text}
                      </div>
                       {message.sender === "user" && (
                        <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0">
                          <User size={20} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-4 border-t flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="Ask something..."
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  className="flex-grow"
                />
                <Button onClick={handleSendMessage} size="icon" className="flex-shrink-0">
                  <Send />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
