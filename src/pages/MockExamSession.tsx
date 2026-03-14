import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  Zap, 
  Target, 
  AlertCircle,
  Award,
  Sparkles
} from 'lucide-react';
import { ROUTE_PATHS, getSubjectsForTerminal } from '@/lib/index';
import { EXERCISES } from '@/data/exercises';
import { useAppStore } from '@/hooks/useAppStore';
import type { Exercise } from '@/lib/index';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AITutorModal } from '@/components/AITutorModal';

const getExamConfig = (terminal: string | null) => {
  switch (terminal) {
    case 'C': return { duration: 60 * 60, questions: 25 }; // 1h, 25 Qs
    case 'A': return { duration: 40 * 60, questions: 15 }; // 40m, 15 Qs
    case 'B': return { duration: 45 * 60, questions: 20 }; // 45m, 20 Qs
    default: return { duration: 45 * 60, questions: 20 };
  }
};

export default function MockExamSession() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedSubjectId = location.state?.subjectId as string | undefined;

  const { addMockResult, updateStreak, terminal } = useAppStore();
  const config = getExamConfig(terminal);

  const [phase, setPhase] = useState<'exam' | 'result'>('exam');
  const [questions, setQuestions] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(config.duration);
  const [startTime] = useState(Date.now());
  const [isAITutorOpen, setIsAITutorOpen] = useState(false);
  const [activeAIQuestion, setActiveAIQuestion] = useState<Exercise | null>(null);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const handleFinish = useCallback(() => {
    const correct = questions.reduce((acc, q) => answers[q.id] === q.correctAnswer ? acc + 1 : acc, 0);
    const finalScoreOn20 = Math.round((correct / questions.length) * 20);
    
    // Sauvegarde du résultat
    addMockResult({
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
      score: finalScoreOn20,
      total: 20,
      timeSpent: Math.round((Date.now() - startTime) / 1000),
      answers: answers
    });
    
    setPhase('result');
  }, [questions, answers, addMockResult, startTime]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswers(prev => ({ ...prev, [questions[currentIndex].id]: answer }));
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(answers[questions[currentIndex + 1]?.id] || null);
    } else {
      handleFinish();
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      setSelectedAnswer(answers[questions[currentIndex - 1]?.id] || null);
    }
  };

  // Initialisation
  useEffect(() => {
    // Filtrage par matière si une a été sélectionnée
    let pool = [...EXERCISES];
    if (selectedSubjectId) {
      pool = pool.filter(ex => ex.subjectId === selectedSubjectId);
    }

    // Mélange initial
    pool = pool.sort(() => Math.random() - 0.5);
    
    // Sélection du nombre de questions
    const finalSelection = pool.slice(0, config.questions);

    // Si pas de matière spécifique (Général), on trie par matière pour que ça soit séquentiel (tour à tour)
    if (!selectedSubjectId) {
      finalSelection.sort((a, b) => a.subjectId.localeCompare(b.subjectId));
    }

    setQuestions(finalSelection);
    setTimeLeft(config.duration); // Reset time when config changes
    updateStreak();
  }, [config.duration, config.questions, updateStreak, selectedSubjectId]);

  // Minuterie
  useEffect(() => {
    if (phase !== 'exam') return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { handleFinish(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, handleFinish]);

  const timePercent = (timeLeft / config.duration) * 100;
  const isTimeWarning = timeLeft < 300; // 5 min

  // ──────────────────── RESULT ────────────────────
  if (phase === 'result') {
    const correctCount = questions.reduce((acc, q) => answers[q.id] === q.correctAnswer ? acc + 1 : acc, 0);
    const scoreOn20 = Math.round((correctCount / questions.length) * 20);
    const isAdmis = scoreOn20 >= 12;
    const subjects = getSubjectsForTerminal(terminal);

    return (
      <div className="min-h-screen bg-accent/5 flex flex-col pb-24">
        <div className={cn(
          "p-8 pt-16 text-center space-y-4 relative overflow-hidden transition-colors duration-1000", 
          isAdmis ? "bg-slate-900 text-white" : "bg-rose-950 text-white"
        )}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.05),transparent_60%)]" />
          
          <motion.div
            initial={{ scale: 0, scaleZ: 0 }}
            animate={{ scale: 1, scaleZ: 1 }}
            transition={{ type: 'spring', damping: 10 }}
            className={cn(
              "w-24 h-24 rounded-3xl mx-auto flex items-center justify-center text-5xl shadow-2xl relative z-10 border border-white/20",
              isAdmis ? "bg-emerald-500 shadow-emerald-500/20" : "bg-rose-500 shadow-rose-500/20"
            )}
          >
            {isAdmis ? '🎉' : '📚'}
          </motion.div>
          
          <div className="relative z-10 space-y-2">
            <h1 className="text-3xl font-black italic uppercase italic tracking-tighter">
              {isAdmis ? 'ADMISSIBLE !' : 'À TRAVAILLER !'}
            </h1>
            <p className="text-xs text-white/50 font-bold uppercase tracking-[0.2em]">
              Résultat Session BAC {terminal || 'EA'}
            </p>
          </div>
        </div>

        <div className="p-6 -mt-8 relative z-20 space-y-6">
          <Card className="border-none shadow-2xl bg-white overflow-hidden">
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-1">
                <span className={cn("text-7xl font-black italic tabular-nums", isAdmis ? "text-emerald-500" : "text-rose-500")}>
                  {scoreOn20}<span className="text-3xl text-muted-foreground">/20</span>
                </span>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-2">Moyenne Générale</p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-accent/20">
                <div>
                  <p className="text-xl font-black text-emerald-500">{correctCount}</p>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-tighter">Correctes</p>
                </div>
                <div className="border-x border-accent/20">
                  <p className="text-xl font-black text-rose-500">{questions.length - correctCount}</p>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-tighter">Fausses</p>
                </div>
                <div>
                  <p className="text-xl font-black text-amber-500">+{isAdmis ? 50 : 20}</p>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-tighter">XP Bonus</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analyse par matière */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Analyse des faiblesses</h3>
            <div className="space-y-3">
              {questions.filter(q => answers[q.id] !== q.correctAnswer).slice(0, 5).map((q, i) => {
                const s = subjects.find(sub => sub.id === q.subjectId);
                return (
                  <motion.div 
                    key={q.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-2xl bg-white shadow-sm flex items-start gap-4 border-l-4 border-rose-500"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-xl flex-shrink-0">
                      {s?.icon || '❓'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-0.5">{s?.name || 'Matière Inconnue'}</p>
                      <p className="text-sm font-bold text-foreground leading-tight line-clamp-2">{q.question}</p>
                       <div className="mt-2 flex items-center justify-between gap-2">
                          <span className="text-[10px] font-bold text-emerald-500">✓ {q.correctAnswer}</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => {
                              setActiveAIQuestion(q);
                              setIsAITutorOpen(true);
                            }}
                            className="h-7 px-2 rounded-lg text-[9px] font-black text-primary bg-primary/5 hover:bg-primary/10 border-none gap-1"
                          >
                            <Sparkles className="w-2.5 h-2.5 fill-current" /> IA
                          </Button>
                       </div>
                     </div>
                   </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <Button
            onClick={() => navigate(ROUTE_PATHS.MOCK_EXAM)}
            className="w-full h-14 rounded-2xl bg-slate-900 text-white font-black text-lg shadow-xl"
          >
            Quitter l'Espace Examen
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => navigate(ROUTE_PATHS.PROGRESS)}
            className="w-full h-12 rounded-2xl font-bold text-muted-foreground"
          >
            Voir ma progression détaillée
          </Button>
        </div>
      </div>
    );
  }

  // ──────────────────── EXAM PHASE ────────────────────
  const currentQ = questions[currentIndex];
  const subjects = getSubjectsForTerminal(terminal);

  return (
    <div className="min-h-screen bg-accent/5 flex flex-col">
      {/* Exam Header */}
      <div className={cn(
        "px-4 pt-12 pb-4 flex items-center justify-between border-b transition-all duration-500", 
        isTimeWarning ? "bg-rose-600 text-white" : "bg-white/80 backdrop-blur-md"
      )}>
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center shadow-lg border",
            isTimeWarning ? "bg-rose-500 border-white/20 animate-pulse" : "bg-primary/10 border-primary/20 text-primary"
          )}>
            <Clock className="w-5 h-5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className={cn("text-lg font-black tabular-nums tracking-tighter", isTimeWarning ? "text-white" : "text-foreground")}>
              {formatTime(timeLeft)}
            </span>
            <span className={cn("text-[8px] font-black uppercase tracking-widest", isTimeWarning ? "text-white/70" : "text-muted-foreground")}>
              Temps restant
            </span>
          </div>
        </div>
        
        <div className="text-right">
           <span className={cn("text-xs font-black uppercase tracking-widest", isTimeWarning ? "text-white" : "text-muted-foreground")}>
             Progression
           </span>
           <div className="text-sm font-black italic tracking-tighter">
              {currentIndex + 1} <span className="text-[10px] opacity-50">/ {questions.length}</span>
           </div>
        </div>

        {activeAIQuestion && (
          <AITutorModal 
            isOpen={isAITutorOpen}
            onClose={() => setIsAITutorOpen(false)}
            question={activeAIQuestion.question}
            explanation={activeAIQuestion.explanation}
          />
        )}
      </div>
      <div className="h-1.5 w-full bg-accent/10">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
        />
      </div>

      {/* Question section */}
      <div className="flex-1 p-6 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <Badge className="bg-primary/10 text-primary border-none text-[9px] font-black tracking-[0.2em] px-3">
                {subjects.find(s => s.id === currentQ?.subjectId)?.name.toUpperCase() || ' GÉNÉRAL '}
              </Badge>
              <Badge variant="outline" className="text-[9px] font-black border-accent/30 text-muted-foreground">
                {currentQ?.difficulty.toUpperCase()}
              </Badge>
            </div>

            <h2 className="text-xl font-bold leading-tight text-foreground italic">
              {currentQ?.question}
            </h2>

            <div className="grid grid-cols-1 gap-3">
              {currentQ?.choices?.map((option, i) => (
                <motion.button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={cn(
                    "w-full p-4 rounded-2xl text-left text-sm font-bold transition-all border-2 flex items-center gap-4 relative overflow-hidden",
                    selectedAnswer === option
                      ? "border-primary bg-primary/5 text-primary shadow-inner"
                      : "border-white bg-white hover:border-primary/20 hover:bg-accent/5"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl border-2 flex items-center justify-center flex-shrink-0 text-xs font-black", 
                    selectedAnswer === option ? "border-primary bg-primary text-white" : "border-accent/20 text-muted-foreground"
                  )}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span className="flex-1">{option}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="p-4 bg-white/50 backdrop-blur-md border-t border-accent/20 flex gap-3 pb-10">
        <Button 
          variant="outline" 
          onClick={goToPrev} 
          disabled={currentIndex === 0}
          className="h-14 w-14 rounded-2xl border-accent/30 text-muted-foreground"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          onClick={goToNext}
          disabled={!selectedAnswer}
          className={cn(
            "flex-1 h-14 rounded-2xl font-black text-lg transition-all shadow-xl",
            selectedAnswer 
              ? currentIndex === questions.length - 1 
                ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20" 
                : "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20"
              : "bg-accent/40 text-muted-foreground opacity-50 cursor-not-allowed"
          )}
        >
          {currentIndex === questions.length - 1 ? 'Terminer l\'examen' : 'Suivant'}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
