import type { Subject, TerminalSerie } from '@/lib/index';
import { SUBJECTS as EA_SUBJECTS } from './subjects';

// Terminale A - Littéraire
const SUBJECTS_A: Omit<Subject, 'chapters'>[] = [
  { id: 'philosophie', name: 'Philosophie', shortName: 'Philo', icon: '🧠', color: '#A78BFA', gradient: 'from-violet-600 to-violet-400', description: 'Liberté, Justice, Vérité, Conscience', totalExercises: 120, chapters: [] },
  { id: 'histoire', name: 'Histoire', shortName: 'Hist.', icon: '📜', color: '#F87171', gradient: 'from-red-600 to-red-400', description: 'Colonisation, Décolonisation, Guerre Froide', totalExercises: 100, chapters: [] },
  { id: 'geographie', name: 'Géographie', shortName: 'Géo', icon: '🌍', color: '#34D399', gradient: 'from-emerald-600 to-emerald-400', description: 'Population, Urbanisation, Mondialisation', totalExercises: 100, chapters: [] },
  { id: 'francais', name: 'Français', shortName: 'Fr.', icon: '📝', color: '#60A5FA', gradient: 'from-blue-600 to-blue-400', description: 'Littérature, Dissertation, Commentaire', totalExercises: 80, chapters: [] },
  { id: 'anglais', name: 'Anglais', shortName: 'Angl.', icon: '🇬🇧', color: '#FBBF24', gradient: 'from-amber-600 to-amber-400', description: 'Compréhension, Expression écrite', totalExercises: 50, chapters: [] },
  { id: 'espagnol', name: 'Espagnol', shortName: 'Esp.', icon: '🇪🇸', color: '#FB923C', gradient: 'from-orange-600 to-orange-400', description: 'Grammaire, Vocabulaire', totalExercises: 20, chapters: [] },
  { id: 'mathematiques', name: 'Mathématiques', shortName: 'Maths', icon: '📐', color: '#2DD4BF', gradient: 'from-teal-600 to-teal-400', description: 'Algèbre, Statistiques', totalExercises: 20, chapters: [] },
  { id: 'education-civique', name: 'Éducation Civique', shortName: 'Éduc.', icon: '⚖️', color: '#F472B6', gradient: 'from-pink-600 to-pink-400', description: 'Droits, Démocratie', totalExercises: 10, chapters: [] },
];

// Terminale B - Économie
const SUBJECTS_B: Omit<Subject, 'chapters'>[] = [
  { id: 'philosophie', name: 'Philosophie', shortName: 'Philo', icon: '🧠', color: '#A78BFA', gradient: 'from-violet-600 to-violet-400', description: 'Réflexion critique', totalExercises: 130, chapters: [] },
  { id: 'histoire-geo', name: 'Histoire-Géographie', shortName: 'HG', icon: '🌍', color: '#34D399', gradient: 'from-emerald-600 to-emerald-400', description: 'Monde passé et présent', totalExercises: 150, chapters: [] },
  { id: 'economie', name: 'Économie', shortName: 'Éco', icon: '📈', color: '#0EA5E9', gradient: 'from-sky-600 to-sky-400', description: 'Marchés, Prix, Croissance', totalExercises: 120, chapters: [] },
  { id: 'francais', name: 'Français', shortName: 'Fr.', icon: '📝', color: '#60A5FA', gradient: 'from-blue-600 to-blue-400', description: 'Dissertation, Commentaire', totalExercises: 100, chapters: [] },
  { id: 'anglais', name: 'Anglais', shortName: 'Angl.', icon: '🇬🇧', color: '#FBBF24', gradient: 'from-amber-600 to-amber-400', description: 'Business English', totalExercises: 80, chapters: [] },
];

// Terminale C - Scientifique
const SUBJECTS_C: Omit<Subject, 'chapters'>[] = [
  { id: 'math', name: 'Mathématiques', shortName: 'Maths', icon: '📐', color: '#3B82F6', gradient: 'from-blue-600 to-blue-400', description: 'Analyse, Intégration, Probabilités', totalExercises: 80, chapters: [] },
  { id: 'physics', name: 'Sciences Physiques', shortName: 'Phys.', icon: '⚡', color: '#8B5CF6', gradient: 'from-violet-600 to-violet-400', description: 'Mécanique, Électricité, Optique', totalExercises: 60, chapters: [] },
  { id: 'chemistry', name: 'Chimie', shortName: 'Chimie', icon: '🧪', color: '#10B981', gradient: 'from-emerald-600 to-emerald-400', description: 'Acides-Bases, Stœchiométrie', totalExercises: 50, chapters: [] },
  { id: 'biology', name: 'Sciences de la Vie', shortName: 'SVT', icon: '🧬', color: '#EC4899', gradient: 'from-pink-600 to-pink-400', description: 'Génétique, Physiologie', totalExercises: 45, chapters: [] },
  { id: 'french', name: 'Français', shortName: 'Fr.', icon: '📝', color: '#60A5FA', gradient: 'from-blue-600 to-blue-400', description: 'Expression, Analyse', totalExercises: 25, chapters: [] },
  { id: 'english', name: 'Anglais', shortName: 'Angl.', icon: '🇬🇧', color: '#FBBF24', gradient: 'from-amber-600 to-amber-400', description: 'Compréhension', totalExercises: 20, chapters: [] },
  { id: 'philosophy', name: 'Philosophie', shortName: 'Philo', icon: '🧠', color: '#A78BFA', gradient: 'from-violet-600 to-violet-400', description: 'Raisonnement philosophique', totalExercises: 30, chapters: [] },
];

export function getSubjectsForTerminal(terminal: TerminalSerie | null): Subject[] {
  if (!terminal || terminal === 'EA') return EA_SUBJECTS;
  if (terminal === 'A') return SUBJECTS_A as Subject[];
  if (terminal === 'B') return SUBJECTS_B as Subject[];
  return SUBJECTS_C as Subject[];
}
