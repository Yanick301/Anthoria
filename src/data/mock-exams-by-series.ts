import type { MockExam, TerminalSerie } from '@/lib/index';
import { EXERCISES } from './exercises';

function buildMockExam(
  id: string,
  title: string,
  duration: number,
  subjectIds: string[],
  count: number
): MockExam {
  const filtered = EXERCISES.filter((e) => subjectIds.includes(e.subjectId));
  const exercises = filtered.length >= count
    ? filtered.slice(0, count)
    : [...filtered, ...EXERCISES.filter((e) => !subjectIds.includes(e.subjectId))].slice(0, count);
  return { id, title, duration, exercises };
}

const MOCK_EXAMS_EA: MockExam[] = [
  buildMockExam('ea-full', 'BAC Blanc EA Complet', 90, ['mobilisation-eau', 'traitement-eau', 'assainissement', 'reseaux-hydrauliques', 'sciences-physiques', 'mathematiques'], 40),
  buildMockExam('ea-eau', 'BAC Blanc Eau & Assainissement', 60, ['mobilisation-eau', 'traitement-eau', 'assainissement'], 25),
];

const MOCK_EXAMS_A: MockExam[] = [
  buildMockExam('a-full', 'BAC Blanc Terminale A', 90, ['philosophie', 'histoire', 'geographie', 'francais', 'anglais'], 35),
  buildMockExam('a-philo-fr', 'Philo + Français', 60, ['philosophie', 'francais'], 20),
];

const MOCK_EXAMS_B: MockExam[] = [
  buildMockExam('b-full', 'BAC Blanc Terminale B', 90, ['economie', 'histoire-geo', 'francais', 'anglais'], 35),
  buildMockExam('b-eco-hg', 'Économie + Histoire-Géo', 60, ['economie', 'histoire-geo'], 25),
];

const MOCK_EXAMS_C: MockExam[] = [
  buildMockExam('c-full', 'BAC Blanc Terminale C', 90, ['math', 'physics', 'chemistry', 'biology', 'french', 'english'], 35),
  buildMockExam('c-sciences', 'Maths + Physique + Chimie', 75, ['math', 'physics', 'chemistry'], 30),
];

export function getMockExamsForTerminal(terminal: TerminalSerie | null): MockExam[] {
  if (!terminal || terminal === 'EA') return MOCK_EXAMS_EA;
  if (terminal === 'A') return MOCK_EXAMS_A;
  if (terminal === 'B') return MOCK_EXAMS_B;
  return MOCK_EXAMS_C;
}
