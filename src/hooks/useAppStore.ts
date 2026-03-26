import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState, StudySession, MockExamResult, Achievement, TerminalSerie, UserProgress } from '@/lib/index';
import { getAchievementsForTerminal } from '@/data/achievements-by-series';
import { SUBJECTS } from '@/data/subjects';
import { EXERCISES } from '@/data/exercises';

interface AppActions {
  setProfile: (name: string, terminal: TerminalSerie) => void;
  setStudentName: (name: string) => void;
  setTerminal: (terminal: TerminalSerie) => void;
  completeExercise: (subjectId: string, exerciseId: string, isCorrect: boolean, points: number) => void;
  addSession: (session: StudySession) => void;
  addMockResult: (result: MockExamResult) => void;
  updatePoints: (points: number) => void;
  updateStreak: (date?: string) => void;
  checkAchievements: () => void;
  resetProgress: () => void;
  resetAll: () => void;
  incrementInvites: () => void;
  setLastSeenVersion: (version: string) => void;
  setNotificationPrefs: (enabled: boolean, time: string) => void;
}

export const useAppStore = create<AppState & AppActions>()(
  persist(
    (set, get) => ({
      studentName: '',
      terminal: null as TerminalSerie | null,
      onboardingDone: false,
      progress: {} as Record<string, UserProgress>,
      achievements: [] as Achievement[],
      sessions: [] as StudySession[],
      points: 0,
      streak: 0,
      lastStudyDate: '',
      completedExercises: new Set<string>(),
      mockExamResults: [] as MockExamResult[],
      invitesSent: 0,
      lastSeenVersion: '1.0.0',
      notificationsEnabled: false,
      notificationTime: '18:00',

      setProfile: (name, terminal) => {
        set(() => ({
          studentName: name.trim(),
          terminal,
          onboardingDone: true,
          progress: {} as Record<string, UserProgress>,
          sessions: [],
          points: 0,
          streak: 0,
          lastStudyDate: '',
          completedExercises: new Set<string>(),
          mockExamResults: [],
          achievements: getAchievementsForTerminal(terminal),
          invitesSent: 0,
          lastSeenVersion: '1.0.0',
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

      completeExercise: (subjectId, exerciseId, isCorrect, points) => {
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
            const newScores = { ...currentProgress.scores, [exerciseId]: isCorrect ? 100 : 0 };
            const newCompletedSet = new Set(state.completedExercises).add(exerciseId);
            // Calcul dynamique: on base la masterie sur le vrai nombre d'exercices de la matière
            const subject = SUBJECTS.find(s => s.id === subjectId);
            const total = subject?.totalExercises || 50;
            
            return {
              progress: {
                ...state.progress,
                [subjectId]: {
                  ...currentProgress,
                  completedExercises: newCompleted,
                  scores: newScores,
                  lastStudied: new Date().toISOString(),
                  mastery: Math.min(100, Math.round((newCompleted.length / total) * 100)),
                },
              },
              completedExercises: newCompletedSet,
              points: state.points + (isCorrect ? points : 0),
            };
          }
          return state;
        });
        get().checkAchievements();
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
        get().checkAchievements();
      },

      updatePoints: (pts) => set((state) => ({ points: state.points + pts })),

      updateStreak: () => {
        const state = get();
        const today = new Date().toISOString().split('T')[0];
        const lastDate = state.lastStudyDate;
        
        if (lastDate === today) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        set((s) => ({
          streak: lastDate === yesterdayStr ? s.streak + 1 : 1,
          lastStudyDate: today,
        }));
        
        // Use a timeout or next tick to check achievements to avoid recursive state updates
        setTimeout(() => get().checkAchievements(), 0);
      },
 
      checkAchievements: () => {
        const state = get();
        const newAchievements = state.achievements.map(achievement => {
          if (achievement.unlocked) return achievement;

          const requirements = achievement.requirement.split(',');
          const isMet = requirements.every(req => {
            const [type, value, threshold] = req.split(':');
            
            switch (type) {
              case 'streak':
                return state.streak >= parseInt(value);
              case 'mock-exam':
                return state.mockExamResults.some(r => (r.score / r.total * 20) >= parseInt(value));
              case 'exercises':
                return state.completedExercises.size >= parseInt(value);
              case 'subject':
                return (state.progress[value]?.mastery || 0) >= parseInt(threshold);
              case 'type':
                // Check count of specific exercise types completed
                const typeCount = Object.values(state.progress).reduce((acc, p) => {
                  return acc + p.completedExercises.filter(id => {
                    const ex = EXERCISES.find(e => e.id === id);
                    return ex?.type === value;
                  }).length;
                }, 0);
                return typeCount >= parseInt(threshold);
              default:
                return false;
            }
          });

          if (isMet) {
            return { ...achievement, unlocked: true, unlockedAt: new Date().toISOString() };
          }
          return achievement;
        });

        if (JSON.stringify(newAchievements) !== JSON.stringify(state.achievements)) {
          set({ achievements: newAchievements });
        }
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
        invitesSent: 0,
        lastSeenVersion: '1.0.0',
      }),

      incrementInvites: () => set((state) => ({ invitesSent: (state.invitesSent || 0) + 1 })),

      setLastSeenVersion: (version) => set({ lastSeenVersion: version }),

      setNotificationPrefs: (enabled, time) => set({ 
        notificationsEnabled: enabled, 
        notificationTime: time 
      }),
    }),
    {
      name: 'bac-ea-storage',
      // Convert Set to Array for persistence and include ALL state fields
      partialize: (state) => ({
        studentName: state.studentName,
        terminal: state.terminal,
        onboardingDone: state.onboardingDone,
        progress: state.progress,
        points: state.points,
        streak: state.streak,
        lastStudyDate: state.lastStudyDate,
        completedExercises: Array.from(state.completedExercises),
        sessions: state.sessions,
        achievements: state.achievements,
        mockExamResults: state.mockExamResults,
        invitesSent: state.invitesSent,
        lastSeenVersion: state.lastSeenVersion,
        notificationsEnabled: state.notificationsEnabled,
        notificationTime: state.notificationTime,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Re-convert back to Set
          state.completedExercises = new Set(state.completedExercises as unknown as string[]);
          if (state.terminal && (!state.achievements || state.achievements.length === 0)) {
            state.achievements = getAchievementsForTerminal(state.terminal);
          }
        }
      },
    }
  )
);
