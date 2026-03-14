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
  MessageSquareText,
  Target,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/hooks/useAppStore';

interface AITutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: string;
  explanation: string;
  methodology?: string;
  deepDive?: string;
  isCorrect?: boolean | null;
}

export function AITutorModal({ isOpen, onClose, question, explanation, methodology, deepDive, isCorrect }: AITutorModalProps) {
  const [loading, setLoading] = useState(true);
  const { terminal } = useAppStore();

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [isOpen, question, explanation]);

  if (!isOpen) return null;

  // Determine subject-specific context
  const isScience = question.toLowerCase().includes('calcul') || question.toLowerCase().includes('formule');
  
  const sections = [
    {
      title: "📖 L'Explication du Professeur",
      content: explanation,
      color: "from-blue-500/5 to-indigo-500/5 border-blue-100",
      iconColor: "bg-blue-500"
    },
    ...(methodology ? [{
      title: "🛠️ Méthode de Résolution",
      content: methodology,
      color: "from-emerald-500/5 to-teal-500/5 border-emerald-100",
      iconColor: "bg-emerald-500"
    }] : []),
    ...(deepDive ? [{
      title: "🧠 Zoom sur le Concept",
      content: deepDive,
      color: "from-purple-500/5 to-fuchsia-500/5 border-purple-100",
      iconColor: "bg-purple-500"
    }] : []),
    {
      title: "🎯 Point Clé pour le BAC",
      content: isScience 
        ? "La rigueur dans les étapes du calcul est primordiale. Un résultat sans unité ou sans justification est souvent lourdement sanctionné."
        : "La clarté de la rédaction et l'utilisation des termes techniques précis sont les clés d'une note d'excellence dans cette matière.",
      color: "from-amber-500/5 to-yellow-500/5 border-amber-100",
      iconColor: "bg-amber-500"
    }
  ];

  const getIntroMessage = () => {
    if (isCorrect === true) {
      const positive = [
        "Fidèle au poste ! Tu as parfaitement maîtrisé cette notion.",
        "Excellent ! Ton raisonnement est impeccable.",
        "Bravo ! C'est exactement l'approche attendue au BAC.",
        "Impressionnant ! Tu maîtrises les subtilités du sujet."
      ];
      return positive[Math.floor(Math.random() * positive.length)];
    } else if (isCorrect === false) {
      const encouraging = [
        "Ne te décourage pas ! L'erreur est la mère de l'apprentissage.",
        "Oups ! Ce piège est classique. Analyse bien ceci :",
        "Pas tout à fait, mais tu brûles ! Voici l'explication :",
        "Regardons ensemble où le raisonnement a dévié."
      ];
      return encouraging[Math.floor(Math.random() * encouraging.length)];
    }
    return "Analysons ensemble les points fondamentaux de cette question.";
  };

  const getIntroLabel = () => {
    if (isCorrect === true) return "Expertise Validée";
    if (isCorrect === false) return "Correction Détaillée";
    return "Analyse Professorale";
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 32, stiffness: 350 }}
          className="relative w-full max-w-xl bg-white rounded-t-[3.5rem] sm:rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border-t border-white/20"
        >
          {/* Decorative Header Bar */}
          <div className="w-full h-1.5 bg-gradient-to-r from-primary via-indigo-500 to-rose-500" />

          {/* Header */}
          <div className="p-8 pb-4 flex items-center justify-between border-b bg-slate-50/50">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-16 h-16 rounded-3xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20">
                  <Bot className="w-10 h-10" />
                </div>
              </div>
              <div>
                <h3 className="font-black text-2xl tracking-tighter leading-none text-slate-900">
                  Le Professeur <span className="text-primary italic">Althoria</span>
                </h3>
                <div className="flex gap-2 mt-2">
                   <Badge className="bg-slate-900 text-white border-none text-[8px] font-black px-2 py-0.5 tracking-widest uppercase">Expert BAC</Badge>
                   <Badge variant="outline" className="border-primary/30 text-primary text-[8px] font-black px-2 py-0.5 tracking-widest uppercase">SÉRIE {terminal || 'EA'}</Badge>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full h-12 w-12 hover:bg-white border border-slate-200">
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8 no-scrollbar scroll-smooth">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                 <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                 <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Le Professeur prépare son explication...</h4>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8 pb-10"
              >
                {/* Intro Context Card */}
                <div className={cn(
                  "relative px-6 py-8 rounded-[2.5rem] shadow-xl overflow-hidden",
                  isCorrect === true ? "bg-emerald-600 shadow-emerald-500/20" : isCorrect === false ? "bg-rose-600 shadow-rose-500/20" : "bg-slate-900"
                )}>
                   <div className="absolute top-0 right-0 p-6 opacity-10">
                      <GraduationCap className="w-32 h-32 text-white" />
                   </div>
                   <div className="relative z-10">
                      <p className="text-sm font-black text-white/70 uppercase tracking-widest mb-1 italic">
                        {getIntroLabel()}
                      </p>
                      <p className="text-lg font-bold text-white leading-tight">
                        "{getIntroMessage()}"
                      </p>
                   </div>
                </div>

                {/* The Core Explanation Sections */}
                <div className="space-y-6">
                  {sections.map((section, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 * idx }}
                      className={cn(
                        "p-8 rounded-[2.5rem] border shadow-sm bg-gradient-to-br",
                        section.color
                      )}
                    >
                       <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
                          <div className={cn("w-1.5 h-6 rounded-full", section.iconColor)} />
                          {section.title}
                       </h4>
                       <p className="text-base text-slate-800 leading-relaxed font-bold">
                        {section.content}
                       </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Action Button */}
          <div className="p-8 pt-0 bg-white">
             <Button 
               onClick={onClose}
               className="w-full h-20 rounded-[2.5rem] bg-slate-900 text-white font-black text-xl shadow-2xl hover:bg-slate-800 transition-all flex gap-3"
             >
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                Merci Professeur !
             </Button>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </AnimatePresence>
  );
}
