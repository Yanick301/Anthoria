import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Calendar, 
  ChevronRight, 
  BookOpen, 
  PenTool, 
  Activity, 
  Target, 
  Bell,   ArrowRight, 
   PlayCircle,
   Sparkles,
   Target as TargetIcon,
   Award,
   Zap as ZapIcon
 } from 'lucide-react';
 import { ROUTE_PATHS, getCurrentWeekPlan, getSubjectsForTerminal, calculateLevel, getXPProgress } from '@/lib/index';
 import { NavLink } from 'react-router-dom';
 import { useAppStore } from '@/hooks/useAppStore';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ReleaseNotesModal } from '@/components/ReleaseNotesModal';

 export default function Home() {
   const { points, streak, progress, lastStudyDate, terminal, achievements } = useAppStore();
   const level = calculateLevel(points);
   const xp = getXPProgress(points);
   const recentAchievements = achievements.filter(a => a.unlocked).slice(-3).reverse();
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long' });
  const todayPlan = getCurrentWeekPlan(terminal, 0).find(
    (p) => p.day.toLowerCase() === today.toLowerCase()
  );

  const subjects = getSubjectsForTerminal(terminal);
  const subjectsCount = subjects.length;
  const masteredCount = Object.values(progress).filter(p => p.mastery > 80).length;
  const totalCompleted = Object.values(progress).reduce((acc, curr) => acc + curr.completedExercises.length, 0);

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
      className="flex flex-col gap-6 p-4 pt-6"
    >
      <ReleaseNotesModal />
       {/* Welcome & Stats */}
       <motion.div variants={itemVariants} className="flex items-center justify-between">
         <div className="flex items-center gap-4">
           <div className="relative">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-lg border-2 border-white">
               {level}
             </div>
             <div className="absolute -bottom-1 -right-1 bg-amber-400 text-white p-1 rounded-lg shadow-sm">
               <ZapIcon className="w-3 h-3 fill-current" />
             </div>
           </div>
           <div>
             <h1 className="text-xl font-black tracking-tight leading-tight">Bonjour, {useAppStore.getState().studentName || 'Cher Bachelier'} !</h1>
             <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider mt-1 flex items-center gap-1.5 text-primary">
                XP: {points} • <span className="opacity-60">{xp.current} / {xp.next}</span>
             </p>
           </div>
         </div>
         <div className="flex flex-col items-end gap-1.5">
           <Badge variant="secondary" className="bg-orange-100 text-orange-600 border-none flex gap-1.5 items-center px-3 py-1.5 rounded-xl shadow-sm">
             <span className="font-bold text-sm">🔥 {streak} j</span>
           </Badge>
           <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${xp.percent}%` }}
              />
           </div>
         </div>
       </motion.div>

      {/* Main Goal Progress */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-indigo-600 via-primary to-blue-500 text-white border-none shadow-xl shadow-primary/20 overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <Target className="h-28 w-28" />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2 font-black italic">
              <Activity className="h-5 w-5 animate-pulse" />
              OBJECTIF BAC {terminal || '2026'}
            </CardTitle>
          </CardHeader>
           <CardContent className="space-y-4">
             <div className="flex justify-between items-end">
               <span className="text-3xl font-bold">42%</span>
               <span className="text-sm text-blue-100 italic font-medium">Prêt pour les épreuves</span>
             </div>
             <Progress value={42} className="h-2.5 bg-white/20" />
             <div className="grid grid-cols-2 gap-2 pt-2 text-center text-[10px] text-blue-50 uppercase font-bold">
               <div className="bg-white/10 p-2.5 rounded-2xl backdrop-blur-sm border border-white/10">
                 <div className="text-xl font-black">{totalCompleted}</div>
                 Exercices
               </div>
               <div className="bg-white/10 p-2.5 rounded-2xl backdrop-blur-sm border border-white/10">
                 <div className="text-xl font-black">{masteredCount}</div>
                 Matières Top
               </div>
             </div>
           </CardContent>
         </Card>
       </motion.div>

       {/* Recent Achievements */}
       {recentAchievements.length > 0 && (
         <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-sm font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2 ml-1">
              <Award className="w-4 h-4 text-amber-500" /> Succès Récents
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 no-scrollbar">
               {recentAchievements.map((achievement) => (
                 <div key={achievement.id} className="flex-shrink-0 w-48 bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-xl shadow-inner">
                      {achievement.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[11px] font-black truncate">{achievement.title}</h4>
                      <p className="text-[9px] text-muted-foreground font-medium uppercase truncate">Débloqué</p>
                    </div>
                 </div>
               ))}
            </div>
         </motion.div>
       )}

      {/* Today's Plan */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Programme du Jour
          </h2>
          <NavLink to={ROUTE_PATHS.PLANNER} className="text-primary text-sm font-medium flex items-center">
            Voir tout <ChevronRight className="h-4 w-4" />
          </NavLink>
        </div>
        
        {todayPlan ? (
          <Card className="border-l-4 border-l-primary shadow-sm">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-base">{todayPlan.day}</h3>
                <Badge variant="outline" className="text-primary border-primary">{todayPlan.exerciseCount} Ex.</Badge>
              </div>
              <ul className="space-y-2">
                {todayPlan.activities.map((act, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {act}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-md gap-2" asChild>
                <NavLink to={ROUTE_PATHS.SUBJECTS}>
                  <PlayCircle className="h-4 w-4" />
                  Commencer la séance
                </NavLink>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="p-8 text-center bg-muted rounded-xl border-2 border-dashed">
             Pas de plan spécifique pour aujourd'hui. Explorez les matières !
          </div>
        )}
      </motion.div>

      {/* Featured Subjects */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Matières Clés
          </h2>
          <NavLink to={ROUTE_PATHS.SUBJECTS} className="text-primary text-sm font-medium flex items-center">
            Tout voir <ChevronRight className="h-4 w-4" />
          </NavLink>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {subjects.slice(0, 4).map((subject) => (
            <NavLink key={subject.id} to={ROUTE_PATHS.SUBJECT_DETAIL.replace(':id', subject.id)}>
              <Card className="hover:shadow-md transition-all border-none bg-accent/30 overflow-hidden group">
                <div className={`h-1.5 w-full bg-gradient-to-r ${subject.gradient}`} />
                <CardContent className="p-3">
                  <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{subject.icon}</div>
                  <h3 className="font-bold text-xs line-clamp-1">{subject.shortName}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[10px] text-muted-foreground">{subject.totalExercises} Ex.</span>
                    <Progress value={progress[subject.id]?.mastery || 0} className="h-1 w-12" />
                  </div>
                </CardContent>
              </Card>
            </NavLink>
          ))}
        </div>
      </motion.div>

      {/* Guided Path Promo */}
      <motion.div variants={itemVariants}>
        <NavLink to={ROUTE_PATHS.GUIDED_PATH}>
          <Card className="bg-gradient-to-br from-indigo-900 to-slate-800 text-white overflow-hidden relative hover:shadow-lg transition-shadow cursor-pointer">
            <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
            <CardContent className="p-5 flex items-center justify-between relative z-10">
              <div className="space-y-1">
                <Badge className="bg-white/20 text-white hover:bg-white/30 mb-2 border-0">PARCOURS</Badge>
                <h3 className="text-lg font-bold leading-tight">2 semaines choc Terminale {terminal || 'EA'}</h3>
                <p className="text-xs text-slate-400">Plan guidé pour être prêt au BAC</p>
              </div>
              <Target className="h-10 w-10 text-primary/60" />
            </CardContent>
          </Card>
        </NavLink>
      </motion.div>

      {/* Mock Exam Promo */}
      <motion.div variants={itemVariants}>
        <Card className="bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
          <CardContent className="p-5 flex items-center justify-between relative z-10">
            <div className="space-y-1">
              <Badge className="bg-white text-slate-900 hover:bg-white mb-2">NOUVEAU</Badge>
              <h3 className="text-lg font-bold leading-tight">Simulation BAC Blanc</h3>
              <p className="text-xs text-slate-400">40 questions chronométrées</p>
            </div>
            <Button size="icon" className="h-12 w-12 rounded-full bg-primary hover:bg-primary/80 shadow-lg" asChild>
              <NavLink to={ROUTE_PATHS.MOCK_EXAM}>
                <ArrowRight className="h-6 w-6" />
              </NavLink>
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Daily Reminder */}
      <motion.div variants={itemVariants} className="bg-primary/5 p-4 rounded-2xl flex gap-3 items-center border border-primary/10">
        <div className="bg-white p-2 rounded-xl shadow-sm text-primary">
          <Bell className="h-5 w-5" />
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-bold text-primary block">Rappel de révision</span>
          Il vous reste 30 exercices pour atteindre votre objectif hebdomadaire !
        </p>
      </motion.div>
    </motion.div>
  );
}
