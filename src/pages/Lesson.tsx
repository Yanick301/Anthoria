import React, { useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Zap, 
  HelpCircle, 
  Info, 
  Activity, 
  LayoutGrid, 
  FileText, 
  Layers, 
  Volume2, 
  MessageSquare,
  CheckCircle2,
  Circle,
  Award
} from 'lucide-react';
import { ROUTE_PATHS, getSubjectColor } from '@/lib/index';
import { SUBJECTS } from '@/data/subjects';
import { useAppStore } from '@/hooks/useAppStore';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function Lesson() {
  const { id, chapterIndex } = useParams<{ id: string, chapterIndex?: string }>();
  const navigate = useNavigate();
  const { progress } = useAppStore();
  const [currentChapterIndex, setCurrentChapterIndex] = useState(
    chapterIndex ? parseInt(chapterIndex, 10) : 0
  );

  const subject = SUBJECTS.find(s => s.id === id);
  if (!subject) return <div className="p-8 text-center">Sujet non trouvé.</div>;

  const currentChapter = subject.chapters[currentChapterIndex];
  const progressPercent = Math.round(((currentChapterIndex + 1) / subject.chapters.length) * 100);

  const handleNext = () => {
    if (currentChapterIndex < subject.chapters.length - 1) {
      setCurrentChapterIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      navigate(ROUTE_PATHS.SUBJECT_DETAIL.replace(':id', subject.id));
    }
  };

  const handlePrev = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col min-h-screen bg-accent/5 pb-24"
    >
      {/* Top Header Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b px-4 py-3 flex items-center justify-between">
         <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
         </Button>
         <div className="flex-1 px-4 text-center">
            <h2 className="text-sm font-bold truncate">{subject.name}</h2>
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Chapitre {currentChapterIndex + 1} / {subject.chapters.length}</p>
         </div>
         <Button variant="ghost" size="icon" className="rounded-full">
            <Info className="h-5 w-5 text-muted-foreground" />
         </Button>
      </div>

      {/* Progress Bar Header */}
      <div className="h-1 w-full bg-slate-100 sticky top-14 z-40">
         <motion.div 
            className="h-full bg-primary" 
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
         />
      </div>

      {/* Lesson Content Area */}
      <div className="p-4 pt-6 space-y-6 max-w-md mx-auto">
         <AnimatePresence mode="wait">
            <motion.div
               key={currentChapter.id}
               initial={{ x: 20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               exit={{ x: -20, opacity: 0 }}
               transition={{ duration: 0.3 }}
               className="space-y-6"
            >
               <h1 className="text-2xl font-black text-slate-900 leading-tight">{currentChapter.title}</h1>
               
               {/* Main text content with markdown-style formatting */}
               <div className="prose prose-sm prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                  {currentChapter.content.split('\n\n').map((paragraph, i) => {
                     if (paragraph.startsWith('**')) {
                        const [title, ...rest] = paragraph.split('\n');
                        return (
                           <div key={i} className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
                              <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                 <CheckCircle2 className="h-4 w-4" /> {title.replace(/\*\*/g, '')}
                              </h4>
                              <p className="text-xs text-muted-foreground leading-relaxed">{rest.join('\n')}</p>
                           </div>
                        );
                     }
                     return <p key={i} className="text-sm leading-relaxed">{paragraph}</p>;
                  })}
               </div>

               {/* Examples Section */}
               <div className="space-y-3">
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                     <Zap className="h-4 w-4 text-orange-400" /> Exemples pratiques
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                     {currentChapter.examples.map((ex, i) => (
                        <Card key={i} className="p-4 border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                           <div className="flex gap-3">
                              <div className="h-6 w-6 rounded-full bg-accent/30 flex items-center justify-center font-bold text-xs shrink-0">
                                 {i + 1}
                              </div>
                              <p className="text-xs text-muted-foreground italic leading-relaxed">{ex}</p>
                           </div>
                        </Card>
                     ))}
                  </div>
               </div>

               {/* Key Points (Flashcards style) */}
               <div className="space-y-3">
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                     <Award className="h-4 w-4 text-primary" /> Points clés à retenir
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                     {currentChapter.keyPoints.map((point, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100 group cursor-pointer hover:border-primary/30 transition-colors">
                           <div className="h-2 w-2 rounded-full bg-primary" />
                           <span className="text-xs font-bold text-slate-700 group-hover:text-primary transition-colors">{point}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Mini Activity Promo */}
               <Card className="bg-slate-900 text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 opacity-30 pointer-events-none" />
                  <CardContent className="p-5 flex items-center justify-between relative z-10">
                     <div className="space-y-1">
                        <h4 className="text-sm font-bold">Quiz rapide</h4>
                        <p className="text-[10px] text-slate-400">Validez ce chapitre immédiatement</p>
                     </div>
                     <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-xl text-xs h-9 font-bold px-4" asChild>
                        <NavLink to={ROUTE_PATHS.EXERCISES}>Tester mes acquis</NavLink>
                     </Button>
                  </CardContent>
               </Card>
            </motion.div>
         </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="fixed bottom-0 z-50 w-full max-w-md bg-white/95 backdrop-blur border-t px-4 py-4 flex gap-3 shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.1)]">
         <Button 
            variant="outline" 
            className="flex-1 h-12 rounded-xl font-bold border-slate-200 text-slate-600 gap-2 disabled:opacity-30" 
            onClick={handlePrev}
            disabled={currentChapterIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" /> Précédent
         </Button>
         <Button 
            className="flex-1 h-12 rounded-xl bg-primary text-white font-bold shadow-lg gap-2" 
            onClick={handleNext}
          >
            {currentChapterIndex === subject.chapters.length - 1 ? 'Terminer' : 'Suivant'}
            <ChevronRight className="h-5 w-5" />
         </Button>
      </div>
    </motion.div>
  );
}
