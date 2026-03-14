import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  ChevronLeft, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Info,
  Trophy,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/hooks/useAppStore';
import { getFlashcardsBySubject, Flashcard } from '@/data/flashcards';
import { getSubjectsForTerminal, ROUTE_PATHS, getSubjectColor } from '@/lib/index';
import { FlashcardItem } from '@/components/FlashcardItem';
import { cn } from '@/lib/utils';

export default function Flashcards() {
  const { id: subjectId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { terminal, updatePoints } = useAppStore();
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [sessionStats, setSessionStats] = useState({ learned: 0, points: 0 });

  const subject = getSubjectsForTerminal(terminal).find(s => s.id === subjectId);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  useEffect(() => {
    if (subjectId) {
      const filtered = getFlashcardsBySubject(subjectId);
      // Shuffle cards
      setCards([...filtered].sort(() => Math.random() - 0.5));
    }
  }, [subjectId]);

  const handleNext = (mastered: boolean) => {
    if (mastered) {
      setSessionStats(prev => ({ 
        learned: prev.learned + 1, 
        points: prev.points + 5 
      }));
      updatePoints(5);
    }

    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
    x.set(0);
  };

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 100) {
      handleNext(true); // Swiped right: Mastered
    } else if (info.offset.x < -100) {
      handleNext(false); // Swiped left: To review
    }
  };

  if (!subject) return null;

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[40px] shadow-2xl p-10 max-w-sm w-full space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
          
          <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto text-primary">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-900">Session Terminée !</h2>
            <p className="text-slate-500 font-medium italic">Bravo, tu deviens imbattable en {subject.shortName}.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100">
               <div className="text-2xl font-black text-slate-800">{sessionStats.learned}</div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Maîtrisées</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100">
               <div className="text-2xl font-black text-primary">+{sessionStats.points}</div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">XP Gagnés</div>
            </div>
          </div>

          <Button 
            onClick={() => navigate(ROUTE_PATHS.SUBJECT_DETAIL.replace(':id', subjectId!))}
            className="w-full h-16 rounded-2xl bg-slate-900 text-white font-black text-lg shadow-xl shadow-slate-900/20 active:scale-95 transition-all"
          >
            Retour au sujet
          </Button>
        </motion.div>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate(-1)}
          className="rounded-xl bg-white shadow-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <div className="text-center">
          <h1 className="text-sm font-black uppercase tracking-widest text-slate-400">Flashcards</h1>
          <p className="text-slate-900 font-bold">{subject.shortName}</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[10px] font-black text-primary">
          {currentIndex + 1}/{cards.length}
        </div>
      </div>

      {/* Main Content: The Stack */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {cards.length > 0 ? (
          <div className="w-full max-w-sm relative aspect-[4/5]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                style={{ x, rotate, opacity }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 z-10"
              >
                <FlashcardItem 
                  question={currentCard.question}
                  answer={currentCard.answer}
                  hint={currentCard.hint}
                  subjectColor={getSubjectColor(subjectId!)}
                />
              </motion.div>
            </AnimatePresence>

            {/* Hint Box (Animated feedback on drag) */}
            <motion.div 
              style={{ opacity: useTransform(x, [50, 150], [0, 1]) }}
              className="absolute top-1/2 -right-12 -translate-y-1/2 rotate-90 flex items-center gap-2 text-emerald-500 font-black uppercase tracking-[0.3em] pointer-events-none"
            >
              Je sais <CheckCircle2 className="w-6 h-6" />
            </motion.div>

            <motion.div 
              style={{ opacity: useTransform(x, [-50, -150], [0, 1]) }}
              className="absolute top-1/2 -left-12 -translate-y-1/2 -rotate-90 flex items-center gap-2 text-rose-500 font-black uppercase tracking-[0.3em] pointer-events-none"
            >
              <RotateCcw className="w-6 h-6" /> À revoir
            </motion.div>
          </div>
        ) : (
          <div className="text-center space-y-4 max-w-xs">
            <div className="w-20 h-20 bg-slate-200 rounded-3xl mx-auto flex items-center justify-center text-slate-400">
               <Info className="w-10 h-10" />
            </div>
            <p className="text-slate-500 font-bold italic">Pas de flashcards disponibles pour cette matière pour le moment.</p>
            <Button variant="outline" onClick={() => navigate(-1)} className="rounded-xl">Retour</Button>
          </div>
        )}
      </div>

      {/* Interactive Controls */}
      {cards.length > 0 && (
        <div className="p-8 pb-12 flex items-center justify-center gap-6">
           <button 
             onClick={() => handleNext(false)}
             className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-rose-500 active:scale-90 transition-all border border-slate-100"
           >
              <RotateCcw className="w-8 h-8" />
           </button>
           
           <div className="px-6 py-3 bg-slate-900 rounded-2xl flex items-center gap-3 shadow-xl">
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
              <div className="text-white">
                <div className="text-[8px] font-black uppercase tracking-widest opacity-50">Score Session</div>
                <div className="text-sm font-black leading-none">+{sessionStats.points} XP</div>
              </div>
           </div>

           <button 
             onClick={() => handleNext(true)}
             className="w-16 h-16 rounded-full bg-slate-900 shadow-lg flex items-center justify-center text-emerald-400 active:scale-90 transition-all"
           >
              <CheckCircle2 className="w-8 h-8" />
           </button>
        </div>
      )}
    </div>
  );
}
