import React from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  PenTool, 
  Zap, 
  Award, 
  ChevronRight, 
  Play, 
  CheckCircle2, 
  Lock, 
  FileText, 
  Info,
  Layers,
  HelpCircle,
  MessageSquare,
  Zap as ZapIcon,
  Sparkles,
  MessageSquareText,
  Target
} from 'lucide-react';
import { ROUTE_PATHS, getSubjectColor, getSubjectsForTerminal } from '@/lib/index';
import { useAppStore } from '@/hooks/useAppStore';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AITutorModal } from '@/components/AITutorModal';
import { cn } from '@/lib/utils';

export default function SubjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { progress, terminal } = useAppStore();
  const [isAiSummaryOpen, setIsAiSummaryOpen] = React.useState(false);

  const subject = getSubjectsForTerminal(terminal).find((s) => s.id === id);
  if (!subject) return <div className="p-8 text-center">Matière non trouvée.</div>;

  const subjectProgress = progress[id!] || { mastery: 0, completedExercises: [] as string[] };
  const colorClass = getSubjectColor(id!);

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
      className="flex flex-col min-h-screen bg-accent/10"
    >
      {/* Header Banner */}
      <motion.div
        variants={itemVariants}
        className={`h-48 relative overflow-hidden bg-gradient-to-br ${subject.gradient} text-white p-6 flex flex-col justify-end`}
      >
        <div className="absolute top-4 left-4 z-20">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 rounded-full"
            onClick={() => navigate(ROUTE_PATHS.SUBJECTS)}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </div>
        <div className="absolute top-4 right-4 z-20 opacity-10">
          <div className="text-9xl font-black">{subject.icon}</div>
        </div>
        <div className="relative z-10">
          <Badge className="bg-white/20 hover:bg-white/30 text-white border border-white/30 mb-2 backdrop-blur-sm px-3 py-1 rounded-xl font-black italic uppercase tracking-widest text-[10px]">
            {terminal ? `Série ${terminal}` : 'Série'}
          </Badge>
          <h1 className="text-3xl font-black italic leading-tight text-white drop-shadow-md">{subject.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <Progress value={subjectProgress.mastery} className="h-2 w-24 bg-white/20" />
            <span className="text-xs font-bold">{subjectProgress.mastery}% Maîtrisé</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content Tabs */}
      <div className="p-4 flex-1">
        <Tabs defaultValue="lessons" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/50 rounded-xl h-12 p-1 border">
            <TabsTrigger value="lessons" className="rounded-lg font-bold text-xs gap-2">
              <BookOpen className="h-4 w-4" /> Leçons
            </TabsTrigger>
            <TabsTrigger value="exercises" className="rounded-lg font-bold text-xs gap-2">
              <PenTool className="h-4 w-4" /> Exercices
            </TabsTrigger>
            <TabsTrigger value="resources" className="rounded-lg font-bold text-xs gap-2">
              <Layers className="h-4 w-4" /> Outils
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lessons" className="mt-6 space-y-4">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Chapitres du programme
            </h2>
            {subject.chapters.map((chapter, index) => (
              <NavLink
                key={chapter.id}
                to={ROUTE_PATHS.LESSON.replace(':id', subject.id).replace(':chapterIndex?', index.toString())}
                className="block group"
              >
                <Card className="hover:shadow-md transition-all border-none shadow-sm overflow-hidden bg-white">
                  <div className="flex">
                    <div className="w-12 bg-accent/30 flex items-center justify-center font-bold text-muted-foreground text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1 p-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors">{chapter.title}</h3>
                        <p className="text-[10px] text-muted-foreground mt-1 line-clamp-1">{chapter.content.substring(0, 60)}...</p>
                      </div>
                      <Play className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Card>
              </NavLink>
            ))}
          </TabsContent>

          <TabsContent value="exercises" className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-primary/5 border-primary/10 overflow-hidden relative">
                 <div className="p-4 relative z-10">
                    <h3 className="font-bold text-primary mb-1">Entraînement Libre</h3>
                    <p className="text-xs text-muted-foreground mb-4">Pratiquez les {subject.totalExercises} exercices de cette matière à votre rythme.</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl shadow-md gap-2" asChild>
                       <NavLink to={ROUTE_PATHS.EXERCISE_PRACTICE.replace(':subjectId', subject.id)}>
                          <Play className="h-4 w-4" />
                          Commencer l'entraînement
                       </NavLink>
                    </Button>
                 </div>
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                    <PenTool className="h-16 w-16" />
                 </div>
              </Card>

              <div className="flex items-center justify-between mt-6 mb-2 px-1">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Types d'exercices</h3>
                <Badge variant="secondary" className="text-[10px] font-bold">{subject.totalExercises} Total</Badge>
              </div>

              <div className="grid grid-cols-2 gap-3">
                 <Card className="p-4 flex flex-col items-center justify-center text-center hover:bg-accent/10 transition-colors border-none shadow-sm cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                       <HelpCircle className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold">QCM Rapides</span>
                    <span className="text-[10px] text-muted-foreground mt-1">24 exercices</span>
                 </Card>
                 <Card className="p-4 flex flex-col items-center justify-center text-center hover:bg-accent/10 transition-colors border-none shadow-sm cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-2">
                       <Zap className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold">Calculs</span>
                    <span className="text-[10px] text-muted-foreground mt-1">15 exercices</span>
                 </Card>
                 <Card className="p-4 flex flex-col items-center justify-center text-center hover:bg-accent/10 transition-colors border-none shadow-sm cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-2">
                       <Layers className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold">Cas Pratiques</span>
                    <span className="text-[10px] text-muted-foreground mt-1">12 exercices</span>
                 </Card>
                 <Card className="p-4 flex flex-col items-center justify-center text-center hover:bg-accent/10 transition-colors border-none shadow-sm cursor-pointer opacity-60">
                    <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
                       <Award className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold">Défi Chrono</span>
                    <span className="text-[10px] text-muted-foreground mt-1">Bientôt</span>
                 </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="mt-6 space-y-4">
             <NavLink to={ROUTE_PATHS.FLASHCARDS.replace(':id', subject.id)}>
                <Card className="p-4 flex items-center justify-between hover:bg-accent/10 transition-colors border-none shadow-sm bg-white mb-3">
                   <div className="flex gap-3 items-center">
                      <div className="h-10 w-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
                         <ZapIcon className="h-6 w-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-sm">Flashcards Mémoire</h4>
                         <p className="text-[10px] text-muted-foreground">Mémorisez les concepts clés</p>
                      </div>
                   </div>
                   <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Card>
              </NavLink>

              <Card
                onClick={() => setIsAiSummaryOpen(true)}
                className="p-4 flex items-center justify-between hover:bg-accent/10 transition-colors border-none shadow-sm bg-white mb-3 cursor-pointer group"
              >
                 <div className="flex gap-3 items-center">
                    <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                       <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                       <h4 className="font-bold text-sm">Résumé IA Express</h4>
                       <p className="text-[10px] text-muted-foreground">L'essentiel à retenir pour l'examen</p>
                    </div>
                 </div>
                 <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Card>

             <NavLink to={ROUTE_PATHS.QUIZ.replace(':id', subject.id)}>
                <Card className="p-4 flex items-center justify-between hover:bg-accent/10 transition-colors border-none shadow-sm bg-white mb-3">
                   <div className="flex gap-3 items-center">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                         <MessageSquare className="h-6 w-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-sm">Quiz de Section</h4>
                         <p className="text-[10px] text-muted-foreground">Testez vos connaissances</p>
                      </div>
                   </div>
                   <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Card>
             </NavLink>

             <Card className="p-4 flex items-center justify-between border-none shadow-sm bg-white opacity-60">
                <div className="flex gap-3 items-center">
                   <div className="h-10 w-10 rounded-xl bg-accent/50 text-muted-foreground flex items-center justify-center">
                      <FileText className="h-6 w-6" />
                   </div>
                   <div>
                      <h4 className="font-bold text-sm">Annales Corrigées</h4>
                      <p className="text-[10px] text-muted-foreground">Sujets BAC 2020 - 2025</p>
                   </div>
                </div>
                <Lock className="h-4 w-4 text-muted-foreground" />
             </Card>

             <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-dashed border-primary/20">
                <h4 className="font-bold text-xs text-primary mb-2 flex items-center gap-1">
                   <Info className="h-4 w-4" /> Conseil de révision
                </h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                   Concentrez-vous sur les chapitres de Mobilisation des ressources le matin, quand votre cerveau est le plus frais pour mémoriser les formules de débits.
                </p>
             </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Floating Action */}
      <div className="p-4 sticky bottom-20 z-10 pointer-events-none">
        <Button className="w-full bg-primary text-white h-12 rounded-xl shadow-xl pointer-events-auto flex gap-2 font-bold" asChild>
          <NavLink to={ROUTE_PATHS.LESSON.replace(':id', subject.id)}>
            <Play className="h-4 w-4 fill-current" />
            Continuer la leçon
          </NavLink>
        </Button>
      </div>

      <AITutorModal
        isOpen={isAiSummaryOpen}
        onClose={() => setIsAiSummaryOpen(false)}
        question={`Résumé Global : ${subject.name}`}
        explanation={`L'essentiel pour ton BAC ${terminal} en ${subject.name} : Concentre-toi sur la maîtrise des ${subject.chapters.length} chapitres clés. La stratégie gagnante ici est de lier les définitions théoriques aux calculs pratiques. Assure-toi de connaître par cœur les schémas de principe vus en cours.`}
      />
    </motion.div>
  );
}
