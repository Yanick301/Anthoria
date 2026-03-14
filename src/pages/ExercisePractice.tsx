import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Trophy, 
  Zap, 
  Target, 
  ArrowLeft, 
  RotateCcw, 
  Clock,
  HelpCircle,
  Sparkles,
  Bot
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
import { ShareChallenge } from '@/components/ShareChallenge';
import { AITutorModal } from '@/components/AITutorModal';

const QUIZ_LENGTH = 10;

export default function ExercisePractice() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const { completeExercise, updateStreak, terminal } = useAppStore();
  
  const subject = getSubjectsForTerminal(terminal).find(s => s.id === subjectId);

  const [phase, setPhase] = useState<'quiz' | 'result'>('quiz');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState<Array<{ correct: boolean; answer: string }>>([]);
  const [startTime] = useState(Date.now());
  const [questionTime, setQuestionTime] = useState(0);
  const [isAITutorOpen, setIsAITutorOpen] = useState(false);

  useEffect(() => {
    // Filtrage des exercices par matière
    const pool = EXERCISES.filter(ex => ex.subjectId === subjectId);
    
    // Mélange et sélection
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, QUIZ_LENGTH);
    
    // Si pas assez d'exercices, on prend ce qu'on a
    if (shuffled.length === 0) {
      // Fallback: exercices aléatoires d'autres matières si vraiment vide (ne devrait pas arriver)
      const fallback = [...EXERCISES].sort(() => Math.random() - 0.5).slice(0, QUIZ_LENGTH);
      setExercises(fallback);
    } else {
      setExercises(shuffled);
    }
    
    updateStreak();
  }, [subjectId, updateStreak]);

  useEffect(() => {
    if (answered) return;
    const t = setInterval(() => setQuestionTime(q => q + 1), 1000);
    return () => clearInterval(t);
  }, [answered, currentIndex]);

  const current = exercises[currentIndex];
  
  if (!current && phase === 'quiz') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center space-y-4">
        <HelpCircle className="w-16 h-16 text-muted-foreground opacity-20" />
        <h2 className="text-xl font-bold">Chargement des exercices...</h2>
        <p className="text-sm text-muted-foreground">Préparez-vous à relever le défi.</p>
        <Button variant="ghost" onClick={() => navigate(-1)}>Retour</Button>
      </div>
    );
  }

  const handleSelect = (option: string) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    const isCorrect = option === current.correctAnswer;
    setResults(prev => [...prev, { correct: isCorrect, answer: option }]);
    
    // Mise à jour de la progression
    completeExercise(subjectId!, current.id, isCorrect, current.points);
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelected(null);
      setAnswered(false);
      setQuestionTime(0);
    } else {
      setPhase('result');
    }
  };

  // ───── RESULT ─────
  if (phase === 'result') {
    const correctCount = results.filter(r => r.correct).length;
    const scorePercent = exercises.length ? Math.round((correctCount / exercises.length) * 100) : 0;
    const totalTime = Math.round((Date.now() - startTime) / 1000);
    const isGood = scorePercent >= 60;

    return (
      <div className="min-h-screen bg-accent/5 flex flex-col pb-24">
        {/* Result Header */}
        <div className={cn(
          "p-8 pt-16 text-center space-y-4 relative overflow-hidden transition-colors duration-700", 
          isGood ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"
        )}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.2),transparent_60%)]" />
          
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 12 }}
            className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center text-5xl shadow-2xl relative z-10 border border-white/30"
          >
            {isGood ? '🏆' : '💪'}
          </motion.div>
          
          <div className="relative z-10 space-y-1">
            <h1 className="text-3xl font-black italic uppercase tracking-tight">
              {isGood ? 'FÉLICITATIONS !' : 'NE LÂCHE RIEN !'}
            </h1>
            <p className="text-sm text-white/70 font-bold uppercase tracking-widest">
              {subject?.name || 'Entraînement'} • {Math.floor(totalTime / 60)}m {totalTime % 60}s
            </p>
          </div>
        </div>

        {/* Score Card */}
        <div className="p-6 -mt-8 relative z-20">
          <Card className="border-none shadow-xl overflow-hidden bg-white">
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-1">
                <span className={cn("text-7xl font-black italic", isGood ? "text-emerald-500" : "text-rose-500")}>
                  {scorePercent}<span className="text-3xl">%</span>
                </span>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Score de réussite</p>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center pt-6 border-t border-accent/30">
                <div>
                  <p className="text-xl font-black text-emerald-500">{correctCount}</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Correctes</p>
                </div>
                <div className="border-x border-accent/30">
                  <p className="text-xl font-black text-rose-500">{exercises.length - correctCount}</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Fausses</p>
                </div>
                <div>
                  <p className="text-xl font-black text-amber-500">+{correctCount * 10}</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Points XP</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Feedback */}
        <div className="px-6 space-y-4">
          <h3 className="font-black text-xs uppercase tracking-widest text-muted-foreground ml-1">Analyse des questions</h3>
          <div className="space-y-3">
            {exercises.map((ex, i) => (
              <motion.div 
                key={ex.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  "p-4 rounded-2xl border-none shadow-sm flex items-start gap-4 bg-white",
                  results[i]?.correct ? "border-l-4 border-l-emerald-500" : "border-l-4 border-l-rose-500"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5", 
                  results[i]?.correct ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
                )}>
                  {results[i]?.correct ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-foreground leading-tight">{ex.question}</p>
                  {!results[i]?.correct && (
                    <div className="mt-2 text-xs">
                      <span className="text-muted-foreground">Ma réponse : </span>
                      <span className="text-rose-500 font-bold">{results[i]?.answer || 'Passée'}</span>
                      <br />
                      <span className="text-muted-foreground">Correct : </span>
                      <span className="text-emerald-500 font-bold">{ex.correctAnswer}</span>
                    </div>
                  )}
                </div>
                <span className="text-[10px] font-black text-muted-foreground opacity-30">#{i + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Viral Share Component */}
        <div className="px-6 mt-2">
          <ShareChallenge 
            score={correctCount} 
            total={exercises.length} 
            subjectName={subject?.name || 'la révision'} 
            exerciseIds={exercises.map(ex => ex.id)}
          />
        </div>

        {/* Footer Actions */}
        <div className="p-6 mt-2 space-y-3">
          <Button
            onClick={() => {
              setPhase('quiz');
              setCurrentIndex(0);
              setSelected(null);
              setAnswered(false);
              setResults([]);
              // Refresh exercises
              const pool = EXERCISES.filter(ex => ex.subjectId === subjectId);
              setExercises([...pool].sort(() => Math.random() - 0.5).slice(0, QUIZ_LENGTH));
            }}
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-white font-black text-lg shadow-xl"
          >
            <RotateCcw className="w-5 h-5 mr-2" /> Recommencer
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => navigate(ROUTE_PATHS.SUBJECT_DETAIL.replace(':id', subjectId!))}
            className="w-full h-12 rounded-2xl font-bold text-muted-foreground"
          >
            Sortir vers la matière
          </Button>
        </div>
      </div>
    );
  }

  // ───── QUIZ PHASE ─────
  const isCorrect = selected !== null && selected === current.correctAnswer;
  const isWrong = selected !== null && selected !== current.correctAnswer;

  return (
    <div className="min-h-screen bg-accent/5 flex flex-col">
      {/* Quiz Header */}
      <div className="px-4 pt-12 pb-4 flex items-center gap-4 bg-white/50 backdrop-blur-sm border-b border-accent/20">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full h-10 w-10"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {subject?.name || 'Entraînement'} • Q{currentIndex + 1}/{exercises.length}
            </span>
            <Badge variant="outline" className="text-[9px] font-black py-0 h-4 border-accent/40 bg-accent/10">
              {current.difficulty.toUpperCase()}
            </Badge>
          </div>
          <Progress 
            value={((currentIndex + 1) / exercises.length) * 100} 
            className="h-1.5 bg-accent/20"
          />
        </div>
      </div>

      {/* Question area */}
      <div className="flex-1 px-4 py-6 overflow-y-auto space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Question Card */}
            <div className="p-6 rounded-3xl bg-white shadow-sm border-none relative overflow-hidden min-h-[140px] flex items-center">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <p className="text-lg font-bold leading-tight text-foreground">{current.question}</p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-3">
              {current.choices?.map((option, i) => {
                const isSelected = selected === option;
                const isCorrectOption = answered && option === current.correctAnswer;
                const isWrongSelected = answered && isSelected && option !== current.correctAnswer;
                
                return (
                  <motion.button
                    key={option}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleSelect(option)}
                    disabled={answered}
                    className={cn(
                      "w-full p-4 rounded-2xl text-left text-sm font-semibold transition-all border-2 flex items-center gap-4 relative overflow-hidden group",
                      isCorrectOption ? "border-emerald-500 bg-emerald-50 text-emerald-700" :
                        isWrongSelected ? "border-rose-500 bg-rose-50 text-rose-700" :
                          isSelected ? "border-primary bg-primary/5 text-primary shadow-inner" :
                            "border-white bg-white hover:border-accent/40 hover:bg-accent/5 active:scale-[0.98] shadow-sm"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl border-2 flex items-center justify-center flex-shrink-0 text-xs font-black transition-colors duration-300",
                      isCorrectOption ? "border-emerald-500 bg-emerald-500 text-white" :
                        isWrongSelected ? "border-rose-500 bg-rose-500 text-white" :
                          isSelected ? "border-primary bg-primary text-white" : "border-accent/30 text-muted-foreground group-hover:border-primary/30"
                    )}>
                      {isCorrectOption ? <CheckCircle2 className="w-5 h-5" /> : isWrongSelected ? <XCircle className="w-5 h-5" /> : String.fromCharCode(65 + i)}
                    </div>
                    <span className="flex-1 font-bold">{option}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation card */}
            <AnimatePresence>
              {answered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={cn(
                    "p-6 rounded-3xl border-none shadow-sm overflow-hidden relative", 
                    isCorrect ? "bg-emerald-500/5" : "bg-amber-500/5"
                  )}
                >
                  <div className={cn("absolute top-0 left-0 w-1.5 h-full", isCorrect ? "bg-emerald-500" : "bg-amber-500")} />
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn("p-1.5 rounded-lg", isCorrect ? "bg-emerald-500/20 text-emerald-600" : "bg-amber-500/20 text-amber-600")}>
                      {isCorrect ? <Zap className="w-4 h-4 fill-current" /> : <Target className="w-4 h-4" />}
                    </div>
                    <span className={cn("text-xs font-black uppercase tracking-wider", isCorrect ? "text-emerald-600" : "text-amber-600")}>
                      {isCorrect ? `GÉNIAL ! +${current.points} XP` : 'RETIENS BIEN CECI :'}
                    </span>
                  </div>
                  {!isCorrect && (
                    <p className="text-sm font-black text-rose-600 mb-2 italic">→ {current.correctAnswer}</p>
                  )}
                  <p className="text-xs text-muted-foreground leading-relaxed font-bold opacity-80">{current.explanation}</p>
                                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-xl border-primary/20 bg-primary/5 text-primary font-bold flex items-center gap-2 hover:bg-primary/10"
                      onClick={() => setIsAITutorOpen(true)}
                    >
                      <Bot className="w-4 h-4" />
                      Demander au Professeur
                    </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        <AITutorModal 
         isOpen={isAITutorOpen} 
         onClose={() => setIsAITutorOpen(false)} 
         question={current?.question || ''}
         explanation={current?.explanation || ''}
         methodology={current?.methodology}
         deepDive={current?.deepDive}
         isCorrect={selected !== null ? selected === current?.correctAnswer : null}
       />
      </div>

      {/* Bottom control */}
      <div className="p-4 bg-white/50 backdrop-blur-md border-t border-accent/20 pb-10">
        <Button
          onClick={handleNext}
          disabled={!answered}
          className={cn(
            "w-full h-14 rounded-2xl font-black text-lg transition-all duration-300 shadow-xl",
            answered
              ? currentIndex === exercises.length - 1
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-500/20 ring-4 ring-emerald-500/10"
                : "bg-gradient-to-r from-primary to-primary/80 text-white shadow-primary/20"
              : "bg-accent/40 text-muted-foreground grayscale cursor-not-allowed opacity-50"
          )}
        >
          {currentIndex === exercises.length - 1 
            ? <><Trophy className="w-5 h-5 mr-2" /> Résultats</> 
            : <>Continuer <ChevronRight className="w-5 h-5 ml-1" /></>
          }
        </Button>
      </div>
    </div>
  );
}
