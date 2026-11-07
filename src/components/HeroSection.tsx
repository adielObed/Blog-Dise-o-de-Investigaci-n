import React from 'react';
import { ArrowRight, Compass, Database } from 'lucide-react';
import { NavTab } from './TopNavbar';
import { TeamConfig } from '../data/researchData';

interface HeroSectionProps {
  onNavigate: (tab: NavTab) => void;
  teamConfig: TeamConfig;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, teamConfig }) => {
  return (
    <section className="relative pt-8 pb-14 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header Info */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-4 tracking-wide font-medium">
          <span>{teamConfig.institution}</span>
          <span aria-hidden="true">·</span>
          <span>{teamConfig.courseName}</span>
          <span aria-hidden="true">·</span>
          <span>Realizado por {teamConfig.members.map((m) => m.name).join(', ')}</span>
        </div>

        {/* Main Display Headline */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-stone-900 dark:text-stone-50 tracking-tight leading-tight text-balance">
            Metodología & Diseños de Investigación en Ingeniería y Tecnología
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl">
            Guía académica y analítica sobre la formulación y ejecución de diseños cuantitativos, cualitativos y mixtos.
            Fundamentada en los marcos de <em>Hernández-Sampieri &amp; Mendoza (2018)</em> y <em>Ñaupas et al. (2018)</em>,
            con análisis de artículos científicos reales indexados con DOI en Scielo, Redalyc y Dialnet.
          </p>
        </div>

        {/* Action Buttons & Fast Links */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('cuantitativos')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-800 dark:bg-indigo-700 hover:bg-indigo-900 dark:hover:bg-indigo-600 rounded-lg transition-colors shadow-xs"
          >
            <span>Diseños Cuantitativos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onNavigate('cualitativos')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-teal-800 dark:bg-teal-700 hover:bg-teal-900 dark:hover:bg-teal-600 rounded-lg transition-colors shadow-xs"
          >
            <span>Diseños Cualitativos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onNavigate('comparativo')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-stone-700 dark:text-stone-200 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-stone-500" />
            <span>Matriz Comparativa</span>
          </button>

          <button
            onClick={() => onNavigate('articulos')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-stone-700 dark:text-stone-200 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg transition-colors"
          >
            <Database className="w-3.5 h-3.5 text-stone-500" />
            <span>Artículos Reales con DOI</span>
          </button>
        </div>

      </div>
    </section>
  );
};
