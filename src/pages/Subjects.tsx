import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, PenTool, ChevronRight, Play, Info, TrendingUp } from 'lucide-react';
import { ROUTE_PATHS, getSubjectsForTerminal } from '@/lib/index';
import { NavLink } from 'react-router-dom';
import { useAppStore } from '@/hooks/useAppStore';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Subjects() {
  const { progress, terminal } = useAppStore();
  const SUBJECTS = getSubjectsForTerminal(terminal);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredSubjects = SUBJECTS.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.shortName.toLowerCase().includes(searchTerm.toLowerCase());
    const mastery = progress[s.id]?.mastery || 0;
    
    if (filter === 'completed') return matchesSearch && mastery >= 100;
    if (filter === 'in-progress') return matchesSearch && mastery > 0 && mastery < 100;
    if (filter === 'not-started') return matchesSearch && mastery === 0;
    return matchesSearch;
  });

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
      {/* Header & Search */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">
          {terminal ? `Matières du BAC ${terminal}` : 'Matières du BAC'}
        </h1>
        <p className="text-muted-foreground text-sm">
          {SUBJECTS.length} matières clés pour réussir votre diplôme.
        </p>
        
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Rechercher une matière..." 
            className="pl-10 rounded-xl bg-accent/20 border-none h-12"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="all" onValueChange={setFilter} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-accent/30 rounded-xl h-10 p-1">
            <TabsTrigger value="all" className="rounded-lg text-[10px] font-bold">Toutes</TabsTrigger>
            <TabsTrigger value="not-started" className="rounded-lg text-[10px] font-bold">À faire</TabsTrigger>
            <TabsTrigger value="in-progress" className="rounded-lg text-[10px] font-bold">En cours</TabsTrigger>
            <TabsTrigger value="completed" className="rounded-lg text-[10px] font-bold">Fini</TabsTrigger>
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Subjects List */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4">
        {filteredSubjects.map((subject) => {
          const mastery = progress[subject.id]?.mastery || 0;
          const completedCount = progress[subject.id]?.completedExercises.length || 0;

          return (
            <NavLink 
              key={subject.id} 
              to={ROUTE_PATHS.SUBJECT_DETAIL.replace(':id', subject.id)}
              className="block group"
            >
              <Card className="overflow-hidden border-none shadow-sm bg-card hover:shadow-md transition-all">
                <div className="flex">
                  <div className={`w-3 bg-gradient-to-b ${subject.gradient}`} />
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex gap-3 items-center">
                        <div className="text-3xl bg-accent/50 h-12 w-12 rounded-2xl flex items-center justify-center">
                          {subject.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors">{subject.name}</h3>
                          <div className="flex gap-2 items-center mt-1">
                             <Badge variant="outline" className="text-[10px] px-1 py-0 border-primary/20 text-primary">{subject.totalExercises} Ex.</Badge>
                             <span className="text-[10px] text-muted-foreground">{completedCount} terminés</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground/50 group-hover:translate-x-1 transition-transform" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-bold">
                        <span>Maîtrise</span>
                        <span>{mastery}%</span>
                      </div>
                      <Progress value={mastery} className="h-1.5" />
                    </div>
                  </div>
                </div>
              </Card>
            </NavLink>
          );
        })}

        {filteredSubjects.length === 0 && (
          <div className="p-12 text-center text-muted-foreground">
            <Info className="h-12 w-12 mx-auto mb-4 opacity-20" />
            Aucune matière trouvée pour votre recherche.
          </div>
        )}
      </motion.div>

      {/* Stats Summary */}
      <motion.div variants={itemVariants} className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
           <TrendingUp className="h-24 w-24" />
        </div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Total Progression</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">
                {Object.values(progress).filter(p => p.mastery >= 100).length}/{SUBJECTS.length}
              </span>
              <span className="text-xs text-slate-400">Matières complétées</span>
            </div>
          </div>
          <div className="h-14 w-14 rounded-full border-4 border-primary/30 flex items-center justify-center font-bold text-lg">
            {SUBJECTS.length ? Math.round((Object.values(progress).filter(p => p.mastery >= 100).length / SUBJECTS.length) * 100) : 0}%
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
