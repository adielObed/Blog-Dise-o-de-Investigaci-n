import React, { useState } from 'react';
import { researchInstruments, InstrumentItem } from '../data/researchData';
import { Sliders, CheckCircle2, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';

export const InstrumentosView: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'cuantitativo' | 'cualitativo' | 'mixto'>('all');

  const filteredInstruments = researchInstruments.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Chapter Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="text-xs uppercase tracking-widest font-mono text-indigo-700 dark:text-indigo-400 font-semibold mb-2">
          Capítulo 6 · Técnicas de Recolección de Datos
        </div>
        <h2 className="text-3xl lg:text-4xl font-editorial font-bold text-stone-900 dark:text-stone-50">
          Instrumentos y Técnicas en Ingeniería y Tecnología
        </h2>
        <p className="mt-3 text-base text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
          Catálogo analítico de procedimientos operativos para la recolección empírica de datos cuantitativos
          (telemetría, escalas psicométricas normalizadas) y cualitativos (entrevistas en profundidad, auditorías de código).
        </p>
      </div>

      {/* Segmented Filter */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl max-w-fit">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            filter === 'all'
              ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          Todos ({researchInstruments.length})
        </button>
        <button
          onClick={() => setFilter('cuantitativo')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            filter === 'cuantitativo'
              ? 'bg-indigo-700 text-white shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          Cuantitativos
        </button>
        <button
          onClick={() => setFilter('cualitativo')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            filter === 'cualitativo'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          Cualitativos
        </button>
        <button
          onClick={() => setFilter('mixto')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            filter === 'mixto'
              ? 'bg-stone-800 dark:bg-stone-600 text-white shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          Mixtos
        </button>
      </div>

      {/* Instrument Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredInstruments.map((inst) => {
          const isCuanti = inst.category === 'cuantitativo';
          const isCuali = inst.category === 'cualitativo';

          return (
            <div
              key={inst.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-5"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-3">
                <span
                  className={`text-[11px] font-mono uppercase tracking-wider font-bold ${
                    isCuanti
                      ? 'text-indigo-700 dark:text-indigo-400'
                      : isCuali
                      ? 'text-teal-700 dark:text-teal-400'
                      : 'text-amber-700 dark:text-amber-400'
                  }`}
                >
                  {inst.category.toUpperCase()}
                </span>
                <span className="text-xs text-stone-400 font-mono">Técnica Operativa</span>
              </div>

              {/* Title & Desc */}
              <div className="space-y-2">
                <h3 className="text-xl font-editorial font-bold text-stone-900 dark:text-stone-50 leading-snug">
                  {inst.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {inst.description}
                </p>
              </div>

              {/* Application in Engineering */}
              <div className="p-3.5 bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200/60 dark:border-stone-700/60 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 dark:text-stone-100">
                  <Cpu className="w-3.5 h-3.5 text-stone-500" />
                  <span>Aplicación Concreta en Ingeniería:</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {inst.applicationInEngineering}
                </p>
              </div>

              {/* Advantages vs Limitations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200/50 dark:border-emerald-900/40 space-y-1.5">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Ventajas</span>
                  </div>
                  <ul className="space-y-1 text-stone-700 dark:text-stone-300 list-disc list-inside">
                    {inst.advantages.map((adv, idx) => (
                      <li key={idx} className="leading-tight">{adv}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-amber-50/50 dark:bg-amber-950/20 rounded-lg border border-amber-200/50 dark:border-amber-900/40 space-y-1.5">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wide">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Limitaciones</span>
                  </div>
                  <ul className="space-y-1 text-stone-700 dark:text-stone-300 list-disc list-inside">
                    {inst.limitations.map((lim, idx) => (
                      <li key={idx} className="leading-tight">{lim}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Confiabilidad y Validez */}
              <div className="p-3 rounded-lg bg-stone-100/70 dark:bg-stone-800/70 text-xs flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <div className="text-stone-700 dark:text-stone-300 leading-relaxed">
                  <strong className="text-stone-900 dark:text-stone-100">Garantía de Rigor: </strong>
                  {inst.reliabilityValidity}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
