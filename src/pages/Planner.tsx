import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Zap, 
  Play, 
  BookOpen, 
  PenTool, 
  Info, 
  Target,
  ArrowRight
} from 'lucide-react';
import { ROUTE_PATHS, getCurrentWeekPlan } from '@/lib/index';
import { NavLink } from 'react-router-dom';
import { SUBJECTS } from '@/data/subjects';
import { useAppStore } from '@/hooks/useAppStore';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function Planner() {
  const { progress, terminal, sessions } = useAppStore();
  const [weekIndex, setWeekIndex] = useState(0);
  const weekPlan = getCurrentWeekPlan(terminal, weekIndex);
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long' });

  // Jours avec au moins une session enregistrée
  const studiedDays = new Set(
    sessions.map((s) =>
      new Date(s.date).toLocaleDateString('fr-FR', { weekday: 'long' }).toLowerCase()
    )
  );

  // Progression semaine en cours
  const weekDaysCompleted = weekPlan.filter(
    d => studiedDays.has(d.day.toLowerCase())
  ).length;
  const weekProgressPct = weekPlan.length > 0
    ? Math.round((weekDaysCompleted / weekPlan.length) * 100)
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
      {/* Header with Calendar Control */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="flex items-center justify-between">
           <h1 className="text-2xl font-bold tracking-tight">Planning de Révision</h1>
           <div className="flex gap-2">
              <Button
                variant="ghost" size="icon"
                className="rounded-full bg-white shadow-sm border h-8 w-8"
                onClick={() => setWeekIndex(Math.max(0, weekIndex - 1))}
                disabled={weekIndex === 0}
              >
                 <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost" size="icon"
                className="rounded-full bg-white shadow-sm border h-8 w-8"
                onClick={() => setWeekIndex(weekIndex + 1)}
              >
                 <ChevronRight className="h-4 w-4" />
              </Button>
           </div>
        </div>
        <p className="text-muted-foreground text-sm">Suivez votre guide quotidien pour être prêt en 2 mois.</p>
        
        <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20 flex items-center justify-between">
           <div className="flex gap-3 items-center">
              <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center">
                 <Target className="h-6 w-6" />
              </div>
              <div>
                 <h4 className="font-bold text-sm">Semaine {weekIndex + 1}</h4>
                 <p className="text-[10px] text-primary/80">{weekDaysCompleted} / {weekPlan.length} jours accomplis</p>
              </div>
           </div>
           <div className="text-right">
              <div className="text-lg font-black text-primary">{weekProgressPct}%</div>
              <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Réussi</div>
           </div>
        </div>
      </motion.div>

      {/* Weekly Schedule */}
      <motion.div variants={itemVariants} className="space-y-4 pb-8">
         <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 px-1">Votre semaine</h3>
         
         {weekPlan.map((dayPlan, index) => {
            const isToday = dayPlan.day.toLowerCase() === today.toLowerCase();
            const isCompleted = studiedDays.has(dayPlan.day.toLowerCase());

            return (
              <Card key={index} className={`border-none shadow-sm transition-all overflow-hidden relative group cursor-pointer ${isToday ? 'ring-2 ring-primary ring-offset-2' : ''} ${isCompleted ? 'bg-white opacity-80' : 'bg-white'}`}>
                 {isToday && (
                    <div className="absolute top-0 right-0 p-3 z-10">
                       <Badge className="bg-primary text-white hover:bg-primary border-none text-[10px]">AUJOURD'HUI</Badge>
                    </div>
                 )}
                 <div className="flex">
                    <div className={`w-1.5 ${isToday ? 'bg-primary' : isCompleted ? 'bg-green-500' : 'bg-slate-200'}`} />
                    <div className="flex-1 p-4">
                       <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-2">
                             {isCompleted ? (
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                             ) : (
                                <Circle className="h-5 w-5 text-slate-300" />
                             )}
                             <h4 className={`font-bold text-sm ${isToday ? 'text-primary' : ''}`}>{dayPlan.day}</h4>
                          </div>
                          <Badge variant="secondary" className="text-[10px] font-bold bg-accent/20 border-none">
                             {dayPlan.exerciseCount} Ex.
                          </Badge>
                       </div>

                       <div className="space-y-2 mb-4">
                          {dayPlan.activities.map((activity, i) => (
                             <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                <div className={`h-1 w-1 rounded-full ${isToday ? 'bg-primary' : 'bg-slate-400'}`} />
                                <span className={isCompleted ? 'line-through opacity-60' : ''}>{activity}</span>
                             </div>
                          ))}
                       </div>

                       <div className="flex gap-2 flex-wrap">
                          {dayPlan.subjectIds.map((sid) => {
                             const sub = SUBJECTS.find(s => s.id === sid);
                             return sub ? (
                                <Badge key={sid} variant="outline" className={`text-[10px] px-1 py-0 border-none ${sub.color.replace('bg-', 'bg-')}/10 ${sub.color.replace('bg-', 'text-')}`}>
                                   {sub.shortName}
                                </Badge>
                             ) : null;
                          })}
                       </div>

                       {isToday && !isCompleted && (
                          <Button className="w-full mt-4 bg-primary text-white h-10 rounded-xl shadow-md gap-2 font-bold" asChild>
                             <NavLink to={ROUTE_PATHS.SUBJECTS}>
                                <Play className="h-4 w-4 fill-current" />
                                Reprendre la session
                             </NavLink>
                          </Button>
                       )}
                    </div>
                 </div>
              </Card>
            );
         })}
      </motion.div>

      {/* Motivation Banner */}
      <motion.div variants={itemVariants} className="bg-slate-900 text-white p-5 rounded-2xl shadow-xl relative overflow-hidden mb-6">
         <div className="absolute inset-0 bg-primary/20 opacity-30 pointer-events-none" />
         <div className="relative z-10">
            <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
               <Zap className="h-5 w-5 text-orange-400" /> 
               Conseil de Motivation
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed italic">
               "L'éducation est l'arme la plus puissante que l'on puisse utiliser pour changer le monde." – Nelson Mandela. 
               Continuez votre série de révision, le succès est proche !
            </p>
         </div>
      </motion.div>
    </motion.div>
  );
}
