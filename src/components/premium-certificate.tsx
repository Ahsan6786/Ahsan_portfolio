"use client";

import { ShieldCheck, Download, Award, Calendar } from "lucide-react";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from "@/lib/utils";

type PremiumCertificateProps = {
  recipientName: string;
  certificateTitle: string;
  certificateDescription: string;
  date: string;
  credentialId: string;
  skills: string[];
  verifyUrl?: string;
  downloadUrl: string;
  instructors?: string;
  duration?: string;
  referenceNo?: string;
};

const GoldLeaf = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      fill="url(#gold-gradient)"
    >
      <defs>
        <radialGradient id="gold-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
          <stop offset="60%" style={{ stopColor: '#DAA520', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      <path d="M50 0 C 40 20, 40 60, 50 100 C 60 60, 60 20, 50 0 Z" />
    </svg>
);

export function PremiumCertificate({
  recipientName,
  certificateTitle,
  certificateDescription,
  date,
  credentialId,
  skills,
  verifyUrl,
  downloadUrl,
  instructors,
  duration,
  referenceNo,
}: PremiumCertificateProps) {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const springConfig = { damping: 20, stiffness: 150 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);
    const glareX = useTransform(mouseX, [-1, 1], [-100, 200]);
    const glareY = useTransform(mouseY, [-1, 1], [-100, 200]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isMobile || !ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / (width / 2);
        const y = (e.clientY - top - height / 2) / (height / 2);
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `${certificateTitle.replace(/ /g, '_')}_Certificate.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-xl mx-auto">
        <motion.div 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={isMobile ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={cn(
              "relative w-full bg-[#161616] rounded-2xl border border-white/5 shadow-xl overflow-hidden p-2 group transition-all duration-500 flex flex-col justify-between",
              isMobile ? "min-h-[380px]" : "min-h-[415px] md:aspect-[4/3] hover:shadow-yellow-500/10 hover:border-yellow-500/20"
            )}
        >
        
        {/* Background Gradient & Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e1e] to-[#0c0c0c] z-0"></div>
        <div 
            className="absolute inset-0 opacity-5 z-0"
            style={{
                backgroundImage: 'radial-gradient(#555 1px, transparent 1px)',
                backgroundSize: '20px 20px',
            }}
        ></div>

        {/* Shiny Glare Effect (Disabled on Mobile) */}
        {!isMobile && (
          <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
              style={{
                  x: glareX,
                  y: glareY,
                  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 65%)',
                  width: '200%',
                  height: '200%',
                  transform: 'translate(-50%, -50%)'
              }}
          />
        )}

        {/* Gold Border Frame */}
        <div className="relative w-full h-full flex-grow rounded-lg border-2 border-transparent p-4 sm:p-6 flex flex-col justify-between z-10"
            style={{
                borderImage: 'linear-gradient(145deg, #DAA520, #FFD700, #B8860B) 1',
                boxShadow: 'inset 0 0 15px rgba(255, 215, 0, 0.15), 0 0 10px rgba(255, 215, 0, 0.05)'
            }}
        >
            {/* Corner Ornaments */}
            {[
                "top-2 left-2",
                "top-2 right-2 rotate-90",
                "bottom-2 right-2 rotate-180",
                "bottom-2 left-2 -rotate-90",
            ].map(pos => (
                <div key={pos} className={`absolute w-10 h-10 ${pos}`}>
                    <GoldLeaf className="absolute w-3.5 h-3.5 top-0 left-0" />
                    <GoldLeaf className="absolute w-3.5 h-3.5 top-0 left-0 rotate-90 origin-top-left" />
                </div>
            ))}

            {/* Main Content */}
            <div className="text-center flex-grow flex flex-col justify-center py-3 px-1">
                <div className="flex items-center justify-center gap-1.5 mb-1.5">
                    <Award className="w-3.5 h-3.5 text-yellow-500/80" />
                    <h3 className="text-[10px] sm:text-xs font-light uppercase tracking-[0.25em] text-yellow-400/80 font-mono">
                        Certificate of Excellence
                    </h3>
                </div>
                
                <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white mt-1 mb-2.5 line-clamp-2 px-1 leading-snug"
                    style={{textShadow: '0 2px 8px rgba(255,255,255,0.08)'}}
                >
                    {certificateTitle}
                </h1>
                
                <p className="text-xs sm:text-sm text-gray-300">
                    Awarded to <span className="font-semibold text-yellow-500/90">{recipientName}</span>
                </p>
                
                <p className="text-xs text-gray-400/95 max-w-md mx-auto mt-2.5 mb-3.5 leading-relaxed line-clamp-3">
                    {certificateDescription}
                </p>

                {/* Additional Metadata Grid */}
                {(instructors || duration || credentialId || date || referenceNo) && (
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-left max-w-sm mx-auto my-1 text-[10px] sm:text-[11px] text-gray-400 border-t border-b border-gray-800/80 py-2 px-3 bg-black/35 rounded-lg">
                        {instructors && (
                            <div className="truncate">
                                <span className="font-medium text-yellow-500/70">Instructors: </span>
                                <span className="text-gray-300" title={instructors}>{instructors}</span>
                            </div>
                        )}
                        {duration && (
                            <div>
                                <span className="font-medium text-yellow-500/70">Duration: </span>
                                <span className="text-gray-300">{duration}</span>
                            </div>
                        )}
                        {credentialId && (
                            <div className="truncate">
                                <span className="font-medium text-yellow-500/70">Cert No: </span>
                                <span className="text-gray-300 font-mono" title={credentialId}>{credentialId}</span>
                            </div>
                        )}
                        {referenceNo && (
                            <div>
                                <span className="font-medium text-yellow-500/70">Ref No: </span>
                                <span className="text-gray-300 font-mono">{referenceNo}</span>
                            </div>
                        )}
                        {date && (
                            <div className="col-span-2 flex items-center gap-1 mt-0.5 pt-0.5 border-t border-gray-800/30 text-[9px] sm:text-[10px] text-gray-500">
                                <Calendar className="w-3 h-3 text-yellow-500/40" />
                                <span>Issued on: {new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
            
            {/* Skills Badges */}
            <div className="mt-auto">
                <div className="flex flex-wrap justify-center gap-1.5 mt-1">
                    {skills.map(skill => (
                        <span key={skill} className="text-[9px] sm:text-[10px] bg-yellow-950/20 text-yellow-300/90 px-2 py-0.5 rounded-full border border-yellow-700/25 font-mono">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

        </div>
        </motion.div>
        
        {/* Action Buttons */}
        <div className="flex flex-row justify-center gap-3 w-full px-2">
            {verifyUrl && (
                <button
                    onClick={() => window.open(verifyUrl, '_blank')} 
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-b from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold rounded-full shadow-lg shadow-yellow-500/10 transition-all duration-300 transform active:scale-95 text-[10px] sm:text-xs tracking-wider uppercase font-mono"
                >
                    <ShieldCheck className="w-3.5 h-3.5"/>
                    <span>Verify Link</span>
                </button>
            )}
            <button
                onClick={handleDownload} 
                className={cn(
                    "flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 font-bold rounded-full transition-all duration-300 transform active:scale-95 text-[10px] sm:text-xs tracking-wider uppercase font-mono",
                    verifyUrl 
                        ? "bg-transparent border border-yellow-500/40 text-yellow-400 hover:bg-yellow-950/30 hover:border-yellow-400" 
                        : "bg-gradient-to-b from-yellow-500 to-yellow-700 text-black shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/25"
                )}
            >
                {verifyUrl ? <Download className="w-3.5 h-3.5"/> : <ShieldCheck className="w-3.5 h-3.5"/>}
                <span>{verifyUrl ? "View Original" : "Verify Credential"}</span>
            </button>
        </div>
    </div>
  );
}
