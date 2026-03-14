import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  Trophy, 
  ArrowRight, 
  Activity,
  Info,
  BookOpen,
  Layers,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS, getDifficultyColor, getSubjectsForTerminal } from '@/lib/index';
import { EXERCISES } from '@/data/exercises';
import { useAppStore } from '@/hooks/useAppStore';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ShareChallenge } from '@/components/ShareChallenge';
import { AITutorModal } from '@/components/AITutorModal';
import type { Exercise } from '@/lib/index';
import { cn } from '@/lib/utils';

export default function Exercises() {
  const navigate = useNavigate();
  const { completeExercise, terminal } = useAppStore();
  const subjects = getSubjectsForTerminal(terminal);
  const subjectIds = new Set(subjects.map((s) => s.id));

  const [phase, setPhase] = useState<'setup' | 'practice' | 'result'>('setup');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);

  const [sessionExercises, setSessionExercises] = useState<Exercise[]>([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isAITutorOpen, setIsAITutorOpen] = useState(false);

  // Initialisation de la session quand l'utilisateur valide son choix
  const startSession = () => {
    // 1. Filtrer selon le choix (null = toutes les matières)
    let pool = EXERCISES.filter((e) => subjectIds.has(e.subjectId));
    if (selectedSubjectId) {
      pool = pool.filter(e => e.subjectId === selectedSubjectId);
    }

    // 2. Mélanger la base
    const shuffled = [...pool].sort(() => Math.random() - 0.5);

    // 3. Garder max 10 exos
    const selected = shuffled.slice(0, 10);

    // 4. Si "Toutes les matières", on trie par matière pour que ça soit séquentiel
    if (!selectedSubjectId) {
      selected.sort((a, b) => b.subjectId.localeCompare(a.subjectId));
    }

    setSessionExercises(selected);
    setCurrentExerciseIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setPhase('practice');
  };

  const currentExercise = sessionExercises[currentExerciseIndex];

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
  };

  const handleConfirmAnswer = () => {
    if (!selectedAnswer || !currentExercise) return;
    setIsAnswered(true);
    const isCorrect = selectedAnswer === currentExercise.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
      completeExercise(currentExercise.subjectId, currentExercise.id, true, currentExercise.points);
    } else {
      completeExercise(currentExercise.subjectId, currentExercise.id, false, 0);
    }
  };

  const handleNext = () => {
    if (currentExerciseIndex < sessionExercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setPhase('result');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // ============================
  // PHASE: SETUP
  // ============================
  if (phase === 'setup') {
    return (
      <div className="flex flex-col min-h-screen p-4 pt-6 gap-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-black italic uppercase tracking-tight">Entraînement</h1>
            <p className="text-muted-foreground text-sm font-medium">Choisis la cible de ta session.</p>
          </div>
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-4 flex-1">
          {/* Option: Général */}
          <motion.button
            variants={itemVariants}
            onClick={() => setSelectedSubjectId(null)}
            className={cn(
              "w-full p-5 rounded-3xl border-2 text-left transition-all relative overflow-hidden",
              selectedSubjectId === null
                ? "border-primary bg-primary/5 shadow-md"
                : "border-transparent bg-white shadow-sm hover:border-accent"
            )}
          >
            <div className="flex items-start gap-4">
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-colors",
                selectedSubjectId === null ? "bg-primary text-white" : "bg-primary/10 text-primary"
              )}>
                <Layers className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg leading-tight">Général (Séquentiel)</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  10 questions piochées au hasard mais regroupées logiquement par matière. Idéal pour un réveil musculaire complet !
                </p>
              </div>
            </div>
            {selectedSubjectId === null && (
              <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-primary" />
            )}
          </motion.button>

          <h3 className="font-black text-xs uppercase tracking-widest text-muted-foreground ml-2 mt-2">Matières Spécifiques</h3>

          {/* Options: Spécifiques */}
          <div className="grid grid-cols-2 gap-3">
            {subjects.map(sub => (
              <motion.button
                key={sub.id}
                variants={itemVariants}
                onClick={() => setSelectedSubjectId(sub.id)}
                className={cn(
                  "p-4 rounded-3xl border-2 text-left transition-all relative flex flex-col items-center text-center gap-2",
                  selectedSubjectId === sub.id
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-transparent bg-white shadow-sm hover:border-accent"
                )}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-b ${sub.gradient} flex items-center justify-center text-white shadow-inner`}>
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">{sub.shortName}</h4>
                  <span className="text-[10px] text-muted-foreground">{sub.name}</span>
                </div>
                {selectedSubjectId === sub.id && (
                  <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-primary" />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="mt-auto pt-6 border-t">
          <Button
            onClick={startSession}
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-white font-black text-lg shadow-xl"
          >
            <Zap className="w-5 h-5 mr-2" /> Démarrer la session
          </Button>
        </div>
      </div>
    );
  }

  // ============================
  // PHASE: RESULT
  // ============================
  if (phase === 'result') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center"
      >
        <div className="bg-primary/10 h-24 w-24 rounded-full flex items-center justify-center mb-6">
          <Trophy className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-black tracking-tight mb-2">Session terminée !</h1>
        <p className="text-muted-foreground mb-8 font-medium">Excellente progression vers ton diplôme.</p>

        <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-8">
           <Card className="p-4 bg-accent/20 border-none shadow-sm">
              <span className="text-xs text-muted-foreground font-bold uppercase block mb-1">Score</span>
              <span className="text-2xl font-bold text-primary">{score} / {sessionExercises.length}</span>
           </Card>
           <Card className="p-4 bg-accent/20 border-none shadow-sm">
              <span className="text-xs text-muted-foreground font-bold uppercase block mb-1">Points</span>
              <span className="text-2xl font-bold text-primary">+{score * 10} pts</span>
           </Card>
        </div>

        <div className="w-full max-w-sm mb-8">
           <ShareChallenge
             score={score}
             total={sessionExercises.length}
             subjectName={selectedSubjectId ? subjects.find(s => s.id === selectedSubjectId)?.name || 'Révision' : 'Révision Générale'}
             exerciseIds={sessionExercises.map(ex => ex.id)}
           />
        </div>

        <div className="space-y-3 w-full max-w-sm">
          <Button className="w-full bg-primary text-white h-14 rounded-2xl shadow-lg font-bold" onClick={() => navigate(ROUTE_PATHS.HOME)}>
            Retour à l'accueil
          </Button>
          <Button variant="outline" className="w-full h-12 rounded-2xl font-bold" onClick={() => setPhase('setup')}>
            Nouvelle session
          </Button>
        </div>
      </motion.div>
    );
  }

  // ============================
  // PHASE: PRACTICE
  // ============================
  const subject = subjects.find(s => s.id === currentExercise?.subjectId);

  return (
    <div className="flex flex-col min-h-screen bg-accent/5 p-4 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" size="icon" onClick={() => setPhase('setup')} className="rounded-full">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1 px-4">
           <Progress value={(currentExerciseIndex / sessionExercises.length) * 100} className="h-2" />
        </div>
        <span className="text-xs font-bold text-muted-foreground">{currentExerciseIndex + 1} / {sessionExercises.length}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentExercise?.id}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col"
        >
          {/* Exercise Category & Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Badge className={`bg-gradient-to-r ${subject?.gradient || 'from-primary to-blue-500'} border-none text-[10px] tracking-wider uppercase font-black`}>
                {subject?.shortName || 'Général'}
              </Badge>
              <Badge variant="outline" className={`text-[10px] ${getDifficultyColor(currentExercise?.difficulty || 'Moyen')} border-none`}>
                {currentExercise?.difficulty}
              </Badge>
            </div>
            <span className="text-[10px] font-bold text-muted-foreground flex items-center gap-1">
              <Zap className="h-3 w-3 text-orange-400" /> +{currentExercise?.points} XP
            </span>
          </div>

          {/* Question */}
          <Card className="border-none shadow-sm mb-6 bg-white overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold leading-relaxed">{currentExercise?.question}</h2>
              {currentExercise?.type === 'Calcul' && (
                <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-100 flex items-center gap-3">
                   <div className="bg-blue-600 p-1.5 rounded-lg text-white"><Activity className="h-4 w-4" /></div>
                   <span className="text-xs font-medium text-blue-800 italic">Astuce : Utilisez la calculatrice si nécessaire.</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Choices (QCM) */}
          <div className="space-y-3 flex-1">
            {currentExercise?.choices?.map((choice, index) => {
              const isSelected = selectedAnswer === choice;
              const isCorrect = isAnswered && choice === currentExercise?.correctAnswer;
              const isWrong = isAnswered && isSelected && choice !== currentExercise?.correctAnswer;

              return (
                <motion.button
                  key={index}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswerSelect(choice)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full p-4 rounded-2xl text-left border-2 transition-all flex items-center justify-between group",
                    isSelected ? 'border-primary bg-primary/5 text-primary shadow-inner' : 'border-white bg-white hover:border-accent shadow-sm',
                    isCorrect && 'border-green-500 bg-green-50 text-green-700',
                    isWrong && 'border-red-500 bg-red-50 text-red-700'
                  )}
                >
                  <span className="font-medium text-sm pr-4">{choice}</span>
                  <div className={cn(
                    "h-6 w-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors",
                    isSelected ? 'bg-primary border-primary text-white' : 'border-accent group-hover:border-primary/50',
                    isCorrect && 'bg-green-500 border-green-500 text-white',
                    isWrong && 'bg-red-500 border-red-500 text-white'
                  )}>
                    {isCorrect && <CheckCircle2 className="h-4 w-4" />}
                    {isWrong && <XCircle className="h-4 w-4" />}
                    {!isAnswered && isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                  </div>
                </motion.button>
              );
            })}

            {/* Explanation Area */}
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "p-4 rounded-2xl shadow-sm mt-4 relative overflow-hidden",
                  selectedAnswer === currentExercise?.correctAnswer ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'
                )}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Info className={cn("h-4 w-4", selectedAnswer === currentExercise?.correctAnswer ? 'text-green-600' : 'text-red-600')} />
                  <span className="font-black text-[10px] uppercase tracking-wider">Explication</span>
                </div>
                 <p className="text-xs leading-relaxed text-slate-600 font-medium">
                   {currentExercise?.explanation}
                 </p>

                 <Button
                   onClick={() => setIsAITutorOpen(true)}
                   className="mt-4 w-full h-10 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border-none shadow-none font-black text-[10px] uppercase tracking-wider gap-2"
                 >
                   <Sparkles className="w-3 h-3 fill-current" /> ✨ Demander à l'IA d'expliquer
                 </Button>
               </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Actions */}
      <div className="mt-6 pt-4 border-t flex gap-3 pb-safe">
        {!isAnswered ? (
          <Button
            className="w-full h-14 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-lg shadow-xl shadow-slate-900/20 disabled:opacity-50"
            onClick={handleConfirmAnswer}
            disabled={!selectedAnswer}
          >
            Valider
          </Button>
        ) : (
          <Button
            className="w-full h-14 rounded-2xl bg-primary text-white font-black text-lg shadow-xl shadow-primary/20 flex gap-2"
            onClick={handleNext}
          >
            {currentExerciseIndex === sessionExercises.length - 1 ? 'Terminer la session' : 'Question suivante'}
            <ArrowRight className="h-5 w-5" />
          </Button>
        )}
      </div>

       {currentExercise && (
         <AITutorModal
           isOpen={isAITutorOpen}
           onClose={() => setIsAITutorOpen(false)}
           question={currentExercise.question}
           explanation={currentExercise.explanation}
         />
       )}
     </div>
   );
}
