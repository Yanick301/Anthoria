import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  X, 
  Bot, 
  Send, 
  Loader2, 
  GraduationCap, 
  Lightbulb,
  MessageSquareText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface AITutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: string;
  explanation: string;
}

export function AITutorModal({ isOpen, onClose, question, explanation }: AITutorModalProps) {
  const [loading, setLoading] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [fullText, setFullText] = useState('');

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setDisplayText('');
      
      // Simuler une "réflexion" de l'IA
      const timer = setTimeout(() => {
        setLoading(false);
        const aiResponse = generateAIExplanation(question, explanation);
        setFullText(aiResponse);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isOpen, question, explanation]);

  // Typing effect
  useEffect(() => {
    if (!loading && fullText) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(fullText.substring(0, i));
        i += 3; // Type faster
        if (i > fullText.length) clearInterval(interval);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [loading, fullText]);

  const generateAIExplanation = (q: string, e: string) => {
    return `Bonjour ! 👋 En tant que ton tuteur Althoria, je vais t'aider à mieux comprendre ce point.

Dans cette question : "${q.substring(0, 60)}...", le point clé à retenir est que ${e.replace('.', '').toLowerCase()}. 

💡 **L'explication simplifiée :**
Imprime bien ceci dans ta mémoire : imagine que les concepts ici sont comme des outils de construction. Tu dois d'abord poser la base (le concept principal) pour que la structure (le résultat) tienne debout.

**Ce qu'il faut retenir pour le BAC :**
Ne te contente pas d'apprendre par cœur, essaie de voir le lien logique. Si tu as d'autres questions, je suis là ! Courage, tu vas cartonner ! 🚀`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-lg bg-white rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b bg-gradient-to-r from-primary/5 to-transparent flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-sm uppercase tracking-tight flex items-center gap-1.5">
                  Tuteur IA Althoria <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
                </h3>
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-none text-[8px] h-4 py-0 font-black">PREMIUM</Badge>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* User message summary */}
            <div className="flex justify-end">
               <div className="bg-accent/10 px-4 py-3 rounded-2xl rounded-tr-none max-w-[85%]">
                  <p className="text-xs font-bold text-muted-foreground flex items-center gap-2 mb-1">
                     <GraduationCap className="w-3 h-3" /> Question
                  </p>
                  <p className="text-sm font-medium leading-tight">"{question}"</p>
               </div>
            </div>

            {/* AI Response */}
            <div className="flex gap-3">
               <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Bot className="w-5 h-5" />
               </div>
               <div className="bg-white border-2 border-primary/10 px-5 py-4 rounded-3xl rounded-tl-none shadow-sm flex-1">
                  {loading ? (
                    <div className="flex flex-col items-center py-4 gap-2">
                       <Loader2 className="w-6 h-6 text-primary animate-spin" />
                       <span className="text-[10px] font-black text-muted-foreground uppercase animate-pulse">L'IA réfléchit...</span>
                    </div>
                  ) : (
                    <div className="space-y-4">
                       <p className="text-sm leading-relaxed font-medium whitespace-pre-wrap">
                          {displayText}
                       </p>
                       <motion.div 
                         initial={{ scale: 0.9, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         transition={{ delay: 0.5 }}
                         className="p-3 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3"
                       >
                          <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5" />
                          <p className="text-[11px] text-amber-800 font-bold italic leading-snug">
                            Astuce : Utilise cet outil surtout pour les questions où tu as hésité !
                          </p>
                       </motion.div>
                    </div>
                  )}
               </div>
            </div>
          </div>

          {/* Footer Input Placeholder (Prestige) */}
          <div className="p-4 border-t bg-slate-50 flex gap-2">
             <div className="flex-1 bg-white border h-12 rounded-2xl px-4 flex items-center text-muted-foreground text-sm font-medium italic opacity-60">
                L'IA analyse tes points faibles...
             </div>
             <Button size="icon" disabled className="h-12 w-12 rounded-2xl bg-accent text-muted-foreground opacity-50">
                <Send className="w-5 h-5" />
             </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
