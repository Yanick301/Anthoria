import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Trophy, 
  Info, 
  Activity, 
  Play, 
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { useNavigate, NavLink } from 'react-router-dom';
import { ROUTE_PATHS, getSubjectsForTerminal } from '@/lib/index';
import { useAppStore } from '@/hooks/useAppStore';
import { getMockExamsForTerminal } from '@/data/mock-exams-by-series';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function MockExam() {
  const navigate = useNavigate();
  const { mockExamResults, terminal } = useAppStore();
  const mockExams = getMockExamsForTerminal(terminal);
  const subjects = getSubjectsForTerminal(terminal);

  const lastResult = mockExamResults[mockExamResults.length - 1];
  const averageScore = mockExamResults.length > 0 
    ? Math.round(mockExamResults.reduce((acc, curr) => acc + (curr.score / curr.total * 20), 0) / mockExamResults.length) 
    : 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6 p-4 pt-6 bg-accent/5 min-h-screen"
    >
      {/* Hero Header */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">BAC Blanc Virtuel</h1>
        <p className="text-muted-foreground text-sm">Testez vos connaissances en conditions réelles avec 40 questions chronométrées.</p>
        
        <Card className="bg-slate-900 text-white border-none shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 p-4 opacity-5">
              <ShieldCheck className="h-32 w-32" />
           </div>
           <CardContent className="p-6 relative z-10">
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <h2 className="text-lg font-bold">Prêt pour l'examen ?</h2>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">BAC {terminal || 'EA'} 2026</p>
                 </div>
                 <Badge className="bg-primary text-white hover:bg-primary border-none">En Direct</Badge>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-6">
                 <div className="bg-white/10 p-2 rounded-xl text-center">
                    <Clock className="h-4 w-4 mx-auto mb-1 text-primary" />
                    <div className="text-sm font-bold">{mockExams[0]?.duration ?? 45} min</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Durée</div>
                 </div>
                 <div className="bg-white/10 p-2 rounded-xl text-center">
                    <CheckCircle2 className="h-4 w-4 mx-auto mb-1 text-green-400" />
                    <div className="text-sm font-bold">{mockExams[0]?.exercises.length ?? 40}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Questions</div>
                 </div>
                 <div className="bg-white/10 p-2 rounded-xl text-center">
                    <Award className="h-4 w-4 mx-auto mb-1 text-yellow-400" />
                    <div className="text-sm font-bold">20 pts</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Max</div>
                 </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg h-12 font-bold gap-2" asChild>
                 <NavLink to={ROUTE_PATHS.EXERCISES}>
                    <Play className="h-4 w-4 fill-current" />
                    Lancer le BAC Blanc
                 </NavLink>
              </Button>
           </CardContent>
        </Card>
      </motion.div>

      {/* Statistics Section */}
      <motion.div variants={itemVariants} className="space-y-3">
         <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Vos Statistiques</h3>
         <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 border-none shadow-sm bg-white text-center">
               <Trophy className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
               <div className="text-2xl font-black text-primary">{averageScore}/20</div>
               <div className="text-[10px] text-muted-foreground font-bold uppercase">Moyenne</div>
            </Card>
            <Card className="p-4 border-none shadow-sm bg-white text-center">
               <Activity className="h-6 w-6 text-primary mx-auto mb-2" />
               <div className="text-2xl font-black text-primary">{mockExamResults.length}</div>
               <div className="text-[10px] text-muted-foreground font-bold uppercase">Tentatives</div>
            </Card>
         </div>
      </motion.div>

      {/* Instructions Card */}
      <motion.div variants={itemVariants}>
         <Card className="p-4 border-none shadow-sm bg-primary/5 border border-primary/10">
            <h4 className="font-bold text-xs text-primary mb-3 flex items-center gap-2">
               <AlertCircle className="h-4 w-4" /> Règles de l'examen
            </h4>
            <ul className="space-y-2">
               <li className="text-[10px] text-muted-foreground flex items-start gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary mt-1.5" />
                  Vous avez {mockExams[0]?.duration ?? 45} minutes pour répondre aux {mockExams[0]?.exercises.length ?? 40} questions.
               </li>
               <li className="text-[10px] text-muted-foreground flex items-start gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary mt-1.5" />
                  Une fois l'examen lancé, vous ne pouvez pas revenir en arrière.
               </li>
               <li className="text-[10px] text-muted-foreground flex items-start gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary mt-1.5" />
                  Le score final sera calculé automatiquement à la fin du temps ou après la dernière question.
               </li>
               <li className="text-[10px] text-muted-foreground flex items-start gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary mt-1.5" />
                  L'examen couvre l'ensemble des {subjects.length} matières du programme {terminal || 'EA'}.
               </li>
            </ul>
         </Card>
      </motion.div>

      {/* Recent History */}
      <motion.div variants={itemVariants} className="space-y-3 pb-8">
         <div className="flex justify-between items-center px-1">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Dernières Tentatives</h3>
            <NavLink to={ROUTE_PATHS.PROGRESS} className="text-[10px] text-primary font-bold">Tout voir</NavLink>
         </div>
         {mockExamResults.length > 0 ? (
            <div className="space-y-2">
               {mockExamResults.slice(-3).reverse().map((result) => (
                  <Card key={result.id} className="p-4 border-none shadow-sm bg-white flex items-center justify-between group cursor-pointer hover:bg-accent/10 transition-colors">
                     <div className="flex gap-3 items-center">
                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-bold text-lg ${result.score / result.total > 0.5 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                           {result.score}
                        </div>
                        <div>
                           <h4 className="font-bold text-sm">Score final : {result.score}/{result.total}</h4>
                           <p className="text-[10px] text-muted-foreground">{new Date(result.date).toLocaleDateString()}</p>
                        </div>
                     </div>
                     <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </Card>
               ))}
            </div>
         ) : (
            <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-primary/20 opacity-60">
               <Info className="h-8 w-8 mx-auto mb-3 text-muted-foreground opacity-30" />
               <p className="text-xs text-muted-foreground italic">Vous n'avez pas encore passé de simulation de BAC.</p>
            </div>
         )}
      </motion.div>
    </motion.div>
  );
}
