import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, BookOpen, PenTool, Award, TrendingUp, Settings, Map } from 'lucide-react';
import { ROUTE_PATHS } from '@/lib/index';
import { motion } from 'framer-motion';
import { useAppStore } from '@/hooks/useAppStore';

export function Layout() {
  const { studentName, terminal, points, streak } = useAppStore();

  const serieLabel = terminal ? `Terminale ${terminal}` : 'Terminale';
  const shortName = studentName || 'Apprenant';

  const navItems = [
    { icon: Home, label: 'Accueil', path: ROUTE_PATHS.HOME },
    { icon: BookOpen, label: 'Matières', path: ROUTE_PATHS.SUBJECTS },
    { icon: PenTool, label: 'Exercices', path: ROUTE_PATHS.EXERCISES },
    { icon: Map, label: 'Parcours', path: ROUTE_PATHS.GUIDED_PATH },
    { icon: Award, label: 'BAC Blanc', path: ROUTE_PATHS.MOCK_EXAM },
    { icon: TrendingUp, label: 'Progrès', path: ROUTE_PATHS.PROGRESS },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground max-w-md mx-auto relative shadow-2xl border-x">
      {/* Header (Top Nav) */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-black text-primary-foreground shadow-md">
              {terminal ?? 'EA'}
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Althoria • {serieLabel}
              </span>
              <p className="text-sm font-bold leading-tight">
                Bonjour, <span className="text-primary">{shortName}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end text-[10px] leading-tight">
              <span className="text-muted-foreground text-[10px]">Points</span>
              <span className="font-semibold text-foreground">{points}</span>
              <span className="text-[10px] text-primary">🔥 {streak} j</span>
            </div>
            <NavLink to={ROUTE_PATHS.SETTINGS}>
              <Settings className="h-5 w-5 text-muted-foreground" />
            </NavLink>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-20 overflow-y-auto">
        <Outlet />
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 z-50 w-full max-w-md bg-background/95 backdrop-blur border-t px-2 py-1 pb-safe">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 w-full transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <motion.div
                    animate={isActive ? { scale: 1.2, y: -4 } : { scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.div>
                  <span className="text-[10px] font-medium leading-none">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 h-1 w-8 bg-primary rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
