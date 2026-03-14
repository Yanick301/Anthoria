import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Target, 
  Award, 
  Activity, 
  CheckCircle2, 
  TrendingUp, 
  Calendar, 
  Zap, 
  ArrowRight, 
  ChevronRight,
  Star,
  ShieldCheck,
  Flame,
  LayoutGrid,
  BookOpen
} from 'lucide-react';
import { ROUTE_PATHS, getSubjectsForTerminal } from '@/lib/index';
import { NavLink } from 'react-router-dom';
import { getAchievementsForTerminal } from '@/data/achievements-by-series';
import { useAppStore } from '@/hooks/useAppStore';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

export default function ProgressPage() {
  const { progress, points, streak, sessions, mockExamResults, terminal } = useAppStore();
  const subjects = getSubjectsForTerminal(terminal);
  const achievements = getAchievementsForTerminal(terminal);

  const masteredSubjectsCount = Object.values(progress).filter(p => p.mastery >= 100).length;
  const totalExercisesCount = Object.values(progress).reduce((acc, curr) => acc + curr.completedExercises.length, 0);

  const avgBac = mockExamResults.length > 0
    ? mockExamResults.reduce((acc, r) => acc + (r.score / r.total) * 20, 0) / mockExamResults.length
    : null;

  const subjectStats = subjects.map((s) => ({
    ...s,
    mastery: progress[s.id]?.mastery ?? 0,
    completed: progress[s.id]?.completedExercises.length ?? 0,
  })).sort((a, b) => b.mastery - a.mastery);
  const strongSubjects = subjectStats.filter((s) => s.mastery >= 70).slice(0, 3);
  const weakSubjects = subjectStats.filter((s) => s.mastery < 50 && s.mastery > 0).slice(0, 3);

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
      {/* Overall Status Card */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-5">
             <Trophy className="h-32 w-32" />
          </div>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
               <div>
                  <h1 className="text-xl font-black italic tracking-tight uppercase">VOTRE PROGRESSION</h1>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Objectif BAC {terminal || '2026'}</p>
               </div>
               <div className="bg-primary/20 p-2 rounded-xl border border-primary/30 flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span className="font-bold text-sm">{points} XP</span>
               </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
               <div className="text-center">
                  <div className="text-2xl font-bold">{masteredSubjectsCount} / {subjects.length}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Matières</div>
               </div>
               <div className="text-center">
                  <div className="text-2xl font-bold">{totalExercisesCount}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Exercices</div>
               </div>
               <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{streak} j</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Série</div>
               </div>
            </div>

            <div className="space-y-2">
               <div className="flex justify-between text-xs font-bold">
                  <span>Avancement global</span>
                  <span>{subjects.length ? Math.round((masteredSubjectsCount / subjects.length) * 100) : 0}%</span>
               </div>
               <Progress value={subjects.length ? (masteredSubjectsCount / subjects.length) * 100 : 0} className="h-2 bg-slate-700" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Récap global par série */}
      <motion.div variants={itemVariants}>
        <Card className="border-none shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-black italic uppercase tracking-tight">RÉCAP SÉRIE {terminal || 'ALTHORIA'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {avgBac !== null && (
              <div>
                <p className="text-xs text-muted-foreground mb-1">Moyenne estimée au BAC (d'après vos blancs)</p>
                <p className="text-2xl font-bold text-primary">{avgBac.toFixed(1)}/20</p>
              </div>
            )}
            {strongSubjects.length > 0 && (
              <div>
                <p className="text-xs text-muted-foreground mb-2">Matières fortes</p>
                <div className="flex flex-wrap gap-2">
                  {strongSubjects.map((s) => (
                    <Badge key={s.id} variant="secondary" className="bg-green-100 text-green-800">
                      {s.icon} {s.shortName} {s.mastery}%
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {weakSubjects.length > 0 && (
              <div>
                <p className="text-xs text-muted-foreground mb-2">À renforcer</p>
                <div className="flex flex-wrap gap-2">
                  {weakSubjects.map((s) => (
                    <Badge key={s.id} variant="outline" className="border-orange-200 text-orange-700">
                      {s.icon} {s.shortName} {s.mastery}%
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {!avgBac && strongSubjects.length === 0 && weakSubjects.length === 0 && (
              <p className="text-sm text-muted-foreground">Complétez des exercices et des BAC blancs pour voir votre récap.</p>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Content Tabs */}
      <motion.div variants={itemVariants} className="flex-1">
        <Tabs defaultValue="subjects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/50 rounded-xl h-12 p-1 border">
            <TabsTrigger value="subjects" className="rounded-lg font-bold text-xs gap-2">
              <BookOpen className="h-4 w-4" /> Matières
            </TabsTrigger>
            <TabsTrigger value="badges" className="rounded-lg font-bold text-xs gap-2">
              <Award className="h-4 w-4" /> Badges
            </TabsTrigger>
            <TabsTrigger value="history" className="rounded-lg font-bold text-xs gap-2">
              <Activity className="h-4 w-4" /> Activité
            </TabsTrigger>
          </TabsList>

          <TabsContent value="subjects" className="mt-6 space-y-3">
             {subjects.map((subject) => {
               const subProgress = progress[subject.id] || { mastery: 0, completedExercises: [] as string[] };
               return (
                 <Card key={subject.id} className="p-4 border-none shadow-sm bg-white hover:shadow-md transition-shadow group cursor-pointer">
                    <div className="flex items-center gap-4">
                       <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${subject.gradient} text-white flex items-center justify-center text-2xl`}>
                          {subject.icon}
                       </div>
                       <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                             <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{subject.name}</h4>
                             <span className="text-xs font-bold text-primary">{subProgress.mastery}%</span>
                          </div>
                          <div className="flex items-center gap-3">
                             <Progress value={subProgress.mastery} className="h-1.5 flex-1" />
                             <span className="text-[10px] text-muted-foreground whitespace-nowrap">{subProgress.completedExercises.length} / {subject.totalExercises}</span>
                          </div>
                       </div>
                    </div>
                 </Card>
               );
             })}
          </TabsContent>

          <TabsContent value="badges" className="mt-6">
             <div className="grid grid-cols-2 gap-4">
                {achievements.map((badge) => (
                  <Card key={badge.id} className={`p-4 flex flex-col items-center text-center relative border-none shadow-sm ${badge.unlocked ? 'bg-white' : 'bg-accent/10 opacity-60'}`}>
                    <div className={`h-16 w-16 rounded-full mb-3 flex items-center justify-center text-3xl shadow-lg border-4 ${badge.unlocked ? 'bg-primary/10 border-primary/20' : 'bg-slate-100 border-slate-200 grayscale'}`}>
                       {badge.icon}
                    </div>
                    <h4 className="font-bold text-xs mb-1">{badge.title}</h4>
                    <p className="text-[10px] text-muted-foreground leading-tight line-clamp-2">{badge.description}</p>
                    {badge.unlocked && (
                       <div className="absolute top-2 right-2">
                          <CheckCircle2 className="h-4 w-4 text-primary fill-white" />
                       </div>
                    )}
                    <Badge variant="outline" className="mt-3 text-[10px] border-primary/20 text-primary">+{badge.points} XP</Badge>
                  </Card>
                ))}
             </div>
          </TabsContent>

          <TabsContent value="history" className="mt-6 space-y-4">
             {mockExamResults.length > 0 ? (
                <div className="space-y-3">
                   <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Derniers BAC Blancs</h3>
                   {mockExamResults.map((result) => (
                      <Card key={result.id} className="p-4 border-none shadow-sm bg-white flex items-center justify-between">
                         <div className="flex gap-3 items-center">
                            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                               {result.score}
                            </div>
                            <div>
                               <h4 className="font-bold text-sm">Session du {new Date(result.date).toLocaleDateString()}</h4>
                               <p className="text-[10px] text-muted-foreground">{result.total} questions • {Math.round(result.timeSpent / 60)} min</p>
                            </div>
                         </div>
                         <Badge className={result.score / result.total > 0.5 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                            {result.score / result.total > 0.5 ? 'Admis' : 'Échec'}
                         </Badge>
                      </Card>
                   ))}
                </div>
             ) : (
                <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-primary/20">
                   <LayoutGrid className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-20" />
                   <h4 className="font-bold text-sm mb-1">Aucune activité récente</h4>
                   <p className="text-xs text-muted-foreground">Complétez vos premiers exercices pour voir vos statistiques ici.</p>
                   <Button variant="outline" className="mt-4 rounded-xl text-xs h-9" asChild>
                      <NavLink to={ROUTE_PATHS.EXERCISES}>Commencer</NavLink>
                   </Button>
                </div>
             )}

             <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-between mt-6">
                <div className="flex gap-3 items-center">
                   <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center">
                      <Flame className="h-6 w-6" />
                   </div>
                   <div>
                      <h4 className="font-bold text-sm">Série en cours</h4>
                      <p className="text-[10px] text-primary/80">Continuez pour gagner un badge !</p>
                   </div>
                </div>
                <div className="text-2xl font-black text-primary">{streak}</div>
             </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}
