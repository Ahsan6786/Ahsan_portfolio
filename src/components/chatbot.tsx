"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
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
  {
    keywords: ["hello", "hi", "hey", "namaste", "नमस्ते", "hola", "yo", "wassup", "hey there", "hello ji", "hi bro", "hi there", "hy", "greetings", "good morning", "good afternoon", "good evening", "howdy", "salam", "bonjour", "ciao", "hallo", "konnichiwa"],
    answer: "Hello! How can I help you today? I can answer questions about Ahsan's skills, projects, and more."
  },
  {
    keywords: ["who", "ahsan", "about", "kaun hai", "कौन है", "ahsan kaun", "who is ahsan", "ahsan imam", "ahsan kon", "बायो", "bio", "intro", "introduction", "tell me about ahsan", "who is this portfolio for", "owner of this website", "your creator", "developer profile", "who are you"],
    answer: "Ahsan Imam Khan is a passionate B.Tech Computer Science student at MIT-WPU, Pune. He enjoys building tech solutions, coding, and working on impactful real-world projects."
  },
  {
    keywords: ["education", "study", "college", "school", "schooling", "10th", "12th", "padhaai", "कहां पढ़े", "kahaan se padha", "educational background", "college name", "studies", "padhai", "qualification", "degree", "academic", "academics", "where did he study"],
    answer: "Ahsan is currently pursuing B.Tech in Computer Science from MIT World Peace University (MIT-WPU), Pune. He completed his schooling up to 10th at St. Paul's High School, Hajipur, and did his 11th–12th at Akshara International School in Wakad, Pune."
  },
  {
    keywords: ["skill", "technologies", "know", "proficient", "kya aata hai", "क्या आता है", "tech stack", "technology", "skills kya hain", "tools", "languages", "कौन सी टेक्नोलॉजी आती है", "developer stack", "expertise", "competencies", "programming languages", "frameworks", "what can he do"],
    answer: "Ahsan is skilled in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Python, MySQL, AWS, and Firebase."
  },
  {
    keywords: ["project", "work", "portfolio", "काम", "projects kya hai", "projects dikhaye", "कौन से प्रोजेक्ट्स", "किया क्या है", "apna kaam", "developed", "portfolio batao", "projects showcase", "past work", "previous projects", "examples of work", "what has he built"],
    answer: [
      "Ahsan has completed 6 projects. Some of them are:",
      "1. Mitra AI: A mental wellness app.",
      "2. Ahsanverse: A Blockchain Dapp.",
      "3. News Archive: A news aggregation system.",
      "You can find more details on the projects section or ask me about a specific project!"
    ]
  },
  {
    keywords: ["mitra", "mitra ai", "mental wellness"],
    answer: "Mitra AI is an innovative mental wellness application providing accessible, stigma-free support. It offers personalized resources, guided exercises, and a compassionate AI chatbot to help users navigate their mental health journey privately and securely."
  },
  {
    keywords: ["ahsanverse", "blockchain", "dapp"],
    answer: "Ahsanverse is a decentralized application built on blockchain technology. It features smart contracts and Web3 integration, allowing users to connect a digital wallet, send virtual currency, and view a full history of transactions, demonstrating modern web apps on a secure, decentralized platform."
  },
  {
    keywords: ["news archive", "news aggregation"],
    answer: "News Archive is a comprehensive news system that collects and displays articles from sources all over the world. It has a clean, fast interface for searching topics, filtering news, and browsing headlines, making it a powerful tool for staying up-to-date."
  },
  {
    keywords: ["portfolio website", "this website", "this project"],
    answer: "This personal portfolio website is a project itself, built with modern technologies like Next.js and ShadCN UI. It's designed to be fast, responsive, and visually appealing, featuring an interactive chatbot, smooth animations, and a clean design to highlight Ahsan's projects and skills."
  },
  {
    keywords: ["contact", "email", "phone", "hire", "reach", "get in touch", "संपर्क", "mobile number", "contact info", "contact karo", "kaise contact kare", "बात करना है", "connect", "contact information", "social media", "linkedin", "instagram", "github", "how to hire", "freelance"],
    answer: "You can contact Ahsan via email at ahsanimamkhan06@gmail.com or by phone at +91 9162248786. You can also find him on LinkedIn, Instagram, and GitHub or use the contact form on the website."
  },
  {
    keywords: ["certificate", "certifications", "achievements", "pramaan patra", "प्रमाण पत्र", "kaun se certificate", "certi", "badges", "degrees", "recognition", "training certificate", "courses done", "credentials", "accomplishments", "awards"],
    answer: "Ahsan has several certificates, including for the Smart India Hackathon, Python Programming, Financial Planning, and more. You can see all of them on the certificates page."
  },
  {
    keywords: ["services", "offer", "do", "kya karte ho", "क्या करते हो", "kya services hain", "service", "help", "provide", "offers", "सेवाएं", "कौन सी सर्विस", "kya provide karte ho", "what do you offer", "what services do you provide", "can you build a website", "looking for developer"],
    answer: "Ahsan offers Full-Stack Development, builds Web Applications, and provides SEO & Performance optimization services."
  },
  {
    keywords: ["bye", "thanks", "thank you", "dhanyavaad", "shukriya", "alvida", "goodbye", "see you", "ok thanks", "bye bye", "thanks bro", "thank you so much", "धन्यवाद", "farewell", "take care", "appreciate it", "grateful"],
    answer: "You're welcome! Feel free to ask if you have more questions. Have a great day!"
  },
  {
    keywords: ["hobbies", "interests", "free time", "what does he do for fun", "personal interests", "outside of work", "passion"],
    answer: "Besides coding, Ahsan is passionate about exploring new technologies, collaborating on innovative projects, and continuously improving his skills."
  },
  {
    keywords: ["location", "where is he from", "address", "city", "country", "based in", "where does he live"],
    answer: "Ahsan is based in Pune, Maharashtra, India."
  }
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
  
  const scrollToBottom = useCallback(() => {
    const viewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
    if (viewport) {
      viewport.scrollTo({ top: viewport.scrollHeight, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if(isOpen) {
        const timeout = setTimeout(() => scrollToBottom(), 100);
        return () => clearTimeout(timeout);
    }
  }, [messages, isOpen, scrollToBottom]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const lowerCaseInput = inputValue.toLowerCase().replace(/[?.,!]/g, '');
    let response: string | string[] = "I'm sorry, I don't have information about that. You can reach out to Ahsan on Instagram: @khan_ahsan_8055 or via email at ahsanimamkhan06@gmail.com.";

    let bestMatch = { score: 0, answer: response };

    predefinedQA.forEach(qa => {
      let currentScore = 0;
      qa.keywords.forEach(keyword => {
        if (lowerCaseInput.includes(keyword)) {
          currentScore += keyword.length; // Weight keyword by length
        }
      });
      if (currentScore > bestMatch.score) {
        bestMatch = { score: currentScore, answer: qa.answer };
      }
    });

    response = bestMatch.answer;
    
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
      <div className="fixed bottom-5 left-5 z-40">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            onClick={toggleChat}
            size="icon"
            className="rounded-full bg-primary text-primary-foreground h-14 w-14 shadow-lg"
            aria-label={isOpen ? "Close chat" : "Open chat"}
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
            className="fixed bottom-24 left-5 z-50 w-[calc(100vw-40px)] max-w-sm"
          >
            <div className="bg-card border rounded-lg shadow-xl flex flex-col h-[60vh] max-h-[500px]">
              <div className="p-4 border-b flex items-center justify-between">
                <h3 className="text-lg font-bold">Chat with Ahsan's Assistant</h3>
                <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8" aria-label="Close chat">
                  <X size={20} />
                </Button>
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
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0" aria-label="Bot avatar">
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
                        <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0" aria-label="User avatar">
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
                  aria-label="Chat input"
                />
                <Button onClick={handleSendMessage} size="icon" className="flex-shrink-0" aria-label="Send message">
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
