import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState, StudySession, MockExamResult, Achievement, TerminalSerie } from '@/lib/index';
import { getAchievementsForTerminal } from '@/data/achievements-by-series';

interface AppActions {
  setProfile: (name: string, terminal: TerminalSerie) => void;
  setStudentName: (name: string) => void;
  setTerminal: (terminal: TerminalSerie) => void;
  completeExercise: (subjectId: string, exerciseId: string, score: number) => void;
  addSession: (session: StudySession) => void;
  addMockResult: (result: MockExamResult) => void;
  updatePoints: (points: number) => void;
  updateStreak: () => void;
  resetProgress: () => void;
  resetAll: () => void;
}

export const useAppStore = create<AppState & AppActions>()(
  persist(
    (set, get) => ({
      studentName: '',
      terminal: null,
      onboardingDone: false,
      progress: {},
      achievements: [] as Achievement[],
      sessions: [] as StudySession[],
      points: 0,
      streak: 0,
      lastStudyDate: '',
      completedExercises: new Set<string>(),
      mockExamResults: [] as MockExamResult[],

      setProfile: (name, terminal) => {
        set(() => ({
          studentName: name.trim(),
          terminal,
          onboardingDone: true,
          progress: {},
          sessions: [],
          points: 0,
          streak: 0,
          lastStudyDate: '',
          completedExercises: new Set(),
          mockExamResults: [],
          achievements: getAchievementsForTerminal(terminal),
        }));
      },

      setStudentName: (name) => set({ studentName: name.trim() }),

      setTerminal: (terminal) => set((state) => ({
        terminal,
        progress: {},
        sessions: [],
        points: 0,
        streak: 0,
        lastStudyDate: '',
        completedExercises: new Set(),
        mockExamResults: [],
        achievements: getAchievementsForTerminal(terminal),
      })),

      completeExercise: (subjectId, exerciseId, score) => {
        set((state) => {
          const currentProgress = state.progress[subjectId] || {
            subjectId,
            completedExercises: [],
            scores: {},
            lastStudied: new Date().toISOString(),
            mastery: 0,
          };

          if (!currentProgress.completedExercises.includes(exerciseId)) {
            const newCompleted = [...currentProgress.completedExercises, exerciseId];
            const newScores = { ...currentProgress.scores, [exerciseId]: score };
            const newCompletedSet = new Set(state.completedExercises).add(exerciseId);
            
            return {
              progress: {
                ...state.progress,
                [subjectId]: {
                  ...currentProgress,
                  completedExercises: newCompleted,
                  scores: newScores,
                  lastStudied: new Date().toISOString(),
                  mastery: Math.min(100, Math.round((newCompleted.length / 50) * 100)), // Based on average total
                },
              },
              completedExercises: newCompletedSet,
              points: state.points + (score > 80 ? 10 : 5),
            };
          }
          return state;
        });
      },

      addSession: (session) => {
        set((state) => ({
          sessions: [...state.sessions, session],
        }));
      },

      addMockResult: (result) => {
        set((state) => ({
          mockExamResults: [...state.mockExamResults, result],
          points: state.points + (result.score / result.total > 0.8 ? 50 : 20),
        }));
      },

      updatePoints: (pts) => set((state) => ({ points: state.points + pts })),

      updateStreak: () => {
        const today = new Date().toISOString().split('T')[0];
        const lastDate = get().lastStudyDate;
        
        if (lastDate === today) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        set((state) => ({
          streak: lastDate === yesterdayStr ? state.streak + 1 : 1,
          lastStudyDate: today,
        }));
      },

      resetProgress: () => set((state) => ({
        progress: {},
        sessions: [],
        points: 0,
        streak: 0,
        lastStudyDate: '',
        completedExercises: new Set(),
        mockExamResults: [],
        achievements: getAchievementsForTerminal(state.terminal),
      })),

      resetAll: () => set({
        studentName: '',
        terminal: null,
        onboardingDone: false,
        progress: {},
        sessions: [],
        points: 0,
        streak: 0,
        lastStudyDate: '',
        completedExercises: new Set(),
        mockExamResults: [],
        achievements: [],
      }),
    }),
    {
      name: 'bac-ea-storage',
      // Convert Set to Array for persistence (Set -> Array)
      partialize: (state) => ({
        ...state,
        completedExercises: Array.from(state.completedExercises),
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.completedExercises = new Set(state.completedExercises as unknown as string[]);
          if (state.terminal && (!state.achievements || state.achievements.length === 0)) {
            state.achievements = getAchievementsForTerminal(state.terminal);
          }
        }
      },
    }
  )
);
