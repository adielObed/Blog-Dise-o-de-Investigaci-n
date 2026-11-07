import React from 'react';
import { BookOpen, Users, ArrowUp, Rocket, ExternalLink } from 'lucide-react';
import { TeamConfig } from '../data/researchData';
import { NavTab } from './TopNavbar';

interface FooterProps {
  teamConfig: TeamConfig;
  onOpenTeamModal: () => void;
  onNavigate: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ teamConfig, onOpenTeamModal, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-600 dark:text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Top Footer Split */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Wordmark and summary */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 font-bold">
              <BookOpen className="w-5 h-5 text-indigo-700 dark:text-indigo-400" />
              <span className="font-editorial text-lg">Diseños Metodológicos en Ingeniería</span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 max-w-md leading-relaxed">
              Recurso académico universitario para la enseñanza y aplicación de metodologías cuantitativas,
              cualitativas y mixtas conforme a las directrices de Hernández-Sampieri &amp; Mendoza (2018) y normas APA 7.
            </p>
            <div className="pt-2 text-[11px] text-stone-400">
              {teamConfig.institution} · {teamConfig.courseName}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <span className="font-bold text-stone-900 dark:text-stone-100 block uppercase tracking-wider text-[11px]">
              Secciones
            </span>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onNavigate('fundamentos')} className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                  Fundamentos Epistemológicos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cuantitativos')} className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                  Diseños Cuantitativos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cualitativos')} className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                  Diseños Cualitativos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('comparativo')} className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                  Matriz Comparativa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articulos')} className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                  Artículos Reales con DOI
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('referencias')} className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                  Referencias APA 7
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Team */}
          <div className="space-y-2">
            <span className="font-bold text-stone-900 dark:text-stone-100 block uppercase tracking-wider text-[11px]">
              Realizado por
            </span>
            <div className="space-y-1 text-stone-700 dark:text-stone-300 font-medium">
              {teamConfig.members.map((m, idx) => (
                <div key={idx} className="truncate">
                  {m.name}
                </div>
              ))}
            </div>
            <div className="pt-2 text-[11px] text-stone-500">
              Docente: <span className="text-stone-700 dark:text-stone-300 font-medium">{teamConfig.teacher}</span>
            </div>
            <div className="pt-1">
              <button
                onClick={onOpenTeamModal}
                className="inline-flex items-center gap-1 text-indigo-700 dark:text-indigo-400 font-semibold hover:underline"
              >
                <span>Editar datos / Ver guía Vercel</span>
              </button>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} {teamConfig.courseName} · Preparado para entrega universitaria y despliegue en Vercel.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
