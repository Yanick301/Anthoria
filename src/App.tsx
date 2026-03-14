import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/lib/index';
import { Layout } from '@/components/Layout';
import { useAppStore } from '@/hooks/useAppStore';
import Onboarding from '@/pages/Onboarding';

// Pages
import Home from '@/pages/Home';
import Subjects from '@/pages/Subjects';
import SubjectDetail from '@/pages/SubjectDetail';
import Lesson from '@/pages/Lesson';
import Exercises from '@/pages/Exercises';
import ExercisePractice from '@/pages/ExercisePractice';
import Quiz from '@/pages/Quiz';
import MockExam from '@/pages/MockExam';
import MockExamSession from '@/pages/MockExamSession';
import Planner from '@/pages/Planner';
import ProgressPage from '@/pages/Progress';
import GuidedPath from '@/pages/GuidedPath';
import Settings from '@/pages/Settings';
import ChallengeMatch from '@/pages/ChallengeMatch';
import Flashcards from '@/pages/Flashcards';

export default function App() {
  const { updateStreak, onboardingDone } = useAppStore();

  useEffect(() => {
    // Check and update streak on mount
    updateStreak();
  }, [updateStreak]);

  // Tant que l'onboarding n'est pas terminé, on affiche l'écran d'accueil
  if (!onboardingDone) {
    return <Onboarding />;
  }

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTE_PATHS.HOME} element={<Home />} />
          <Route path={ROUTE_PATHS.SUBJECTS} element={<Subjects />} />
          <Route path={ROUTE_PATHS.SUBJECT_DETAIL} element={<SubjectDetail />} />
          <Route path={ROUTE_PATHS.EXERCISES} element={<Exercises />} />
          <Route path={ROUTE_PATHS.EXERCISE_PRACTICE} element={<ExercisePractice />} />
          <Route path={ROUTE_PATHS.MOCK_EXAM} element={<MockExam />} />
          <Route path={ROUTE_PATHS.MOCK_EXAM_SESSION} element={<MockExamSession />} />
          <Route path={ROUTE_PATHS.PLANNER} element={<Planner />} />
          <Route path={ROUTE_PATHS.GUIDED_PATH} element={<GuidedPath />} />
          <Route path={ROUTE_PATHS.PROGRESS} element={<ProgressPage />} />
          <Route path={ROUTE_PATHS.SETTINGS} element={<Settings />} />
          <Route path={ROUTE_PATHS.CHALLENGE_MATCH} element={<ChallengeMatch />} />
          
          {/* Specific learning pages */}
          <Route path={ROUTE_PATHS.LESSON} element={<Lesson />} />
          <Route path={ROUTE_PATHS.QUIZ} element={<Quiz />} />
          <Route path={ROUTE_PATHS.FLASHCARDS} element={<Flashcards />} />
          
          {/* Placeholders for secondary features */}
          <Route path={ROUTE_PATHS.ACHIEVEMENTS} element={<div className="p-8 text-center bg-accent/10 min-h-screen">Fonctionnalité Badges à venir.</div>} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to={ROUTE_PATHS.HOME} replace />} />
      </Routes>
    </Router>
  );
}
