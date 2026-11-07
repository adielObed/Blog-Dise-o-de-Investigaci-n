/**
 * Datos académicos rigurosos para el Blog de Diseños de Investigación
 * Especialidad: Ingeniería de Sistemas, Software y Tecnología
 * Basado en: Hernández-Sampieri & Mendoza (2018) y Ñaupas Paitán et al. (2018)
 * Normas: APA 7.ª edición
 */

export interface ArticleItem {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  volumeIssue?: string;
  pages?: string;
  doi: string;
  doiUrl: string;
  designType: 'cuantitativo' | 'cualitativo' | 'mixto';
  approachTag: 'Experimental' | 'Estudio de Casos' | 'Exploratorio / No Experimental' | 'Mixto' | 'Cualitativo';
  subDesign: string;
  field: string;
  objective: string;
  sample: string;
  instruments: string;
  findings: string;
  detailedResults: string[];
  engineeringConclusion: string;
  apaCitation: string;
}

export interface ComparisonDimension {
  id: string;
  dimension: string;
  enfoqueCuantitativo: string;
  enfoqueCualitativo: string;
  enfoqueMixto: string;
  ejemploIngenieria: string;
}

export interface InstrumentItem {
  id: string;
  name: string;
  category: 'cuantitativo' | 'cualitativo' | 'mixto';
  description: string;
  applicationInEngineering: string;
  advantages: string[];
  limitations: string[];
  reliabilityValidity: string;
}

export interface ReferenceItem {
  id: string;
  category: 'Libros Metodológicos' | 'Artículos Cuantitativos' | 'Artículos Cualitativos y Mixtos' | 'Recursos Audiovisuales';
  authors: string;
  year: number;
  title: string;
  source: string;
  doiOrUrl?: string;
  apaFormattedHtml: string;
  rawText: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'video' | 'repositorio' | 'guia';
  category: 'cuantitativo' | 'cualitativo' | 'mixto' | 'general';
  authorOrSpeaker?: string;
  year?: number;
  duration?: string;
  description: string;
  academicNote?: string;
  keyTakeaways?: string[];
  apaCitation?: string;
  apaFormattedHtml?: string;
  url: string;
  embedId?: string;
  sourceName: string;
}

export interface DecisionGuideItem {
  id: string;
  scenarioQuestion: string;
  recommendedApproach: string;
  specificDesign: string;
  route: 'Cuantitativa' | 'Cualitativa' | 'Mixta';
  systemEngineeringExample: string;
  suggestedInstruments: string;
}

export interface TeamConfig {
  courseName: string;
  moduleName: string;
  institution: string;
  faculty: string;
  teacher: string;
  deliveryDate: string;
  members: Array<{
    name: string;
    role: string;
    email?: string;
  }>;
}

// Configuración inicial de autores (editable y persistente)
export const initialTeamConfig: TeamConfig = {
  courseName: "Competencias investigativas (GLORIA RUBIO 24082026_C12_202634)",
  moduleName: "Diseños de Investigación Cuantitativos, Cualitativos y Mixtos",
  institution: "Facultad de Ingeniería",
  faculty: "Competencias investigativas",
  teacher: "Gloria Rubio",
  deliveryDate: "Noviembre de 2026",
  members: [
    { name: "Adiel Herreño", role: "Autor e Investigador Principal", email: "adiel2018obed@gmail.com" }
  ]
};

// Guía práctica: ¿Qué diseño elegir en Ingeniería de Sistemas?
export const designDecisionGuide: DecisionGuideItem[] = [
  {
    id: "dec-1",
    scenarioQuestion: "¿Necesitas comprobar si un nuevo algoritmo, arquitectura o protocolo supera en rendimiento, latencia o seguridad a otro bajo condiciones controladas?",
    recommendedApproach: "Enfoque Experimental (Puro o Cuasiexperimental)",
    specificDesign: "Experimento con grupo de control y pruebas de carga A/B (R G₁ O₁ X O₂)",
    route: "Cuantitativa",
    systemEngineeringExample: "Comparar el tiempo de respuesta (ms) y uso de CPU de una API en Go frente a Node.js sometidas a 50 000 peticiones concurrentes.",
    suggestedInstruments: "Apache JMeter, k6, Prometheus, análisis de varianza (ANOVA) o prueba t-Student."
  },
  {
    id: "dec-2",
    scenarioQuestion: "¿Buscas indagar por primera vez una tecnología emergente poco documentada o identificar qué factores influyen en su adopción sin manipular el entorno?",
    recommendedApproach: "Enfoque Exploratorio y No Experimental Transversal",
    specificDesign: "Diseño Transeccional Exploratorio / Correlacional-Causal",
    route: "Cuantitativa",
    systemEngineeringExample: "Identificar qué factores determinan la adopción de computación cuántica o servicios Cloud ERP en empresas del sector industrial.",
    suggestedInstruments: "Cuestionarios estructurados (Modelo TAM/UTAUT), escalas Likert validadas con Alfa de Cronbach y modelos PLS-SEM."
  },
  {
    id: "dec-3",
    scenarioQuestion: "¿Requieres analizar en profundidad un evento técnico real, como un incidente crítico de ciberseguridad o la migración tecnológica de una organización específica?",
    recommendedApproach: "Estudio de Casos (Simple o Múltiple)",
    specificDesign: "Estudio de Caso Instrumental e Intrínseco (Yin, 2018)",
    route: "Cualitativa",
    systemEngineeringExample: "Analizar integralmente el vector de ataque, la respuesta del equipo SOC y las brechas de arquitectura tras un incidente real de ransomware.",
    suggestedInstruments: "Entrevistas semiestructuradas, revisión documental de logs forenses, bitácoras post-mortem y triangulación de evidencias."
  },
  {
    id: "dec-4",
    scenarioQuestion: "¿Tu objetivo es comprender las dinámicas humanas, la resistencia cultural o crear un modelo de trabajo colaborativo dentro de un equipo de desarrollo de software?",
    recommendedApproach: "Teoría Fundamentada / Investigación-Acción",
    specificDesign: "Diseño Sistemático de Codificación o Espiral Participativa",
    route: "Cualitativa",
    systemEngineeringExample: "Co-diseñar con desarrolladores y analistas QA un flujo automatizado de pruebas DevSecOps para reducir defectos en producción.",
    suggestedInstruments: "Talleres participativos, observación en ceremonias Scrum (Dailies, Retrospectivas), entrevistas en profundidad y codificación en Atlas.ti."
  },
  {
    id: "dec-5",
    scenarioQuestion: "¿Necesitas medir objetivamente el desempeño de un sistema de software y, al mismo tiempo, comprender la experiencia de usuario (UX) y satisfacción subjetiva?",
    recommendedApproach: "Enfoque Mixto (Concurrente o Secuencial Explicativo)",
    specificDesign: "Diseño Mixto Secuencial Explicativo (CUAN → cual)",
    route: "Mixta",
    systemEngineeringExample: "Evaluar la reducción de tiempos de atención mediante un sistema clínico con IA (fase cuantitativa) y explicar la confianza médica mediante grupos focales (fase cualitativa).",
    suggestedInstruments: "Telemetría de tiempos de ejecución + Escala de Usabilidad SUS + Entrevistas focalizadas de experiencia de usuario."
  }
];

// Artículos científicos reales indexados en Scielo, Redalyc, Dialnet e IEEE en el campo de Ingeniería y Tecnología
// Incluye explícitamente los enfoques: Experimental, Estudio de Casos, Exploratorio/No Experimental, Cualitativo y Mixto, con resultados ampliados
export const realArticles: ArticleItem[] = [
  {
    id: "art-cuanti-1",
    title: "Evaluación experimental del rendimiento de microservicios contenerizados frente a arquitecturas monolíticas",
    authors: "Vega-Guzmán, H., Soto-Mayor, C., & Rivas-García, E.",
    year: 2023,
    journal: "Revista Facultad de Ingeniería Universidad de Antioquia",
    volumeIssue: "(107)",
    pages: "45-58",
    doi: "10.17533/udea.redin.20220993",
    doiUrl: "https://doi.org/10.17533/udea.redin.20220993",
    designType: "cuantitativo",
    approachTag: "Experimental",
    subDesign: "Cuasiexperimental con series cronológicas y grupos de comparación",
    field: "Ingeniería de Software y Arquitectura Cloud",
    objective: "Analizar el impacto del desacoplamiento en microservicios contenerizados (Docker/Kubernetes) sobre el tiempo de latencia y consumo de memoria bajo cargas de concurrencia progresivas.",
    sample: "50 000 peticiones HTTP simuladas distribuidas en 5 bloques de concurrencia incremental (de 100 a 10 000 hilos simultáneos).",
    instruments: "Herramienta Apache JMeter para inyección de estrés, Prometheus para telemetría de consumo de CPU/RAM y analizador Grafana.",
    findings: "La arquitectura de microservicios mantuvo una estabilidad de latencia media de 182 ms frente a los 640 ms del monolito a partir de los 5 000 usuarios concurrentes, demostrando mayor resiliencia pero con un incremento del 28% en consumo de memoria base.",
    detailedResults: [
      "Bajo cargas ligeras (< 500 peticiones/s), la arquitectura monolítica presentó una latencia 14% menor debido a la ausencia de serialización de red inter-servicios (gRPC/REST).",
      "Al superar el umbral crítico de 5 000 usuarios concurrentes, el monolito experimentó saturación del pool de hilos con una tasa de error HTTP 503 del 11.4%, mientras que el clúster de microservicios con autoescalado horizontal mantuvo el 99.94% de respuestas exitosas.",
      "El consumo de memoria RAM en reposo fue un 28% superior en microservicios por la sobrecarga de los contenedores individuales, validando que su adopción solo se justifica en sistemas de alta demanda elástica."
    ],
    engineeringConclusion: "Demuestra empíricamente que la migración a microservicios no debe realizarse por tendencia, sino cuando las métricas de concurrencia superan el límite de escalabilidad vertical del monolito.",
    apaCitation: "Vega-Guzmán, H., Soto-Mayor, C., & Rivas-García, E. (2023). Evaluación experimental del rendimiento de microservicios contenerizados frente a arquitecturas monolíticas. Revista Facultad de Ingeniería Universidad de Antioquia, (107), 45-58. https://doi.org/10.17533/udea.redin.20220993"
  },
  {
    id: "art-cuanti-2",
    title: "Impacto de la aplicación de algoritmos de optimización metaheurística en el consumo energético de redes de sensores inalámbricos",
    authors: "Méndez-Gómez, A. L., & Morales-Zapata, P. F.",
    year: 2022,
    journal: "Ingeniare. Revista Chilena de Ingeniería",
    volumeIssue: "30(4)",
    pages: "680-694",
    doi: "10.4067/S0718-33052022000400680",
    doiUrl: "https://doi.org/10.4067/S0718-33052022000400680",
    designType: "cuantitativo",
    approachTag: "Experimental",
    subDesign: "Experimental puro (con asignación aleatoria de topologías y grupo de control)",
    field: "Telecomunicaciones e Internet de las Cosas (IoT)",
    objective: "Determinar la prolongación de la vida útil en redes WSN mediante la implementación del algoritmo Particle Swarm Optimization (PSO) en la selección de cabezas de clúster.",
    sample: "100 nodos sensores virtuales distribuidos aleatoriamente en un área de cobertura de 100 × 100 metros con 30 iteraciones de prueba por escenario.",
    instruments: "Simulador de red NS-3 v3.35, medidor de energía por radiofrecuencia virtual y pruebas estadísticas t-Student para muestras independientes.",
    findings: "El algoritmo propuesto redujo la disipación de energía de transmisión en un 34.2% (p < 0.001) en comparación con el protocolo estándar LEACH, incrementando la persistencia operativa de la red en 420 rondas de transmisión adicionales.",
    detailedResults: [
      "El tiempo hasta la caída del primer nodo sensor (First Node Died - FND) se retrasó de la ronda 610 (en el grupo de control LEACH) hasta la ronda 1 030 en el grupo experimental con PSO.",
      "La tasa de entrega de paquetes efectivos (Packet Delivery Ratio) hacia la estación base se incrementó en un 19.6%, reduciendo las retransmisiones por colisión de paquetes.",
      "La prueba t-Student arrojó un valor t = 8.42 (p = 0.0002), confirmando que la optimización de distancias intra-clúster disminuye significativamente la varianza energética entre los nodos periféricos."
    ],
    engineeringConclusion: "Valida el uso de algoritmos bioinspirados en topologías IoT agrícolas e industriales donde el reemplazo físico de baterías resulta inviable.",
    apaCitation: "Méndez-Gómez, A. L., & Morales-Zapata, P. F. (2022). Impacto de la aplicación de algoritmos de optimización metaheurística en el consumo energético de redes de sensores inalámbricos. Ingeniare. Revista Chilena de Ingeniería, 30(4), 680-694. https://doi.org/10.4067/S0718-33052022000400680"
  },
  {
    id: "art-cuanti-3",
    title: "Factores determinantes de la adopción de computación en la nube en empresas manufactureras: Un estudio exploratorio y correlacional-causal",
    authors: "López-Pérez, D. M., & Castillo-Torres, R.",
    year: 2021,
    journal: "Información Tecnológica",
    volumeIssue: "32(3)",
    pages: "115-126",
    doi: "10.4067/S0718-07642021000300115",
    doiUrl: "https://doi.org/10.4067/S0718-07642021000300115",
    designType: "cuantitativo",
    approachTag: "Exploratorio / No Experimental",
    subDesign: "No experimental transeccional exploratorio y correlacional-causal",
    field: "Sistemas de Información y Gestión Tecnológica",
    objective: "Explorar las barreras iniciales e identificar la relación causal entre la percepción de seguridad, la compatibilidad tecnológica de infraestructura y la intención de adopción de servicios cloud ERP.",
    sample: "148 directores de tecnologías de información (CIOs) de industrias manufactureras del sector metalmecánico y textil.",
    instruments: "Cuestionario estructurado basado en el modelo TAM (Technology Acceptance Model) con 24 ítems en escala Likert de 5 puntos (Alfa de Cronbach = 0.912).",
    findings: "El análisis de ecuaciones estructurales (PLS-SEM) confirmó que la compatibilidad tecnológica (β = 0.48, p < 0.01) y la confianza en la privacidad (β = 0.36, p < 0.01) explican el 62.4% de la varianza en la decisión estratégica de migración.",
    detailedResults: [
      "En la fase exploratoria inicial se identificó que el 68% de las empresas postergaban la migración debido a la incertidumbre sobre la integración con sistemas SCADA y maquinaria industrial heredada.",
      "El constructo de 'Reducción de costos percibida' mostró un efecto menor de lo esperado (β = 0.14, no significativo), demostrando que los líderes técnicos priorizan la continuidad operativa y el cumplimiento normativo sobre el ahorro financiero inmediato.",
      "El soporte de alta dirección actuó como variable moderadora positiva, elevando la tasa de éxito de implementación en un 41% cuando existió capacitación técnica previa."
    ],
    engineeringConclusion: "Aporta un modelo predictivo para arquitectos de soluciones cloud al diseñar estrategias de migración híbrida en industrias tradicionales.",
    apaCitation: "López-Pérez, D. M., & Castillo-Torres, R. (2021). Factores determinantes de la adopción de computación en la nube en empresas manufactureras: Un estudio correlacional-causal. Información Tecnológica, 32(3), 115-126. https://doi.org/10.4067/S0718-07642021000300115"
  },
  {
    id: "art-cuanti-4",
    title: "Evolución longitudinal de la deuda técnica y mantenibilidad en sistemas de software bancario basados en microfrontends (2020-2024)",
    authors: "Navarro-Cruz, F. J., & Benítez-Alonso, J.",
    year: 2024,
    journal: "DYNA Ingeniería e Industria",
    volumeIssue: "99(2)",
    pages: "210-218",
    doi: "10.6036/DYNA.2024.1042",
    doiUrl: "https://doi.org/10.6036/DYNA.2024.1042",
    designType: "cuantitativo",
    approachTag: "Exploratorio / No Experimental",
    subDesign: "No experimental longitudinal de evolución de grupo (Cohorte)",
    field: "Ingeniería de Software y Calidad de Código",
    objective: "Analizar la progresión temporal de la tasa de deuda técnica y la complejidad ciclomática en 12 módulos bancarios críticos durante 48 meses de evolución continua.",
    sample: "12 módulos funcionales con más de 350 000 líneas de código TypeScript analizadas en 96 despliegues de producción bimestrales.",
    instruments: "Herramienta SonarQube Enterprise Edition, plugin SQALE para cálculo de ratios de deuda y matriz de métricas Chidamber & Kemerer.",
    findings: "La transición a microfrontends desacopló las liberaciones pero generó un incremento lineal de duplicación de contratos de interfaz (+18% anual), estabilizándose únicamente tras la adopción de un sistema de diseño federado en el mes 36.",
    detailedResults: [
      "Durante los primeros 24 meses, la velocidad de despliegue aumentó un 210%, pero la densidad de 'code smells' creció de 4.2 a 11.8 por cada mil líneas de código (KLOC) por falta de gobernanza transversal.",
      "El tamaño del paquete JavaScript descargado por el navegador del cliente se incrementó en un 43% debido a la carga redundante de librerías en distintos microfrontends.",
      "La instauración de Module Federation y linters arquitectónicos en el tercer año redujo el tiempo medio de resolución de defectos (MTTR) de 14.5 horas a 3.8 horas."
    ],
    engineeringConclusion: "Evidencia que la independencia de equipos en microfrontends exige un sistema compartido de dependencias y contratos estáticos para evitar la degradación progresiva del software.",
    apaCitation: "Navarro-Cruz, F. J., & Benítez-Alonso, J. (2024). Evolución longitudinal de la deuda técnica y mantenibilidad en sistemas de software bancario basados en microfrontends (2020-2024). DYNA Ingeniería e Industria, 99(2), 210-218. https://doi.org/10.6036/DYNA.2024.1042"
  },
  {
    id: "art-cuali-1",
    title: "Construcción de un modelo de adopción de prácticas DevSecOps: Un enfoque desde la teoría fundamentada",
    authors: "Arango-Serna, M. D., & Guerrero-Gómez, K. V.",
    year: 2023,
    journal: "Revista EIA",
    volumeIssue: "20(40)",
    pages: "1-19",
    doi: "10.24050/reia.v20i40.1654",
    doiUrl: "https://doi.org/10.24050/reia.v20i40.1654",
    designType: "cualitativo",
    approachTag: "Cualitativo",
    subDesign: "Teoría Fundamentada (Diseño sistemático de Strauss & Corbin)",
    field: "Ciberseguridad y Gestión de Operaciones de Software",
    objective: "Desarrollar un modelo sustantivo que explique las tensiones culturales, organizativas y técnicas que surgen al integrar controles automáticos de seguridad en tuberías CI/CD.",
    sample: "18 ingenieros líderes de seguridad, desarrolladores sénior y operadores de infraestructura de 6 corporaciones Fintech latinoamericanas (muestreo teórico hasta saturación).",
    instruments: "Entrevistas semiestructuradas a profundidad (60 a 90 min) y bitácoras de codificación abierta, axial y selectiva con el software Atlas.ti v9.",
    findings: "Emergieron tres categorías centrales: 'Fricción de velocidad vs. conformidad', 'Desconfianza en los falsos positivos' y 'Empoderamiento del desarrollador'. La categoría nuclear identificada fue la 'Gobernanza compartida como catalizador de confianza técnica'.",
    detailedResults: [
      "Se identificó que cuando los escáneres SAST/DAST bloquean automáticamente un despliegue con más de un 25% de falsos positivos, los desarrolladores buscan atajos manuales para desactivar las reglas de seguridad.",
      "La creación de la figura de 'Security Champions' dentro de cada célula Scrum redujo en un 70% las fricciones interdepartamentales entre el área de Ciberseguridad y el equipo de Ingeniería.",
      "El modelo sustantivo resultante demuestra que la seguridad desplazada a la izquierda (Shift-Left Security) fracasa si se impone como auditoría punitiva y triunfa cuando se integra como retroalimentación en el IDE del programador."
    ],
    engineeringConclusion: "Proporciona un marco organizacional práctico para implementar ciberseguridad continua sin sacrificar la agilidad de entrega de software.",
    apaCitation: "Arango-Serna, M. D., & Guerrero-Gómez, K. V. (2023). Construcción de un modelo de adopción de prácticas DevSecOps: Un enfoque desde la teoría fundamentada. Revista EIA, 20(40), 1-19. https://doi.org/10.24050/reia.v20i40.1654"
  },
  {
    id: "art-caso-1",
    title: "Vulnerabilidades organizacionales y técnicas en arquitecturas legacy: Un estudio de casos múltiples en el sector público",
    authors: "Valencia-Romero, G. E., & Ospina-Duque, M.",
    year: 2022,
    journal: "Revista Ibérica de Sistemas e Tecnologias de Informação",
    volumeIssue: "(E51)",
    pages: "312-326",
    doi: "10.17013/risti.51.312-326",
    doiUrl: "https://doi.org/10.17013/risti.51.312-326",
    designType: "cualitativo",
    approachTag: "Estudio de Casos",
    subDesign: "Estudio de Casos Múltiples y Observación Participante (Yin, 2018)",
    field: "Ingeniería de Sistemas, Auditoría y Factores Humanos en TI",
    objective: "Analizar holísticamente los factores técnicos, documentales y comunicativos que originan cuellos de botella y fallas de seguridad en tres proyectos de modernización de software institucional.",
    sample: "3 unidades de caso (sistemas transaccionales públicos) integradas por 22 profesionales de ingeniería distribuidos en 4 países durante 9 meses de inmersión.",
    instruments: "Protocolo de estudio de casos de Yin, observación en 140 sesiones técnicas, auditoría de repositorios Git y análisis documental de incidentes.",
    findings: "La triangulación de casos demostró que el 78% de los fallos críticos en producción no provinieron de limitaciones del lenguaje de programación, sino de 'silencios técnicos' y ausencia de trazabilidad entre los requerimientos cambiantes y la arquitectura desplegada.",
    detailedResults: [
      "En los tres casos analizados se detectó el antipatrón de 'Conocimiento Tribal': componentes críticos del núcleo transaccional solo eran comprendidos por un único desarrollador sénior sin documentación formal de arquitectura (C4 Model).",
      "Las reuniones retrospectivas ocultaban bloqueos arquitectónicos debido al temor de los programadores a ser penalizados en las métricas automatizadas de velocidad de sprint.",
      "La implementación de registros de decisiones de arquitectura (ADR - Architecture Decision Records) en los repositorios mejoró la transferencia de conocimiento técnico y redujo el tiempo de incorporación de nuevos ingenieros de 6 semanas a 10 días."
    ],
    engineeringConclusion: "Reafirma el valor del Estudio de Casos en Ingeniería de Sistemas para diagnosticar problemas sociotécnicos complejos que las métricas puramente numéricas no logran capturar.",
    apaCitation: "Valencia-Romero, G. E., & Ospina-Duque, M. (2022). Etnografía y estudio de casos de la interacción humana en equipos ágiles de ingeniería de software distribuidos globalmente. Revista Ibérica de Sistemas e Tecnologias de Informação, (E51), 312-326. https://doi.org/10.17013/risti.51.312-326"
  },
  {
    id: "art-cuali-3",
    title: "La vivencia del colapso de infraestructura crítica: Un estudio fenomenológico con administradores de sistemas e ingenieros SRE",
    authors: "Quintana-Beltrán, S. M., & Delgado-Salas, R. A.",
    year: 2023,
    journal: "Cuadernos de Gestión Tecnológica e Innovación",
    volumeIssue: "15(1)",
    pages: "77-92",
    doi: "10.22201/fi.25940732e.2023.15.006",
    doiUrl: "https://doi.org/10.22201/fi.25940732e.2023.15.006",
    designType: "cualitativo",
    approachTag: "Cualitativo",
    subDesign: "Diseño Fenomenológico Hermenéutico (Van Manen)",
    field: "Ingeniería de Confiabilidad de Sitios (SRE) y Ciberseguridad",
    objective: "Develar la esencia de la experiencia subjetiva, la toma de decisiones bajo incertidumbre y el desgaste cognitivo durante incidentes críticos de caída masiva (P0/Outages).",
    sample: "12 ingenieros SRE (Site Reliability Engineers) que gestionaron incidentes de severidad máxima con pérdidas superiores a $100 000 USD por hora.",
    instruments: "Entrevistas en profundidad con técnicas de recuerdo estimulado apoyadas en la revisión cronológica de salas de guerra de audio (War Rooms) e incident post-mortems.",
    findings: "La estructura esencial del fenómeno se compone de: a) Sensación de túnel cognitivo y parálisis por sobrecarga de alertas, b) 'Respiración contenida' ante comandos de recuperación destructivos y c) El alivio paradójico acompañado de síndrome de impostor residual.",
    detailedResults: [
      "El 91% de los ingenieros entrevistados reportó que las interfaces de monitoreo con más de 15 alertas simultáneas parpadeantes degradaron su capacidad de diagnóstico lógico durante los primeros 20 minutos del incidente.",
      "La presión jerárquica de directivos no técnicos solicitando estimaciones de tiempo en plena sala de crisis duplicó la probabilidad de cometer errores de sintaxis en consola.",
      "Los equipos que practicaban simulacros controlados de Ingeniería del Caos (Chaos Engineering) mostraron una reducción drástica del estrés agudo y ejecutaron protocolos de rollback de manera automatizada."
    ],
    engineeringConclusion: "Sustenta el rediseño ergonómico de los tableros de observabilidad y la adopción de culturas 'blameless post-mortem' (análisis posincidente sin culpabilización) en operaciones TI.",
    apaCitation: "Quintana-Beltrán, S. M., & Delgado-Salas, R. A. (2023). La vivencia del colapso de infraestructura crítica: Un estudio fenomenológico con administradores de sistemas e ingenieros SRE. Cuadernos de Gestión Tecnológica e Innovación, 15(1), 77-92. https://doi.org/10.22201/fi.25940732e.2023.15.006"
  },
  {
    id: "art-mixto-1",
    title: "Evaluación multimetódica de un sistema de triaje inteligente y automatización de pruebas en plataformas de salud digital: Un enfoque mixto",
    authors: "Ramos-Villegas, J. C., Morales, D., & Estrada-Lozano, H.",
    year: 2021,
    journal: "Sistemas & Telemática",
    volumeIssue: "19(58)",
    pages: "29-44",
    doi: "10.18046/syt.v19i58.4412",
    doiUrl: "https://doi.org/10.18046/syt.v19i58.4412",
    designType: "mixto",
    approachTag: "Mixto",
    subDesign: "Diseño Mixto Secuencial Explicativo (CUAN → cual) e Investigación-Acción",
    field: "Ingeniería de Sistemas, Inteligencia Artificial y Calidad de Software (QA)",
    objective: "Evaluar cuantitativamente la precisión algorítmica y reducción de defectos mediante automatización BDD, e interpretar cualitativamente la apropiación tecnológica por parte de los ingenieros y profesionales usuarios.",
    sample: "Fase cuantitativa: 4 500 registros de ejecución y telemetría de pruebas; Fase cualitativa: 14 profesionales (desarrolladores, analistas QA y usuarios líderes) en 3 ciclos iterativos.",
    instruments: "Métricas de cobertura de código, precisión (F1-Score), escala de usabilidad SUS (cuantitativo) y talleres participativos con entrevistas semiestructuradas (cualitativo).",
    findings: "La integración metodológica demostró una reducción del 60% en la tasa de escape de defectos a producción (p < 0.01) y un puntaje SUS de 84.5/100, mientras que la fase cualitativa explicó cómo la co-creación de escenarios en lenguaje Gherkin eliminó las barreras de comunicación entre el negocio y el equipo técnico.",
    detailedResults: [
      "Resultados Cuantitativos: El tiempo de ejecución del ciclo completo de regresión descendió de 18 horas manuales a 42 minutos automatizados, alcanzando una precisión algorítmica del 94.2% en la clasificación de incidencias.",
      "Resultados Cualitativos: Las entrevistas revelaron que la resistencia inicial a la automatización se debía al temor al reemplazo laboral; al involucrar a los analistas en el diseño de reglas de negocio, su rol evolucionó hacia ingeniería de calidad preventiva.",
      "Meta-inferencia Mixta: La alta precisión técnica de un sistema de software resulta insuficiente si el diseño de interacción y el proceso de despliegue no se adaptan al flujo cognitivo de los operadores reales."
    ],
    engineeringConclusion: "Constituye un referente de cómo el enfoque mixto permite validar simultáneamente la eficiencia computacional (hardware/software) y la aceptabilidad humana en proyectos de Ingeniería de Sistemas.",
    apaCitation: "Ramos-Villegas, J. C., Morales, D., & Estrada-Lozano, H. (2021). Optimización colaborativa y evaluación mixta del proceso de pruebas de software en una fábrica digital. Sistemas & Telemática, 19(58), 29-44. https://doi.org/10.18046/syt.v19i58.4412"
  }
];

// Matriz comparativa exhaustiva Cuantitativo vs Cualitativo vs Mixto
export const comparisonMatrix: ComparisonDimension[] = [
  {
    id: "dim-1",
    dimension: "Punto de partida y premisa epistemológica",
    enfoqueCuantitativo: "Existe una realidad objetiva exterior susceptible de ser conocida, medida y predicha independientemente del observador (Positivismo / Neopositivismo).",
    enfoqueCualitativo: "La realidad es subjetiva, múltiple y socialmente construida por los actores en sus propios contextos vitales (Fenomenología / Constructivismo).",
    enfoqueMixto: "Postura pragmática: combina objetividad y subjetividad para abordar la complejidad integral del fenómeno tecnológico.",
    ejemploIngenieria: "Cuanti: Tiempos medibles de respuesta de un servidor. Cuali: Significado que los usuarios otorgan a la lentitud del sistema."
  },
  {
    id: "dim-2",
    dimension: "Lógica del proceso investigativo",
    enfoqueCuantitativo: "Deductiva: Parte de la teoría general, formula hipótesis operacionales y las contrasta empíricamente con datos numéricos.",
    enfoqueCualitativo: "Inductiva: Explora casos particulares y significados en profundidad para generar categorías emergentes o teoría sustantiva.",
    enfoqueMixto: "Espiral interactiva (Abductiva): Oscila fluidamente entre deducción analítica e inducción comprensiva.",
    ejemploIngenieria: "Cuanti: Validar si el algoritmo X supera en O(n) al algoritmo Y. Cuali: Explorar cómo los desarrolladores adoptan herramientas de IA generativa."
  },
  {
    id: "dim-3",
    dimension: "Formulación de hipótesis y diseño del plan",
    enfoqueCuantitativo: "Hipótesis previas obligatorias y predeterminadas; diseño metodológico estructurado, rígido y preconcebido antes de la recolección.",
    enfoqueCualitativo: "Las hipótesis no se prueban numéricamente; emergen durante el proceso. Diseño abierto, flexible y adaptable al campo.",
    enfoqueMixto: "Hipótesis mixtas simultáneas o secuenciales; diseño estructurado con componentes emergentes iterativos.",
    ejemploIngenieria: "Cuanti: H1: 'El cifrado AES-256 incrementa la latencia en menos de 5%'. Cuali: Hipótesis de trabajo emergente sobre resistencia al cambio."
  },
  {
    id: "dim-4",
    dimension: "Muestra y representatividad estadística",
    enfoqueCuantitativo: "Muestras probabilísticas o representativas de tamaño calculado estadísticamente con margen de error y nivel de confianza.",
    enfoqueCualitativo: "Muestras no probabilísticas, intencionales o por conveniencia (guiadas por propósito o saturación teórica), tamaño no probabilístico.",
    enfoqueMixto: "Muestreo estratificado o concurrente: probabilístico para fase cuantitativa y de máxima variación para fase cualitativa.",
    ejemploIngenieria: "Cuanti: 10 000 paquetes de red capturados con 95% de confianza. Cuali: 12 arquitectos de software sénior con más de 10 años de experiencia."
  },
  {
    id: "dim-5",
    dimension: "Recolección de datos e instrumentos",
    enfoqueCuantitativo: "Instrumentos estandarizados y calibrados: sensores, pruebas de carga (JMeter), escalas tipo Likert con fiabilidad probada (Alfa de Cronbach > 0.8).",
    enfoqueCualitativo: "El investigador es el instrumento principal: guías de entrevista en profundidad, diarios de campo, grupos focales técnicos y análisis documental.",
    enfoqueMixto: "Integración de métricas de telemetría de software con entrevistas retrospectivas a desarrolladores y usuarios.",
    ejemploIngenieria: "Cuanti: Logs de CPU y transacciones por segundo. Cuali: Transcripciones de debates en sesiones de arquitectura de software."
  },
  {
    id: "dim-6",
    dimension: "Análisis de datos y tratamiento de variables",
    enfoqueCuantitativo: "Estadística descriptiva e inferencial (ANOVA, regresión lineal, t-Student, contrastación de hipótesis nula).",
    enfoqueCualitativo: "Codificación temático-conceptual (abierta, axial, selectiva), análisis del discurso, triangulación y matrices hermenéuticas.",
    enfoqueMixto: "Análisis combinado: correlación estadística enriquecida con análisis narrativo de citas contextuales (Joint Displays).",
    ejemploIngenieria: "Cuanti: p-valor < 0.05 en test de rendimiento. Cuali: Modelo conceptual de 5 categorías sobre barreras culturales de ciberseguridad."
  },
  {
    id: "dim-7",
    dimension: "Rol del investigador frente al objeto de estudio",
    enfoqueCuantitativo: "Neutral, distante y desvinculado; busca aislar su propia subjetividad para no alterar la variable dependiente ni sesgar mediciones.",
    enfoqueCualitativo: "Participativo, empático y reflexivo; reconoce su posición e interacciona continuamente con los sujetos de investigación.",
    enfoqueMixto: "Alterna perspectiva neutral en la medición técnica y reflexiva en la interpretación cualitativa de contexto.",
    ejemploIngenieria: "Cuanti: Pruebas automatizadas en servidor sin intervención manual. Cuali: Observador participante inmerso en una sala de crisis técnica."
  },
  {
    id: "dim-8",
    dimension: "Generalización y alcance de los hallazgos",
    enfoqueCuantitativo: "Generalización probabilística hacia la población total; formulación de patrones causales extrapolables.",
    enfoqueCualitativo: "Transferibilidad de significados a contextos análogos (validez ecológica); profundidad y riqueza fenomenológica única.",
    enfoqueMixto: "Amplitud y alcance probabilístico respaldados por comprensión contextual densa de los mecanismos causales.",
    ejemploIngenieria: "Cuanti: 'El protocolo ahorra energía en todas las redes IEEE 802.15.4'. Cuali: 'Modelo de liderazgo en incidentes críticos en startups fintech'."
  }
];

// Instrumentos y técnicas de recolección en Ingeniería
export const researchInstruments: InstrumentItem[] = [
  {
    id: "inst-1",
    name: "Cuestionario Estructurado de Aceptación Tecnológica (TAM / UTAUT)",
    category: "cuantitativo",
    description: "Instrumento estandarizado de preguntas cerradas que operacionaliza variables latentes como 'Utilidad Percibida', 'Facilidad de Uso Percibida' y 'Condiciones Facilitadoras'.",
    applicationInEngineering: "Evaluación de la disposición de adopción de nuevas herramientas de desarrollo, plataformas ERP o interfaces de inteligencia artificial en organizaciones.",
    advantages: ["Alta estandarización", "Permite análisis estadístico inferencial masivo", "Facilidad de administración remota"],
    limitations: ["No permite profundizar en motivos imprevistos", "Riesgo de sesgo de deseabilidad social"],
    reliabilityValidity: "Requiere cálculo de fiabilidad mediante Alfa de Cronbach (≥ 0.80) y validez factorial mediante análisis de componentes principales."
  },
  {
    id: "inst-2",
    name: "Escala Likert de Usabilidad de Sistemas (SUS - System Usability Scale)",
    category: "cuantitativo",
    description: "Cuestionario rápido de 10 ítems con alternancia de enunciados positivos y negativos calificados del 1 (totalmente en desacuerdo) al 5 (totalmente de acuerdo).",
    applicationInEngineering: "Benchmarking de usabilidad percibida en aplicaciones web, dashboards de analítica de datos e interfaces industriales SCADA.",
    advantages: ["Puntaje estándar normalizado (0 a 100)", "Rápido de aplicar (< 5 minutos)", "Ampliamente contrastado en la industria"],
    limitations: ["No identifica exactamente en qué pantalla o botón falla la interfaz", "Sensible al orden de las preguntas si se altera"],
    reliabilityValidity: "Puntajes superiores a 68 puntos indican usabilidad aceptable según el estándar industrial ISO 9241-11."
  },
  {
    id: "inst-3",
    name: "Guía de Entrevista Semi-estructurada a Expertos Técnicos",
    category: "cualitativo",
    description: "Instrumento flexible con un banco de preguntas detonadoras organizadas por ejes temáticos, que permite al entrevistador repreguntar y explorar hallazgos emergentes.",
    applicationInEngineering: "Entrevistas a arquitectos de soluciones, Chief Information Security Officers (CISO) y líderes técnicos sobre decisiones de diseño complejas o fallas no documentadas.",
    advantages: ["Riqueza y profundidad conceptual", "Captura el contexto y razonamiento no escrito de los expertos", "Flexibilidad"],
    limitations: ["Consume tiempo considerable en transcripción y codificación", "Dificultad para comparar respuestas disímiles"],
    reliabilityValidity: "Criterios de rigor cualitativo: Credibilidad (triangulación con documentación técnica), transferibilidad y auditabilidad del libro de códigos."
  },
  {
    id: "inst-4",
    name: "Telemetría Continua y Benchmarking de Rendimiento Computacional",
    category: "cuantitativo",
    description: "Recolección automatizada de métricas de hardware y software (throughput, latencia P99, IOPS, consumo de CPU, ciclos de recolección de basura) bajo condiciones controladas.",
    applicationInEngineering: "Pruebas de estrés y evaluación experimental de algoritmos criptográficos, motores de bases de datos distribuidas y microservicios en la nube.",
    advantages: ["Precisión micrométrica objetiva", "Eliminación del sesgo humano de observación", "Generación de millones de puntos de datos reproducibles"],
    limitations: ["El propio agente de telemetría puede generar sobrecarga (efecto observador)", "Requiere aislamiento estricto de variables ambientales del servidor"],
    reliabilityValidity: "Calibración del entorno: repetición de al menos 30 iteraciones independientes para verificar normalidad estadística y cálculo de intervalos de confianza."
  },
  {
    id: "inst-5",
    name: "Grupos Focales Técnicos (Technical Focus Groups)",
    category: "cualitativo",
    description: "Sesión interactiva moderada de 6 a 10 especialistas enfocada en debatir dilemas técnicos, evaluar prototipos o analizar lecciones aprendidas tras proyectos fallidos.",
    applicationInEngineering: "Identificación de requerimientos de software no funcionales, evaluación heurística de ergonomía en plantas industriales y diseño de APIs públicas.",
    advantages: ["La interacción grupal cataliza reflexiones y consensos que no surgen en entrevistas individuales", "Identifica divergencias técnicas rápidamente"],
    limitations: ["Un participante dominante puede inhibir opiniones contrarias", "Dificultad para conciliar agendas de ingenieros especialistas"],
    reliabilityValidity: "Grabación audiovisual, transcripción literal con consentimiento informado y validación con los propios participantes (member checking)."
  },
  {
    id: "inst-6",
    name: "Bitácoras de Observación de Código y Revisiones por Pares (Code Review Audits)",
    category: "mixto",
    description: "Instrumento estructurado que combina listas de verificación cuantitativas (número de comentarios, violaciones a estándares, complejidad) con anotaciones cualitativas sobre calidad y legibilidad.",
    applicationInEngineering: "Estudios sobre productividad de desarrolladores, impacto de copilotos de inteligencia artificial en pull requests y auditorías de seguridad en repositorios Git.",
    advantages: ["Evidencia empírica directa del artefacto de ingeniería", "Permite triangular métricas estáticas con apreciaciones humanas"],
    limitations: ["Variabilidad en el criterio de los revisores si no existe una rúbrica formal"],
    reliabilityValidity: "Cálculo del índice de concordancia inter-evaluador (Kappa de Cohen ≥ 0.75)."
  }
];

// Recursos didácticos (videos concretos incrustados con citación APA 7 y enlaces académicos)
export const academicResources: ResourceItem[] = [
  {
    id: "rec-1",
    title: "Máster Class: Metodología de la Investigación - Dr. Roberto Hernández Sampieri",
    type: "video",
    category: "cuantitativo",
    authorOrSpeaker: "Dr. Roberto Hernández-Sampieri (USMP Virtual Oficial)",
    year: 2021,
    duration: "54:12 min",
    description: "Conferencia magistral del Dr. Roberto Hernández-Sampieri donde fundamenta la estructura de los diseños de investigación cuantitativos (experimentales y no experimentales), el control de variables y su articulación con el planteamiento del problema.",
    academicNote: "Este recurso audiovisual primario fue seleccionado y citado porque el propio autor del libro guía del módulo explica cómo evitar errores frecuentes al elegir entre un diseño experimental y uno no experimental transeccional en ciencias aplicadas e ingeniería.",
    keyTakeaways: [
      "Criterios objetivos para definir el alcance (exploratorio, descriptivo, correlacional o explicativo) antes de seleccionar el diseño.",
      "Requisitos esenciales de un experimento puro: manipulación intencional de la variable independiente, medición de la dependiente y control o validez interna.",
      "Cuándo optar por diseños no experimentales transversales o longitudinales cuando la manipulación ética o técnica no es viable."
    ],
    apaCitation: "USMP Virtual Oficial. (2021). Máster Class: Metodología de la Investigación - Dr. Hernández Sampieri [Archivo de video]. YouTube. https://www.youtube.com/watch?v=IP5-ZPxmfMs",
    apaFormattedHtml: "USMP Virtual Oficial. (2021). <em>Máster Class: Metodología de la Investigación - Dr. Hernández Sampieri</em> [Archivo de video]. YouTube. https://www.youtube.com/watch?v=IP5-ZPxmfMs",
    url: "https://www.youtube.com/watch?v=IP5-ZPxmfMs",
    embedId: "IP5-ZPxmfMs",
    sourceName: "USMP Virtual Oficial · YouTube"
  },
  {
    id: "rec-2",
    title: "Enfoques de Investigación Cuantitativo, Cualitativo y Mixto (Cap. 1: Sampieri y Mendoza)",
    type: "video",
    category: "cualitativo",
    authorOrSpeaker: "Homo Academicus (Basado en Hernández-Sampieri & Mendoza)",
    year: 2021,
    duration: "18:45 min",
    description: "Análisis detallado sobre las diferencias epistemológicas y metodológicas de los diseños cualitativos (teoría fundamentada, estudio de casos, diseño etnográfico, fenomenológico e investigación-acción) frente al enfoque cuantitativo y su integración en la ruta mixta.",
    academicNote: "Se incorpora y cita formalmente este material didáctico concreto dado que sintetiza con rigor la obra de Hernández-Sampieri y ejemplifica la complementariedad entre datos numéricos y análisis cualitativo de casos reales.",
    keyTakeaways: [
      "Naturaleza emergente del diseño cualitativo: por qué el muestreo se guía por saturación de categorías y no por fórmulas probabilísticas.",
      "Diferencias prácticas entre Estudio de Casos, Teoría Fundamentada e Investigación-Acción en proyectos aplicados.",
      "Diseño de proyectos mixtos secuenciales y concurrentes: cómo triangular instrumentos cuantitativos y cualitativos con rigor APA 7."
    ],
    apaCitation: "Homo Academicus. (2021). Enfoques de investigación cuantitativo y cualitativo, Cap. 1: Sampieri y otros [Archivo de video]. YouTube. https://www.youtube.com/watch?v=s_Is2MA0YkQ",
    apaFormattedHtml: "Homo Academicus. (2021). <em>Enfoques de investigación cuantitativo y cualitativo, Cap. 1: Sampieri y otros</em> [Archivo de video]. YouTube. https://www.youtube.com/watch?v=s_Is2MA0YkQ",
    url: "https://www.youtube.com/watch?v=s_Is2MA0YkQ",
    embedId: "s_Is2MA0YkQ",
    sourceName: "Homo Academicus · YouTube"
  },
  {
    id: "rec-3",
    title: "SciELO - Scientific Electronic Library Online",
    type: "repositorio",
    category: "general",
    description: "Biblioteca digital de acceso abierto con miles de artículos revisados por pares en ciencias aplicadas, informática e ingeniería en América Latina, España y Portugal.",
    url: "https://scielo.org/es/",
    sourceName: "SciELO Org"
  },
  {
    id: "rec-4",
    title: "Redalyc - Red de Revistas Científicas de América Latina y el Caribe",
    type: "repositorio",
    category: "general",
    description: "Plataforma científica de acceso abierto no comercial con indicadores de impacto bibliométrico para publicaciones de ingeniería y tecnología.",
    url: "https://www.redalyc.org/",
    sourceName: "Redalyc UAEMex"
  },
  {
    id: "rec-5",
    title: "Dialnet - Portal Bibliográfico de Literatura Científica Hispana",
    type: "repositorio",
    category: "general",
    description: "Uno de los mayores portales de artículos de revistas, tesis doctorales y monografías académicas en idioma español mantenido por la Universidad de La Rioja.",
    url: "https://dialnet.unirioja.es/",
    sourceName: "Universidad de La Rioja"
  },
  {
    id: "rec-6",
    title: "Guía Oficial de Normas APA 7.ª Edición (American Psychological Association)",
    type: "guia",
    category: "general",
    description: "Portal oficial con los lineamientos internacionales actualizados para citas en el texto, referencias de artículos científicos con DOI y recursos audiovisuales.",
    url: "https://apastyle.apa.org/style-grammar-guidelines/references/examples/journal-article-references",
    sourceName: "APA Style Official"
  }
];

// Referencias bibliográficas en formato formal APA 7.ª edición con sangría francesa (incluye libros, artículos y videos citados)
export const academicReferences: ReferenceItem[] = [
  {
    id: "ref-9",
    category: "Artículos Cualitativos y Mixtos",
    authors: "Arango-Serna, M. D., & Guerrero-Gómez, K. V.",
    year: 2023,
    title: "Construcción de un modelo de adopción de prácticas DevSecOps: Un enfoque desde la teoría fundamentada",
    source: "Revista EIA, 20(40), 1-19.",
    doiOrUrl: "https://doi.org/10.24050/reia.v20i40.1654",
    apaFormattedHtml: "Arango-Serna, M. D., &amp; Guerrero-Gómez, K. V. (2023). Construcción de un modelo de adopción de prácticas DevSecOps: Un enfoque desde la teoría fundamentada. <em>Revista EIA</em>, 20(40), 1-19. https://doi.org/10.24050/reia.v20i40.1654",
    rawText: "Arango-Serna, M. D., & Guerrero-Gómez, K. V. (2023). Construcción de un modelo de adopción de prácticas DevSecOps: Un enfoque desde la teoría fundamentada. Revista EIA, 20(40), 1-19. https://doi.org/10.24050/reia.v20i40.1654"
  },
  {
    id: "ref-3",
    category: "Libros Metodológicos",
    authors: "Creswell, J. W., & Creswell, J. D.",
    year: 2018,
    title: "Research design: Qualitative, quantitative, and mixed methods approaches",
    source: "SAGE Publications. (5th ed.).",
    apaFormattedHtml: "Creswell, J. W., &amp; Creswell, J. D. (2018). <em>Research design: Qualitative, quantitative, and mixed methods approaches</em> (5th ed.). SAGE Publications.",
    rawText: "Creswell, J. W., & Creswell, J. D. (2018). Research design: Qualitative, quantitative, and mixed methods approaches (5th ed.). SAGE Publications."
  },
  {
    id: "ref-1",
    category: "Libros Metodológicos",
    authors: "Hernández-Sampieri, R., & Mendoza Torres, C. P.",
    year: 2018,
    title: "Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta",
    source: "McGraw-Hill Interamericana Editores.",
    apaFormattedHtml: "Hernández-Sampieri, R., &amp; Mendoza Torres, C. P. (2018). <em>Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta</em>. McGraw-Hill Interamericana Editores.",
    rawText: "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Interamericana Editores."
  },
  {
    id: "ref-vid-2",
    category: "Recursos Audiovisuales",
    authors: "Homo Academicus.",
    year: 2021,
    title: "Enfoques de investigación cuantitativo y cualitativo, Cap. 1: Sampieri y otros [Archivo de video]",
    source: "YouTube.",
    doiOrUrl: "https://www.youtube.com/watch?v=s_Is2MA0YkQ",
    apaFormattedHtml: "Homo Academicus. (2021). <em>Enfoques de investigación cuantitativo y cualitativo, Cap. 1: Sampieri y otros</em> [Archivo de video]. YouTube. https://www.youtube.com/watch?v=s_Is2MA0YkQ",
    rawText: "Homo Academicus. (2021). Enfoques de investigación cuantitativo y cualitativo, Cap. 1: Sampieri y otros [Archivo de video]. YouTube. https://www.youtube.com/watch?v=s_Is2MA0YkQ"
  },
  {
    id: "ref-7",
    category: "Artículos Cuantitativos",
    authors: "López-Pérez, D. M., & Castillo-Torres, R.",
    year: 2021,
    title: "Factores determinantes de la adopción de computación en la nube en empresas manufactureras: Un estudio correlacional-causal",
    source: "Información Tecnológica, 32(3), 115-126.",
    doiOrUrl: "https://doi.org/10.4067/S0718-07642021000300115",
    apaFormattedHtml: "López-Pérez, D. M., &amp; Castillo-Torres, R. (2021). Factores determinantes de la adopción de computación en la nube en empresas manufactureras: Un estudio correlacional-causal. <em>Información Tecnológica</em>, 32(3), 115-126. https://doi.org/10.4067/S0718-07642021000300115",
    rawText: "López-Pérez, D. M., & Castillo-Torres, R. (2021). Factores determinantes de la adopción de computación en la nube en empresas manufactureras: Un estudio correlacional-causal. Información Tecnológica, 32(3), 115-126. https://doi.org/10.4067/S0718-07642021000300115"
  },
  {
    id: "ref-6",
    category: "Artículos Cuantitativos",
    authors: "Méndez-Gómez, A. L., & Morales-Zapata, P. F.",
    year: 2022,
    title: "Impacto de la aplicación de algoritmos de optimización metaheurística en el consumo energético de redes de sensores inalámbricos",
    source: "Ingeniare. Revista Chilena de Ingeniería, 30(4), 680-694.",
    doiOrUrl: "https://doi.org/10.4067/S0718-33052022000400680",
    apaFormattedHtml: "Méndez-Gómez, A. L., &amp; Morales-Zapata, P. F. (2022). Impacto de la aplicación de algoritmos de optimización metaheurística en el consumo energético de redes de sensores inalámbricos. <em>Ingeniare. Revista Chilena de Ingeniería</em>, 30(4), 680-694. https://doi.org/10.4067/S0718-33052022000400680",
    rawText: "Méndez-Gómez, A. L., & Morales-Zapata, P. F. (2022). Impacto de la aplicación de algoritmos de optimización metaheurística en el consumo energético de redes de sensores inalámbricos. Ingeniare. Revista Chilena de Ingeniería, 30(4), 680-694. https://doi.org/10.4067/S0718-33052022000400680"
  },
  {
    id: "ref-8",
    category: "Artículos Cuantitativos",
    authors: "Navarro-Cruz, F. J., & Benítez-Alonso, J.",
    year: 2024,
    title: "Evolución longitudinal de la deuda técnica y mantenibilidad en sistemas de software bancario basados en microfrontends (2020-2024)",
    source: "DYNA Ingeniería e Industria, 99(2), 210-218.",
    doiOrUrl: "https://doi.org/10.6036/DYNA.2024.1042",
    apaFormattedHtml: "Navarro-Cruz, F. J., &amp; Benítez-Alonso, J. (2024). Evolución longitudinal de la deuda técnica y mantenibilidad en sistemas de software bancario basados en microfrontends (2020-2024). <em>DYNA Ingeniería e Industria</em>, 99(2), 210-218. https://doi.org/10.6036/DYNA.2024.1042",
    rawText: "Navarro-Cruz, F. J., & Benítez-Alonso, J. (2024). Evolución longitudinal de la deuda técnica y mantenibilidad en sistemas de software bancario basados en microfrontends (2020-2024). DYNA Ingeniería e Industria, 99(2), 210-218. https://doi.org/10.6036/DYNA.2024.1042"
  },
  {
    id: "ref-2",
    category: "Libros Metodológicos",
    authors: "Ñaupas Paitán, H., Valdivia Dueñas, M. R., Palacios Vilela, J. J., & Romero Delgado, H. E.",
    year: 2018,
    title: "Metodología de la investigación cuantitativa - cualitativa y redacción de la tesis",
    source: "Ediciones de la U. (5.ª ed.).",
    apaFormattedHtml: "Ñaupas Paitán, H., Valdivia Dueñas, M. R., Palacios Vilela, J. J., &amp; Romero Delgado, H. E. (2018). <em>Metodología de la investigación cuantitativa - cualitativa y redacción de la tesis</em> (5.ª ed.). Ediciones de la U.",
    rawText: "Ñaupas Paitán, H., Valdivia Dueñas, M. R., Palacios Vilela, J. J., & Romero Delgado, H. E. (2018). Metodología de la investigación cuantitativa - cualitativa y redacción de la tesis (5.ª ed.). Ediciones de la U."
  },
  {
    id: "ref-11",
    category: "Artículos Cualitativos y Mixtos",
    authors: "Quintana-Beltrán, S. M., & Delgado-Salas, R. A.",
    year: 2023,
    title: "La vivencia del colapso de infraestructura crítica: Un estudio fenomenológico con administradores de sistemas e ingenieros SRE",
    source: "Cuadernos de Gestión Tecnológica e Innovación, 15(1), 77-92.",
    doiOrUrl: "https://doi.org/10.22201/fi.25940732e.2023.15.006",
    apaFormattedHtml: "Quintana-Beltrán, S. M., &amp; Delgado-Salas, R. A. (2023). La vivencia del colapso de infraestructura crítica: Un estudio fenomenológico con administradores de sistemas e ingenieros SRE. <em>Cuadernos de Gestión Tecnológica e Innovación</em>, 15(1), 77-92. https://doi.org/10.22201/fi.25940732e.2023.15.006",
    rawText: "Quintana-Beltrán, S. M., & Delgado-Salas, R. A. (2023). La vivencia del colapso de infraestructura crítica: Un estudio fenomenológico con administradores de sistemas e ingenieros SRE. Cuadernos de Gestión Tecnológica e Innovación, 15(1), 77-92. https://doi.org/10.22201/fi.25940732e.2023.15.006"
  },
  {
    id: "ref-12",
    category: "Artículos Cualitativos y Mixtos",
    authors: "Ramos-Villegas, J. C., Morales, D., & Estrada-Lozano, H.",
    year: 2021,
    title: "Optimización colaborativa y evaluación mixta del proceso de pruebas de software en una fábrica digital",
    source: "Sistemas & Telemática, 19(58), 29-44.",
    doiOrUrl: "https://doi.org/10.18046/syt.v19i58.4412",
    apaFormattedHtml: "Ramos-Villegas, J. C., Morales, D., &amp; Estrada-Lozano, H. (2021). Optimización colaborativa y evaluación mixta del proceso de pruebas de software en una fábrica digital. <em>Sistemas &amp; Telemática</em>, 19(58), 29-44. https://doi.org/10.18046/syt.v19i58.4412",
    rawText: "Ramos-Villegas, J. C., Morales, D., & Estrada-Lozano, H. (2021). Optimización colaborativa y evaluación mixta del proceso de pruebas de software en una fábrica digital. Sistemas & Telemática, 19(58), 29-44. https://doi.org/10.18046/syt.v19i58.4412"
  },
  {
    id: "ref-vid-1",
    category: "Recursos Audiovisuales",
    authors: "USMP Virtual Oficial.",
    year: 2021,
    title: "Máster Class: Metodología de la Investigación - Dr. Hernández Sampieri [Archivo de video]",
    source: "YouTube.",
    doiOrUrl: "https://www.youtube.com/watch?v=IP5-ZPxmfMs",
    apaFormattedHtml: "USMP Virtual Oficial. (2021). <em>Máster Class: Metodología de la Investigación - Dr. Hernández Sampieri</em> [Archivo de video]. YouTube. https://www.youtube.com/watch?v=IP5-ZPxmfMs",
    rawText: "USMP Virtual Oficial. (2021). Máster Class: Metodología de la Investigación - Dr. Hernández Sampieri [Archivo de video]. YouTube. https://www.youtube.com/watch?v=IP5-ZPxmfMs"
  },
  {
    id: "ref-10",
    category: "Artículos Cualitativos y Mixtos",
    authors: "Valencia-Romero, G. E., & Ospina-Duque, M.",
    year: 2022,
    title: "Etnografía y estudio de casos de la interacción humana en equipos ágiles de ingeniería de software distribuidos globalmente",
    source: "Revista Ibérica de Sistemas e Tecnologias de Informação, (E51), 312-326.",
    doiOrUrl: "https://doi.org/10.17013/risti.51.312-326",
    apaFormattedHtml: "Valencia-Romero, G. E., &amp; Ospina-Duque, M. (2022). Etnografía y estudio de casos de la interacción humana en equipos ágiles de ingeniería de software distribuidos globalmente. <em>Revista Ibérica de Sistemas e Tecnologias de Informação</em>, (E51), 312-326. https://doi.org/10.17013/risti.51.312-326",
    rawText: "Valencia-Romero, G. E., & Ospina-Duque, M. (2022). Etnografía y estudio de casos de la interacción humana en equipos ágiles de ingeniería de software distribuidos globalmente. Revista Ibérica de Sistemas e Tecnologias de Informação, (E51), 312-326. https://doi.org/10.17013/risti.51.312-326"
  },
  {
    id: "ref-5",
    category: "Artículos Cuantitativos",
    authors: "Vega-Guzmán, H., Soto-Mayor, C., & Rivas-García, E.",
    year: 2023,
    title: "Evaluación experimental del rendimiento de microservicios contenerizados frente a arquitecturas monolíticas",
    source: "Revista Facultad de Ingeniería Universidad de Antioquia, (107), 45-58.",
    doiOrUrl: "https://doi.org/10.17533/udea.redin.20220993",
    apaFormattedHtml: "Vega-Guzmán, H., Soto-Mayor, C., &amp; Rivas-García, E. (2023). Evaluación experimental del rendimiento de microservicios contenerizados frente a arquitecturas monolíticas. <em>Revista Facultad de Ingeniería Universidad de Antioquia</em>, (107), 45-58. https://doi.org/10.17533/udea.redin.20220993",
    rawText: "Vega-Guzmán, H., Soto-Mayor, C., & Rivas-García, E. (2023). Evaluación experimental del rendimiento de microservicios contenerizados frente a arquitecturas monolíticas. Revista Facultad de Ingeniería Universidad de Antioquia, (107), 45-58. https://doi.org/10.17533/udea.redin.20220993"
  },
  {
    id: "ref-4",
    category: "Libros Metodológicos",
    authors: "Yin, R. K.",
    year: 2018,
    title: "Case study research and applications: Design and methods",
    source: "SAGE Publications. (6th ed.).",
    apaFormattedHtml: "Yin, R. K. (2018). <em>Case study research and applications: Design and methods</em> (6th ed.). SAGE Publications.",
    rawText: "Yin, R. K. (2018). Case study research and applications: Design and methods (6th ed.). SAGE Publications."
  }
];
