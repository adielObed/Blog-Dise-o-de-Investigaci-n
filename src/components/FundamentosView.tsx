import React, { useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { NavTab } from './TopNavbar';
import { designDecisionGuide } from '../data/researchData';

interface FundamentosViewProps {
  onNavigate: (tab: NavTab) => void;
}

export const FundamentosView: React.FC<FundamentosViewProps> = ({ onNavigate }) => {
  const [activeRoute, setActiveRoute] = useState<'cuantitativa' | 'cualitativa' | 'mixta'>('cuantitativa');

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Title & Deck */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="text-xs uppercase tracking-widest font-mono text-indigo-700 dark:text-indigo-400 font-semibold mb-2">
          Capítulo 1 · Epistemología y Metodología
        </div>
        <h2 className="text-3xl lg:text-4xl font-editorial font-bold text-stone-900 dark:text-stone-50">
          Fundamentos del Diseño de Investigación Científica
        </h2>
        <p className="mt-3 text-base text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
          En la investigación científica, el <em>diseño</em> constituye la brújula operacional que articula
          la pregunta de investigación con la recolección empírica y el análisis riguroso de datos.
        </p>
      </div>

      {/* Two Column Theoretical Foundations: Sampieri vs Ñaupas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Hernández-Sampieri */}
        <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 text-xs text-indigo-800 dark:text-indigo-300 font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Hernández-Sampieri &amp; Mendoza (2018)</span>
          </div>
          <h3 className="text-xl font-editorial font-bold text-stone-900 dark:text-stone-100">
            El diseño como plan estratégico de respuesta
          </h3>
          <blockquote className="border-l-2 border-indigo-700 dark:border-indigo-400 pl-4 py-1 italic text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
            «El término diseño se refiere al plan o estrategia concebida para obtener la información que se desea
            con el fin de responder al planteamiento del problema... En el enfoque cuantitativo, el investigador
            utiliza su o sus diseños para analizar la certeza de las hipótesis formuladas en un contexto en
            particular o para aportar evidencia respecto a los lineamientos de la investigación si es que no tiene hipótesis».
            <span className="block mt-1 text-xs font-sans not-italic text-stone-500">— (p. 150)</span>
          </blockquote>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            Sampieri enfatiza que si el diseño está bien concebido, el producto final de la investigación
            tendrá mayores posibilidades de éxito para responder a las preguntas y resolver la incertidumbre.
          </p>
        </div>

        {/* Card 2: Ñaupas et al. */}
        <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 text-xs text-teal-800 dark:text-teal-300 font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Ñaupas Paitán et al. (2018)</span>
          </div>
          <h3 className="text-xl font-editorial font-bold text-stone-900 dark:text-stone-100">
            El diseño como modelo de decisión y control de varianza
          </h3>
          <blockquote className="border-l-2 border-teal-700 dark:border-teal-400 pl-4 py-1 italic text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
            «El diseño de investigación es la estructura o esquema metodológico de contrastación de hipótesis...
            Se fundamenta en el principio de maximizar la varianza sistemática primaria (debida a las variables independientes),
            controlar la varianza de variables extrañas no deseadas y minimizar la varianza del error de medición».
            <span className="block mt-1 text-xs font-sans not-italic text-stone-500">— (pp. 210-212)</span>
          </blockquote>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            Ñaupas pone el acento en el rigor métrico y en la eliminación metódica de sesgos técnicos mediante
            el control experimental y la precisión en la definición de la unidad de análisis.
          </p>
        </div>
      </div>

      {/* The Three Methodological Routes Interactive Section */}
      <div className="p-6 sm:p-8 rounded-xl bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-editorial font-bold text-stone-900 dark:text-stone-100">
              Las Tres Rutas de la Investigación Científica
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
              Seleccione una ruta metodológica para examinar su lógica y aplicación concreta en el sector tecnológico:
            </p>
          </div>

          {/* Segmented Control Buttons */}
          <div className="flex items-center p-1 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg shrink-0">
            <button
              onClick={() => setActiveRoute('cuantitativa')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeRoute === 'cuantitativa'
                  ? 'bg-indigo-700 text-white shadow-xs'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Ruta Cuantitativa
            </button>
            <button
              onClick={() => setActiveRoute('cualitativa')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeRoute === 'cualitativa'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Ruta Cualitativa
            </button>
            <button
              onClick={() => setActiveRoute('mixta')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeRoute === 'mixta'
                  ? 'bg-stone-800 dark:bg-stone-600 text-white shadow-xs'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Ruta Mixta
            </button>
          </div>
        </div>

        {/* Active Route Content Card */}
        {activeRoute === 'cuantitativa' && (
          <div className="space-y-4 bg-white dark:bg-stone-900 p-6 rounded-lg border border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
              <span>Lógica Deductiva · Probatoria · Secuencial</span>
            </div>
            <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Ruta Cuantitativa: Medición numérica y contrastación de hipótesis
            </h4>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              Sigue un patrón estructurado y lineal. Se origina en una idea acotada de la cual derivan objetivos
              y preguntas de investigación, se revisa la literatura y se construye un marco o perspectiva teórica.
              De las preguntas se derivan hipótesis que se someten a prueba mediante el empleo de diseños de investigación apropiados.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                <span className="font-bold block text-stone-900 dark:text-stone-100 mb-1">Características Clave</span>
                Muestras representativas, recolección estandarizada, análisis estadístico y búsqueda de generalización.
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                <span className="font-bold block text-stone-900 dark:text-stone-100 mb-1">Ejemplo en Ingeniería</span>
                Medición del tiempo de convergencia de un algoritmo distribuido frente a latencias variables de red.
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                <span className="font-bold block text-stone-900 dark:text-stone-100 mb-1">Criterio de Rigor</span>
                Validez interna, validez externa y fiabilidad de instrumentos psicométricos o sensores telemétricos.
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('cuantitativos')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-400 hover:underline"
              >
                <span>Explorar diseños cuantitativos experimentales y no experimentales</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {activeRoute === 'cualitativa' && (
          <div className="space-y-4 bg-white dark:bg-stone-900 p-6 rounded-lg border border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
              <span>Lógica Inductiva · Holística · Comprensiva</span>
            </div>
            <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Ruta Cualitativa: Exploración de significados y contextos profundos
            </h4>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              Es recursiva, dinámica y flexible. En lugar de iniciar con una teoría rígida y contrastarla,
              examina el mundo social y los fenómenos técnicos desde la perspectiva de los propios actores.
              Desarrolla conceptos y comprensiones a partir de pautas en los datos, sin reducir las vivencias a números.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                <span className="font-bold block text-stone-900 dark:text-stone-100 mb-1">Características Clave</span>
                Muestreo intencional o teórico, inmersión en campo, categorización abierta y saturación teórica.
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                <span className="font-bold block text-stone-900 dark:text-stone-100 mb-1">Ejemplo en Ingeniería</span>
                Estudio etnográfico sobre cómo los equipos de desarrollo gestionan la deuda técnica en startups remotas.
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                <span className="font-bold block text-stone-900 dark:text-stone-100 mb-1">Criterio de Rigor</span>
                Credibilidad (triangulación), transferibilidad, auditabilidad y reflexividad del investigador.
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('cualitativos')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline"
              >
                <span>Explorar diseños cualitativos (teoría fundamentada, etnografía, fenomenología...)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {activeRoute === 'mixta' && (
          <div className="space-y-4 bg-white dark:bg-stone-900 p-6 rounded-lg border border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
              <span>Lógica Pragmática · Multimetodológica · Integradora</span>
            </div>
            <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Ruta Mixta: Sinergia analítica y comprensión multifacética
            </h4>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              Combina sistemáticamente los métodos cuantitativo y cualitativo en un mismo estudio con el fin de obtener
              una perspectiva más amplia y profunda del fenómeno. No es una simple suma de partes, sino una integración
              en el planteamiento, muestreo, análisis e inferencias (diseños concurrentes, secuenciales explicativos o exploratorios).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                <span className="font-bold block text-stone-900 dark:text-stone-100 mb-1">Características Clave</span>
                Triangulación de datos, complementariedad, desarrollo de instrumentos y contextualización de métricas.
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                <span className="font-bold block text-stone-900 dark:text-stone-100 mb-1">Ejemplo en Ingeniería</span>
                Medición automatizada de caídas de servicio (cuanti) triangulada con entrevistas a operadores SRE (cuali).
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60">
                <span className="font-bold block text-stone-900 dark:text-stone-100 mb-1">Criterio de Rigor</span>
                Meta-inferencias coherentes, equivalencia de integración y validez de conversión multimetódica.
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('comparativo')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-800 dark:text-stone-200 hover:underline"
              >
                <span>Revisar matriz comparativa entre rutas y dimensiones</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Practical Decision Guide: ¿Qué diseño elegir en Ingeniería de Sistemas? */}
      <div className="border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-stone-900 space-y-6 shadow-xs">
        <div className="border-b border-stone-100 dark:border-stone-800 pb-4">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-semibold mb-1">
            Aplicación Práctica · Guía de Decisión Metodológica
          </div>
          <h3 className="text-2xl font-editorial font-bold text-stone-900 dark:text-stone-100">
            ¿Qué diseño elegir en Ingeniería de Sistemas?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
            La elección del diseño depende directamente del problema técnico planteado, el alcance del estudio y el grado de control sobre las variables del sistema:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {designDecisionGuide.map((item, idx) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/80 dark:border-stone-700/80 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400">
                  Escenario 0{idx + 1} · Ruta {item.route}
                </span>
                <span className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                  Diseño sugerido: {item.recommendedApproach}
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 leading-snug">
                {item.scenarioQuestion}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
                <div className="p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800">
                  <strong className="text-stone-900 dark:text-stone-100 block mb-0.5">Esquema / Subdiseño:</strong>
                  <span className="text-stone-600 dark:text-stone-300">{item.specificDesign}</span>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800">
                  <strong className="text-stone-900 dark:text-stone-100 block mb-0.5">Caso en Ingeniería de Sistemas:</strong>
                  <span className="text-stone-600 dark:text-stone-300">{item.systemEngineeringExample}</span>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800">
                  <strong className="text-stone-900 dark:text-stone-100 block mb-0.5">Instrumentación Recomendada:</strong>
                  <span className="text-stone-600 dark:text-stone-300">{item.suggestedInstruments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusiones Generales Section */}
      <div className="border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 bg-stone-100/80 dark:bg-stone-900/80 space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400 font-semibold">
          Síntesis Crítica del Módulo
        </div>
        <h3 className="text-2xl font-editorial font-bold text-stone-900 dark:text-stone-100">
          Conclusiones sobre la Aplicación de Diseños de Investigación en Ingeniería
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-2">
          <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
            <strong className="text-stone-900 dark:text-stone-100 block">1. Complementariedad Epistemológica</strong>
            <p className="text-xs leading-relaxed">
              En la Ingeniería de Sistemas moderna no existe supremacía de una ruta sobre otra: mientras los diseños experimentales permiten validar la eficiencia algorítmica y el rendimiento de hardware/software, los estudios de casos y diseños cualitativos resultan indispensables para comprender los factores humanos y organizacionales que determinan el éxito o fracaso de un sistema en producción.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
            <strong className="text-stone-900 dark:text-stone-100 block">2. Rigor en la Validez y Confiabilidad</strong>
            <p className="text-xs leading-relaxed">
              Todo diseño requiere blindar la calidad de sus hallazgos. En la ruta cuantitativa esto exige aislar variables extrañas, repetir corridas de telemetría y calcular coeficientes como el Alfa de Cronbach; en la ruta cualitativa demanda triangulación de múltiples fuentes de evidencia, saturación teórica y auditoría documental.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
            <strong className="text-stone-900 dark:text-stone-100 block">3. Pertinencia del Enfoque Mixto</strong>
            <p className="text-xs leading-relaxed">
              Los proyectos tecnológicos de alta complejidad (como la adopción de inteligencia artificial, ciberseguridad DevSecOps o migración a arquitecturas cloud) se benefician de los diseños mixtos, al integrar métricas duras de desempeño computacional con la valoración profunda de la experiencia de los usuarios e ingenieros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

