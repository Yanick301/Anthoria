import type { TerminalSerie } from '@/lib/index';

export interface GuidedPathDay {
  day: number;
  title: string;
  subjects: string[];
  activities: string;
  duration: number;
}

export interface GuidedPath {
  id: string;
  serie: TerminalSerie;
  title: string;
  description: string;
  duration: string;
  days: GuidedPathDay[];
  icon: string;
}

export const GUIDED_PATHS: GuidedPath[] = [
  {
    id: 'ea-2sem',
    serie: 'EA',
    title: '2 semaines choc EA',
    description: 'Intensif eau & assainissement pour être prêt rapidement.',
    duration: '14 jours',
    icon: '💧',
    days: [
      { day: 1, title: 'Cycle de l\'eau', subjects: ['mobilisation-eau'], activities: 'Leçon + 10 QCM', duration: 45 },
      { day: 2, title: 'Eaux souterraines', subjects: ['mobilisation-eau'], activities: 'Darcy, forages + exercices', duration: 60 },
      { day: 3, title: 'Traitement', subjects: ['traitement-eau'], activities: 'Coagulation, désinfection', duration: 50 },
      { day: 4, title: 'Assainissement', subjects: ['assainissement'], activities: 'Eaux usées, fosses septiques', duration: 55 },
      { day: 5, title: 'Réseaux hydrauliques', subjects: ['reseaux-hydrauliques'], activities: 'Pertes de charge, AEP', duration: 50 },
      { day: 6, title: 'Révision + BAC Blanc', subjects: ['mobilisation-eau', 'traitement-eau'], activities: 'QCM + simulation 40 questions', duration: 90 },
      { day: 7, title: 'Repos', subjects: [], activities: 'Révision libre', duration: 20 },
      { day: 8, title: 'Physique & Maths', subjects: ['sciences-physiques', 'mathematiques'], activities: 'Mécanique fluides, calculs', duration: 60 },
      { day: 9, title: 'Français technique', subjects: ['francais'], activities: 'Rapport, expression écrite', duration: 40 },
      { day: 10, title: 'Anglais WASH', subjects: ['anglais'], activities: 'Vocabulaire eau', duration: 35 },
      { day: 11, title: 'Projet exploitation', subjects: ['projet-exploitation'], activities: 'PGE, maintenance', duration: 45 },
      { day: 12, title: 'Révision générale', subjects: [], activities: 'Points faibles', duration: 60 },
      { day: 13, title: 'BAC Blanc complet', subjects: [], activities: '40 questions chrono', duration: 90 },
      { day: 14, title: 'Correction & fiches', subjects: [], activities: 'Analyse erreurs', duration: 45 },
    ],
  },
  {
    id: 'c-2sem',
    serie: 'C',
    title: '2 semaines choc Terminale C',
    description: 'Maths, Physique, Chimie, SVT en mode intensif.',
    duration: '14 jours',
    icon: '📐',
    days: [
      { day: 1, title: 'Dérivées & Limites', subjects: ['math'], activities: 'Cours + 15 exos', duration: 60 },
      { day: 2, title: 'Intégration', subjects: ['math'], activities: 'Primitives, aires', duration: 55 },
      { day: 3, title: 'Mécanique', subjects: ['physics'], activities: 'Newton, énergies', duration: 50 },
      { day: 4, title: 'Électricité RC/RL', subjects: ['physics'], activities: 'Ohm, circuits', duration: 55 },
      { day: 5, title: 'Acides-Bases', subjects: ['chemistry'], activities: 'pH, Brønsted', duration: 50 },
      { day: 6, title: 'BAC Blanc scientifique', subjects: ['math', 'physics'], activities: '35 questions', duration: 90 },
      { day: 7, title: 'Repos', subjects: [], activities: 'Fiches', duration: 30 },
      { day: 8, title: 'Probabilités', subjects: ['math'], activities: 'Binomiale, Normale', duration: 55 },
      { day: 9, title: 'Optique', subjects: ['physics'], activities: 'Snell, lentilles', duration: 45 },
      { day: 10, title: 'Stœchiométrie', subjects: ['chemistry'], activities: 'Moles, équilibrage', duration: 50 },
      { day: 11, title: 'Génétique', subjects: ['biology'], activities: 'Mendel, croisements', duration: 50 },
      { day: 12, title: 'Physiologie', subjects: ['biology'], activities: 'Nerf, immunité', duration: 45 },
      { day: 13, title: 'BAC Blanc complet', subjects: [], activities: 'Toutes matières', duration: 90 },
      { day: 14, title: 'Correction', subjects: [], activities: 'Analyse', duration: 45 },
    ],
  },
  {
    id: 'a-2sem',
    serie: 'A',
    title: '2 semaines choc Terminale A',
    description: 'Philo, Français, Histoire-Géo en accéléré.',
    duration: '14 jours',
    icon: '🧠',
    days: [
      { day: 1, title: 'Conscience & Liberté', subjects: ['philosophie'], activities: 'Fiches notions', duration: 45 },
      { day: 2, title: 'Devoir & Bonheur', subjects: ['philosophie'], activities: 'Kant, Aristote', duration: 50 },
      { day: 3, title: 'Dissertation', subjects: ['francais'], activities: 'Méthodo + 1 sujet', duration: 60 },
      { day: 4, title: 'Commentaire', subjects: ['francais'], activities: 'Analyse de texte', duration: 55 },
      { day: 5, title: 'Décolonisation', subjects: ['histoire'], activities: 'Chronologie, ex-Bénin', duration: 50 },
      { day: 6, title: 'Simulation écrites', subjects: ['philosophie', 'francais'], activities: '2 sujets', duration: 90 },
      { day: 7, title: 'Repos', subjects: [], activities: 'Lecture', duration: 30 },
      { day: 8, title: 'Mondialisation', subjects: ['geographie'], activities: 'Flux, acteurs', duration: 45 },
      { day: 9, title: 'Guerre froide', subjects: ['histoire'], activities: 'Crises, bipolarisation', duration: 50 },
      { day: 10, title: 'Anglais', subjects: ['anglais'], activities: 'Compréhension', duration: 40 },
      { day: 11, title: 'Révision philo', subjects: ['philosophie'], activities: 'Toutes notions', duration: 50 },
      { day: 12, title: 'Révision français', subjects: ['francais'], activities: 'Genres, registres', duration: 45 },
      { day: 13, title: 'BAC Blanc A', subjects: [], activities: 'Philo + Français', duration: 90 },
      { day: 14, title: 'Bilan', subjects: [], activities: 'Correction', duration: 40 },
    ],
  },
  {
    id: 'b-2sem',
    serie: 'B',
    title: '2 semaines choc Terminale B',
    description: 'Économie, Histoire-Géo, Français.',
    duration: '14 jours',
    icon: '📈',
    days: [
      { day: 1, title: 'Agents économiques', subjects: ['economie'], activities: 'Circuit économique', duration: 50 },
      { day: 2, title: 'Marchés & Prix', subjects: ['economie'], activities: 'Offre, demande', duration: 55 },
      { day: 3, title: 'Monnaie & Banques', subjects: ['economie'], activities: 'BCEAO', duration: 45 },
      { day: 4, title: 'Décolonisation', subjects: ['histoire-geo'], activities: 'Afrique, Bénin', duration: 50 },
      { day: 5, title: 'Mondialisation', subjects: ['histoire-geo'], activities: 'Flux, acteurs', duration: 50 },
      { day: 6, title: 'BAC Blanc Eco/HG', subjects: ['economie', 'histoire-geo'], activities: '30 questions', duration: 75 },
      { day: 7, title: 'Repos', subjects: [], activities: 'Fiches', duration: 25 },
      { day: 8, title: 'Dissertation éco', subjects: ['francais'], activities: 'Sujet économique', duration: 60 },
      { day: 9, title: 'Croissance', subjects: ['economie'], activities: 'PIB, IDH', duration: 45 },
      { day: 10, title: 'Commerce international', subjects: ['economie'], activities: 'Avantages comparatifs', duration: 50 },
      { day: 11, title: 'Anglais business', subjects: ['anglais'], activities: 'Reading', duration: 40 },
      { day: 12, title: 'Révision générale', subjects: [], activities: 'Points faibles', duration: 55 },
      { day: 13, title: 'BAC Blanc B', subjects: [], activities: 'Eco + HG + Fr', duration: 90 },
      { day: 14, title: 'Correction', subjects: [], activities: 'Analyse', duration: 40 },
    ],
  },
];

export function getGuidedPathsForTerminal(terminal: TerminalSerie | null): GuidedPath[] {
  if (!terminal) return [];
  return GUIDED_PATHS.filter((p) => p.serie === terminal);
}
