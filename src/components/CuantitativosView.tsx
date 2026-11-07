import React, { useState } from 'react';
import { ShieldAlert, Cpu, GitFork, Clock, Activity, Check, Info } from 'lucide-react';

export const CuantitativosView: React.FC = () => {
  const [selectedSubTab, setSelectedSubTab] = useState<'experimentales' | 'no-experimentales' | 'notacion' | 'validez'>('experimentales');

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Chapter Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="text-xs uppercase tracking-widest font-mono text-indigo-700 dark:text-indigo-400 font-semibold mb-2">
          Capítulo 2 · Ruta Cuantitativa
        </div>
        <h2 className="text-3xl lg:text-4xl font-editorial font-bold text-stone-900 dark:text-stone-50">
          Diseños de Investigación Cuantitativos
        </h2>
        <p className="mt-3 text-base text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
          Estructura metodológica rigurosa para manipular o medir variables de manera objetiva,
          garantizar el control de varianza y validar hipótesis estadísticas en ingeniería y tecnología.
        </p>
      </div>

      {/* Sub-tab Navigation */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-x-auto">
        <button
          onClick={() => setSelectedSubTab('experimentales')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            selectedSubTab === 'experimentales'
              ? 'bg-white dark:bg-stone-800 text-indigo-900 dark:text-indigo-200 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          1. Diseños Experimentales
        </button>
        <button
          onClick={() => setSelectedSubTab('no-experimentales')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            selectedSubTab === 'no-experimentales'
              ? 'bg-white dark:bg-stone-800 text-indigo-900 dark:text-indigo-200 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          2. Diseños No Experimentales
        </button>
        <button
          onClick={() => setSelectedSubTab('notacion')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            selectedSubTab === 'notacion'
              ? 'bg-white dark:bg-stone-800 text-indigo-900 dark:text-indigo-200 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          3. Notación Formal (R, G, X, O)
        </button>
        <button
          onClick={() => setSelectedSubTab('validez')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            selectedSubTab === 'validez'
              ? 'bg-white dark:bg-stone-800 text-indigo-900 dark:text-indigo-200 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          4. Validez Interna y Externa
        </button>
      </div>

      {/* SubTab 1: Experimentales */}
      {selectedSubTab === 'experimentales' && (
        <div className="space-y-8">
          <div className="p-5 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/60 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            <span className="font-semibold text-indigo-900 dark:text-indigo-300 block mb-1">
              Principio Experimental según Hernández-Sampieri &amp; Mendoza (2018):
            </span>
            Se manipula deliberadamente al menos una variable independiente (supuesta causa) para observar sus efectos
            sobre una o más variables dependientes (efectos), en una situación de control donde se neutralizan factores espurios.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Preexperimentos */}
            <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold">
                  Nivel 1 · Control Mínimo
                </span>
                <span className="text-xs text-stone-400">Preexperimento</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                Preexperimentos
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Su grado de control es mínimo. No existe asignación aleatoria a grupos ni grupo de comparación formal.
                Sirven comúnmente como ensayos preliminares o pruebas de concepto.
              </p>

              <div className="p-3 bg-stone-50 dark:bg-stone-800/80 rounded-md border border-stone-200/60 dark:border-stone-700/60 font-mono text-xs text-stone-800 dark:text-stone-200 space-y-1">
                <div className="text-stone-400 text-[10px]">Esquemas habituales:</div>
                <div>G &nbsp; X &nbsp; O (Estudio de caso de una sola medición)</div>
                <div>G &nbsp; O₁ &nbsp; X &nbsp; O₂ (Preprueba - Posprueba un solo grupo)</div>
              </div>

              <div className="text-xs text-stone-600 dark:text-stone-400">
                <strong className="text-stone-800 dark:text-stone-200">Caso en Ingeniería:</strong> Probar un nuevo algoritmo de compresión de video en un único servidor de pruebas sin contrastarlo con un servidor gemelo de referencia.
              </div>
            </div>

            {/* Cuasiexperimentos */}
            <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-semibold">
                  Nivel 2 · Control Medio
                </span>
                <span className="text-xs text-stone-400">Cuasiexperimento</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                Cuasiexperimentos
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Manipulan deliberadamente al menos una variable independiente y cuentan con grupos de contraste,
                pero los sujetos <em>no se asignan al azar</em>; los grupos ya estaban formados antes del experimento (grupos intactos).
              </p>

              <div className="p-3 bg-stone-50 dark:bg-stone-800/80 rounded-md border border-stone-200/60 dark:border-stone-700/60 font-mono text-xs text-stone-800 dark:text-stone-200 space-y-1">
                <div className="text-stone-400 text-[10px]">Esquema de grupos intactos:</div>
                <div>G₁ &nbsp; O₁ &nbsp; X &nbsp; O₂</div>
                <div>G₂ &nbsp; O₃ &nbsp; — &nbsp; O₄</div>
              </div>

              <div className="text-xs text-stone-600 dark:text-stone-400">
                <strong className="text-stone-800 dark:text-stone-200">Caso en Ingeniería:</strong> Aplicar una nueva metodología DevOps en la sucursal de Lima y evaluar la tasa de errores frente a la sucursal de Bogotá que continúa con el método tradicional.
              </div>
            </div>

            {/* Experimentos Puros */}
            <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
                  Nivel 3 · Control Riguroso
                </span>
                <span className="text-xs text-stone-400">Experimento Puro</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                Experimentos Puros (Verdaderos)
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Cumplen los dos requisitos de oro: 1) Grupos de comparación simultáneos (tratamiento vs control),
                y 2) Equivalencia inicial de los grupos lograda mediante <em>aleatorización (R)</em> o emparejamiento preciso.
              </p>

              <div className="p-3 bg-stone-50 dark:bg-stone-800/80 rounded-md border border-stone-200/60 dark:border-stone-700/60 font-mono text-xs text-stone-800 dark:text-stone-200 space-y-1">
                <div className="text-stone-400 text-[10px]">Esquema clásico aleatorizado:</div>
                <div>R &nbsp; G₁ &nbsp; O₁ &nbsp; X &nbsp; O₂</div>
                <div>R &nbsp; G₂ &nbsp; O₃ &nbsp; — &nbsp; O₄</div>
              </div>

              <div className="text-xs text-stone-600 dark:text-stone-400">
                <strong className="text-stone-800 dark:text-stone-200">Caso en Ingeniería:</strong> Enrutamiento aleatorio (A/B testing puro) de 100 000 transacciones entre un motor de base de datos relacional y uno orientado a grafos bajo idénticas condiciones de red.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SubTab 2: No Experimentales */}
      {selectedSubTab === 'no-experimentales' && (
        <div className="space-y-8">
          <div className="p-5 rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            <span className="font-semibold text-stone-900 dark:text-stone-100 block mb-1">
              Definición de Diseños No Experimentales (Hernández-Sampieri, 2018):
            </span>
            Estudios que se realizan sin la manipulación deliberada de variables y en los que solo se observan los fenómenos
            en su ambiente natural para analizarlos con posterioridad. Se dividen según el momento de recolección en
            <strong> Transversales (transeccionales)</strong> y <strong>Longitudinales (evolutivos)</strong>.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Transversales */}
            <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-semibold">
                <Clock className="w-4 h-4" />
                <span>Diseños Transeccionales (Transversales)</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                Recolección en un único punto en el tiempo
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Su propósito es describir variables y analizar su incidencia e interrelación en un momento dado.
                Es como tomar una fotografía estática de la situación.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                  <span className="font-bold text-stone-900 dark:text-stone-100 block mb-0.5">Exploratorios</span>
                  Comienzan a conocer una variable o conjunto de variables en un contexto nuevo.
                  <em> Ej: Estudio exploratorio sobre el uso inicial de computación cuántica en bancos peruanos.</em>
                </div>
                <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                  <span className="font-bold text-stone-900 dark:text-stone-100 block mb-0.5">Descriptivos</span>
                  Indagan la incidencia de las modalidades o niveles de una o más variables en una población.
                  <em> Ej: Censo de las 10 principales vulnerabilidades de ciberseguridad encontradas en apps móviles durante 2024.</em>
                </div>
                <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                  <span className="font-bold text-stone-900 dark:text-stone-100 block mb-0.5">Correlacionales-Causales</span>
                  Describen relaciones entre dos o más categorías, conceptos o variables en un momento determinado.
                  <em> Ej: Análisis causal entre la experiencia en años del equipo de desarrollo y la tasa de deuda técnica residual.</em>
                </div>
              </div>
            </div>

            {/* Longitudinales */}
            <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400 font-semibold">
                <Activity className="w-4 h-4" />
                <span>Diseños Longitudinales (Evolutivos)</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                Análisis de cambios y tendencias a través del tiempo
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Recolectan datos en diferentes puntos del tiempo para realizar inferencias acerca de la evolución del fenómeno,
                sus determinantes y sus consecuencias.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                  <span className="font-bold text-stone-900 dark:text-stone-100 block mb-0.5">De Tendencia (Trend)</span>
                  Analizan cambios a través del tiempo en variables o sus relaciones dentro de una población general.
                  <em> Ej: Monitoreo anual (2018 a 2026) del porcentaje de empresas que migran su infraestructura de TI a la nube.</em>
                </div>
                <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                  <span className="font-bold text-stone-900 dark:text-stone-100 block mb-0.5">De Evolución de Grupo (Cohorte)</span>
                  Examinan cambios a través del tiempo en subpoblaciones o grupos vinculados por una característica común (cohorte).
                  <em> Ej: Seguimiento quinquenal a la cohorte de egresados de Ingeniería de Sistemas del año 2020 respecto a certificaciones cloud.</em>
                </div>
                <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                  <span className="font-bold text-stone-900 dark:text-stone-100 block mb-0.5">De Panel</span>
                  Exactamente el mismo grupo específico de participantes o servidores es medido en todos los momentos o puntos del tiempo.
                  <em> Ej: Registro trimestral de 50 servidores físicos específicos durante 3 años para registrar la degradación térmica de sus CPUs.</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SubTab 3: Notación Formal */}
      {selectedSubTab === 'notacion' && (
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
            <h3 className="text-xl font-editorial font-bold text-stone-900 dark:text-stone-100">
              Notación Científica de Diseños Experimentales de Campbell &amp; Stanley
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Adoptada en el capítulo 7 de Hernández-Sampieri (2018), esta simbología estandariza la representación esquemática de cualquier experimento:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 bg-stone-100 dark:bg-stone-800 rounded-lg text-center">
                <span className="text-xl font-bold text-indigo-700 dark:text-indigo-400 block mb-1">R</span>
                <span className="text-stone-700 dark:text-stone-300 text-[11px] font-sans">Asignación al azar o aleatorización (Randomization)</span>
              </div>
              <div className="p-3 bg-stone-100 dark:bg-stone-800 rounded-lg text-center">
                <span className="text-xl font-bold text-teal-700 dark:text-teal-400 block mb-1">G</span>
                <span className="text-stone-700 dark:text-stone-300 text-[11px] font-sans">Grupo de sujetos o unidades de análisis (G₁, G₂, ...)</span>
              </div>
              <div className="p-3 bg-stone-100 dark:bg-stone-800 rounded-lg text-center">
                <span className="text-xl font-bold text-amber-700 dark:text-amber-400 block mb-1">X</span>
                <span className="text-stone-700 dark:text-stone-300 text-[11px] font-sans">Tratamiento o estímulo (Variable Independiente)</span>
              </div>
              <div className="p-3 bg-stone-100 dark:bg-stone-800 rounded-lg text-center">
                <span className="text-xl font-bold text-rose-700 dark:text-rose-400 block mb-1">O</span>
                <span className="text-stone-700 dark:text-stone-300 text-[11px] font-sans">Medición u observación (Preprueba o Posprueba)</span>
              </div>
              <div className="p-3 bg-stone-100 dark:bg-stone-800 rounded-lg text-center">
                <span className="text-xl font-bold text-stone-700 dark:text-stone-400 block mb-1">—</span>
                <span className="text-stone-700 dark:text-stone-300 text-[11px] font-sans">Ausencia de estímulo (Nivel cero / Grupo de Control)</span>
              </div>
            </div>

            {/* Modelos destacados con notación */}
            <div className="mt-6 space-y-4">
              <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                Modelos Experimentales Clásicos y su Notación:
              </h4>

              <div className="border border-stone-200 dark:border-stone-800 rounded-lg divide-y divide-stone-200 dark:divide-stone-800 font-mono text-xs">
                <div className="p-4 bg-stone-50/70 dark:bg-stone-900/60 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-stone-900 dark:text-stone-100 font-sans block">
                      Diseño con posprueba únicamente y grupo de control
                    </span>
                    <span className="text-stone-500 font-sans text-[11px]">
                      Garantiza equivalencia inicial por aleatorización; elimina el sesgo de la preprueba.
                    </span>
                  </div>
                  <div className="bg-white dark:bg-stone-800 px-3 py-1.5 rounded border border-stone-300 dark:border-stone-700 shrink-0">
                    <div>R &nbsp; G₁ &nbsp; X &nbsp; O₁</div>
                    <div>R &nbsp; G₂ &nbsp; — &nbsp; O₂</div>
                  </div>
                </div>

                <div className="p-4 bg-stone-50/70 dark:bg-stone-900/60 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-stone-900 dark:text-stone-100 font-sans block">
                      Diseño con preprueba-posprueba y grupo de control
                    </span>
                    <span className="text-stone-500 font-sans text-[11px]">
                      Permite evaluar la ganancia nita (O₂ - O₁) comparada con la del grupo control (O₄ - O₃).
                    </span>
                  </div>
                  <div className="bg-white dark:bg-stone-800 px-3 py-1.5 rounded border border-stone-300 dark:border-stone-700 shrink-0">
                    <div>R &nbsp; G₁ &nbsp; O₁ &nbsp; X &nbsp; O₂</div>
                    <div>R &nbsp; G₂ &nbsp; O₃ &nbsp; — &nbsp; O₄</div>
                  </div>
                </div>

                <div className="p-4 bg-stone-50/70 dark:bg-stone-900/60 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-stone-900 dark:text-stone-100 font-sans block">
                      Diseño de cuatro grupos de Solomon
                    </span>
                    <span className="text-stone-500 font-sans text-[11px]">
                      El diseño más robusto: aísla los efectos reactivos y de interacción de la preprueba.
                    </span>
                  </div>
                  <div className="bg-white dark:bg-stone-800 px-3 py-1.5 rounded border border-stone-300 dark:border-stone-700 shrink-0">
                    <div>R &nbsp; G₁ &nbsp; O₁ &nbsp; X &nbsp; O₂</div>
                    <div>R &nbsp; G₂ &nbsp; O₃ &nbsp; — &nbsp; O₄</div>
                    <div>R &nbsp; G₃ &nbsp; — &nbsp; X &nbsp; O₅</div>
                    <div>R &nbsp; G₄ &nbsp; — &nbsp; — &nbsp; O₆</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SubTab 4: Validez Interna y Externa */}
      {selectedSubTab === 'validez' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Validez Interna */}
            <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-700 dark:text-rose-400 font-semibold">
                <ShieldAlert className="w-4 h-4" />
                <span>Validez Interna (Control)</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                Grado de confianza en que la causa explique el efecto
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Se refiere a si la manipulación de las variables independientes o tratamientos realmente tuvo el efecto
                observado sobre las variables dependientes, y no variables extrañas o espurias.
              </p>

              <div className="space-y-2.5 pt-2 text-xs">
                <div className="p-2.5 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
                  <strong className="text-stone-900 dark:text-stone-100">1. Historia:</strong> Acontecimientos externos que ocurren durante el experimento (ej. una actualización del sistema operativo del servidor durante una prueba de red).
                </div>
                <div className="p-2.5 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
                  <strong className="text-stone-900 dark:text-stone-100">2. Maduración:</strong> Procesos internos de los participantes o del hardware (ej. degradación térmica de CPUs o fatiga en evaluadores humanos de código).
                </div>
                <div className="p-2.5 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
                  <strong className="text-stone-900 dark:text-stone-100">3. Inestabilidad del Instrumento:</strong> Variaciones en los sensores, calibración de red o cambios de criterio en los evaluadores.
                </div>
                <div className="p-2.5 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
                  <strong className="text-stone-900 dark:text-stone-100">4. Mortalidad Experimental (Deserción):</strong> Pérdida diferencial de participantes o nodos que se desconectan antes de concluir la prueba.
                </div>
                <div className="p-2.5 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
                  <strong className="text-stone-900 dark:text-stone-100">5. Selección Sesgada:</strong> Asignación no aleatoria que hace que los grupos no sean inicialmente equivalentes.
                </div>
              </div>
            </div>

            {/* Validez Externa */}
            <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-semibold">
                <Cpu className="w-4 h-4" />
                <span>Validez Externa (Generalización)</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                Posibilidad de generalizar a contextos y poblaciones reales
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Responde a la pregunta: ¿A qué poblaciones, escenarios, variables de tratamiento y variables de medición
                pueden extrapolarse legítimamente los resultados del experimento?
              </p>

              <div className="space-y-2.5 pt-2 text-xs">
                <div className="p-2.5 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
                  <strong className="text-stone-900 dark:text-stone-100">1. Efecto reactivo de la preprueba:</strong> La preprueba sensibiliza al grupo o al sistema, de modo que responderá de manera distinta al tratamiento.
                </div>
                <div className="p-2.5 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
                  <strong className="text-stone-900 dark:text-stone-100">2. Efectos reactivos del laboratorio (Efecto Hawthorne):</strong> Los sujetos modifican su conducta normal simplemente porque saben que están siendo monitoreados.
                </div>
                <div className="p-2.5 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
                  <strong className="text-stone-900 dark:text-stone-100">3. Interferencia de tratamientos múltiples:</strong> Si se aplican varios algoritmos sucesivamente, los efectos de los anteriores persisten en la memoria del sistema.
                </div>
                <div className="p-2.5 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
                  <strong className="text-stone-900 dark:text-stone-100">4. Artificialidad del entorno:</strong> Probar un software en un entorno local óptimo sin la latencia, pérdidas de paquetes o congestión del mundo real.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
