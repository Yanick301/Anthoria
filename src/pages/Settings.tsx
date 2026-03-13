import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, RotateCcw, Trash2, AlertTriangle, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/lib/index';
import { useAppStore } from '@/hooks/useAppStore';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SERIES: { value: 'A' | 'B' | 'C' | 'EA'; label: string }[] = [
  { value: 'A', label: 'Terminale A (Littéraire)' },
  { value: 'B', label: 'Terminale B (Économie)' },
  { value: 'C', label: 'Terminale C (Scientifique)' },
  { value: 'EA', label: 'Terminale EA (Eau & Assainissement)' },
];

export default function Settings() {
  const navigate = useNavigate();
  const { studentName, terminal, setStudentName, setTerminal, resetProgress, resetAll } = useAppStore();
  const [name, setName] = useState(studentName || '');
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showResetAllConfirm, setShowResetAllConfirm] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSaveName = () => {
    setStudentName(name);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleChangeSerie = (t: 'A' | 'B' | 'C' | 'EA') => {
    setTerminal(t);
  };

  const handleResetProgress = () => {
    resetProgress();
    setShowResetConfirm(false);
  };

  const handleResetAll = () => {
    resetAll();
    setShowResetAllConfirm(false);
    navigate(ROUTE_PATHS.HOME);
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-6 p-4 pt-6 pb-24 bg-accent/5 min-h-screen"
    >
      <h1 className="text-2xl font-bold tracking-tight">Paramètres</h1>

      <Card className="border-none shadow-sm">
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <User className="h-5 w-5" />
            <span>Profil</span>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Prénom / Pseudo</Label>
            <div className="flex gap-2">
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre prénom"
                className="flex-1"
              />
              <Button size="sm" onClick={handleSaveName} className="shrink-0">
                {saved ? <Check className="h-4 w-4" /> : 'Enregistrer'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <GraduationCap className="h-5 w-5" />
            <span>Série</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {SERIES.map((s) => (
              <Button
                key={s.value}
                variant={terminal === s.value ? 'default' : 'outline'}
                size="sm"
                className="h-auto py-3 text-left justify-start"
                onClick={() => handleChangeSerie(s.value)}
              >
                <span className="font-bold mr-2">{s.value}</span>
                <span className="text-xs truncate">{s.label.split(' ')[1]}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center gap-2 text-destructive font-semibold">
            <RotateCcw className="h-5 w-5" />
            <span>Réinitialisation</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Remettre tous les compteurs à zéro (points, série, exercices, BAC blancs). Votre profil reste inchangé.
          </p>
          {!showResetConfirm ? (
            <Button variant="outline" onClick={() => setShowResetConfirm(true)} className="w-full">
              Réinitialiser la progression
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setShowResetConfirm(false)} className="flex-1">
                Annuler
              </Button>
              <Button variant="destructive" onClick={handleResetProgress} className="flex-1">
                Confirmer
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm border-destructive/30">
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center gap-2 text-destructive font-semibold">
            <Trash2 className="h-5 w-5" />
            <span>Supprimer tout</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Supprimer le profil et toutes les données. Vous repasserez par l&apos;écran d&apos;accueil.
          </p>
          {!showResetAllConfirm ? (
            <Button variant="destructive" onClick={() => setShowResetAllConfirm(true)} className="w-full">
              Tout supprimer
            </Button>
          ) : (
            <div className="flex gap-2 items-center">
              <AlertTriangle className="h-6 w-6 text-destructive shrink-0" />
              <div className="flex gap-2 flex-1">
                <Button variant="outline" onClick={() => setShowResetAllConfirm(false)} className="flex-1">
                  Annuler
                </Button>
                <Button variant="destructive" onClick={handleResetAll} className="flex-1">
                  Oui, supprimer
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
