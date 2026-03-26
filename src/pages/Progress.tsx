import React, { useMemo } from 'react';
import { format } from 'date-fns';
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
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';
import { calculateLevel, getXPProgress } from '@/lib/index';

export default function ProgressPage() {
  const { progress, points, streak, sessions, mockExamResults, terminal, achievements } = useAppStore();
  const subjects = getSubjectsForTerminal(terminal);
  const level = calculateLevel(points);
  const xp = getXPProgress(points);

  const masteredSubjectsCount = Object.values(progress).filter(p => p.mastery >= 100).length;
  const totalExercisesCount = Object.values(progress).reduce((acc, curr) => acc + curr.completedExercises.length, 0);

  const avgBac = mockExamResults.length > 0
    ? mockExamResults.reduce((acc, r) => acc + (r.score / r.total) * 20, 0) / mockExamResults.length
    : null;

  const subjectStats = subjects.map((s) => ({
    name: s.shortName,
    mastery: progress[s.id]?.mastery ?? 0,
    completed: progress[s.id]?.completedExercises.length ?? 0,
    full: 100,
    id: s.id,
    icon: s.icon,
    gradient: s.gradient
  })).sort((a, b) => b.mastery - a.mastery);

  const strongSubjects = subjectStats.filter((s) => s.mastery >= 70).slice(0, 3);
  const weakSubjects = subjectStats.filter((s) => s.mastery < 50).sort((a, b) => a.mastery - b.mastery).slice(0, 3);

  // BAC Confidence Score Calculation
  const completionRate = masteredSubjectsCount / subjects.length;
  const examPerformance = avgBac ? avgBac / 20 : 0.4; // Default to 40% if no exams
  const confidenceScore = Math.round((completionRate * 0.4 + examPerformance * 0.5 + (streak > 7 ? 0.1 : (streak / 70))) * 100);


  // Préparer un Set des dates d'activité pour une recherche O(1)
  const activityDates = useMemo(() => {
    return new Set(sessions.map(s => s.date.split('T')[0]));
  }, [sessions]);

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
        <Card className="bg-slate-900 text-white border-none shadow-2xl overflow-hidden relative rounded-[40px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          <CardContent className="p-8">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-indigo-600 flex items-center justify-center text-2xl font-black shadow-lg">
                  {level}
                </div>
                <div>
                  <h1 className="text-xl font-black italic tracking-tight uppercase leading-none">Niveau de Maîtrise</h1>
                  <p className="text-[10px] text-primary font-black uppercase tracking-widest mt-1">Série {terminal || 'EA'}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-white">{points}</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">Points de Prestige</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <div className="text-3xl font-black text-white">{confidenceScore}%</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Chances de Succès au BAC</div>
                </div>
                <div className="space-y-1 text-right">
                  <div className="text-3xl font-black text-orange-400">{streak}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Jours de Série 🔥</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">
                  <span>Prochain Niveau</span>
                  <span>{xp.percent}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50 p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${xp.percent}%` }}
                    className="h-full bg-gradient-to-r from-primary to-indigo-400 rounded-full"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Mastery Chart */}
      <motion.div variants={itemVariants}>
        <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Maîtrise du Programme</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 px-2">
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectStats} layout="vertical" margin={{ left: -10, right: 20 }}>
                  <XAxis type="number" hide domain={[0, 100]} />
                  <YAxis
                    dataKey="name"
                    type="category"
                    axisLine={false}
                    tickLine={false}
                    fontSize={10}
                    fontWeight="bold"
                    width={80}
                  />
                  <Tooltip
                    cursor={{ fill: 'transparent' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-slate-900 text-white p-2 rounded-lg text-[10px] font-bold shadow-xl">
                            {payload[0].value}%
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="mastery" radius={[0, 4, 4, 0]} barSize={12}>
                    {subjectStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#4F46E5' : '#818CF8'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Focus Recommandations */}
      <motion.div variants={itemVariants}>
         <div className="grid grid-cols-2 gap-4">
            {weakSubjects.length > 0 && (
              <Card className="bg-orange-50 border-orange-100 p-4 rounded-3xl">
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-orange-600 mb-2">À Renforcer ⚠️</h4>
                 <div className="space-y-2">
                    {weakSubjects.slice(0, 2).map(s => (
                      <div key={s.id} className="flex items-center gap-2">
                         <span className="text-sm">{s.icon}</span>
                         <span className="text-[11px] font-bold text-slate-700 truncate">{s.name}</span>
                      </div>
                    ))}
                 </div>
              </Card>
            )}
            {strongSubjects.length > 0 && (
              <Card className="bg-emerald-50 border-emerald-100 p-4 rounded-3xl">
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-2">Matières Fortes ✅</h4>
                 <div className="space-y-2">
                    {strongSubjects.slice(0, 2).map(s => (
                      <div key={s.id} className="flex items-center gap-2">
                         <span className="text-sm">{s.icon}</span>
                         <span className="text-[11px] font-bold text-slate-700 truncate">{s.name}</span>
                      </div>
                    ))}
                 </div>
              </Card>
            )}
         </div>
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
             {/* Heatmap d'Activité */}
             <Card className="p-4 border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-0 mb-4">
                   <CardTitle className="text-[10px] font-black uppercase tracking-widest text-slate-400">Heatmap d'Activité (42 derniers jours)</CardTitle>
                </CardHeader>
                <div className="flex flex-col gap-2">
                   <div className="flex gap-1 justify-between">
                      {Array.from({ length: 6 }).map((_, weekIndex) => (
                         <div key={weekIndex} className="grid grid-rows-7 gap-1">
                            {Array.from({ length: 7 }).map((_, dayIndex) => {
                               const date = new Date();
                               date.setDate(date.getDate() - (41 - (weekIndex * 7 + dayIndex)));
              const dateStr = format(date, 'yyyy-MM-dd');
              const hasActivity = activityDates.has(dateStr);
              const isToday = dateStr === format(new Date(), 'yyyy-MM-dd');
                               return (
                                  <div
                                     key={dayIndex}
                                     className={`w-3 h-3 rounded-sm ${
                                        hasActivity
                                           ? 'bg-primary shadow-[0_0_8px_rgba(79,70,229,0.4)]'
                                           : 'bg-slate-100'
                                     }`}
                                     title={dateStr}
                                  />
                               );
                            })}
                         </div>
                      ))}
                   </div>
                   <div className="flex justify-between text-[8px] text-slate-400 font-bold uppercase mt-1 px-1">
                      <span>Il y a 6 semaines</span>
                      <span>Aujourd'hui</span>
                   </div>
                </div>
             </Card>

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
