import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Check, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/hooks/useAppStore';

interface ShareChallengeProps {
  score: number;
  total: number;
  subjectName: string;
  exerciseIds: string[];
}

export function ShareChallenge({ score, total, subjectName, exerciseIds }: ShareChallengeProps) {
  const [isShared, setIsShared] = useState(false);
  const incrementInvites = useAppStore(state => state.incrementInvites);
  const studentName = useAppStore(state => state.studentName);

  const handleShare = () => {
    // Increment the invites/shares counter for the gamified referral system
    if (incrementInvites) {
        incrementInvites();
    }
    
    setIsShared(true);
    
    const percentage = Math.round((score / total) * 100);
    const hasCrushedIt = percentage >= 80;
    
    const playerName = studentName || 'Moi';
    
    // Create the challenge payload
    const payload = btoa(JSON.stringify({
      challenger: playerName,
      score: score,
      total: total,
      subject: subjectName,
      ids: exerciseIds
    }));
    
    const intro = hasCrushedIt 
      ? `🔥 Incroyable ! Je viens d'exploser le compteur avec ${percentage}% (${score}/${total}) en ${subjectName} sur Althoria !`
      : `📚 Je m'entraîne dur en ${subjectName} sur Althoria... J'ai fait ${score}/${total} !`;
      
    const challenge = `😈 Arriveras-tu à me battre sur les mêmes questions ? Relève le défi "Clash of Brains" ici :`;
    const appUrl = `${window.location.origin}/#/challenge/${payload}`;
    
    const text = `${intro}\n\n${challenge}\n${appUrl}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    
    // Reset icon state after 3 seconds
    setTimeout(() => setIsShared(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
      className="w-full mt-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl" />
      <div className="bg-white/90 backdrop-blur-md border border-emerald-100 p-5 rounded-3xl shadow-lg relative overflow-hidden flex flex-col items-center text-center gap-3">
        {/* Glow effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-1">
          <Send className="w-6 h-6 ml-1" />
        </div>
        
        <div className="space-y-1 z-10">
          <h3 className="font-extrabold text-slate-800 text-lg">Défier un ami ⚔️</h3>
          <p className="text-xs text-slate-500 font-medium px-4">
            Prouve que tu es le boss en {subjectName}. Envoie ton score sur WhatsApp et lance un Clash of Brains !
          </p>
        </div>

        <Button
          onClick={handleShare}
          className={cn(
            "w-full h-14 rounded-2xl font-black text-md transition-all duration-300 shadow-xl mt-2 flex items-center gap-2",
            isShared 
              ? "bg-emerald-600 text-white" 
              : "bg-[#25D366] hover:bg-[#20bd5a] text-white"
          )}
        >
          {isShared ? (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
              <Check className="w-5 h-5" /> Défi Envoyé !
            </motion.div>
          ) : (
            <>
              <Share2 className="w-5 h-5" />
              Partager sur WhatsApp
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}
