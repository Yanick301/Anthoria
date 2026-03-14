import type { Subject, TerminalSerie } from '@/lib/index';
import { SUBJECTS } from './subjects';

/**
 * Mappe les IDs des matières vers les séries correspondantes au Bénin.
 */
const SERIES_MAPPING: Record<TerminalSerie, string[]> = {
  'A': [
    'philosophie',
    'histoire',
    'geographie',
    'francais',
    'anglais',
    'mathematiques',
    'education-civique'
  ],
  'B': [
    'philosophie',
    'histoire',
    'geographie',
    'economie',
    'francais',
    'anglais',
    'mathematiques',
    'biologie' // SVT
  ],
  'C': [
    'mathematiques',
    'physics', // If exists, or sciences-physiques
    'chemistry', // If exists, or chimie
    'biologie',
    'francais',
    'anglais',
    'philosophie'
  ],
  'EA': [
    'mobilisation-eau',
    'traitement-eau',
    'assainissement',
    'reseaux-hydrauliques',
    'projet-exploitation',
    'sciences-physiques',
    'mathematiques',
    'francais',
    'anglais'
  ]
};

export function getSubjectsForTerminal(terminal: TerminalSerie | null): Subject[] {
  if (!terminal) return SUBJECTS.filter(s => SERIES_MAPPING['EA'].includes(s.id));
  
  const subjectIds = SERIES_MAPPING[terminal] || SERIES_MAPPING['EA'];
  
  // On récupère les sujets complets depuis la base centrale
  return subjectIds
    .map(id => {
      // Mapping spécial pour les IDs qui diffèrent entre les séries et la base
      let searchId = id;
      if (id === 'physics') searchId = 'sciences-physiques';
      if (id === 'chemistry') searchId = 'chimie';
      
      return SUBJECTS.find(s => s.id === searchId);
    })
    .filter((s): s is Subject => s !== undefined);
}
