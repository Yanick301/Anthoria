import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Unlock, FileText, Send, Sparkles } from 'lucide-react';
import { ROUTE_PATHS } from '@/lib/index';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useAppStore } from '@/hooks/useAppStore';

interface LockedPremiumContentProps {
  title: string;
  description: string;
  requiredInvites?: number;
}

export function LockedPremiumContent({ 
  title, 
  description, 
  requiredInvites = 3 
}: LockedPremiumContentProps) {
  const navigate = useNavigate();
  const invitesSent = useAppStore(state => state.invitesSent);
  const incrementInvites = useAppStore(state => state.incrementInvites);
  const currentInvites = invitesSent || 0;
  const isUnlocked = currentInvites >= requiredInvites;

  const handleInvite = () => {
    // Increment the invites counter
    if (incrementInvites) {
      incrementInvites();
    }
    
    // Construct the WhatsApp message
    const text = `Salut ! 🚀 J'utilise l'application Althoria pour réviser mon BAC. C'est pépite ! Rejoins-moi pour qu'on se prépare ensemble : ${window.location.origin}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleDownload = () => {
    // Redirect to the Mock Exam feature as the "Intensive Training Pack"
    navigate(ROUTE_PATHS.MOCK_EXAM);
  };

  if (isUnlocked) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full relative group mt-4"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur opacity-25" />
        <div className="bg-white border-2 border-amber-200 p-6 rounded-3xl shadow-lg relative flex flex-col items-center text-center gap-3">
          <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center rotate-3 scale-110 mb-2">
            <Unlock className="w-8 h-8" />
          </div>
          
          <div className="space-y-2 relative z-10 w-full">
            <BadgePremium />
            <h3 className="font-black text-slate-800 text-xl">{title}</h3>
            <p className="text-sm text-slate-600 font-medium">Contenu débloqué ! Prépare-toi pour le BAC Blanc intensif.</p>
          </div>

          <Button
            onClick={handleDownload}
            className="w-full h-14 mt-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-lg shadow-xl shadow-amber-500/20 flex items-center gap-2"
          >
            <FileText className="w-5 h-5" /> Accéder au contenu
          </Button>
        </div>
      </motion.div>
    );
  }

  // Locked State
  const progressPercent = Math.min((currentInvites / requiredInvites) * 100, 100);

  return (
    <div className="w-full mt-4 relative group">
      <div className="bg-slate-50 border-2 border-slate-200 border-dashed p-6 rounded-3xl relative overflow-hidden flex flex-col items-center text-center gap-4">
        {/* Background Lock Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <Lock className="w-48 h-48 text-slate-900" />
        </div>
        
        <div className="w-16 h-16 bg-slate-200 text-slate-500 rounded-2xl flex items-center justify-center mb-1 relative z-10 shadow-inner">
          <Lock className="w-8 h-8" />
        </div>
        
        <div className="space-y-2 relative z-10 w-full">
          <BadgePremium />
          <h3 className="font-extrabold text-slate-800 text-lg opacity-90">{title}</h3>
          <p className="text-xs text-slate-500 font-medium leading-relaxed px-2">
            {description}
          </p>
        </div>

        <div className="w-full space-y-2 mt-2 relative z-10">
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <span>Progression</span>
            <span>{currentInvites} / {requiredInvites} Amis</span>
          </div>
          <Progress value={progressPercent} className="h-3 bg-slate-200" />
        </div>

        <Button
          onClick={handleInvite}
          className="w-full h-14 rounded-2xl font-black text-md bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg mt-2 flex items-center gap-2 relative z-10 group-hover:scale-[1.02] transition-transform"
        >
          <Send className="w-5 h-5" />
          Inviter un ami sur WhatsApp
        </Button>
      </div>
    </div>
  );
}

function BadgePremium() {
  return (
    <div className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-200 to-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
      <Sparkles className="w-3 h-3" /> Exclusivité
    </div>
  );
}
