import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Users, BookOpen } from 'lucide-react';

export type NavTab = 
  | 'inicio' 
  | 'fundamentos' 
  | 'cuantitativos' 
  | 'cualitativos' 
  | 'comparativo' 
  | 'articulos' 
  | 'instrumentos' 
  | 'recursos' 
  | 'referencias';

interface TopNavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenTeamModal: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  activeTab,
  onSelectTab,
  darkMode,
  onToggleDarkMode,
  onOpenTeamModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'fundamentos', label: 'Fundamentos' },
    { id: 'cuantitativos', label: 'Cuantitativos' },
    { id: 'cualitativos', label: 'Cualitativos' },
    { id: 'comparativo', label: 'Comparador' },
    { id: 'articulos', label: 'Artículos Reales' },
    { id: 'instrumentos', label: 'Instrumentos' },
    { id: 'recursos', label: 'Recursos' },
    { id: 'referencias', label: 'Referencias APA 7' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-2.5 text-left text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
            aria-label="Ir al inicio"
          >
            <BookOpen className="w-5 h-5 text-indigo-700 dark:text-indigo-400 shrink-0" />
            <span className="font-editorial text-xl">Diseños Metodológicos</span>
          </button>

          {/* Zone 2: Navigation Links (single-line, clean) */}
          <nav className="hidden xl:flex items-center gap-1 overflow-x-auto py-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-xs tracking-wide transition-colors whitespace-nowrap rounded-md ${
                    isActive
                      ? 'bg-stone-200/70 dark:bg-stone-800 text-stone-900 dark:text-stone-50 font-semibold shadow-xs'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
              aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              title={darkMode ? 'Modo claro' : 'Modo oscuro'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
            </button>

            {/* Team & Vercel Button */}
            <button
              onClick={onOpenTeamModal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-800/80 hover:bg-stone-200 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <Users className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Equipo & Despliegue</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
              aria-label="Menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-stone-200 dark:border-stone-800 bg-stone-50/98 dark:bg-stone-950/98 px-4 py-4 space-y-1 shadow-lg">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 px-3 py-1">
            Secciones del Blog
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-left text-xs rounded-md transition-colors ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 font-semibold'
                      : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
