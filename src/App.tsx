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
import MockExam from '@/pages/MockExam';
import Planner from '@/pages/Planner';
import ProgressPage from '@/pages/Progress';
import GuidedPath from '@/pages/GuidedPath';
import Settings from '@/pages/Settings';

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
          <Route path={ROUTE_PATHS.MOCK_EXAM} element={<MockExam />} />
          <Route path={ROUTE_PATHS.PLANNER} element={<Planner />} />
          <Route path={ROUTE_PATHS.GUIDED_PATH} element={<GuidedPath />} />
          <Route path={ROUTE_PATHS.PROGRESS} element={<ProgressPage />} />
          <Route path={ROUTE_PATHS.SETTINGS} element={<Settings />} />
          
          {/* Specific learning pages */}
          <Route path={ROUTE_PATHS.LESSON} element={<Lesson />} />
          
          {/* Placeholders for secondary features */}
          <Route path={ROUTE_PATHS.FLASHCARDS} element={<div className="p-8 text-center">Fonctionnalité Flashcards à venir.</div>} />
          <Route path={ROUTE_PATHS.QUIZ} element={<div className="p-8 text-center">Fonctionnalité Quiz à venir.</div>} />
          <Route path={ROUTE_PATHS.ACHIEVEMENTS} element={<div className="p-8 text-center">Fonctionnalité Badges à venir.</div>} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to={ROUTE_PATHS.HOME} replace />} />
      </Routes>
    </Router>
  );
}
