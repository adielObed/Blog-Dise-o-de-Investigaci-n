import React, { useState } from 'react';
import { academicResources, ResourceItem } from '../data/researchData';
import { Video, ExternalLink, Library, Copy, Check, CheckCircle2, BookOpen } from 'lucide-react';

export const RecursosView: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const videoResources = academicResources.filter((r) => r.type === 'video');
  const linkResources = academicResources.filter((r) => r.type !== 'video');

  const handleCopyVideoCitation = (video: ResourceItem) => {
    if (!video.apaCitation) return;
    navigator.clipboard.writeText(video.apaCitation);
    setCopiedId(video.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Chapter Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="text-xs uppercase tracking-widest font-mono text-indigo-700 dark:text-indigo-400 font-semibold mb-2">
          Capítulo 7 · Recursos Audiovisuales Concretos y Fuentes Indexadas
        </div>
        <h2 className="text-3xl lg:text-4xl font-editorial font-bold text-stone-900 dark:text-stone-50">
          Recursos Didácticos Multimedia Citados en APA 7
        </h2>
        <p className="mt-3 text-base text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
          Selección de conferencias magistrales concretas e incrustadas sobre diseños cuantitativos, cualitativos y mixtos,
          acompañadas de su síntesis académica, ejes temáticos y su respectiva referencia bibliográfica en formato APA 7.ª edición.
        </p>
      </div>

      {/* Videos Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Video className="w-5 h-5 text-indigo-700 dark:text-indigo-400" />
          <h3 className="text-xl font-editorial font-bold text-stone-900 dark:text-stone-100">
            Material Audiovisual Seleccionado e Incrustado
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videoResources.map((video) => {
            const isCopied = copiedId === video.id;

            return (
              <div
                key={video.id}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-mono text-indigo-700 dark:text-indigo-400 uppercase tracking-wider font-semibold">
                      {video.category === 'cuantitativo' ? 'Enfoque Cuantitativo y General' : 'Enfoque Cualitativo y Mixto'}
                    </span>
                    <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                      <span>{video.sourceName}</span>
                      {video.duration && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{video.duration}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Title & Speaker */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-editorial font-bold text-stone-900 dark:text-stone-100 leading-snug">
                      {video.title}
                    </h4>
                    {video.authorOrSpeaker && (
                      <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-medium">
                        Ponente / Autoría: {video.authorOrSpeaker} ({video.year})
                      </p>
                    )}
                  </div>

                  {/* Responsive Video Embed Container */}
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {video.description}
                  </p>

                  {/* Key Takeaways from the Video */}
                  {video.keyTakeaways && video.keyTakeaways.length > 0 && (
                    <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/70 dark:border-stone-700/70 space-y-2 text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                        <span>Aportes Clave Analizados en el Video</span>
                      </div>
                      <ul className="space-y-1.5 text-stone-600 dark:text-stone-300 list-disc list-inside leading-relaxed">
                        {video.keyTakeaways.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Academic Selection Note */}
                  {video.academicNote && (
                    <div className="p-3.5 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/50 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                      <strong className="text-indigo-900 dark:text-indigo-300 block mb-0.5">
                        Nota Académica de Pertinencia:
                      </strong>
                      {video.academicNote}
                    </div>
                  )}
                </div>

                {/* APA 7 Citation Box for the Video */}
                {video.apaFormattedHtml && (
                  <div className="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-3">
                    <div className="p-3.5 rounded-lg bg-stone-100/70 dark:bg-stone-800/70 border border-stone-200/80 dark:border-stone-700/80">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400" />
                        <span>Referencia del Recurso Audiovisual (APA 7.ª ed.):</span>
                      </div>
                      <div
                        className="apa-citation text-xs text-stone-700 dark:text-stone-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: video.apaFormattedHtml }}
                      />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-400 hover:underline"
                      >
                        <span>Abrir enlace directo en YouTube</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => handleCopyVideoCitation(video)}
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
                            <span>Copiar cita APA 7 del video</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Repositories and Reference Guides */}
      <div className="space-y-6 pt-4 border-t border-stone-200 dark:border-stone-800">
        <div className="flex items-center gap-2">
          <Library className="w-5 h-5 text-teal-700 dark:text-teal-400" />
          <h3 className="text-xl font-editorial font-bold text-stone-900 dark:text-stone-100">
            Bases de Datos Científicas y Portales Normativos Consultados
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {linkResources.map((res) => (
            <a
              key={res.id}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-700 transition-all flex flex-col justify-between gap-4 shadow-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span className="font-mono uppercase">{res.sourceName}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
                  {res.title}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-3 leading-relaxed">
                  {res.description}
                </p>
              </div>

              <span className="text-[11px] font-semibold text-indigo-700 dark:text-indigo-400 group-hover:underline">
                Acceder al portal oficial &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
