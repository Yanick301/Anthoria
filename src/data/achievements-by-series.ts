import type { Achievement, TerminalSerie } from '@/lib/index';

const BASE_BADGES: Omit<Achievement, 'unlocked' | 'unlockedAt'>[] = [
  { id: 'streak-7', title: 'Étudiant Assidu', description: '7 jours consécutifs de révision.', icon: '🔥', points: 50, requirement: 'streak:7' },
  { id: 'streak-14', title: 'Régularité Bronze', description: '14 jours consécutifs.', icon: '🥉', points: 80, requirement: 'streak:14' },
  { id: 'streak-30', title: 'Régularité Or', description: '30 jours consécutifs.', icon: '🥇', points: 150, requirement: 'streak:30' },
  { id: 'mock-16', title: 'Prêt pour le BAC', description: 'Score ≥ 16/20 à un BAC Blanc.', icon: '🎓', points: 200, requirement: 'mock-exam:16' },
  { id: 'first-exercise', title: 'Premier Pas', description: 'Complétez votre premier exercice.', icon: '👣', points: 10, requirement: 'exercises:1' },
  { id: 'exercises-50', title: 'Pratiquant', description: '50 exercices complétés.', icon: '📚', points: 60, requirement: 'exercises:50' },
  { id: 'exercises-100', title: 'Expert', description: '100 exercices complétés.', icon: '🏆', points: 120, requirement: 'exercises:100' },
];

const BADGES_BY_SERIE: Record<TerminalSerie, Omit<Achievement, 'unlocked' | 'unlockedAt'>[]> = {
  EA: [
    ...BASE_BADGES,
    { id: 'ea-eau', title: 'Maître de l\'Eau', description: '100% du module Mobilisation des Ressources.', icon: '💧', points: 100, requirement: 'subject:mobilisation-eau:100' },
    { id: 'ea-assainissement', title: 'Expert Assainissement', description: '50 exercices en Assainissement.', icon: '🏗️', points: 150, requirement: 'subject:assainissement:50' },
    { id: 'ea-hydraulique', title: 'Génie Hydraulique', description: '20 problèmes de calcul complexe.', icon: '🔧', points: 120, requirement: 'type:Calcul:20' },
  ],
  A: [
    ...BASE_BADGES,
    { id: 'a-philo', title: 'Philosophe en Herbe', description: '100% de Philosophie.', icon: '🧠', points: 100, requirement: 'subject:philosophie:100' },
    { id: 'a-dissertation', title: 'Maître de la Dissertation', description: '20 dissertations réussies.', icon: '📝', points: 120, requirement: 'type:dissertation:20' },
    { id: 'a-litterature', title: 'Amateur de Littérature', description: 'Français et Philosophie maîtrisés.', icon: '📖', points: 100, requirement: 'subject:francais:80,subject:philosophie:80' },
  ],
  B: [
    ...BASE_BADGES,
    { id: 'b-eco', title: 'Économiste', description: '100% d\'Économie.', icon: '📈', points: 100, requirement: 'subject:economie:100' },
    { id: 'b-circuit', title: 'Circuit Économique', description: 'Maîtrise du circuit économique.', icon: '🔄', points: 80, requirement: 'subject:economie:70' },
    { id: 'b-hg', title: 'Historien-Géographe', description: 'Histoire-Géo complétée.', icon: '🌍', points: 100, requirement: 'subject:histoire:80,subject:geographie:80' },
  ],
  C: [
    ...BASE_BADGES,
    { id: 'c-maths', title: 'Mathématicien', description: '100% de Mathématiques.', icon: '📐', points: 120, requirement: 'subject:mathematiques:100' },
    { id: 'c-sciences', title: 'Scientifique', description: 'Physique, Chimie et SVT à 80%.', icon: '⚗️', points: 150, requirement: 'subject:sciences-physiques:80,subject:chimie:80,subject:biologie:80' },
    { id: 'c-derivee', title: 'Maître des Dérivées', description: '20 exercices de calcul réussi.', icon: '∫', points: 80, requirement: 'type:Calcul:20' },
  ],
  D: [
    ...BASE_BADGES,
    { id: 'd-svt', title: 'Expert en Biologie', description: '100% de SVT.', icon: '🧬', points: 120, requirement: 'subject:biologie:100' },
    { id: 'd-pct', title: 'As de la PCT', description: 'Physique-Chimie à 80%.', icon: '🧪', points: 150, requirement: 'subject:sciences-physiques:80,subject:chimie:80' },
    { id: 'd-labo', title: 'Génie du Labo', description: '20 exercices de schémas terminés.', icon: '🔬', points: 80, requirement: 'type:Schéma:20' },
  ],
};

export function getAchievementsForTerminal(terminal: TerminalSerie | null): Achievement[] {
  const serie = terminal || 'EA';
  return BADGES_BY_SERIE[serie].map((b) => ({
    ...b,
    unlocked: false,
  }));
}
