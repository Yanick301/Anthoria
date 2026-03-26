import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  ArrowLeft, 
  Sword, 
  Zap, 
  User, 
  ChevronRight,
  Target,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Play
} from 'lucide-react';
import { EXERCISES } from '@/data/exercises';
import { useAppStore } from '@/hooks/useAppStore';
import { ROUTE_PATHS, getSubjectsForTerminal } from '@/lib/index';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Exercise } from '@/lib/index';

interface ChallengeData {
  challenger: string;
  score: number;
  total: number;
  subject: string;
  ids: string[];
}

export default function ChallengeMatch() {
  const { payload } = useParams<{ payload: string }>();
  const navigate = useNavigate();
  const { completeExercise, terminal, studentName } = useAppStore();
  const subjects = getSubjectsForTerminal(terminal);

  const [challengeData, setChallengeData] = useState<ChallengeData | null>(null);
  const [phase, setPhase] = useState<'intro' | 'play' | 'final'>('intro');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  
  // Game state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState<Array<{ correct: boolean; answer: string }>>([]);
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    try {
      if (payload) {
        const CURRENT_VERSION = '1.0.5';
        const decoded = JSON.parse(atob(payload)) as ChallengeData;
        setChallengeData(decoded);
        
        // Match exercises
        const matched = decoded.ids.map(id => EXERCISES.find(ex => ex.id === id)).filter(Boolean) as Exercise[];
        setExercises(matched);
      }
    } catch (e) {
      console.error("Failed to decode challenge payload", e);
    }
  }, [payload]);

  const startMatch = () => {
    setPhase('play');
    setStartTime(Date.now());
  };

  const handleSelect = (option: string) => {
    if (answered) return;
    const current = exercises[currentIndex];
    setSelected(option);
    setAnswered(true);
    const isCorrect = option === current.correctAnswer;
    setResults(prev => [...prev, { correct: isCorrect, answer: option }]);
    
    // Track in store
    completeExercise(current.subjectId, current.id, isCorrect, current.points);
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setPhase('final');
    }
  };

  if (!challengeData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center space-y-6">
        <div className="bg-rose-100 p-4 rounded-full text-rose-600">
          <HelpCircle className="w-12 h-12" />
        </div>
        <h1 className="text-2xl font-black italic uppercase">Défi introuvable</h1>
        <p className="text-muted-foreground">Ce lien de défi est invalide ou a expiré.</p>
        <Button onClick={() => navigate(ROUTE_PATHS.HOME)} className="w-full max-w-xs">
          Retour à l'accueil
        </Button>
      </div>
    );
  }

  // INTRO PHASE
  if (phase === 'intro') {
    return (
      <div className="min-h-screen bg-accent/5 flex flex-col p-6 pt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
        >
          <div className="relative">
             <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
             <div className="relative bg-white p-6 rounded-[2.5rem] shadow-2xl border-4 border-primary/20">
                <Sword className="w-16 h-16 text-primary animate-bounce-slow" />
             </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">CLASH OF BRAINS</h1>
            <p className="text-muted-foreground font-medium">Défi lancé par <span className="text-primary font-bold">{challengeData.challenger}</span></p>
          </div>

          <Card className="w-full bg-white border-none shadow-xl rounded-[2rem] overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                 <div className="text-left">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Matière</p>
                    <p className="font-bold text-lg">{challengeData.subject}</p>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Score à battre</p>
                    <p className="font-black text-2xl text-primary">{challengeData.score}/{challengeData.total}</p>
                 </div>
              </div>
              
              <div className="p-4 bg-accent/10 rounded-2xl text-sm italic text-muted-foreground">
                "{challengeData.challenger} a répondu à {challengeData.total} questions sur les mêmes sujets. Arriveras-tu à faire un meilleur score ?"
              </div>
            </CardContent>
          </Card>

          <div className="w-full space-y-4 pt-4">
             <Button onClick={startMatch} size="lg" className="w-full h-16 rounded-2xl bg-primary text-white font-black text-xl shadow-2xl shadow-primary/30 gap-2">
                <Play className="fill-current w-5 h-5" /> RELEVER LE DÉFI !
             </Button>
             <Button onClick={() => navigate(ROUTE_PATHS.HOME)} variant="ghost" className="w-full h-12 rounded-2xl font-bold text-muted-foreground">
                Plus tard
             </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // PLAY PHASE
  if (phase === 'play') {
    if (exercises.length === 0) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center space-y-6">
          <div className="bg-rose-100 p-4 rounded-full text-rose-600">
            <HelpCircle className="w-12 h-12" />
          </div>
          <h1 className="text-2xl font-black italic uppercase">Aucun exercice disponible</h1>
          <p className="text-muted-foreground">Ce défi ne contient aucun exercice valide.</p>
          <Button onClick={() => navigate(ROUTE_PATHS.HOME)} className="w-full max-w-xs">
            Retour à l'accueil
          </Button>
        </div>
      );
    }
    const current = exercises[currentIndex];
    const subject = subjects.find(s => s.id === current.subjectId);

    return (
      <div className="min-h-screen bg-accent/5 flex flex-col">
        <div className="px-4 pt-12 pb-4 border-b bg-white/50 backdrop-blur-md">
           <div className="flex justify-between items-center mb-2">
              <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black uppercase">DÉFI VS {challengeData.challenger.toUpperCase()}</Badge>
              <span className="text-xs font-black text-muted-foreground">{currentIndex + 1}/{exercises.length}</span>
           </div>
           <Progress value={((currentIndex + 1) / exercises.length) * 100} className="h-1.5" />
        </div>

        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-6"
            >
              <Card className="border-none shadow-sm bg-white overflow-hidden rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-3">
                     <Badge variant="outline" className="text-[9px] uppercase font-black tracking-tighter opacity-70">{subject?.shortName}</Badge>
                     <Badge variant="outline" className="text-[9px] uppercase font-black tracking-tighter opacity-70 border-primary/20 text-primary">{current.difficulty}</Badge>
                  </div>
                  <h2 className="text-xl font-bold leading-tight">{current.question}</h2>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-3">
                {current.choices?.map((option, i) => {
                   const isSelected = selected === option;
                   const isCorrectOption = answered && option === current.correctAnswer;
                   const isWrongSelected = answered && isSelected && option !== current.correctAnswer;

                   return (
                     <button
                       key={option}
                       disabled={answered}
                       onClick={() => handleSelect(option)}
                       className={cn(
                        "w-full p-4 rounded-2xl text-left transition-all border-2 flex items-center justify-between group",
                        isCorrectOption ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm" :
                          isWrongSelected ? "border-rose-500 bg-rose-50 text-rose-700 shadow-sm" :
                            isSelected ? "border-primary bg-primary/5 text-primary shadow-inner" :
                              "border-white bg-white hover:border-accent shadow-sm"
                       )}
                     >
                       <span className="font-bold text-sm flex-1">{option}</span>
                       <div className={cn(
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-300",
                          isCorrectOption ? "border-emerald-500 bg-emerald-500 text-white" :
                            isWrongSelected ? "border-rose-500 bg-rose-500 text-white" :
                              isSelected ? "border-primary bg-primary text-white" : "border-accent"
                       )}>
                          {isCorrectOption && <CheckCircle2 className="w-4 h-4" />}
                          {isWrongSelected && <XCircle className="w-4 h-4" />}
                       </div>
                     </button>
                   );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-6 pb-12 bg-white/50 border-t backdrop-blur-md">
           <Button
              onClick={handleNext}
              disabled={!answered}
              className={cn(
                "w-full h-14 rounded-2xl font-black text-lg transition-all",
                answered ? "bg-primary text-white shadow-xl shadow-primary/20" : "bg-accent/40 text-muted-foreground cursor-not-allowed"
              )}
           >
              {currentIndex === exercises.length - 1 ? 'Voir le podium !' : 'Décrocher le point'}
           </Button>
        </div>
      </div>
    );
  }

  // FINAL PHASE
  const myScore = results.filter(r => r.correct).length;
  const isWinner = myScore > challengeData.score;
  const isDraw = myScore === challengeData.score;

  return (
    <div className="min-h-screen bg-accent/5 flex flex-col p-6 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
      >
        <div className="relative">
           <div className={cn(
             "w-28 h-28 rounded-full flex items-center justify-center text-6xl shadow-2xl relative z-10",
             isWinner ? "bg-emerald-500" : isDraw ? "bg-amber-500" : "bg-rose-500"
           )}>
              {isWinner ? '👑' : isDraw ? '🤝' : '🦾'}
           </div>
           {isWinner && (
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 bg-emerald-400/30 blur-2xl rounded-full -m-4" 
             />
           )}
        </div>

        <div>
           <h2 className="text-3xl font-black italic uppercase tracking-tighter">
             {isWinner ? 'LA VICTOIRE !' : isDraw ? 'MATCH NUL !' : 'BIEN TENTÉ !'}
           </h2>
           <p className="text-muted-foreground font-medium uppercase text-xs tracking-widest mt-1">
             {isWinner ? `Tu as détrôné ${challengeData.challenger} !` : isDraw ? "Vous êtes à égalité !" : `${challengeData.challenger} garde sa couronne.`}
           </p>
        </div>

        <div className="w-full flex justify-center gap-4 py-8 relative">
           {/* Visual Podium */}
           <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-2xl relative border-2 border-white shadow-sm overflow-hidden">
                 <User className="w-8 h-8 opacity-40" />
                 {isWinner && <div className="absolute top-0 right-0 p-1 bg-emerald-500 text-white rounded-bl-lg"><CheckCircle2 className="w-3 h-3" /></div>}
              </div>
              <div className="h-24 w-12 bg-primary/10 rounded-t-xl flex flex-col-reverse p-2">
                 <span className="font-black text-primary text-xl">{myScore}</span>
              </div>
              <span className="text-xs font-bold truncate w-16">{studentName || 'Toi'}</span>
           </div>

           <div className="flex flex-col items-center gap-2 mt-4">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-2xl relative border-2 border-white shadow-sm overflow-hidden">
                 <User className="w-8 h-8 opacity-40 text-rose-600" />
                 {!isWinner && !isDraw && <div className="absolute top-0 right-0 p-1 bg-rose-500 text-white rounded-bl-lg"><Trophy className="w-3 h-3" /></div>}
                 {isDraw && <div className="absolute top-0 right-0 p-1 bg-amber-500 text-white rounded-bl-lg"><ArrowLeft className="w-3 h-3" /></div>}
              </div>
              <div className="h-20 w-12 bg-rose-100 rounded-t-xl flex flex-col-reverse p-2">
                 <span className="font-black text-rose-600 text-xl">{challengeData.score}</span>
              </div>
              <span className="text-xs font-bold truncate w-16 opacity-60">{challengeData.challenger}</span>
           </div>
        </div>

        <div className="w-full space-y-4">
           {isWinner ? (
             <Button onClick={() => navigate(ROUTE_PATHS.HOME)} className="w-full h-16 rounded-2xl bg-emerald-600 text-white font-black text-lg gap-2 shadow-xl shadow-emerald-600/20">
                Savourer la victoire
             </Button>
           ) : (
             <Button onClick={() => setPhase('intro')} className="w-full h-16 rounded-2xl bg-primary text-white font-black text-lg gap-2 shadow-xl shadow-primary/20">
                <RotateCcw className="w-5 h-5" /> Retenter le défi
             </Button>
           )}
           <Button onClick={() => navigate(ROUTE_PATHS.HOME)} variant="ghost" className="w-full h-12 rounded-2xl font-bold text-muted-foreground">
              Retour au menu
           </Button>
        </div>
      </motion.div>
    </div>
  );
}

const RotateCcw = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);
