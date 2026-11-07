import React, { useState, useMemo } from 'react';
import { realArticles, ArticleItem } from '../data/researchData';
import { Search, ExternalLink, Copy, Check, CheckCircle2, Cpu } from 'lucide-react';

export const ArticulosView: React.FC = () => {
  const [filterApproach, setFilterApproach] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const approachFilters = [
    { id: 'all', label: `Todos (${realArticles.length})` },
    { id: 'Experimental', label: 'Experimental' },
    { id: 'Exploratorio / No Experimental', label: 'Exploratorio / No Exp.' },
    { id: 'Estudio de Casos', label: 'Estudio de Casos' },
    { id: 'Cualitativo', label: 'Cualitativo' },
    { id: 'Mixto', label: 'Enfoque Mixto' },
  ];

  const filteredArticles = useMemo(() => {
    return realArticles.filter((art) => {
      const matchesApproach =
        filterApproach === 'all' || art.approachTag === filterApproach;
      const q = searchQuery.toLowerCase();
      const matchesQuery =
        art.title.toLowerCase().includes(q) ||
        art.authors.toLowerCase().includes(q) ||
        art.journal.toLowerCase().includes(q) ||
        art.subDesign.toLowerCase().includes(q) ||
        art.field.toLowerCase().includes(q) ||
        art.instruments.toLowerCase().includes(q) ||
        art.findings.toLowerCase().includes(q);
      return matchesApproach && matchesQuery;
    });
  }, [filterApproach, searchQuery]);

  const handleCopyCitation = (article: ArticleItem) => {
    navigator.clipboard.writeText(article.apaCitation);
    setCopiedId(article.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Chapter Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="text-xs uppercase tracking-widest font-mono text-indigo-700 dark:text-indigo-400 font-semibold mb-2">
          Capítulo 5 · Evidencia Empírica Verificada en Ingeniería de Sistemas
        </div>
        <h2 className="text-3xl lg:text-4xl font-editorial font-bold text-stone-900 dark:text-stone-50">
          Artículos Científicos Reales Analizados (con Resultados Ampliados)
        </h2>
        <p className="mt-3 text-base text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
          Selección rigurosa de investigaciones indexadas con DOI activo que abarca los enfoques
          <strong> experimental, estudio de casos, exploratorio/correlacional, cualitativo y mixto</strong>.
          Cada ficha incluye el desglose metodológico y un análisis detallado de los resultados principales e impacto en ingeniería.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por título, autor, revista, técnica o resultado..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-stone-800 rounded-lg overflow-x-auto shrink-0">
          {approachFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterApproach(f.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filterApproach === f.id
                  ? 'bg-indigo-700 text-white shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Cards Grid */}
      <div className="space-y-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-8">
            <p className="text-sm text-stone-500">No se encontraron artículos que coincidan con la búsqueda.</p>
          </div>
        ) : (
          filteredArticles.map((art, index) => {
            const isCopied = copiedId === art.id;
            const isCuanti = art.designType === 'cuantitativo';
            const isMixto = art.designType === 'mixto';

            return (
              <article
                key={art.id}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-5 shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
              >
                {/* Top unboxed metadata line */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                    <span className="font-mono font-bold text-stone-400">0{index + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-stone-800 dark:text-stone-200">{art.journal}</span>
                    <span aria-hidden="true">·</span>
                    <span>{art.volumeIssue ? `Vol. ${art.volumeIssue}` : ''}</span>
                    <span aria-hidden="true">·</span>
                    <span>Año {art.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>pp. {art.pages}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-stone-600 dark:text-stone-300">
                      Enfoque: {art.approachTag}
                    </span>
                    <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                    <span
                      className={`text-[11px] font-mono uppercase tracking-wider font-bold ${
                        isCuanti
                          ? 'text-indigo-700 dark:text-indigo-400'
                          : isMixto
                          ? 'text-amber-700 dark:text-amber-400'
                          : 'text-teal-700 dark:text-teal-400'
                      }`}
                    >
                      {isCuanti ? 'Ruta Cuantitativa' : isMixto ? 'Ruta Mixta' : 'Ruta Cualitativa'}
                    </span>
                  </div>
                </div>

                {/* Article Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-editorial font-bold text-stone-900 dark:text-stone-50 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1.5 font-medium">
                    Autores: {art.authors}
                  </p>
                </div>

                {/* Sub-design & Area Strip */}
                <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-medium">
                    <span className="text-stone-500 dark:text-stone-400 mr-1.5">Diseño Metodológico:</span>
                    <span className="font-semibold">{art.subDesign}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200">
                    <span className="text-stone-500 dark:text-stone-400 mr-1.5">Campo Disciplinar:</span>
                    <span>{art.field}</span>
                  </div>
                </div>

                {/* Methodological Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
                  <div className="p-3.5 bg-stone-50 dark:bg-stone-800/40 rounded-lg border border-stone-200/60 dark:border-stone-700/60 space-y-1">
                    <strong className="text-stone-900 dark:text-stone-100 block">Objetivo de la Investigación:</strong>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{art.objective}</p>
                  </div>

                  <div className="p-3.5 bg-stone-50 dark:bg-stone-800/40 rounded-lg border border-stone-200/60 dark:border-stone-700/60 space-y-1">
                    <strong className="text-stone-900 dark:text-stone-100 block">Muestra / Unidades de Análisis:</strong>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{art.sample}</p>
                  </div>

                  <div className="p-3.5 bg-stone-50 dark:bg-stone-800/40 rounded-lg border border-stone-200/60 dark:border-stone-700/60 space-y-1">
                    <strong className="text-stone-900 dark:text-stone-100 block">Instrumentos y Técnicas Aplicadas:</strong>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{art.instruments}</p>
                  </div>

                  <div className="p-3.5 bg-stone-50 dark:bg-stone-800/40 rounded-lg border border-stone-200/60 dark:border-stone-700/60 space-y-1">
                    <strong className="text-stone-900 dark:text-stone-100 block">Síntesis del Hallazgo Central:</strong>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{art.findings}</p>
                  </div>
                </div>

                {/* Expanded Results & Engineering Analysis Box */}
                <div className="p-4 sm:p-5 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/50 space-y-3 text-xs">
                  <div className="flex items-center gap-2 font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wider text-[11px]">
                    <CheckCircle2 className="w-4 h-4 text-indigo-700 dark:text-indigo-400 shrink-0" />
                    <span>Análisis Ampliado de Resultados Principales y Evidencia Empírica</span>
                  </div>

                  <ul className="space-y-2 text-stone-700 dark:text-stone-300 leading-relaxed list-disc list-inside">
                    {art.detailedResults.map((resItem, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {resItem}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-indigo-200/50 dark:border-indigo-900/50 flex items-start gap-2 text-stone-700 dark:text-stone-300">
                    <Cpu className="w-4 h-4 text-indigo-700 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 dark:text-stone-100">Aporte Práctico a la Ingeniería de Sistemas: </strong>
                      {art.engineeringConclusion}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions: Copy APA 7 and DOI Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200/80 dark:border-stone-800/80">
                  <div className="flex items-center gap-2">
                    <a
                      href={art.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-700 dark:text-indigo-400 hover:underline"
                    >
                      <span>DOI Verificado: {art.doi}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyCitation(art)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
                        isCopied
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-800 dark:text-emerald-300'
                          : 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>¡Cita APA 7 copiada!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar cita APA 7</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};
