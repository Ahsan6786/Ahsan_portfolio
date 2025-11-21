"use client";

import { ShieldCheck } from "lucide-react";

type PremiumCertificateProps = {
  recipientName: string;
  certificateTitle: string;
  certificateDescription: string;
  date: string;
  credentialId: string;
  skills: string[];
  verifyUrl: string;
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
}: PremiumCertificateProps) {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = verifyUrl;
        link.download = `${certificateTitle.replace(/ /g, '_')}_Certificate.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


  return (
    <div className="flex flex-col items-center gap-4">
        <div className="relative w-full aspect-[4/3] bg-[#1a1a1a] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden p-2 group transition-all duration-500 hover:shadow-yellow-400/20">
        
        {/* Background Gradient & Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#222] to-black"></div>
        <div 
            className="absolute inset-0 opacity-5"
            style={{
                backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
                backgroundSize: '20px 20px',
            }}
        ></div>

        {/* Gold Border with Glow */}
        <div className="relative w-full h-full rounded-lg border-2 border-transparent p-6 flex flex-col justify-between"
            style={{
                borderImage: 'linear-gradient(145deg, #DAA520, #FFD700, #B8860B) 1',
                boxShadow: 'inset 0 0 15px rgba(255, 215, 0, 0.2), 0 0 15px rgba(255, 215, 0, 0.1)'
            }}
        >
            {/* Corner Ornaments */}
            {[
                "top-2 left-2",
                "top-2 right-2 rotate-90",
                "bottom-2 right-2 rotate-180",
                "bottom-2 left-2 -rotate-90",
            ].map(pos => (
                <div key={pos} className={`absolute w-12 h-12 ${pos}`}>
                    <GoldLeaf className="absolute w-4 h-4 top-0 left-0" />
                    <GoldLeaf className="absolute w-4 h-4 top-0 left-0 rotate-90 origin-top-left" />
                </div>
            ))}


            {/* Main Content */}
            <div className="text-center z-10">
            <h3 className="text-sm font-light uppercase tracking-[0.2em] text-yellow-400/80">
                Certificate of Excellence
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mt-2 mb-4"
                style={{textShadow: '0 2px 10px rgba(255,255,255,0.1)'}}
            >
                {certificateTitle}
            </h1>
            <p className="text-base text-gray-400">
                Awarded to <span className="font-semibold text-gray-200">{recipientName}</span>
            </p>
            </div>

            <div className="text-center z-10 my-4">
            <p className="text-sm text-gray-400 max-w-md mx-auto">
                {certificateDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
                {skills.map(skill => (
                    <span key={skill} className="text-xs bg-yellow-900/50 text-yellow-300 px-3 py-1 rounded-full border border-yellow-700/50">
                        {skill}
                    </span>
                ))}
            </div>
            </div>

            <div className="flex justify-between items-end mt-6 z-10">
                <div className="text-left text-xs">
                    <p className="text-gray-500">Date Issued</p>
                    <p className="font-mono text-gray-300">{date}</p>
                </div>
                <div className="text-right text-xs">
                    <p className="text-gray-500">Credential ID</p>
                    <p className="font-mono text-gray-300">{credentialId}</p>
                </div>
            </div>
        </div>
        </div>
        
        {/* Verify Button */}
        <div className="z-20">
            <button
                onClick={handleDownload} 
                className="relative flex items-center gap-2 px-6 py-2 bg-gradient-to-b from-yellow-500 to-yellow-700 text-black font-bold rounded-full shadow-lg shadow-yellow-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-500/40"
            >
                <ShieldCheck className="w-5 h-5"/>
                <span>Verify Credential</span>
            </button>
        </div>
    </div>
  );
}
