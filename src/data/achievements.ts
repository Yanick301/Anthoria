import { Achievement } from '@/lib/index';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'badge-001',
    title: 'Maître de l\'Eau',
    description: 'Complétez 100% du module Mobilisation des Ressources.',
    icon: '💧',
    points: 100,
    unlocked: false,
    requirement: 'subject:mobilisation-eau:100'
  },
  {
    id: 'badge-002',
    title: 'Expert en Assainissement',
    description: 'Réalisez 50 exercices sans erreur dans le module Assainissement.',
    icon: '🏗️',
    points: 150,
    unlocked: false,
    requirement: 'subject:assainissement:50:streak'
  },
  {
    id: 'badge-003',
    title: 'Prêt pour le BAC',
    description: 'Obtenez un score supérieur à 16/20 lors d\'un BAC Blanc.',
    icon: '🎓',
    points: 200,
    unlocked: false,
    requirement: 'mock-exam:16'
  },
  {
    id: 'badge-004',
    title: 'Génie Hydraulique',
    description: 'Résolvez 20 problèmes de calcul complexe.',
    icon: '🔧',
    points: 120,
    unlocked: false,
    requirement: 'type:Calcul:20'
  },
  {
    id: 'badge-005',
    title: 'Étudiant Assidu',
    description: 'Connectez-vous 7 jours consécutifs.',
    icon: '🔥',
    points: 50,
    unlocked: false,
    requirement: 'streak:7'
  },
  {
    id: 'badge-006',
    title: 'Polyglotte Technique',
    description: 'Complétez les modules de Français et Anglais.',
    icon: '🌍',
    points: 80,
    unlocked: false,
    requirement: 'subject:francais:100,subject:anglais:100'
  }
];
