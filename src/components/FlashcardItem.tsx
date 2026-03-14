import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, RefreshCw, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FlashcardItemProps {
  question: string;
  answer: string;
  hint?: string;
  subjectColor?: string;
}

export function FlashcardItem({ question, answer, hint, subjectColor = 'bg-primary' }: FlashcardItemProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full aspect-[4/5] cursor-pointer perspective-1000 group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          type: 'spring', 
          stiffness: 260, 
          damping: 20 
        }}
        className="w-full h-full relative preserve-3d"
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden w-full h-full">
          <div className="w-full h-full bg-white rounded-[32px] shadow-xl border border-slate-100 p-8 flex flex-col items-center justify-center text-center gap-6 overflow-hidden">
            {/* Header / Icon */}
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", subjectColor)}>
              <HelpCircle className="w-8 h-8" />
            </div>
            
            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-xl font-black text-slate-800 leading-tight px-2">
                {question}
              </h3>
              {hint && (
                <div className="flex items-center justify-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase tracking-widest bg-slate-50 py-1.5 px-3 rounded-full">
                  <Lightbulb className="w-3 h-3 text-amber-400" /> Indice disponible
                </div>
              )}
            </div>

            {/* Footer Label */}
            <div className="absolute bottom-8 left-0 w-full flex flex-col items-center gap-2">
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                <RefreshCw className="w-3 h-3 animate-spin-slow" /> Appuyer pour retourner
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-slate-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-slate-50 rounded-full blur-3xl opacity-50" />
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden w-full h-full rotate-y-180">
          <div className={cn("w-full h-full rounded-[32px] shadow-xl p-8 flex flex-col items-center justify-center text-center gap-6 overflow-hidden border-4 border-white", subjectColor)}>
            {/* Answer Content */}
            <div className="w-full space-y-6 relative z-10">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                <p className="text-white font-bold text-lg leading-relaxed italic">
                  "{answer}"
                </p>
              </div>
              
              <div className="space-y-1">
                <Badge variant="secondary" className="bg-white/90 text-slate-900 border-none font-black uppercase text-[10px] tracking-widest">
                  Réponse Correcte
                </Badge>
              </div>
            </div>

            {/* Hint if exists */}
            {hint && (
              <div className="absolute top-6 right-6">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
              </div>
            )}

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </motion.div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}

// Internal Badge for Back Side
function Badge({ variant, className, children }: { variant: string, className: string, children: React.ReactNode }) {
  return (
    <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold", className)}>
      {children}
    </span>
  );
}
