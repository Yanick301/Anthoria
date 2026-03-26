import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Share2, 
  Rocket, 
  CheckCircle2,
  BookOpen,
  ChevronRight,
  Target,
  Trophy,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/hooks/useAppStore';
import { cn } from '@/lib/utils';

const CURRENT_VERSION = '1.0.5';

type TourStep = {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  accent: string;
  image: string;
};

export function ReleaseNotesModal() {
  const { lastSeenVersion, setLastSeenVersion } = useAppStore();
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Show modal if version is older
    if (lastSeenVersion !== CURRENT_VERSION) {
      setIsOpen(true);
    }
  }, [lastSeenVersion]);

  const handleFinish = () => {
    setIsOpen(false);
    setLastSeenVersion(CURRENT_VERSION);
  };

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleFinish();
    }
  };

  const tourSteps: TourStep[] = [
    {
      id: 'v105',
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Anthoria v1.0.5",
      subtitle: "OPTIMISATION & NAVIGATION",
      description: "Navigation directe par chapitre dans les leçons, optimisation du Heatmap d'activité, correction de la réactivité du nom d'utilisateur, enregistrement automatique des sessions, et centralisation de la date du BAC.",
      color: "bg-blue-700",
      accent: "text-blue-100",
      image: "v105_features"
    },
    {
      id: 'welcome',
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: "Anthoria v3.0",
      subtitle: "LA RÉVOLUTION EST LÀ",
      description: "Bienvenue dans la version la plus complète d'Anthoria. Nous avons tout refait pour ta réussite.",
      color: "bg-slate-900",
      accent: "text-primary",
      image: "welcome"
    },
    {
      id: 'multiseries',
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Toutes les Séries",
      subtitle: "A, B, C ET EA",
      description: "Plus de 75 nouveaux exercices ajoutés. Que tu sois en littéraire ou scientifique, Anthoria est là.",
      color: "bg-indigo-600",
      accent: "text-indigo-100",
      image: "content"
    },
    {
      id: 'activity',
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "Suivi d'Activité",
      subtitle: "HEATMAP DYNAMIQUE",
      description: "Visualise ton effort quotidien sur les 42 derniers jours dans le nouvel onglet Activité.",
      color: "bg-rose-600",
      accent: "text-rose-100",
      image: "heatmap"
    },
    {
      id: 'notifications',
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Rappels de Révision",
      subtitle: "RESTE CONCENTRÉ",
      description: "Configure tes notifications pour ne jamais manquer une séance et rester régulier.",
      color: "bg-amber-500",
      accent: "text-amber-100",
      image: "notifs"
    },
    {
      id: 'bac',
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Compte à rebours",
      subtitle: "LE JOUR J APPROCHE",
      description: "Suis en temps réel le nombre de jours restants avant le BAC directement sur ton dashboard.",
      color: "bg-primary",
      accent: "text-blue-100",
      image: "countdown"
    },
    {
      id: 'reliability',
      icon: <CheckCircle2 className="w-8 h-8 text-white" />,
      title: "Fiabilité Totale",
      subtitle: "SYSTÈME ASSAINI",
      description: "Correction de toutes les incohérences de données pour une expérience fluide et sans bug.",
      color: "bg-emerald-600",
      accent: "text-emerald-100",
      image: "clean"
    }
  ];

  const step = tourSteps[currentStep];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
          />

          <motion.div
            layoutId="modal"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative w-full max-w-sm bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Visual Part */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={cn("h-64 relative flex items-center justify-center overflow-hidden transition-colors duration-500", step.color)}
              >
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-3xl rounded-full -mr-24 -mt-24" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 blur-2xl rounded-full -ml-16 -mb-16" />
                
                {/* Center Graphic */}
                <div className="relative">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl"
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Floating Particles */}
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                {/* Step Progress Dots */}
                <div className="absolute bottom-6 flex gap-2">
                  {tourSteps.map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "h-1.5 transition-all duration-300 rounded-full",
                        i === currentStep ? "w-8 bg-white" : "w-1.5 bg-white/40"
                      )} 
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Content Part */}
            <div className="p-8 pb-10 flex flex-col items-center text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="space-y-1">
                    <p className={cn("text-[10px] font-black uppercase tracking-[0.2em] mb-1", step.accent)}>
                      {step.subtitle}
                    </p>
                    <h2 className="text-2xl font-black text-slate-900 leading-tight">
                      {step.title}
                    </h2>
                  </div>
                  
                  <p className="text-sm text-slate-500 font-medium leading-relaxed px-2">
                    {step.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="w-full pt-8 flex gap-3">
                {currentStep > 0 && (
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="h-14 w-14 rounded-2xl border-2 border-slate-100 text-slate-400 p-0"
                  >
                    <ChevronRight className="w-6 h-6 rotate-180" />
                  </Button>
                )}
                
                <Button 
                  onClick={handleNext}
                  className={cn(
                    "flex-1 h-14 rounded-2xl text-white font-black text-lg shadow-xl transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2",
                    step.color,
                    "shadow-lg hover:brightness-110"
                  )}
                >
                  {currentStep === tourSteps.length - 1 ? (
                    <>C'est parti ! <CheckCircle2 className="w-6 h-6" /></>
                  ) : (
                    <>Suivant <ChevronRight className="w-6 h-6" /></>
                  )}
                </Button>
              </div>
              
              <button 
                onClick={handleFinish}
                className="mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest hover:text-slate-600 transition-colors"
              >
                Passer la visite
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
