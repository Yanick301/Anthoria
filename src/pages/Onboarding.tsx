import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppStore } from '@/hooks/useAppStore';
import { TerminalSerie } from '@/lib/index';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GraduationCap, User, ArrowRight } from 'lucide-react';

const spring = { type: 'spring' as const, stiffness: 300, damping: 30 };

const TERMINAL_OPTIONS: { id: TerminalSerie; label: string; description: string }[] = [
  { id: 'A', label: 'Terminale A', description: 'Série littéraire et sciences humaines' },
  { id: 'B', label: 'Terminale B', description: 'Économie & gestion' },
  { id: 'C', label: 'Terminale C', description: 'Série scientifique' },
  { id: 'D', label: 'Terminale D', description: 'Série scientifique SVT' },
  { id: 'EA', label: 'Terminale EA', description: 'Eau & Assainissement' },
];

type Step = 0 | 1 | 2;

const Onboarding: React.FC = () => {
  const { setProfile } = useAppStore();
  const [step, setStep] = useState<Step>(0);
  const [name, setName] = useState('');
  const [terminal, setTerminal] = useState<TerminalSerie | null>(null);

  const canContinue = name.trim().length > 1 && terminal !== null;

  const handleValidate = () => {
    if (!canContinue || !terminal) return;
    setProfile(name, terminal);
  };

  return (
    <div className="min-h-screen min-h-dvh bg-gradient-to-br from-slate-50 via-blue-50/80 to-cyan-50/60 flex items-center justify-center px-5 py-8 overflow-auto">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={spring}
            className="w-full max-w-md"
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-primary/5 py-12 px-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ ...spring, delay: 0.15 }}
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25"
                >
                  <GraduationCap className="h-10 w-10 text-white" />
                </motion.div>
                <motion.div
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ...spring, delay: 0.25 }}
                  className="space-y-2"
                >
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary/80">
                    Propulser ton avenir
                  </p>
                  <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
                    Anthoria
                  </h1>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto font-medium">
                    Ton compagnon de réussite intelligent pour le BAC au Bénin.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ...spring, delay: 0.35 }}
                >
                  <Button
                    size="lg"
                    className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md gap-2 h-12"
                    onClick={() => setStep(1)}
                  >
                    Commencer
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-[10px] text-muted-foreground/60 font-medium uppercase tracking-[0.1em]"
                >
                  Créé avec passion par <span className="text-primary/60 font-black">DeOs</span>
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={spring}
            className="w-full max-w-md"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-primary/5 p-6 space-y-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold tracking-wider uppercase">Étape 1 / 2</span>
                  <span>Prénom</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold leading-tight">
                    Comment t&apos;appeler ?
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Ton prénom ou pseudo sera affiché dans l'app.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Ton prénom ou pseudo
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=""
                    autoComplete="given-name"
                    className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl flex-1 h-11 border-border"
                    onClick={() => setStep(0)}
                  >
                    Retour
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-xl flex-1 h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    disabled={name.trim().length <= 1}
                    onClick={() => setStep(2)}
                  >
                    Suivant
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={spring}
            className="w-full max-w-md"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-primary/5 p-6 space-y-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="font-semibold tracking-wider uppercase">Étape 2 / 2</span>
                  <span>Ta série</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-foreground leading-tight">
                    Quel BAC prépares-tu, {name.trim() || 'futur bachelier'} ?
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Les matières et exercices seront adaptés à ta série.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {TERMINAL_OPTIONS.map((option, i) => {
                    const isActive = terminal === option.id;
                    return (
                      <motion.button
                        key={option.id}
                        type="button"
                        onClick={() => setTerminal(option.id)}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...spring, delay: i * 0.05 }}
                        className={cn(
                          'group rounded-2xl border-2 px-4 py-3 text-left transition-colors flex flex-col gap-2 min-h-[88px]',
                          isActive
                            ? 'border-primary bg-primary/10 shadow-sm'
                            : 'border-slate-200 bg-slate-50/50 hover:border-primary/40 hover:bg-primary/5'
                        )}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={cn(
                              'inline-flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold',
                              isActive
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-slate-200 text-slate-600'
                            )}
                          >
                            {option.id}
                          </span>
                          <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                            {option.label}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-snug">
                          {option.description}
                        </p>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl flex-1 h-11 border-border"
                    onClick={() => setStep(1)}
                  >
                    Retour
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-xl flex-1 h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    disabled={!canContinue}
                    onClick={handleValidate}
                  >
                    C&apos;est parti
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                {!canContinue && (
                  <p className="text-center text-xs text-muted-foreground">
                    Choisis ta série pour continuer.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;

