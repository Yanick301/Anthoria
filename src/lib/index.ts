// ============================
// ROUTE PATHS
// ============================
export const ROUTE_PATHS = {
  HOME: '/',
  SUBJECTS: '/matieres',
  SUBJECT_DETAIL: '/matieres/:id',
  LESSON: '/matieres/:id/lecon/:chapterIndex?',
  FLASHCARDS: '/matieres/:id/flashcards',
  QUIZ: '/matieres/:id/quiz',
  EXERCISES: '/exercices',
  EXERCISE_PRACTICE: '/exercices/:subjectId/pratique',
  EXERCISE_DETAIL: '/exercices/:id',
  MOCK_EXAM: '/bac-blanc',
  MOCK_EXAM_SESSION: '/bac-blanc/session',
  PLANNER: '/planning',
  GUIDED_PATH: '/parcours',
  PROGRESS: '/progres',
  ACHIEVEMENTS: '/badges',
  SETTINGS: '/parametres',
  CHALLENGE_MATCH: '/challenge/:payload',
};

// ============================
// TYPES
// ============================

export type DifficultyLevel = 'Facile' | 'Moyen' | 'Difficile';
export type ExerciseType =
  | 'QCM'
  | 'Calcul'
  | 'Réponse courte'
  | 'Étude de cas'
  | 'Schéma'
  | 'Problème';

export interface Subject {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  totalExercises: number;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  examples: string[];
  keyPoints: string[];
}

export interface Flashcard {
  id: string;
  subjectId: string;
  question: string;
  answer: string;
}

export interface Exercise {
  id: string;
  subjectId: string;
  type: ExerciseType;
  difficulty: DifficultyLevel;
  question: string;
  choices?: string[];
  correctAnswer: string;
  explanation: string;
  methodology?: string; // Deep dive method
  deepDive?: string;    // Theoretical background
  points: number;
}

export interface MockExam {
  id: string;
  title: string;
  duration: number; // minutes
  exercises: Exercise[];
}

export interface UserProgress {
  subjectId: string;
  completedExercises: string[];
  scores: Record<string, number>;
  lastStudied: string;
  mastery: number; // 0-100
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
  unlocked: boolean;
  unlockedAt?: string;
  requirement: string;
}

export interface DayPlan {
  day: string;
  subjectIds: string[];
  activities: string[];
  exerciseCount: number;
}

export interface StudySession {
  date: string;
  duration: number;
  subjectId: string;
  exercisesCompleted: number;
  score: number;
}

export type TerminalSerie = 'A' | 'B' | 'C' | 'D' | 'EA';

export interface AppState {
  // Profil apprenant
  studentName: string;
  terminal: TerminalSerie | null;
  onboardingDone: boolean;

  // Suivi de progression
  progress: Record<string, UserProgress>;
  achievements: Achievement[];
  sessions: StudySession[];
  points: number;
  streak: number;
  lastStudyDate: string;
  completedExercises: Set<string>;
  mockExamResults: MockExamResult[];
  invitesSent: number;
  lastSeenVersion: string;

  // Préférences notifications
  notificationsEnabled: boolean;
  notificationTime: string;
}

export interface MockExamResult {
  id: string;
  date: string;
  score: number;
  total: number;
  timeSpent: number;
  answers: Record<string, string>;
}

// ============================
// CONTENUS PAR SÉRIE (réexport)
// ============================
export { getSubjectsForTerminal } from '@/data/subjects-by-series';

// ============================
// HELPER FUNCTIONS
// ============================

export function getSubjectColor(subjectId: string): string {
  const colors: Record<string, string> = {
    'mobilisation-eau': 'bg-blue-500',
    'traitement-eau': 'bg-cyan-500',
    'assainissement': 'bg-teal-500',
    'reseaux-hydrauliques': 'bg-sky-600',
    'projet-exploitation': 'bg-indigo-500',
    'sciences-physiques': 'bg-purple-500',
    'mathematiques': 'bg-orange-500',
    'francais': 'bg-rose-500',
    'anglais': 'bg-emerald-500',
    'philosophie': 'bg-violet-500',
    'histoire': 'bg-red-500',
    'geographie': 'bg-green-500',
    'biologie': 'bg-pink-500',
    'economie': 'bg-sky-500',
    'espagnol': 'bg-orange-600',
    'education-civique': 'bg-fuchsia-500',
  };
  return colors[subjectId] || 'bg-blue-500';
}

export function getDifficultyColor(difficulty: DifficultyLevel): string {
  const colors: Record<DifficultyLevel, string> = {
    'Facile': 'text-green-600 bg-green-100',
    'Moyen': 'text-orange-600 bg-orange-100',
    'Difficile': 'text-red-600 bg-red-100',
  };
  return colors[difficulty];
}

export function calculateMastery(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
}

// ============================
// GAMIFICATION HELPERS
// ============================

export function calculateLevel(points: number): number {
  // Level 1: 0-49 pts
  // Level 2: 50-199 pts
  // Formula: L = floor(sqrt(P/50)) + 1
  return Math.floor(Math.sqrt(points / 50)) + 1;
}

export function getXPForLevel(level: number): number {
  // Points required for level L
  return Math.pow(level - 1, 2) * 50;
}

export function getXPProgress(points: number): { current: number, next: number, percent: number } {
  const level = calculateLevel(points);
  const currentLevelXP = getXPForLevel(level);
  const nextLevelXP = getXPForLevel(level + 1);
  const xpInLevel = points - currentLevelXP;
  const totalNeededInLevel = nextLevelXP - currentLevelXP;
  
  return {
    current: xpInLevel,
    next: totalNeededInLevel,
    percent: Math.round((xpInLevel / totalNeededInLevel) * 100)
  };
}

export function getCurrentWeekPlan(terminal: TerminalSerie | null, weekIndex: number = 0): DayPlan[] {
  // Planning par défaut pour la série EA (réseau d'eau et assainissement)
  const eaPlans: DayPlan[][] = [
    [
      { day: 'Lundi', subjectIds: ['mobilisation-eau'], activities: ['Leçon: Cycle de l\'eau', 'Exercices pratiques'], exerciseCount: 10 },
      { day: 'Mardi', subjectIds: ['mobilisation-eau', 'sciences-physiques'], activities: ['Captage des eaux', 'Quiz rapide'], exerciseCount: 12 },
      { day: 'Mercredi', subjectIds: ['traitement-eau'], activities: ['Leçon: Coagulation-floculation', 'Calculs'], exerciseCount: 15 },
      { day: 'Jeudi', subjectIds: ['traitement-eau', 'mathematiques'], activities: ['Filtration et désinfection', 'Problèmes mathématiques'], exerciseCount: 12 },
      { day: 'Vendredi', subjectIds: ['assainissement'], activities: ['Introduction assainissement', 'Schémas'], exerciseCount: 10 },
      { day: 'Samedi', subjectIds: ['mobilisation-eau', 'traitement-eau'], activities: ['BAC Blanc – Semaine 1'], exerciseCount: 40 },
      { day: 'Dimanche', subjectIds: ['mobilisation-eau'], activities: ['Révision points faibles', 'Flashcards'], exerciseCount: 5 },
    ],
    [
      { day: 'Lundi', subjectIds: ['assainissement'], activities: ['Réseaux d\'égouts', 'Exercices de calcul'], exerciseCount: 12 },
      { day: 'Mardi', subjectIds: ['assainissement', 'reseaux-hydrauliques'], activities: ['Traitement des eaux usées', 'Dimensionnement'], exerciseCount: 15 },
      { day: 'Mercredi', subjectIds: ['reseaux-hydrauliques'], activities: ['Hydraulique en charge', 'Pertes de charge'], exerciseCount: 15 },
      { day: 'Jeudi', subjectIds: ['reseaux-hydrauliques', 'sciences-physiques'], activities: ['AEP et distribution', 'Physique appliquée'], exerciseCount: 12 },
      { day: 'Vendredi', subjectIds: ['projet-exploitation'], activities: ['Gestion d\'exploitation', 'Études de cas'], exerciseCount: 10 },
      { day: 'Samedi', subjectIds: ['assainissement', 'reseaux-hydrauliques'], activities: ['BAC Blanc – Semaine 2'], exerciseCount: 40 },
      { day: 'Dimanche', subjectIds: ['assainissement'], activities: ['Révision et flashcards'], exerciseCount: 5 },
    ],
    [
      { day: 'Lundi', subjectIds: ['sciences-physiques'], activities: ['Mécanique des fluides', 'Applications'], exerciseCount: 12 },
      { day: 'Mardi', subjectIds: ['sciences-physiques', 'mathematiques'], activities: ['Électricité appliquée', 'Calculs'], exerciseCount: 15 },
      { day: 'Mercredi', subjectIds: ['mathematiques'], activities: ['Fonctions et graphiques', 'Problèmes'], exerciseCount: 15 },
      { day: 'Jeudi', subjectIds: ['mathematiques', 'francais'], activities: ['Statistiques', 'Expression écrite'], exerciseCount: 12 },
      { day: 'Vendredi', subjectIds: ['francais', 'anglais'], activities: ['Rédaction technique', 'Vocabulaire eau'], exerciseCount: 10 },
      { day: 'Samedi', subjectIds: ['sciences-physiques', 'mathematiques'], activities: ['BAC Blanc – Semaine 3'], exerciseCount: 40 },
      { day: 'Dimanche', subjectIds: ['mathematiques'], activities: ['Révision mathématiques'], exerciseCount: 5 },
    ],
    [
      { day: 'Lundi', subjectIds: ['mobilisation-eau', 'traitement-eau'], activities: ['Révision générale Eau', 'QCM'], exerciseCount: 15 },
      { day: 'Mardi', subjectIds: ['assainissement', 'reseaux-hydrauliques'], activities: ['Révision Assainissement & Réseaux'], exerciseCount: 15 },
      { day: 'Mercredi', subjectIds: ['projet-exploitation'], activities: ['Projets & Exploitation complète'], exerciseCount: 12 },
      { day: 'Jeudi', subjectIds: ['sciences-physiques', 'mathematiques'], activities: ['Révision Sciences & Maths'], exerciseCount: 12 },
      { day: 'Vendredi', subjectIds: ['francais', 'anglais'], activities: ['Révision Français & Anglais'], exerciseCount: 8 },
      { day: 'Samedi', subjectIds: ['mobilisation-eau', 'traitement-eau', 'assainissement'], activities: ['BAC Blanc Complet – Semaine 4'], exerciseCount: 40 },
      { day: 'Dimanche', subjectIds: [], activities: ['Repos et relaxation 🎉'], exerciseCount: 0 },
    ],
  ];

  // Planning adapté pour Terminale B (matières économiques)
  const bPlans: DayPlan[][] = [
    [
      { day: 'Lundi', subjectIds: ['economie'], activities: ['Notions de base : agents économiques', 'QCM & schémas'], exerciseCount: 12 },
      { day: 'Mardi', subjectIds: ['economie'], activities: ['Marchés & prix', 'Exercices graphiques'], exerciseCount: 12 },
      { day: 'Mercredi', subjectIds: ['histoire-geo'], activities: ['Relations internationales', 'Étude de documents'], exerciseCount: 10 },
      { day: 'Jeudi', subjectIds: ['francais'], activities: ['Dissertation économique', 'Méthodologie'], exerciseCount: 8 },
      { day: 'Vendredi', subjectIds: ['anglais'], activities: ['Business English', 'Reading & vocabulary'], exerciseCount: 8 },
      { day: 'Samedi', subjectIds: ['economie', 'histoire-geo'], activities: ['BAC Blanc Eco / HG'], exerciseCount: 30 },
      { day: 'Dimanche', subjectIds: [], activities: ['Révision libre & fiches'], exerciseCount: 5 },
    ],
  ];

  // Planning adapté pour Terminale A (littéraire / sciences humaines)
  const aPlans: DayPlan[][] = [
    [
      { day: 'Lundi', subjectIds: ['philosophie'], activities: ['Cours de philo (conscience / liberté)', 'Fiches notions'], exerciseCount: 8 },
      { day: 'Mardi', subjectIds: ['francais'], activities: ['Dissertation / commentaire', 'Analyse de texte'], exerciseCount: 10 },
      { day: 'Mercredi', subjectIds: ['histoire'], activities: ['Thème du programme', 'QCM & cartes'], exerciseCount: 10 },
      { day: 'Jeudi', subjectIds: ['geographie'], activities: ['Croquis & schémas', 'Étude de cas'], exerciseCount: 8 },
      { day: 'Vendredi', subjectIds: ['anglais'], activities: ['Compréhension écrite', 'Expression écrite'], exerciseCount: 8 },
      { day: 'Samedi', subjectIds: ['philosophie', 'francais'], activities: ['Simulations d’épreuves écrites'], exerciseCount: 25 },
      { day: 'Dimanche', subjectIds: [], activities: ['Lecture, révision douce'], exerciseCount: 4 },
    ],
  ];

  // Planning adapté pour Terminale C (scientifique)
  const cPlans: DayPlan[][] = [
    [
      { day: 'Lundi', subjectIds: ['mathematiques'], activities: ['Analyse : limites & dérivées', 'Exercices type Bac'], exerciseCount: 14 },
      { day: 'Mardi', subjectIds: ['sciences-physiques'], activities: ['Mécanique / électricité', 'Problèmes corrigés'], exerciseCount: 12 },
      { day: 'Mercredi', subjectIds: ['chimie'], activities: ['Acides / bases, oxydoréduction', 'Exercices de calcul'], exerciseCount: 12 },
      { day: 'Jeudi', subjectIds: ['biologie'], activities: ['Génétique / physiologie', 'Schémas & QCM'], exerciseCount: 10 },
      { day: 'Vendredi', subjectIds: ['francais', 'anglais'], activities: ['Expression écrite', 'Compréhension'], exerciseCount: 8 },
      { day: 'Samedi', subjectIds: ['mathematiques', 'sciences-physiques'], activities: ['BAC Blanc scientifique complet'], exerciseCount: 35 },
      { day: 'Dimanche', subjectIds: [], activities: ['Révision ciblée des points faibles'], exerciseCount: 5 },
    ],
  ];

  // Planning adapté pour Terminale D (scientifique - SVT)
  const dPlans: DayPlan[][] = [
    [
      { day: 'Lundi', subjectIds: ['biologie'], activities: ['Génétique : brassages & méiose', 'Schémas de synthèse'], exerciseCount: 14 },
      { day: 'Mardi', subjectIds: ['sciences-physiques'], activities: ['PCT : Mécanique Newtonienne', 'Exercices pratiques'], exerciseCount: 12 },
      { day: 'Mercredi', subjectIds: ['mathematiques'], activities: ['Suites numériques & probabilités', 'Calculs'], exerciseCount: 12 },
      { day: 'Jeudi', subjectIds: ['chimie'], activities: ['Acides/Bases & Saponification', 'TP théoriques'], exerciseCount: 12 },
      { day: 'Vendredi', subjectIds: ['philosophie', 'histoire'], activities: ['Philosophie & Histoire-Géo', 'Rédaction'], exerciseCount: 10 },
      { day: 'Samedi', subjectIds: ['biologie', 'sciences-physiques'], activities: ['BAC Blanc Série D - SVT/PCT'], exerciseCount: 35 },
      { day: 'Dimanche', subjectIds: [], activities: ['Repos ou révision légère SVT'], exerciseCount: 5 },
    ],
  ];

  const plans =
    terminal === 'EA'
      ? eaPlans
      : terminal === 'B'
      ? bPlans
      : terminal === 'A'
      ? aPlans
      : terminal === 'C'
      ? cPlans
      : eaPlans;

  return plans[weekIndex % plans.length];
}
