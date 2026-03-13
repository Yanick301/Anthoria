import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, ChevronRight, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getGuidedPathsForTerminal } from '@/data/guided-paths';
import { useAppStore } from '@/hooks/useAppStore';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function GuidedPath() {
  const navigate = useNavigate();
  const { terminal } = useAppStore();
  const paths = getGuidedPathsForTerminal(terminal);

  if (!paths.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center p-8 min-h-[60vh]"
      >
        <Target className="h-16 w-16 text-muted-foreground/30 mb-4" />
        <p className="text-center text-muted-foreground">
          Sélectionnez une série dans les paramètres pour voir les parcours disponibles.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-6 p-4 pt-6 pb-24 bg-accent/5 min-h-screen"
    >
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Parcours de révision</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Suivez un plan guidé pour préparer efficacement votre BAC.
        </p>
      </div>

      <div className="space-y-4">
        {paths.map((path) => (
          <Card
            key={path.id}
            className="border-none shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => {}}
          >
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl shrink-0">
                  {path.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base">{path.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{path.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {path.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5" />
                      {path.days.length} jours
                    </span>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0 self-center" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
