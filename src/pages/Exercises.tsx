import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Zap, 
  Award, 
  ArrowRight, 
  RotateCcw, 
  Star,
  Trophy,
  Activity,
  BarChart2,
  Info
} from 'lucide-react';
import { useNavigate, NavLink } from 'react-router-dom';
import { ROUTE_PATHS, getDifficultyColor, getSubjectsForTerminal } from '@/lib/index';
import { EXERCISES } from '@/data/exercises';
import { useAppStore } from '@/hooks/useAppStore';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function Exercises() {
  const navigate = useNavigate();
  const { completeExercise, completedExercises, terminal } = useAppStore();
  const subjects = getSubjectsForTerminal(terminal);
  const subjectIds = new Set(subjects.map((s) => s.id));
  const filteredExercises = EXERCISES.filter((e) => subjectIds.has(e.subjectId));
  const sessionExercisesSource = filteredExercises.length > 0 ? filteredExercises : EXERCISES;
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const sessionExercises = sessionExercisesSource.slice(0, 10);
  const currentExercise = sessionExercises[currentExerciseIndex];

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
  };

  const handleConfirmAnswer = () => {
    if (!selectedAnswer) return;
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
      setShowResult(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  if (showResult) {
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

        <div className="space-y-3 w-full max-w-sm">
          <Button className="w-full bg-primary text-white h-12 rounded-xl shadow-lg font-bold" onClick={() => navigate(ROUTE_PATHS.HOME)}>
            Retour à l'accueil
          </Button>
          <Button variant="outline" className="w-full h-12 rounded-xl font-bold" onClick={() => window.location.reload()}>
            Nouvelle session
          </Button>
        </div>
      </motion.div>
    );
  }

  const subject = subjects.find(s => s.id === currentExercise.subjectId);

  return (
    <div className="flex flex-col min-h-screen bg-accent/5 p-4 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-full">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1 px-4">
           <Progress value={(currentExerciseIndex / sessionExercises.length) * 100} className="h-2" />
        </div>
        <span className="text-xs font-bold text-muted-foreground">{currentExerciseIndex + 1} / {sessionExercises.length}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentExercise.id}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col"
        >
          {/* Exercise Category & Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Badge className={`bg-gradient-to-r ${subject?.gradient || 'from-primary to-blue-500'} border-none`}>
                {subject?.shortName || 'Général'}
              </Badge>
              <Badge variant="outline" className={`text-[10px] ${getDifficultyColor(currentExercise.difficulty)} border-none`}>
                {currentExercise.difficulty}
              </Badge>
            </div>
            <span className="text-[10px] font-bold text-muted-foreground flex items-center gap-1">
              <Zap className="h-3 w-3 text-orange-400" /> +{currentExercise.points} XP
            </span>
          </div>

          {/* Question */}
          <Card className="border-none shadow-sm mb-6 bg-white">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold leading-relaxed">{currentExercise.question}</h2>
              {currentExercise.type === 'Calcul' && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100 flex items-center gap-3">
                   <div className="bg-blue-600 p-1 rounded text-white"><Activity className="h-4 w-4" /></div>
                   <span className="text-xs font-medium text-blue-800 italic">Astuce : Utilisez la calculatrice si nécessaire.</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Choices (QCM) */}
          <div className="space-y-3 flex-1">
            {currentExercise.choices?.map((choice, index) => {
              const isSelected = selectedAnswer === choice;
              const isCorrect = isAnswered && choice === currentExercise.correctAnswer;
              const isWrong = isAnswered && isSelected && choice !== currentExercise.correctAnswer;

              return (
                <motion.button
                  key={index}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswerSelect(choice)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl text-left border-2 transition-all flex items-center justify-between group ${
                    isSelected ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:border-accent'
                  } ${isCorrect ? 'border-green-500 bg-green-50 text-green-700' : ''} ${
                    isWrong ? 'border-red-500 bg-red-50 text-red-700' : ''
                  }`}
                >
                  <span className="font-medium text-sm">{choice}</span>
                  <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-primary border-primary text-white' : 'border-accent group-hover:border-primary/50'
                  } ${isCorrect ? 'bg-green-500 border-green-500 text-white' : ''} ${
                    isWrong ? 'bg-red-500 border-red-500 text-white' : ''
                  }`}>
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
                className={`p-4 rounded-xl border-none shadow-sm ${
                  selectedAnswer === currentExercise.correctAnswer ? 'bg-green-100/50' : 'bg-red-100/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Info className={`h-4 w-4 ${selectedAnswer === currentExercise.correctAnswer ? 'text-green-600' : 'text-red-600'}`} />
                  <span className="font-bold text-xs uppercase tracking-wider">Explication</span>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {currentExercise.explanation}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Actions */}
      <div className="mt-6 pt-4 border-t flex gap-3">
        {!isAnswered ? (
          <Button 
            className="w-full h-12 rounded-xl bg-primary text-white font-bold shadow-lg disabled:opacity-50"
            onClick={handleConfirmAnswer}
            disabled={!selectedAnswer}
          >
            Valider la réponse
          </Button>
        ) : (
          <Button 
            className="w-full h-12 rounded-xl bg-primary text-white font-bold shadow-lg flex gap-2"
            onClick={handleNext}
          >
            Continuer
            <ArrowRight className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
