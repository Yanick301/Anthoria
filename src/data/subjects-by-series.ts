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
  ],
  'B': [
    'philosophie',
    'histoire',
    'geographie',
    'economie',
    'francais',
    'anglais',
    'mathematiques',
    'biologie',
  ],
  'C': [
    'mathematiques',
    'sciences-physiques',
    'chimie',
    'biologie',
    'francais',
    'anglais',
    'philosophie',
  ],
  'D': [
    'mathematiques',
    'sciences-physiques',
    'chimie',
    'biologie',
    'francais',
    'anglais',
    'philosophie',
    'histoire',
    'geographie',
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
    'anglais',
  ],
};

export function getSubjectsForTerminal(terminal: TerminalSerie | null): Subject[] {
  if (!terminal) return SUBJECTS.filter(s => SERIES_MAPPING['EA'].includes(s.id));

  const subjectIds = SERIES_MAPPING[terminal] || SERIES_MAPPING['EA'];

  return subjectIds
    .map(id => SUBJECTS.find(s => s.id === id))
    .filter((s): s is Subject => s !== undefined);
}
