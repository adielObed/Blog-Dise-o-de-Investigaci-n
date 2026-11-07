import React, { useState, useMemo } from 'react';
import { comparisonMatrix, ComparisonDimension } from '../data/researchData';
import { Search, SplitSquareVertical, Table, Cpu, Check } from 'lucide-react';

export const ComparativoView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [selectedFocus, setSelectedFocus] = useState<'all' | 'cuanti' | 'cuali' | 'mixto'>('all');

  const filteredMatrix = useMemo(() => {
    return comparisonMatrix.filter((item) => {
      const matchesSearch =
        item.dimension.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.enfoqueCuantitativo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.enfoqueCualitativo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ejemploIngenieria.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [searchTerm]);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Chapter Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="text-xs uppercase tracking-widest font-mono text-indigo-700 dark:text-indigo-400 font-semibold mb-2">
          Capítulo 4 · Síntesis y Matriz de Contraste
        </div>
        <h2 className="text-3xl lg:text-4xl font-editorial font-bold text-stone-900 dark:text-stone-50">
          Matriz Comparativa de Enfoques Metodológicos
        </h2>
        <p className="mt-3 text-base text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
          Cuadro analítico de contrastación dimensional entre las rutas cuantitativa, cualitativa y mixta,
          con ejemplos aplicados al ámbito del desarrollo de software y sistemas tecnológicos.
        </p>
      </div>

      {/* Control Bar: Search and View Mode Switch */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por dimensión, lógica, muestra o análisis..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-lg shrink-0">
          <button
            onClick={() => setViewMode('cards')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              viewMode === 'cards'
                ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            <SplitSquareVertical className="w-3.5 h-3.5" />
            <span>Fichas Analíticas</span>
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              viewMode === 'table'
                ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Tabla Académica</span>
          </button>
        </div>
      </div>

      {/* Cards View Mode */}
      {viewMode === 'cards' && (
        <div className="space-y-6">
          {filteredMatrix.length === 0 ? (
            <div className="text-center py-12 text-sm text-stone-500">
              No se encontraron dimensiones con el término «{searchTerm}».
            </div>
          ) : (
            filteredMatrix.map((item, index) => (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4"
              >
                <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400">
                      0{index + 1}.
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                      {item.dimension}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  {/* Cuantitativo */}
                  <div className="p-4 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/50 dark:border-indigo-900/50 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300 block">
                      Enfoque Cuantitativo
                    </span>
                    <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                      {item.enfoqueCuantitativo}
                    </p>
                  </div>

                  {/* Cualitativo */}
                  <div className="p-4 rounded-lg bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/50 dark:border-teal-900/50 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 block">
                      Enfoque Cualitativo
                    </span>
                    <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                      {item.enfoqueCualitativo}
                    </p>
                  </div>

                  {/* Mixto */}
                  <div className="p-4 rounded-lg bg-stone-100/70 dark:bg-stone-800/50 border border-stone-200/60 dark:border-stone-700/60 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-800 dark:text-stone-300 block">
                      Enfoque Mixto
                    </span>
                    <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                      {item.enfoqueMixto}
                    </p>
                  </div>
                </div>

                {/* Engineering Example */}
                <div className="p-3 bg-stone-50 dark:bg-stone-800/40 rounded-lg border border-stone-200/60 dark:border-stone-700/60 flex items-start gap-2.5 text-xs">
                  <Cpu className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                  <div className="text-stone-600 dark:text-stone-300 leading-relaxed">
                    <strong className="text-stone-800 dark:text-stone-200">Ilustración en Ingeniería: </strong>
                    {item.ejemploIngenieria}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Academic Table View Mode */}
      {viewMode === 'table' && (
        <div className="overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-100 dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 font-bold uppercase tracking-wider text-[11px]">
                <th className="p-4 w-1/5">Dimensión Epistemológica</th>
                <th className="p-4 w-1/4 text-indigo-900 dark:text-indigo-300">Enfoque Cuantitativo</th>
                <th className="p-4 w-1/4 text-teal-900 dark:text-teal-300">Enfoque Cualitativo</th>
                <th className="p-4 w-3/10 text-stone-700 dark:text-stone-300">Aplicación Tecnológica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
              {filteredMatrix.map((item, idx) => (
                <tr key={item.id} className="hover:bg-stone-50/70 dark:hover:bg-stone-800/40 transition-colors">
                  <td className="p-4 font-bold text-stone-900 dark:text-stone-100 align-top">
                    <span className="font-mono text-stone-400 mr-1.5">0{idx + 1}.</span>
                    {item.dimension}
                  </td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 align-top leading-relaxed bg-indigo-50/20 dark:bg-indigo-950/10">
                    {item.enfoqueCuantitativo}
                  </td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 align-top leading-relaxed bg-teal-50/20 dark:bg-teal-950/10">
                    {item.enfoqueCualitativo}
                  </td>
                  <td className="p-4 text-stone-600 dark:text-stone-400 align-top leading-relaxed font-sans">
                    {item.ejemploIngenieria}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
