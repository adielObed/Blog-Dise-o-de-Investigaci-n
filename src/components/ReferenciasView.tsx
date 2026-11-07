import React, { useState } from 'react';
import { academicReferences, ReferenceItem } from '../data/researchData';
import { BookOpen, Copy, Check, Search, ExternalLink, Download } from 'lucide-react';

export const ReferenciasView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const categories = [
    'all',
    'Libros Metodológicos',
    'Artículos Cuantitativos',
    'Artículos Cualitativos y Mixtos',
    'Recursos Audiovisuales',
  ];

  const filteredReferences = academicReferences.filter((ref) => {
    const matchesCategory = selectedCategory === 'all' || ref.category === selectedCategory;
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      ref.rawText.toLowerCase().includes(q) ||
      ref.authors.toLowerCase().includes(q) ||
      ref.title.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const handleCopySingle = (ref: ReferenceItem) => {
    navigator.clipboard.writeText(ref.rawText);
    setCopiedId(ref.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleCopyAll = () => {
    const allText = academicReferences.map((r) => r.rawText).join('\n\n');
    navigator.clipboard.writeText(allText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Chapter Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest font-mono text-indigo-700 dark:text-indigo-400 font-semibold mb-2">
            Normativa Académica Internacional
          </div>
          <h2 className="text-3xl lg:text-4xl font-editorial font-bold text-stone-900 dark:text-stone-50">
            Referencias Bibliográficas en Formato APA 7.ª Edición
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
            Lista de referencias ordenada alfabéticamente con sangría francesa (hanging indent) de 0.5 pulgadas (1.27 cm),
            títulos en cursiva y enlaces DOI normalizados según el manual oficial de la APA (2020).
          </p>
        </div>

        {/* Copy All Button */}
        <button
          onClick={handleCopyAll}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-800 dark:bg-indigo-700 hover:bg-indigo-900 dark:hover:bg-indigo-600 rounded-lg transition-colors shrink-0 shadow-xs"
        >
          {copiedAll ? (
            <>
              <Check className="w-4 h-4 text-emerald-300" />
              <span>¡Bibliografía copiada completa!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copiar Bibliografía Completa</span>
            </>
          )}
        </button>
      </div>

      {/* Search and Category Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por autor, título, año o revista..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-stone-800 rounded-lg overflow-x-auto shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {cat === 'all' ? 'Todas las referencias' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bibliography Display with French Indent (Sangría Francesa) */}
      <div className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
        <div className="text-xs font-mono text-stone-400 uppercase tracking-wider pb-2 border-b border-stone-100 dark:border-stone-800">
          Mostrando {filteredReferences.length} referencias bibliográficas
        </div>

        <div className="space-y-6">
          {filteredReferences.map((ref) => {
            const isCopied = copiedId === ref.id;

            return (
              <div
                key={ref.id}
                className="group relative pb-6 border-b border-stone-100 dark:border-stone-800/80 last:border-b-0 last:pb-0"
              >
                {/* Visual French Indent Container */}
                <div className="apa-citation text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-sans pr-24">
                  <span dangerouslySetInnerHTML={{ __html: ref.apaFormattedHtml }} />
                </div>

                {/* Floating Quick Action */}
                <div className="absolute right-0 top-0 flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  {ref.doiOrUrl && (
                    <a
                      href={ref.doiOrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md text-stone-500 hover:text-indigo-600 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                      title="Abrir enlace DOI"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => handleCopySingle(ref)}
                    className="flex items-center gap-1 p-1.5 text-xs text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md transition-colors"
                    title="Copiar referencia"
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
