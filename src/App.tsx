/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Sun,
  Moon,
  ArrowUp,
  ExternalLink,
  Copy,
  Check,
  ClipboardList,
  BarChart3,
  Search,
  FlaskConical,
  Settings,
  TrendingUp,
  Calendar,
  Hourglass,
  Laptop,
  Brain,
  Globe,
  Puzzle,
  Building2,
  RefreshCw,
  Users,
  FileText,
  Mic,
  Eye,
  Gauge,
  FolderSearch,
  Target,
  Video,
  CheckCircle2,
  Menu,
  X,
} from 'lucide-react';
import { ReadingProgressBar } from './components/ReadingProgressBar';

interface BlogArticle {
  id: string;
  number: number;
  badgeRoute: string;
  badgeDesign: string;
  routeColor: 'indigo' | 'teal' | 'amber';
  title: string;
  citationShort: string;
  description: string;
  methodologyDetail: string;
  mainResults: string;
  blogRelation: string;
  doiUrl: string;
  doiLabel: string;
  fullApa: string;
}

const blogArticles: BlogArticle[] = [
  {
    id: 'art-1',
    number: 1,
    badgeRoute: 'CUANTITATIVO',
    badgeDesign: 'EXPERIMENTAL',
    routeColor: 'indigo',
    title: 'Impact of usability mechanisms: An experiment on efficiency, effectiveness and user satisfaction',
    citationShort: 'Ferreira et al. (2020)',
    description:
      'Ferreira et al. (2020) presentan un experimento controlado orientado a estudiar el impacto de la incorporación de mecanismos específicos de usabilidad (como retroalimentación de progreso, preferencias y cancelación de acciones) sobre la eficiencia, efectividad y satisfacción de los usuarios.',
    methodologyDetail:
      'El estudio empleó tareas simuladas de compra en línea en aplicaciones web de comercio electrónico y registró métricas cuantificables del desempeño de los participantes, tales como tiempo de ejecución, número de clics y tasa de finalización de tareas, junto con cuestionarios estandarizados de satisfacción.',
    mainResults:
      'Resultados principales del estudio: Los resultados demostraron estadísticamente que la integración de mecanismos de usabilidad redujo el tiempo promedio para completar tareas críticas en un 22% y disminuyó la tasa de errores de navegación, incrementando significativamente los puntajes de satisfacción percibida (p < 0.05) frente a la versión de control sin dichos mecanismos.',
    blogRelation:
      'Es un ejemplo claro de cómo un diseño experimental manipula deliberadamente una condición en el software y utiliza métricas cuantificables objetivas para evaluar la interacción de los usuarios con un sistema.',
    doiUrl: 'https://doi.org/10.1016/j.infsof.2019.106195',
    doiLabel: '10.1016/j.infsof.2019.106195',
    fullApa:
      'Ferreira, J. M., Acuña, S. T., Dieste, O., Vegas, S., Santos, A., Rodríguez, F., & Juristo, N. (2020). Impact of usability mechanisms: An experiment on efficiency, effectiveness and user satisfaction. Information and Software Technology, 117, 106195. https://doi.org/10.1016/j.infsof.2019.106195',
  },
  {
    id: 'art-2',
    number: 2,
    badgeRoute: 'CUALITATIVO',
    badgeDesign: 'ESTUDIO DE CASOS',
    routeColor: 'teal',
    title: 'Strategies to manage quality requirements in agile software development: A multiple case study',
    citationShort: 'Karhapää et al. (2021)',
    description:
      'Karhapää et al. (2021) investigan las estrategias utilizadas en la industria para gestionar requisitos de calidad (requisitos no funcionales como seguridad, rendimiento y mantenibilidad) dentro del desarrollo ágil de software mediante un estudio de múltiples casos.',
    methodologyDetail:
      'El trabajo analiza en profundidad las experiencias reales de cuatro organizaciones de desarrollo de software en Europa y utiliza entrevistas semiestructuradas a arquitectos, propietarios de producto y desarrolladores como fuente principal de información.',
    mainResults:
      'Resultados principales del estudio: El estudio identificó que las organizaciones ágiles suelen postergar la especificación formal de requisitos de calidad en las primeras iteraciones, lo que genera deuda técnica acumulada; asimismo, clasificó tres estrategias efectivas de mitigación basadas en definiciones de "Hecho" (Definition of Done), prototipado arquitectónico temprano y comunicación continua entre roles técnicos y de negocio.',
    blogRelation:
      'Muestra cómo un diseño cualitativo de estudio de casos permite comprender a fondo prácticas organizacionales, decisiones técnicas y experiencias humanas dentro de contextos reales de ingeniería de software.',
    doiUrl: 'https://doi.org/10.1007/s10664-020-09903-x',
    doiLabel: '10.1007/s10664-020-09903-x',
    fullApa:
      'Karhapää, P., Behutiye, W., Rodríguez, P., Oivo, M., Costal, D., Franch, X., Aaramaa, S., Choraś, M., Partanen, J., & Abhervé, A. (2021). Strategies to manage quality requirements in agile software development: A multiple case study. Empirical Software Engineering, 26, Article 28. https://doi.org/10.1007/s10664-020-09903-x',
  },
  {
    id: 'art-3',
    number: 3,
    badgeRoute: 'CUALITATIVO / EXPLORATORIO',
    badgeDesign: 'INGENIERÍA DE SOFTWARE',
    routeColor: 'teal',
    title: 'Single-state state machines in model-driven software engineering: An exploratory study',
    citationShort: 'Yang et al. (2021)',
    description:
      'Yang et al. (2021) presentan un estudio exploratorio sobre la aparición y el uso de máquinas de estados de un solo estado (Single-State State Machines - SSSM) en proyectos reales de ingeniería de software basada en modelos (MDSE).',
    methodologyDetail:
      'El estudio combina la inspección documental de 1 285 modelos industriales reales alojados en repositorios de ingeniería con entrevistas a ingenieros de modelado para indagar el fenómeno y comprender las razones prácticas detrás de este patrón.',
    mainResults:
      'Resultados principales del estudio: Los autores hallaron que más del 26% de los sistemas modelados contenían máquinas de un solo estado y determinaron que, lejos de ser errores de diseño, los ingenieros las utilizan intencionalmente para encapsular lógica reactiva orientada a eventos sin cambio de estado, ejecutar pruebas unitarias aisladas y definir plantillas arquitectónicas base.',
    blogRelation:
      'Permite observar cómo una investigación exploratoria combina el análisis documental de artefactos de software con entrevistas técnicas para comprender un fenómeno poco documentado en la literatura.',
    doiUrl: 'https://doi.org/10.1007/s10664-021-10015-3',
    doiLabel: '10.1007/s10664-021-10015-3',
    fullApa:
      'Yang, J., Chaudron, M. R. V., & Cleophas, L. (2021). Single-state state machines in model-driven software engineering: An exploratory study. Empirical Software Engineering, 26(6), Article 124. https://doi.org/10.1007/s10664-021-10015-3',
  },
  {
    id: 'art-4',
    number: 4,
    badgeRoute: 'MIXTO',
    badgeDesign: 'CUANTITATIVO + CUALITATIVO',
    routeColor: 'amber',
    title: 'Adoption intention and factors influencing the use of gerontechnology: A mixed-methods study',
    citationShort: 'Huang et al. (2021)',
    description:
      'Huang et al. (2021) desarrollan un estudio de métodos mixtos sobre la intención de adopción y los factores determinantes asociados con el uso de tecnologías de asistencia y monitoreo digital para adultos mayores.',
    methodologyDetail:
      'El diseño integra una fase cuantitativa basada en cuestionarios estructurados y análisis estadístico multivariable (n = 368 participantes) con una fase cualitativa posterior mediante entrevistas semiestructuradas a profundidad.',
    mainResults:
      'Resultados principales del estudio: El análisis cuantitativo demostró que la utilidad percibida (β = 0.41, p < 0.001), el apoyo familiar y la facilidad de uso explican la mayor varianza en la intención de adopción; complementariamente, la fase cualitativa reveló que la ansiedad tecnológica, el temor a vulnerar la privacidad de sus datos y la sobrecarga visual de las interfaces son las barreras principales que impiden el uso sostenido.',
    blogRelation:
      'Es un ejemplo representativo de cómo los enfoques cuantitativo y cualitativo se integran cuando un problema tecnológico requiere medir factores estadísticos y, al mismo tiempo, comprender las experiencias humanas de los usuarios.',
    doiUrl: 'https://doi.org/10.3389/fpubh.2021.687048',
    doiLabel: '10.3389/fpubh.2021.687048',
    fullApa:
      'Huang, Y., Li, X., & Zhang, H. (2021). Adoption intention and factors influencing the use of gerontechnology in Chinese community-dwelling older adults: A mixed-methods study. Frontiers in Public Health, 9, 687048. https://doi.org/10.3389/fpubh.2021.687048',
  },
];

interface ReferenceEntry {
  id: string;
  html: string;
  raw: string;
  doiUrl?: string;
}

const apaReferencesList: ReferenceEntry[] = [
  {
    id: 'ref-ferreira',
    html: 'Ferreira, J. M., Acuña, S. T., Dieste, O., Vegas, S., Santos, A., Rodríguez, F., &amp; Juristo, N. (2020). Impact of usability mechanisms: An experiment on efficiency, effectiveness and user satisfaction. <em>Information and Software Technology</em>, <em>117</em>, 106195. https://doi.org/10.1016/j.infsof.2019.106195',
    raw: 'Ferreira, J. M., Acuña, S. T., Dieste, O., Vegas, S., Santos, A., Rodríguez, F., & Juristo, N. (2020). Impact of usability mechanisms: An experiment on efficiency, effectiveness and user satisfaction. Information and Software Technology, 117, 106195. https://doi.org/10.1016/j.infsof.2019.106195',
    doiUrl: 'https://doi.org/10.1016/j.infsof.2019.106195',
  },
  {
    id: 'ref-sampieri-libro',
    html: 'Hernández-Sampieri, R., &amp; Mendoza Torres, C. P. (2018). <em>Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta</em>. McGraw-Hill Interamericana Editores.',
    raw: 'Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Interamericana Editores.',
  },
  {
    id: 'ref-sampieri-cap7',
    html: 'Hernández-Sampieri, R., &amp; Mendoza Torres, C. P. (2018). Capítulo 7. Concepción o elección del diseño de investigación en la ruta cuantitativa: El mapa específico. En <em>Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta</em> (pp. 148–193). McGraw-Hill.',
    raw: 'Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Capítulo 7. Concepción o elección del diseño de investigación en la ruta cuantitativa: El mapa específico. En Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta (pp. 148–193). McGraw-Hill.',
  },
  {
    id: 'ref-sampieri-cap14',
    html: 'Hernández-Sampieri, R., &amp; Mendoza Torres, C. P. (2018). Capítulo 14. Elección del diseño o abordaje de investigación en la ruta cualitativa. En <em>Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta</em> (pp. 522–568). McGraw-Hill.',
    raw: 'Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Capítulo 14. Elección del diseño o abordaje de investigación en la ruta cualitativa. En Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta (pp. 522–568). McGraw-Hill.',
  },
  {
    id: 'ref-video-cuali',
    html: 'Homo Academicus. (2021, 15 de abril). <em>Enfoques de investigación cuantitativo y cualitativo, Cap. 1: Sampieri y otros</em> [Archivo de video]. YouTube. https://www.youtube.com/watch?v=s_Is2MA0YkQ',
    raw: 'Homo Academicus. (2021, 15 de abril). Enfoques de investigación cuantitativo y cualitativo, Cap. 1: Sampieri y otros [Archivo de video]. YouTube. https://www.youtube.com/watch?v=s_Is2MA0YkQ',
    doiUrl: 'https://www.youtube.com/watch?v=s_Is2MA0YkQ',
  },
  {
    id: 'ref-huang',
    html: 'Huang, Y., Li, X., &amp; Zhang, H. (2021). Adoption intention and factors influencing the use of gerontechnology in Chinese community-dwelling older adults: A mixed-methods study. <em>Frontiers in Public Health</em>, <em>9</em>, 687048. https://doi.org/10.3389/fpubh.2021.687048',
    raw: 'Huang, Y., Li, X., & Zhang, H. (2021). Adoption intention and factors influencing the use of gerontechnology in Chinese community-dwelling older adults: A mixed-methods study. Frontiers in Public Health, 9, 687048. https://doi.org/10.3389/fpubh.2021.687048',
    doiUrl: 'https://doi.org/10.3389/fpubh.2021.687048',
  },
  {
    id: 'ref-karhapaa',
    html: 'Karhapää, P., Behutiye, W., Rodríguez, P., Oivo, M., Costal, D., Franch, X., Aaramaa, S., Choraś, M., Partanen, J., &amp; Abhervé, A. (2021). Strategies to manage quality requirements in agile software development: A multiple case study. <em>Empirical Software Engineering</em>, <em>26</em>, Article 28. https://doi.org/10.1007/s10664-020-09903-x',
    raw: 'Karhapää, P., Behutiye, W., Rodríguez, P., Oivo, M., Costal, D., Franch, X., Aaramaa, S., Choraś, M., Partanen, J., & Abhervé, A. (2021). Strategies to manage quality requirements in agile software development: A multiple case study. Empirical Software Engineering, 26, Article 28. https://doi.org/10.1007/s10664-020-09903-x',
    doiUrl: 'https://doi.org/10.1007/s10664-020-09903-x',
  },
  {
    id: 'ref-naupas',
    html: 'Ñaupas Paitán, H., Valdivia Dueñas, M. R., Palacios Vilela, J. J., &amp; Romero Delgado, H. E. (2018). <em>Metodología de la investigación cuantitativa-cualitativa y redacción de la tesis</em> (5.ª ed.). Ediciones de la U.',
    raw: 'Ñaupas Paitán, H., Valdivia Dueñas, M. R., Palacios Vilela, J. J., & Romero Delgado, H. E. (2018). Metodología de la investigación cuantitativa-cualitativa y redacción de la tesis (5.ª ed.). Ediciones de la U.',
  },
  {
    id: 'ref-video-cuanti',
    html: 'USMP Virtual Oficial. (2021, 10 de junio). <em>Máster Class: Metodología de la Investigación - Dr. Hernández Sampieri</em> [Archivo de video]. YouTube. https://www.youtube.com/watch?v=IP5-ZPxmfMs',
    raw: 'USMP Virtual Oficial. (2021, 10 de junio). Máster Class: Metodología de la Investigación - Dr. Hernández Sampieri [Archivo de video]. YouTube. https://www.youtube.com/watch?v=IP5-ZPxmfMs',
    doiUrl: 'https://www.youtube.com/watch?v=IP5-ZPxmfMs',
  },
  {
    id: 'ref-yang',
    html: 'Yang, J., Chaudron, M. R. V., &amp; Cleophas, L. (2021). Single-state state machines in model-driven software engineering: An exploratory study. <em>Empirical Software Engineering</em>, <em>26</em>(6), Article 124. https://doi.org/10.1007/s10664-021-10015-3',
    raw: 'Yang, J., Chaudron, M. R. V., & Cleophas, L. (2021). Single-state state machines in model-driven software engineering: An exploratory study. Empirical Software Engineering, 26(6), Article 124. https://doi.org/10.1007/s10664-021-10015-3',
    doiUrl: 'https://doi.org/10.1007/s10664-021-10015-3',
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme_preference');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAllRefs, setCopiedAllRefs] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme_preference', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme_preference', 'light');
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleCopyAllReferences = () => {
    const allText = apaReferencesList.map((r) => r.raw).join('\n\n');
    navigator.clipboard.writeText(allText);
    setCopiedAllRefs(true);
    setTimeout(() => setCopiedAllRefs(false), 2500);
  };

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'diseno', label: 'Diseño' },
    { id: 'cuantitativo', label: 'Cuantitativo' },
    { id: 'cualitativo', label: 'Cualitativo' },
    { id: 'comparacion', label: 'Comparación' },
    { id: 'tecnicas', label: 'Técnicas' },
    { id: 'articulos', label: 'Artículos' },
    { id: 'elegir', label: '¿Qué elegir?' },
    { id: 'videos', label: 'Videos' },
    { id: 'conclusiones', label: 'Conclusiones' },
    { id: 'referencias', label: 'Referencias' },
  ];

  const BackToTopLink = () => (
    <div className="pt-4 flex justify-end">
      <button
        onClick={() => scrollToSection('inicio')}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 dark:text-stone-400 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors"
      >
        <ArrowUp className="w-3.5 h-3.5" />
        <span>Volver al inicio</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-200">
      <ReadingProgressBar />

      {/* Sticky Top Bar */}
      <header className="sticky top-0 z-40 bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16">
            {/* Brand Wordmark */}
            <button
              onClick={() => scrollToSection('inicio')}
              className="flex items-center gap-2 text-left font-bold tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-5 h-5 text-indigo-700 dark:text-indigo-400 shrink-0" />
              <span className="font-editorial text-lg">Diseños de Investigación</span>
            </button>

            {/* Desktop Section Links */}
            <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-1">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-2.5 py-1.5 text-xs font-medium text-stone-600 dark:text-stone-300 hover:text-indigo-700 dark:hover:text-indigo-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/60 rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Action: Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
                aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                title={darkMode ? 'Modo claro' : 'Modo oscuro'}
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-stone-700" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
                aria-label="Menú de secciones"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 px-4 py-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-2 text-left text-xs font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-900 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Single-Page Academic Blog Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* HERO / HEADER DEL BLOG */}
        <section id="inicio" className="pb-10 border-b border-stone-200 dark:border-stone-800 space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-medium">
            <span>noviembre, 2026</span>
            <span aria-hidden="true">·</span>
            <span>Competencias investigativas</span>
            <span aria-hidden="true">·</span>
            <span>Blog académico</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-stone-900 dark:text-stone-50 tracking-tight leading-tight text-balance">
              Diseños de investigación: explorando las rutas cuantitativa y cualitativa
            </h1>
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl">
              Un recorrido por los principales diseños de investigación, sus características, diferencias,
              aplicaciones, técnicas de recolección y ejemplos relacionados con la Ingeniería de Sistemas.
            </p>
          </div>

          {/* Ficha de Identificación Académica */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-stone-400 dark:text-stone-500 block mb-0.5">Realizado por:</span>
              <strong className="text-stone-900 dark:text-stone-100 text-sm">Adiel Herreño</strong>
            </div>
            <div>
              <span className="text-stone-400 dark:text-stone-500 block mb-0.5">Facultad:</span>
              <strong className="text-stone-900 dark:text-stone-100">Facultad de Ingeniería</strong>
            </div>
            <div>
              <span className="text-stone-400 dark:text-stone-500 block mb-0.5">Institución:</span>
              <strong className="text-stone-900 dark:text-stone-100">Corporación Universitaria Iberoamericana</strong>
            </div>
            <div className="sm:col-span-2">
              <span className="text-stone-400 dark:text-stone-500 block mb-0.5">Asignatura / Programa:</span>
              <strong className="text-stone-900 dark:text-stone-100">
                Competencias investigativas (GLORIA RUBIO 24082026_C12_202634)
              </strong>
            </div>
            <div>
              <span className="text-stone-400 dark:text-stone-500 block mb-0.5">Docente:</span>
              <strong className="text-stone-900 dark:text-stone-100">Gloria Alejandra Rubio Vanegas</strong>
            </div>
          </div>

          {/* INTRODUCCIÓN & OBJETIVO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="md:col-span-2 p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
              <h2 className="text-lg font-editorial font-bold text-stone-900 dark:text-stone-100">
                Introducción
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                La investigación permite estudiar situaciones, comprender fenómenos y generar conocimiento mediante
                procesos organizados y sistemáticos. Para desarrollar una investigación es necesario establecer una
                ruta que permita responder la pregunta planteada y alcanzar los objetivos propuestos.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                En este contexto, el diseño de investigación cumple un papel fundamental porque orienta las decisiones
                relacionadas con la forma de obtener, organizar y analizar la información. En este blog se presentan
                los principales diseños asociados con las rutas cuantitativa y cualitativa, sus características,
                semejanzas, diferencias y aplicaciones en situaciones relacionadas con la Ingeniería de Sistemas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/70 dark:border-indigo-900/60 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 font-bold text-xs uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>Objetivo del blog</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
                  Explicar los principales diseños de investigación y reconocer su aplicación en situaciones
                  relacionadas con la Ingeniería de Sistemas, mediante conceptos fundamentados, ejemplos prácticos,
                  artículos científicos analizados en sus resultados, técnicas de recolección y recursos audiovisuales
                  citados en APA 7.ª edición.
                </p>
              </div>
              <div className="text-[11px] text-indigo-700 dark:text-indigo-400 font-medium">
                Basado en Hernández-Sampieri &amp; Mendoza (2018) y Ñaupas et al. (2018).
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 1: ¿QUÉ ES UN DISEÑO DE INVESTIGACIÓN? */}
        <section id="diseno" className="space-y-6 pb-10 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-stone-50">
              1. ¿Qué es un diseño de investigación?
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              El diseño de investigación es la estrategia metodológica que orienta la manera de responder una pregunta
              de investigación (Hernández-Sampieri &amp; Mendoza, 2018). Define cómo se organizará el estudio, cómo se
              obtendrá la información necesaria y cómo se analizarán los datos para alcanzar los objetivos propuestos y
              controlar posibles fuentes de error (Ñaupas et al., 2018).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-700 dark:text-indigo-400">
                <ClipboardList className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">Planificación</h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Organiza las etapas, procedimientos y decisiones necesarias para desarrollar el estudio de manera
                coherente con el planteamiento del problema.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-700 dark:text-teal-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">Recolección</h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Establece cómo se obtendrá la información empírica necesaria (mediciones, pruebas, entrevistas u
                observaciones) para responder la pregunta de investigación.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-700 dark:text-amber-400">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">Análisis</h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Orienta la manera en que la información será examinada, validada e interpretada de acuerdo con el
                enfoque cuantitativo, cualitativo o mixto seleccionado.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: DISEÑOS DE INVESTIGACIÓN CUANTITATIVA */}
        <section id="cuantitativo" className="space-y-6 pb-10 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-stone-50">
              2. Diseños de investigación cuantitativa
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              La ruta cuantitativa trabaja principalmente con variables que pueden ser medidas numéricamente y
              analizadas mediante procedimientos estadísticos sistemáticos (Hernández-Sampieri, 2018, Cap. 7). Sus
              diseños permiten establecer cómo se obtendrán y analizarán los datos necesarios para contrastar hipótesis
              y responder la pregunta de investigación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Experimental */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                  <FlaskConical className="w-4 h-4 shrink-0" />
                  <h3>Experimental</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  El investigador manipula deliberadamente al menos una variable independiente para analizar sus
                  efectos sobre una variable dependiente bajo condiciones controladas y con grupos de comparación.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300">
                <strong className="text-stone-900 dark:text-stone-100">Ejemplo en Sistemas:</strong> comparar dos
                interfaces de una aplicación o dos algoritmos de búsqueda para determinar cuál permite completar una
                tarea en menor tiempo.
              </div>
            </div>

            {/* Cuasi-experimental */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                  <Settings className="w-4 h-4 shrink-0" />
                  <h3>Cuasi-experimental</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Analiza los posibles efectos de una intervención o tratamiento técnico, aunque el investigador trabaja
                  con grupos ya formados (grupos intactos) sin asignación totalmente aleatoria.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300">
                <strong className="text-stone-900 dark:text-stone-100">Ejemplo en Sistemas:</strong> evaluar el efecto
                de una nueva plataforma virtual en un grupo académico ya establecido y compararlo con otro curso.
              </div>
            </div>

            {/* No experimental */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <h3>No experimental</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Estudia los fenómenos tecnológicos sin manipular deliberadamente las variables. La información y las
                  métricas se observan y registran tal como ocurren en su entorno operativo natural.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300">
                <strong className="text-stone-900 dark:text-stone-100">Ejemplo en Sistemas:</strong> analizar la
                relación entre el tiempo de uso continuo y la frecuencia de errores reportados en una aplicación en
                producción.
              </div>
            </div>

            {/* Transversal */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <h3>Transversal (Transeccional)</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  La información se recoge en un único momento o periodo determinado para explorar, describir variables
                  o analizar correlaciones de un fenómeno en ese corte de tiempo.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300">
                <strong className="text-stone-900 dark:text-stone-100">Ejemplo en Sistemas:</strong> medir en un
                semestre específico el nivel de satisfacción y usabilidad percibida por los usuarios de una plataforma.
              </div>
            </div>

            {/* Longitudinal */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                  <Hourglass className="w-4 h-4 shrink-0" />
                  <h3>Longitudinal (Evolutivo)</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Permite observar cambios y evolución en variables o sistemas a través del tiempo mediante varias
                  mediciones periódicas o momentos de seguimiento (tendencia, cohorte o panel).
                </p>
              </div>
              <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300">
                <strong className="text-stone-900 dark:text-stone-100">Ejemplo en Sistemas:</strong> evaluar durante
                varios meses cómo evoluciona la adopción y deuda técnica de una aplicación después de diferentes
                actualizaciones.
              </div>
            </div>

            {/* Aplicación en Ingeniería de Sistemas */}
            <div className="p-5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/70 dark:border-indigo-900/60 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 font-bold text-sm">
                  <Laptop className="w-4 h-4 shrink-0" />
                  <h3>Aplicación en Ingeniería de Sistemas</h3>
                </div>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  Los diseños cuantitativos son fundamentales cuando se requiere medir rendimiento computacional,
                  tiempos de respuesta (latencia), tasa de errores, consumo de recursos, satisfacción estandarizada,
                  frecuencia de uso o relaciones estadísticas entre variables técnicas.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
            <strong className="text-stone-900 dark:text-stone-100">Idea clave:</strong> la ruta cuantitativa resulta
            especialmente útil cuando el problema requiere medir variables, comparar resultados numéricos, identificar
            relaciones causales o analizar tendencias mediante datos verificables.
          </div>

          <BackToTopLink />
        </section>

        {/* SECCIÓN 3: DISEÑOS DE INVESTIGACIÓN CUALITATIVA */}
        <section id="cualitativo" className="space-y-6 pb-10 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-stone-50">
              3. Diseños de investigación cualitativa
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              La ruta cualitativa busca comprender experiencias, significados, percepciones y procesos dentro de su
              contexto natural (Hernández-Sampieri, 2018, Cap. 14). El interés está en profundizar en la manera en que
              las personas, usuarios y equipos de ingeniería interpretan y viven un fenómeno sociotécnico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Fenomenología */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold text-sm">
                  <Brain className="w-4 h-4 shrink-0" />
                  <h3>Fenomenología</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Busca explorar, describir y comprender la esencia de las experiencias vividas y los significados que
                  las personas atribuyen a un fenómeno compartido.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300">
                <strong className="text-stone-900 dark:text-stone-100">Ejemplo:</strong> conocer cómo experimentan los
                estudiantes el uso de una plataforma virtual de aprendizaje o cómo viven los ingenieros la gestión de
                incidentes críticos.
              </div>
            </div>

            {/* Etnografía */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold text-sm">
                  <Globe className="w-4 h-4 shrink-0" />
                  <h3>Etnografía</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Estudia prácticas cotidianas, comportamientos, rituales comunicativos y patrones culturales dentro de
                  una comunidad, grupo de trabajo o entorno digital.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300">
                <strong className="text-stone-900 dark:text-stone-100">Ejemplo:</strong> analizar las prácticas de
                colaboración, comunicación y cultura técnica de un equipo de desarrollo de software remoto.
              </div>
            </div>

            {/* Teoría fundamentada */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold text-sm">
                  <Puzzle className="w-4 h-4 shrink-0" />
                  <h3>Teoría fundamentada</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Busca construir inductivamente explicaciones, modelos o categorías conceptuales a partir de la
                  codificación sistemática de la información recolectada en campo.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300">
                <strong className="text-stone-900 dark:text-stone-100">Ejemplo:</strong> identificar categorías que
                expliquen cómo los desarrolladores gestionan cambios de requisitos en proyectos ágiles.
              </div>
            </div>

            {/* Estudio de caso */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold text-sm">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <h3>Estudio de caso</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Analiza de manera intensiva y en profundidad un caso particular (o múltiples casos) dentro de su
                  contexto real, integrando diversas fuentes de evidencia.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300">
                <strong className="text-stone-900 dark:text-stone-100">Ejemplo:</strong> estudiar en detalle la
                implementación de un sistema de información o la gestión de requisitos en una organización real.
              </div>
            </div>

            {/* Investigación-acción */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold text-sm">
                  <RefreshCw className="w-4 h-4 shrink-0" />
                  <h3>Investigación-acción</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Vincula la comprensión diagnóstica de una problemática con ciclos de acción orientados a mejorar o
                  transformar una práctica mediante la participación activa de los involucrados.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300">
                <strong className="text-stone-900 dark:text-stone-100">Ejemplo:</strong> diseñar, implementar y evaluar
                participativamente con usuarios y desarrolladores mejoras para una plataforma institucional.
              </div>
            </div>

            {/* Aplicación en Ingeniería de Sistemas */}
            <div className="p-5 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/70 dark:border-teal-900/60 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 font-bold text-sm">
                  <Users className="w-4 h-4 shrink-0" />
                  <h3>Aplicación en Ingeniería de Sistemas</h3>
                </div>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  Los diseños cualitativos ayudan a comprender necesidades profundas de usuarios, experiencias de uso
                  (UX), dinámicas de equipos ágiles, resistencia al cambio organizacional y significados asociados a la
                  adopción tecnológica.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
            <strong className="text-stone-900 dark:text-stone-100">Idea clave:</strong> la ruta cualitativa es
            especialmente pertinente cuando se necesita comprender un fenómeno desde las experiencias, perspectivas,
            prácticas y contextos reales de las personas involucradas.
          </div>

          <BackToTopLink />
        </section>

        {/* SECCIÓN 4: SEMEJANZAS Y DIFERENCIAS */}
        <section id="comparacion" className="space-y-6 pb-10 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-stone-50">
              4. Semejanzas y diferencias
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              Las rutas cuantitativa y cualitativa no deben entenderse como opciones rivales que compiten entre sí. La
              elección depende de la pregunta de investigación, los objetivos, la naturaleza del fenómeno y la manera
              en que se requiere construir conocimiento científico.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-100 dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
                  <th className="p-4 font-bold text-stone-900 dark:text-stone-100 w-1/5">Aspecto</th>
                  <th className="p-4 font-bold text-indigo-900 dark:text-indigo-300 w-2/5">Cuantitativo</th>
                  <th className="p-4 font-bold text-teal-900 dark:text-teal-300 w-2/5">Cualitativo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                <tr>
                  <td className="p-4 font-bold text-stone-900 dark:text-stone-100">Propósito</td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 bg-indigo-50/20 dark:bg-indigo-950/10">
                    Medir, explicar, comparar magnitudes o analizar relaciones causales y correlacionales entre
                    variables.
                  </td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 bg-teal-50/20 dark:bg-teal-950/10">
                    Comprender significados, experiencias subjetivas, procesos organizacionales y particularidades del
                    contexto.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-stone-900 dark:text-stone-100">Información</td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 bg-indigo-50/20 dark:bg-indigo-950/10">
                    Principalmente datos numéricos, métricas de sistemas y variables medibles estandarizadas.
                  </td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 bg-teal-50/20 dark:bg-teal-950/10">
                    Principalmente discursos, relatos de experiencias, observaciones de campo, documentos y
                    significados.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-stone-900 dark:text-stone-100">Análisis</td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 bg-indigo-50/20 dark:bg-indigo-950/10">
                    Utiliza procedimientos estadísticos descriptivos e inferenciales y comparaciones cuantificables.
                  </td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 bg-teal-50/20 dark:bg-teal-950/10">
                    Utiliza procesos inductivos de codificación, categorización, triangulación e interpretación del
                    contexto.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-stone-900 dark:text-stone-100">Participantes / Muestra</td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 bg-indigo-50/20 dark:bg-indigo-950/10">
                    Trabaja con muestras representativas amplias o corridas experimentales con criterios definidos de
                    selección.
                  </td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 bg-teal-50/20 dark:bg-teal-950/10">
                    Trabaja con participantes, grupos o casos seleccionados intencionalmente por su relevancia para
                    comprender el fenómeno.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-stone-900 dark:text-stone-100">Contexto</td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 bg-indigo-50/20 dark:bg-indigo-950/10">
                    Busca controlar o aislar las condiciones necesarias para garantizar la validez y precisión de la
                    medición.
                  </td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 bg-teal-50/20 dark:bg-teal-950/10">
                    Otorga especial importancia al ambiente y contexto natural donde ocurre e interactúa el fenómeno.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-stone-900 dark:text-stone-100">Resultado esperado</td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 bg-indigo-50/20 dark:bg-indigo-950/10">
                    Resultados medibles que permiten comprobar hipótesis y establecer patrones, relaciones o
                    tendencias generalizables.
                  </td>
                  <td className="p-4 text-stone-700 dark:text-stone-300 bg-teal-50/20 dark:bg-teal-950/10">
                    Comprensión profunda y contextualizada de experiencias, categorías emergentes, procesos y casos.
                  </td>
                </tr>
                <tr className="bg-stone-50 dark:bg-stone-800/70">
                  <td className="p-4 font-bold text-stone-900 dark:text-stone-100">Semejanza fundamental</td>
                  <td colSpan={2} className="p-4 text-stone-800 dark:text-stone-200 font-medium leading-relaxed">
                    Ambas rutas comparten el rigor científico: requieren un planteamiento del problema, una pregunta de
                    investigación, objetivos claros, revisión de la literatura, una estrategia metodológica coherente,
                    técnicas de recolección y procedimientos sistemáticos para analizar la información con ética y
                    validez.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <BackToTopLink />
        </section>

        {/* SECCIÓN 5: TÉCNICAS E INSTRUMENTOS DE RECOLECCIÓN */}
        <section id="tecnicas" className="space-y-6 pb-10 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-stone-50">
              5. Técnicas e instrumentos de recolección
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              Las técnicas (el procedimiento operativo) y los instrumentos (la herramienta concreta de registro) deben
              seleccionarse de acuerdo con el enfoque, el diseño, la pregunta y los objetivos de la investigación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Encuesta -> Cuestionario */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                  <FileText className="w-4 h-4 shrink-0" />
                  <h3>Encuesta → Cuestionario</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Permite recopilar información estandarizada de numerosas personas mediante preguntas organizadas y
                  escalas de medición (como escalas tipo Likert o SUS).
                </p>
              </div>
              <div className="text-[11px] font-mono text-indigo-700 dark:text-indigo-400 pt-2 border-t border-stone-100 dark:border-stone-800">
                Cuantitativo · También puede apoyar estudios mixtos
              </div>
            </div>

            {/* Entrevista -> Guía de entrevista */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold text-sm">
                  <Mic className="w-4 h-4 shrink-0" />
                  <h3>Entrevista → Guía de entrevista</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Permite profundizar en opiniones, experiencias técnicas, percepciones, toma de decisiones y
                  significados mediante preguntas estructuradas, semiestructuradas o abiertas.
                </p>
              </div>
              <div className="text-[11px] font-mono text-teal-700 dark:text-teal-400 pt-2 border-t border-stone-100 dark:border-stone-800">
                Cualitativo · Fundamental en estudios de caso y fenomenología
              </div>
            </div>

            {/* Observación -> Lista de observación */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200 font-bold text-sm">
                  <Eye className="w-4 h-4 shrink-0 text-teal-600" />
                  <h3>Observación → Lista o bitácora</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Permite registrar comportamientos de usuarios, interacciones de equipos de desarrollo o situaciones
                  operativas de acuerdo con el propósito del estudio.
                </p>
              </div>
              <div className="text-[11px] font-mono text-stone-600 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800">
                Cualitativo (Bitácora de campo) · Cuantitativo (Lista de cotejo)
              </div>
            </div>

            {/* Pruebas de desempeño -> Métricas */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                  <Gauge className="w-4 h-4 shrink-0" />
                  <h3>Pruebas de desempeño → Métricas</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Permiten registrar tiempos de respuesta, latencia, uso de CPU/RAM, errores, clics, tareas completadas
                  u otros indicadores objetivos del comportamiento de un sistema.
                </p>
              </div>
              <div className="text-[11px] font-mono text-indigo-700 dark:text-indigo-400 pt-2 border-t border-stone-100 dark:border-stone-800">
                Cuantitativo · Esencial en experimentos de software
              </div>
            </div>

            {/* Análisis documental -> Matriz documental */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200 font-bold text-sm">
                  <FolderSearch className="w-4 h-4 shrink-0 text-amber-600" />
                  <h3>Análisis documental → Matriz</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Organiza, sistematiza y analiza información contenida en artículos científicos, repositorios de
                  código, arquitecturas, registros de incidentes o fuentes existentes.
                </p>
              </div>
              <div className="text-[11px] font-mono text-stone-600 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800">
                Cuantitativo · Cualitativo
              </div>
            </div>

            {/* ¿Cómo elegir? */}
            <div className="p-5 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 font-bold text-sm">
                  <Target className="w-4 h-4 shrink-0 text-indigo-600" />
                  <h3>¿Cómo elegir la técnica?</h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  La técnica no se elige de manera aislada. Primero se define <strong>qué se quiere conocer</strong>,
                  después se selecciona el <strong>diseño metodológico</strong> y finalmente se determinan las{' '}
                  <strong>técnicas e instrumentos</strong> coherentes con el estudio.
                </p>
              </div>
            </div>
          </div>

          <BackToTopLink />
        </section>

        {/* SECCIÓN 6: ARTÍCULOS CIENTÍFICOS: EJEMPLOS APLICADOS */}
        <section id="articulos" className="space-y-6 pb-10 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-stone-50">
              6. Artículos científicos: ejemplos aplicados
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              A continuación se presentan cuatro artículos académicos reales con código DOI verificado relacionados con
              investigación en tecnología e Ingeniería de Sistemas. Abarcan cuatro enfoques distintos (
              <strong>experimental, estudio de casos, exploratorio y mixto</strong>) e incluyen el análisis detallado
              de sus resultados principales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogArticles.map((art) => {
              const isCopied = copiedId === art.id;
              return (
                <article
                  key={art.id}
                  className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Top Approach Kicker */}
                    <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider font-bold">
                      <span
                        className={
                          art.routeColor === 'indigo'
                            ? 'text-indigo-700 dark:text-indigo-400'
                            : art.routeColor === 'teal'
                            ? 'text-teal-700 dark:text-teal-400'
                            : 'text-amber-700 dark:text-amber-400'
                        }
                      >
                        {art.badgeRoute}
                      </span>
                      <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">
                        ·
                      </span>
                      <span className="text-stone-600 dark:text-stone-400">{art.badgeDesign}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-editorial font-bold text-stone-900 dark:text-stone-100 leading-snug">
                      {art.number}. {art.title}
                    </h3>

                    {/* Description & Methodology */}
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">{art.description}</p>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      {art.methodologyDetail}
                    </p>

                    {/* Resultados Principales Enriquecidos (Atendiendo observación docente) */}
                    <div className="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/50 text-xs text-stone-700 dark:text-stone-200 leading-relaxed">
                      <div className="flex items-center gap-1.5 font-bold text-indigo-900 dark:text-indigo-300 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Hallazgos y resultados principales</span>
                      </div>
                      {art.mainResults}
                    </div>

                    {/* Relación con el blog */}
                    <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                      <strong className="text-stone-900 dark:text-stone-100">Relación con el blog:</strong>{' '}
                      {art.blogRelation}
                    </div>
                  </div>

                  {/* Links & Copy Citation */}
                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center justify-between gap-2">
                    <a
                      href={art.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-400 hover:underline"
                    >
                      <span>Consultar artículo (DOI: {art.doiLabel})</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => handleCopyText(art.id, art.fullApa)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Cita APA copiada</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar cita APA</span>
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="p-5 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5">
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
              ¿Por qué incluir artículos científicos?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Porque permiten pasar de la explicación teórica a ejemplos empíricos reales verificables. Al revisar un
              artículo científico arbitrado es posible identificar la pregunta, el enfoque, el diseño, los
              participantes, las técnicas de recolección, los resultados principales obtenidos y la forma de analizar
              la información.
            </p>
          </div>

          <BackToTopLink />
        </section>

        {/* SECCIÓN 7: ¿QUÉ DISEÑO ELEGIR? */}
        <section id="elegir" className="space-y-6 pb-10 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-stone-50">
              7. ¿Qué diseño elegir?
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              Para seleccionar el diseño de investigación más coherente con un proyecto tecnológico, se recomienda
              seguir esta secuencia lógica de seis pasos:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
              <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400">Paso 01</span>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">Definir el problema</h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                Identificar claramente qué situación técnica, funcional u organizacional se quiere estudiar.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
              <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400">Paso 02</span>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">Formular la pregunta</h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                Establecer con precisión qué se necesita conocer, medir, comparar o explicar.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
              <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400">Paso 03</span>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">Definir los objetivos</h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                Determinar qué alcance y meta concreta se pretende alcanzar con la investigación.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
              <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400">Paso 04</span>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">Seleccionar el enfoque</h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                Decidir si el problema requiere principalmente medición numérica, comprensión contextual o integración
                de ambas rutas.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
              <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400">Paso 05</span>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">Elegir el diseño</h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                Seleccionar la estrategia metodológica (experimental, estudio de caso, transversal, etc.) que mejor
                responda a la pregunta.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
              <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400">Paso 06</span>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                Seleccionar técnicas e instrumentos
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                Definir con qué herramientas válidas y confiables se obtendrá y organizará la información.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/70 dark:border-indigo-900/60 space-y-2">
              <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 font-bold text-sm">
                <BarChart3 className="w-4 h-4" />
                <span>Si necesito medir...</span>
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                Por ejemplo: tiempos de ejecución, frecuencia de uso, cantidad de errores, nivel de satisfacción,
                rendimiento de hardware/software o relaciones estadísticas entre variables.
              </p>
              <p className="text-xs font-bold text-indigo-800 dark:text-indigo-300 pt-1">
                → La ruta cuantitativa resulta pertinente.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/70 dark:border-teal-900/60 space-y-2">
              <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 font-bold text-sm">
                <Brain className="w-4 h-4" />
                <span>Si necesito comprender...</span>
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                Por ejemplo: experiencias de usuario, percepciones, significados, prácticas colaborativas de equipos de
                desarrollo o dificultades organizacionales en su contexto.
              </p>
              <p className="text-xs font-bold text-teal-800 dark:text-teal-300 pt-1">
                → La ruta cualitativa resulta pertinente.
              </p>
            </div>
          </div>

          <BackToTopLink />
        </section>

        {/* SECCIÓN 8: APLICACIÓN EN INGENIERÍA DE SISTEMAS */}
        <section id="aplicacion" className="space-y-6 pb-10 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-stone-50">
              8. Aplicación en Ingeniería de Sistemas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                <Laptop className="w-4 h-4" />
                <h3>Desarrollo de software</h3>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Evaluar rendimiento de arquitecturas, tasa de defectos, calidad de código, seguridad, usabilidad o
                comportamiento de una aplicación bajo estrés.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold text-sm">
                <Users className="w-4 h-4" />
                <h3>Experiencia de usuario (UX)</h3>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Comprender necesidades, expectativas y experiencias de interacción de las personas, o medir la
                efectividad de una interfaz gráfica.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
                <TrendingUp className="w-4 h-4" />
                <h3>Análisis de datos y sistemas</h3>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Estudiar tendencias longitudinales, correlaciones, patrones de tráfico y adopción tecnológica mediante
                información cuantificable.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            <strong className="text-stone-900 dark:text-stone-100 block">Ejemplo integrador:</strong>
            Si se desea mejorar una plataforma académica universitaria, una <strong>investigación cuantitativa</strong>{' '}
            podría medir tiempos de respuesta del servidor, frecuencia de errores y nivel de satisfacción mediante un
            cuestionario estructurado. Una <strong>investigación cualitativa</strong> podría explorar en profundidad
            las experiencias y dificultades cotidianas de los estudiantes y docentes mediante entrevistas o grupos
            focales. Si el proyecto requiere ambos tipos de evidencia para tomar decisiones integrales, se opta por un{' '}
            <strong>diseño de métodos mixtos</strong>.
          </div>

          <BackToTopLink />
        </section>

        {/* SECCIÓN 9: RECURSOS AUDIOVISUALES (CON VIDEOS CONCRETOS INCRUSTADOS Y CITADOS EN APA 7) */}
        <section id="videos" className="space-y-6 pb-10 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-stone-50">
              9. Recursos audiovisuales seleccionados y citados
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              Para profundizar en los diseños cuantitativos y cualitativos estudiados en el módulo, se han seleccionado,
              incrustado y referenciado en formato APA 7.ª edición los siguientes dos recursos audiovisuales académicos:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Video 1: Cuantitativo y General (Sampieri) */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-indigo-700 dark:text-indigo-400">
                  <Video className="w-4 h-4" />
                  <span>Recurso sobre investigación cuantitativa y diseños</span>
                </div>
                <h3 className="text-base sm:text-lg font-editorial font-bold text-stone-900 dark:text-stone-100">
                  Máster Class: Metodología de la Investigación — Dr. Roberto Hernández Sampieri
                </h3>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-800">
                  <iframe
                    src="https://www.youtube.com/embed/IP5-ZPxmfMs"
                    title="Máster Class: Metodología de la Investigación - Dr. Hernández Sampieri"
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Conferencia magistral impartida por el Dr. Roberto Hernández-Sampieri en la que explica la estructura
                  de los diseños experimentales y no experimentales, el control de variables y cómo alinear el diseño
                  con la pregunta de investigación.
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/70 text-stone-700 dark:text-stone-300 apa-citation">
                  USMP Virtual Oficial. (2021, 10 de junio).{' '}
                  <em>Máster Class: Metodología de la Investigación - Dr. Hernández Sampieri</em> [Archivo de video].
                  YouTube. https://www.youtube.com/watch?v=IP5-ZPxmfMs
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="https://www.youtube.com/watch?v=IP5-ZPxmfMs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-700 dark:text-indigo-400 font-semibold hover:underline"
                  >
                    <span>Ver video directo en YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Video 2: Cualitativo y comparación de enfoques */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-teal-700 dark:text-teal-400">
                  <Video className="w-4 h-4" />
                  <span>Recurso sobre investigación cualitativa y enfoques</span>
                </div>
                <h3 className="text-base sm:text-lg font-editorial font-bold text-stone-900 dark:text-stone-100">
                  Enfoques de Investigación Cuantitativo y Cualitativo (Cap. 1: Sampieri y otros)
                </h3>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-800">
                  <iframe
                    src="https://www.youtube.com/embed/s_Is2MA0YkQ"
                    title="Enfoques de Investigación Cuantitativo y Cualitativo, Cap. 1: Sampieri y otros"
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Síntesis didáctica basada en la obra de Hernández-Sampieri que profundiza en las características de
                  la ruta cualitativa (comprensión del contexto, diseños emergentes, estudio de casos y fenomenología) y
                  su contraste con la ruta cuantitativa.
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/70 text-stone-700 dark:text-stone-300 apa-citation">
                  Homo Academicus. (2021, 15 de abril).{' '}
                  <em>Enfoques de investigación cuantitativo y cualitativo, Cap. 1: Sampieri y otros</em> [Archivo de
                  video]. YouTube. https://www.youtube.com/watch?v=s_Is2MA0YkQ
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="https://www.youtube.com/watch?v=s_Is2MA0YkQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-teal-700 dark:text-teal-400 font-semibold hover:underline"
                  >
                    <span>Ver video directo en YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            <strong className="text-stone-900 dark:text-stone-100">Nota académica:</strong> Ambos recursos
            audiovisuales concretos han sido seleccionados por su correspondencia directa con la bibliografía del
            módulo e incluidos formalmente en la sección de Referencias del blog bajo normas APA 7.ª edición.
          </div>

          <BackToTopLink />
        </section>

        {/* SECCIÓN 10: CONCLUSIONES */}
        <section id="conclusiones" className="space-y-6 pb-10 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-stone-50">
              10. Conclusiones
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2 shadow-xs">
              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                1. El diseño orienta la investigación
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                El diseño permite organizar de manera lógica y estructurada la estrategia necesaria para responder la
                pregunta de investigación, recolectar datos confiables y alcanzar los objetivos propuestos.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2 shadow-xs">
              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                2. No existe un único diseño superior
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                La elección metodológica depende directamente del problema, la pregunta, los objetivos, el alcance del
                estudio y las características particulares del fenómeno tecnológico que se desea estudiar.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2 shadow-xs">
              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                3. Complementariedad entre cuantitativo y cualitativo
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                La ruta cuantitativa permite trabajar principalmente con mediciones objetivas y patrones estadísticos,
                mientras que la cualitativa permite profundizar en experiencias humanas, significados y contextos.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2 shadow-xs">
              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                4. Aplicación profesional en Ingeniería de Sistemas
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                En Ingeniería de Sistemas, ambas rutas (así como los métodos mixtos) aportan al desarrollo, auditoría y
                evaluación de soluciones tecnológicas centradas tanto en la eficiencia del sistema como en las personas.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/50 space-y-1.5 text-xs sm:text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
            <strong className="text-indigo-950 dark:text-indigo-300 block">Reflexión final:</strong>
            Investigar no consiste únicamente en recoger información o aplicar encuestas aisladas. También implica
            tomar decisiones metodológicas coherentes con el problema que se quiere comprender o resolver. Por esta
            razón, conocer los diferentes diseños permite seleccionar una ruta adecuada y producir resultados rigurosos
            que aporten tanto al conocimiento científico como a la solución de problemas reales de ingeniería.
          </div>

          <BackToTopLink />
        </section>

        {/* SECCIÓN 11: REFERENCIAS (APA 7.ª EDICIÓN) */}
        <section id="referencias" className="space-y-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-stone-50">
                11. Referencias
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                Referencias bibliográficas y audiovisuales ordenadas alfabéticamente con sangría francesa.
              </p>
            </div>

            <button
              onClick={handleCopyAllReferences}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-800 dark:bg-indigo-700 hover:bg-indigo-900 dark:hover:bg-indigo-600 rounded-lg transition-colors shrink-0 shadow-xs"
            >
              {copiedAllRefs ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>¡Referencias copiadas!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar todas las referencias</span>
                </>
              )}
            </button>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-5">
            {apaReferencesList.map((ref) => (
              <div
                key={ref.id}
                className="pb-4 border-b border-stone-100 dark:border-stone-800/80 last:border-b-0 last:pb-0 flex items-start justify-between gap-4"
              >
                <div
                  className="apa-citation text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: ref.html }}
                />

                {ref.doiUrl && (
                  <a
                    href={ref.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-stone-400 hover:text-indigo-700 dark:hover:text-indigo-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors shrink-0"
                    title="Abrir enlace externo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <BackToTopLink />
        </section>
      </main>

      {/* PIE DE PÁGINA ACADÉMICO */}
      <footer className="border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 py-10 text-xs text-stone-600 dark:text-stone-400">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-editorial font-bold text-sm text-stone-900 dark:text-stone-100">
              Diseños de investigación: explorando las rutas cuantitativa y cualitativa
            </div>
            <div>
              <strong>Adiel Herreño</strong> · Facultad de Ingeniería · Corporación Universitaria Iberoamericana
            </div>
            <div>
              Competencias investigativas (GLORIA RUBIO 24082026_C12_202634) · Docente: Gloria Alejandra Rubio Vanegas
            </div>
          </div>

          <div className="text-stone-400 dark:text-stone-500 font-mono">Blog académico — 2026</div>
        </div>
      </footer>
    </div>
  );
}
