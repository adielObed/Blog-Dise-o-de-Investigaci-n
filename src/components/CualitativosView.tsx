import React, { useState } from 'react';
import { GitCommit, Compass, Users2, History, RotateCw, Network, BookOpen, Layers } from 'lucide-react';

interface QualitativeDesignDetail {
  id: string;
  name: string;
  pioneers: string;
  icon: React.ComponentType<{ className?: string }>;
  purpose: string;
  process: string[];
  techExample: {
    title: string;
    context: string;
    contribution: string;
  };
  rigorCriteria: string;
}

export const CualitativosView: React.FC = () => {
  const [selectedDesignId, setSelectedDesignId] = useState<string>('teoria-fundamentada');

  const designs: QualitativeDesignDetail[] = [
    {
      id: 'teoria-fundamentada',
      name: 'Teoría Fundamentada (Grounded Theory)',
      pioneers: 'Glaser & Strauss (1967), Strauss & Corbin (1990), Charmaz (2014)',
      icon: Network,
      purpose: 'Generar inductivamente modelos teóricos y explicaciones sustantivas arraigadas directamente en los datos empíricos del campo.',
      process: [
        '1. Inmersión en campo y recolección abierta (entrevistas a profundidad, observaciones).',
        '2. Codificación Abierta: Segmentación del texto en unidades de significado y asignación de etiquetas conceptuales iniciales.',
        '3. Codificación Axial: Agrupamiento de códigos en categorías analíticas conectando condiciones causales, contexto, estrategias de acción y consecuencias.',
        '4. Codificación Selectiva: Identificación de la Categoría Nuclear (eje central) que articula todo el modelo explicativo.',
        '5. Saturación Teórica: Cese de recolección cuando nuevos testimonios ya no aportan propiedades novedosas a las categorías.'
      ],
      techExample: {
        title: 'Modelo Sustantivo de Resistencia y Adopción de DevSecOps',
        context: '18 directores de ciberseguridad y programadores sénior de Fintechs latinoamericanas.',
        contribution: 'Descubrió que la categoría nuclear que destraba la adopción de controles de seguridad en pipelines CI/CD no es el dinero ni las herramientas, sino la "Gobernanza de confianza compartida" entre seguridad y desarrollo.'
      },
      rigorCriteria: 'Auditabilidad del libro de códigos, saturación demostrada en notas de campo y triangulación con documentación de arquitectura.'
    },
    {
      id: 'etnografico',
      name: 'Diseños Etnográficos y Etnografía Virtual',
      pioneers: 'Malinowski, Geertz (1973), Hine (2000 - Netnografía)',
      icon: Users2,
      purpose: 'Describir, interpretar y comprender los patrones culturales, valores compartidos, ritos y dinámicas cotidianas de una comunidad o equipo.',
      process: [
        '1. Delimitación de la comunidad o subcultura técnica (ej. equipo distribuido en GitHub y Slack).',
        '2. Observación participante prolongada: el investigador se integra a las ceremonias y chats cotidianos.',
        '3. Registro en diarios de campo etnográficos y recolección de artefactos culturales (memes internos, tickets de Jira, mensajes de commit).',
        '4. Descripción densa (Thick Description) de los significados explícitos e implícitos de la interacción.',
        '5. Elaboración del informe etnográfico holístico.'
      ],
      techExample: {
        title: 'Etnografía de la Interacción en Equipos Ágiles 100% Remotos',
        context: '3 células de ingeniería de software distribuidas en 4 países durante 9 meses de seguimiento.',
        contribution: 'Evidenció la existencia de "silencios técnicos" en reuniones retrospectivas: los desarrolladores evitaban admitir bloqueos en público por temor al escrutinio de dashboards automatizados de productividad.'
      },
      rigorCriteria: 'Tiempo prolongado de permanencia en el entorno real y contraste de interpretaciones con los miembros observados (Member Checking).'
    },
    {
      id: 'narrativo',
      name: 'Diseños Narrativos y Biográficos',
      pioneers: 'Bruner (1990), Clandinin & Connelly (2000)',
      icon: History,
      purpose: 'Reconstruir e interpretar historias de vida, trayectorias profesionales y relatos secuenciales para comprender experiencias temporales complejas.',
      process: [
        '1. Identificación de los narradores clave según el fenómeno de interés.',
        '2. Entrevistas biográficas a profundidad y recopilación de documentos históricos o correspondencia.',
        '3. Re-storying: Organización cronológica de los eventos, contextualizando lugares, personajes y puntos de inflexión (epifanías).',
        '4. Análisis temático de los relatos para extraer significados de identidad, triunfo o fracaso.',
        '5. Devolución narrativa y co-validación con el narrador.'
      ],
      techExample: {
        title: 'Historias de Vida de Mujeres Líderes en Ciberseguridad Defensiva',
        context: 'Relatos autobiográficos de 8 arquitectas de seguridad pioneras con más de 15 años de trayectoria.',
        contribution: 'Reconstruyó los mecanismos informales de resiliencia frente a barreras de género en entornos corporativos de TI tradicionalmente masculinizados.'
      },
      rigorCriteria: 'Autenticidad del testimonio, verificación cruzada de hitos temporales con registros históricos y preservación de la voz del narrador.'
    },
    {
      id: 'fenomenologico',
      name: 'Diseños Fenomenológicos',
      pioneers: 'Husserl, Heidegger, Van Manen (1990), Moustakas (1994)',
      icon: Compass,
      purpose: 'Explorar, describir y entender las experiencias humanas con respecto a un fenómeno para develar su "esencia" común.',
      process: [
        '1. Identificación del fenómeno nuclear vivido por múltiples sujetos.',
        '2. Epogé o puesta entre paréntesis (Bracketing): el investigador suspende temporalmente sus propios juicios y presuposiciones.',
        '3. Recolección de testimonios mediante entrevistas profundas abiertas.',
        '4. Horizonalización: Considerar cada afirmación de los entrevistados con el mismo peso inicial.',
        '5. Síntesis estructural y textural: Redacción de la "esencia" invariable de lo que significa haber vivido el fenómeno.'
      ],
      techExample: {
        title: 'La Vivencia del Colapso de Infraestructura Crítica (P0 Outages)',
        context: '12 ingenieros de confiabilidad de sitios (SRE) que gestionaron caídas masivas de servicios bancarios.',
        contribution: 'Identificó la estructura esencial de la crisis: la vivencia de "túnel cognitivo", la sensación visceral ante comandos destructivos en terminales Unix y el síndrome del impostor residual tras resolver el incidente.'
      },
      rigorCriteria: 'Rigor en el bracketing reflexivo y coherencia fenomenológica de las descripciones vivenciales sin reducir lo vivido a estadísticas.'
    },
    {
      id: 'investigacion-accion',
      name: 'Diseños de Investigación-Acción (I-A)',
      pioneers: 'Kurt Lewin (1946), Kemmis & McTaggart (1988), Stringer (2014)',
      icon: RotateCw,
      purpose: 'Resolver problemas prácticos e inmediatos de una comunidad o equipo, integrando simultáneamente la indagación científica con la acción transformadora.',
      process: [
        'Ciclo 1 - Diagnosticar: Mapear el problema concreto junto con los involucrados directos.',
        'Ciclo 2 - Planificar: Diseñar colaborativamente una intervención o nuevo proceso.',
        'Ciclo 3 - Actuar e Implementar: Poner en marcha la solución en el entorno real.',
        'Ciclo 4 - Observar y Evaluar: Recoger evidencias del impacto de la acción.',
        'Ciclo 5 - Reflexionar y Re-planificar: Ajustar la estrategia e iniciar un nuevo ciclo de mejora continua en espiral.'
      ],
      techExample: {
        title: 'Optimización Colaborativa del Flujo de Pruebas en Fábricas de Software',
        context: 'Equipo conjunto de programadores, testers y analistas de negocio en 3 ciclos de 4 semanas.',
        contribution: 'Co-creación de un framework automatizado de pruebas BDD que redujo en un 60% las fallas en producción y transformó la rivalidad histórica entre desarrolladores y personal de QA.'
      },
      rigorCriteria: 'Participación democrática genuina de los actores, utilidad práctica inmediata y trazabilidad de los ciclos de la espiral reflexiva.'
    },
    {
      id: 'estudio-caso',
      name: 'Estudio de Caso Cualitativo',
      pioneers: 'Robert Yin (2018), Robert Stake (1995)',
      icon: Layers,
      purpose: 'Investigación intensiva, contextualizada y holística de una unidad singular (sistema, organización, proyecto, incidente de seguridad) en su contexto de la vida real.',
      process: [
        '1. Delimitación rigurosa de las fronteras del caso (¿qué es y qué no es el caso?).',
        '2. Múltiples fuentes de evidencia: documentos, entrevistas, telemetría y artefactos físicos.',
        '3. Creación de una base de datos del caso independiente del informe final.',
        '4. Análisis en profundidad (Within-case analysis y Cross-case analysis si son casos múltiples).',
        '5. Formulación de proposiciones y lecciones aprendidas.'
      ],
      techExample: {
        title: 'Análisis Forense y Organizacional del Hackeo a una Red Eléctrica Inteligente',
        context: 'Estudio del caso del ciberataque a la subestación SCADA de Ucrania en 2015.',
        contribution: 'Demostró que el vector crítico no fue la sofisticación del malware (BlackEnergy), sino la debilidad en políticas de autenticación multifactor y falta de segmentación de redes industriales.'
      },
      rigorCriteria: 'Triangulación convergente de fuentes múltiples y establecimiento de una cadena de evidencia transparente y verificable.'
    }
  ];

  const currentDesign = designs.find((d) => d.id === selectedDesignId) || designs[0];
  const CurrentIcon = currentDesign.icon;

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Chapter Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="text-xs uppercase tracking-widest font-mono text-teal-700 dark:text-teal-400 font-semibold mb-2">
          Capítulo 3 · Ruta Cualitativa
        </div>
        <h2 className="text-3xl lg:text-4xl font-editorial font-bold text-stone-900 dark:text-stone-50">
          Diseños de Investigación Cualitativos
        </h2>
        <p className="mt-3 text-base text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
          Marcos flexibles y recursivos para comprender en profundidad los significados, culturas,
          experiencias subjetivas y procesos colaborativos en ingeniería de software y tecnología.
        </p>
      </div>

      {/* Interactive Design Selector Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {designs.map((design) => {
          const isSelected = design.id === selectedDesignId;
          const IconComponent = design.icon;
          return (
            <button
              key={design.id}
              onClick={() => setSelectedDesignId(design.id)}
              className={`p-3 text-left rounded-xl border transition-all text-xs flex flex-col justify-between gap-3 ${
                isSelected
                  ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-600 dark:border-teal-500 shadow-xs'
                  : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-700'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <IconComponent
                  className={`w-4 h-4 ${
                    isSelected ? 'text-teal-700 dark:text-teal-400' : 'text-stone-500 dark:text-stone-400'
                  }`}
                />
                <span className="text-[10px] font-mono text-stone-400">Cap. 14</span>
              </div>
              <span
                className={`font-semibold line-clamp-2 leading-snug ${
                  isSelected ? 'text-teal-900 dark:text-teal-200' : 'text-stone-700 dark:text-stone-300'
                }`}
              >
                {design.name.split('(')[0].trim()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Design Dossier Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-6 shadow-xs">
        {/* Top Header of Selected Design */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200/80 dark:border-stone-800/80 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-teal-700 dark:text-teal-400 font-semibold">
              <CurrentIcon className="w-4 h-4" />
              <span>Enfoque Cualitativo · {currentDesign.name}</span>
            </div>
            <h3 className="text-2xl font-editorial font-bold text-stone-900 dark:text-stone-50">
              {currentDesign.name}
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Exponentes clave: <span className="text-stone-700 dark:text-stone-300 font-medium">{currentDesign.pioneers}</span>
            </p>
          </div>
        </div>

        {/* Purpose */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">
            Propósito Epistemológico
          </h4>
          <p className="text-sm sm:text-base text-stone-700 dark:text-stone-200 leading-relaxed">
            {currentDesign.purpose}
          </p>
        </div>

        {/* Two-column layout: Process vs Engineering Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
          {/* Methodological Stages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">
              Fases Metodológicas e Instrumentación
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              {currentDesign.process.map((step, idx) => (
                <div key={idx} className="p-2.5 bg-stone-50 dark:bg-stone-800/60 rounded-md border border-stone-200/60 dark:border-stone-700/60 leading-relaxed">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Case Study in Engineering */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">
              Caso Aplicado en Ingeniería y Tecnología
            </h4>
            <div className="p-5 rounded-xl bg-teal-50/40 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-900/60 space-y-3">
              <span className="inline-block text-xs font-bold text-teal-800 dark:text-teal-300">
                {currentDesign.techExample.title}
              </span>
              <div className="text-xs text-stone-700 dark:text-stone-300 space-y-2 leading-relaxed">
                <div>
                  <strong className="text-stone-900 dark:text-stone-100">Contexto y Muestra: </strong>
                  {currentDesign.techExample.context}
                </div>
                <div>
                  <strong className="text-stone-900 dark:text-stone-100">Aporte Central: </strong>
                  {currentDesign.techExample.contribution}
                </div>
              </div>
            </div>

            {/* Rigor Criteria */}
            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-700/60 space-y-1">
              <span className="text-xs font-bold text-stone-800 dark:text-stone-200 block">
                Criterios de Rigor Metodológico (Dependencia, Credibilidad y Confirmabilidad):
              </span>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                {currentDesign.rigorCriteria}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
