import React from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  Trophy, 
  Target, 
  Award, 
  Star, 
  BookOpen, 
  BarChart3, 
  Zap, 
  Info,
  ChevronRight
} from 'lucide-react';
import { ROUTE_PATHS, getSubjectsForTerminal } from '@/lib/index';
import { useAppStore } from '@/hooks/useAppStore';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function Quiz() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { progress, terminal } = useAppStore();
  
  const subject = getSubjectsForTerminal(terminal).find((s) => s.id === id);
  if (!subject) return <div className="p-8 text-center text-muted-foreground">Oups ! Quiz non trouvé.</div>;

  const subjectProgress = progress[id!] || { mastery: 0, completedExercises: [] as string[] };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col min-h-screen bg-accent/10 pb-24"
    >
      {/* Header */}
      <section className="px-4 pt-12 pb-6 flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full hover:bg-accent"
          onClick={() => navigate(ROUTE_PATHS.SUBJECT_DETAIL.replace(':id', subject.id))}
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tight">Quiz : {subject.name}</h1>
          <Badge variant="outline" className="w-fit text-[10px] font-bold uppercase tracking-widest py-0 h-5 mt-1">
            {terminal ? `Série ${terminal}` : 'Examen Blanc'}
          </Badge>
        </div>
      </section>

      {/* Hero Card */}
      <div className="px-4 mb-8">
        <motion.div variants={itemVariants}>
          <Card className={cn("overflow-hidden border-none text-white shadow-xl relative", subject.gradient)}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 blur-2xl rounded-full -ml-12 -mb-12" />
            
            <CardContent className="p-8 space-y-6 relative z-10 text-center">
              <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mx-auto text-4xl backdrop-blur-md shadow-lg border border-white/30 rotate-3">
                {subject.icon}
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-black leading-tight tracking-tight italic uppercase drop-shadow-md">PRÊT POUR LE DÉFI ?</h2>
                <p className="text-sm opacity-90 leading-relaxed font-medium max-w-[240px] mx-auto">
                  Teste tes connaissances sur l'ensemble du programme de {subject.name}.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                <div className="flex flex-col gap-1">
                  <span className="text-xl font-black">10</span>
                  <span className="text-[10px] opacity-70 uppercase font-bold tracking-widest">Questions</span>
                </div>
                <div className="flex flex-col gap-1 border-l border-white/20">
                  <span className="text-xl font-black">15 min</span>
                  <span className="text-[10px] opacity-70 uppercase font-bold tracking-widest">Temps Max</span>
                </div>
              </div>
              <Button 
                className="w-full h-14 rounded-2xl bg-white text-primary font-black shadow-xl shadow-black/10 hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-wider mt-4"
                asChild
              >
                <NavLink to={ROUTE_PATHS.EXERCISE_PRACTICE.replace(':subjectId', subject.id)}>
                  <Play className="w-5 h-5 fill-current" /> Commencer le Quiz
                </NavLink>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Rewards */}
      <div className="px-4 space-y-4 mb-8">
        <h3 className="text-sm font-bold flex items-center gap-2 text-muted-foreground uppercase tracking-wider ml-1">
          <Award className="w-4 h-4 text-amber-500" />
          Récompenses
        </h3>
        <motion.div variants={itemVariants}>
          <Card className="bg-white border-none shadow-sm overflow-hidden">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Zap className="w-6 h-6 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold">+100 XP</span>
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Pour un score parfait</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold">Badge Expert</span>
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Maîtrise &gt; 80%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Advice */}
      <div className="px-4 space-y-4">
        <h3 className="text-sm font-bold flex items-center gap-2 text-muted-foreground uppercase tracking-wider ml-1">
          <Info className="w-4 h-4 text-primary" />
          Conseils
        </h3>
        <div className="space-y-3">
          <motion.div variants={itemVariants}>
            <div className="p-4 rounded-2xl bg-white border-none shadow-sm flex gap-4 items-start">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-sm">Gère ton temps</h4>
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  Ne reste pas bloqué. Passe à la suivante et reviens-y plus tard.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="p-4 rounded-2xl bg-white border-none shadow-sm flex gap-4 items-start">
              <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-sm">Lisez bien l'énoncé</h4>
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  Chaque détail peut être crucial pour la bonne résolution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
