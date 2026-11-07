# Metodología & Diseños de Investigación en Ingeniería y Tecnología (Blog Académico)

Plataforma académica interactiva tipo blog construida con React, Vite y Tailwind CSS, diseñada específicamente para el análisis riguroso de diseños de investigación cuantitativos, cualitativos y mixtos en el campo de la Ingeniería y Tecnología, con citas APA 7.ª edición, artículos científicos reales con DOI y preparación directa para despliegue en Vercel.

## Decisiones Críticas y Confirmaciones

> [!IMPORTANT]
> A continuación se resumen las elecciones confirmadas para el desarrollo del blog académico:
> - **Campo disciplinar confirmado**: Ingeniería y Tecnología (artículos de software, analítica de datos, ciberseguridad, automatización y telecomunicaciones de Scielo, Redalyc, IEEE y Dialnet).
> - **Tecnología confirmada**: Aplicación web interactiva SPA con React 19, TypeScript, Vite y Tailwind CSS, con `vercel.json` preconfigurado para URLs amigables y despliegue con un clic.
> - **Estilo visual confirmado**: Minimalismo universitario y editorial académico (alta legibilidad, tipografía serif/sans-serif refinada, barra de lectura, modo oscuro/claro con `@custom-variant dark`, y citas con sangría francesa).
> - **Equipo de autores y metadatos**: Se incluye una sección "Sobre el Equipo" con datos preconfigurados y un editor en vivo con persistencia en `localStorage` para que el grupo pueda ingresar sus nombres, institución, curso y docente sin tocar código.

---

## 1. Visión General y Concepto Central

### Qué hace la aplicación
Proporciona un entorno web de divulgación científica y consulta académica estructurado en módulos interactivos:
1. **Inicio & Portada Editorial**: Tesis central, resumen temático, métricas de contenido y acceso directo a cada sección.
2. **Fundamentos Epistemológicos**: Definición formal de diseño según Hernández-Sampieri (2018) y Ñaupas et al. (2018), rutas metodológicas (cuantitativa, cualitativa y mixta).
3. **Diseños Cuantitativos**: Clasificación exhaustiva de diseños experimentales (preexperimentos, cuasiexperimentos y experimentos puros con control, notación científica $R, G, X, O$, validez interna y externa) y no experimentales (transversales: exploratorios, descriptivos, correlacionales-causales; longitudinales: tendencia, cohorte, panel).
4. **Diseños Cualitativos**: Enfoques metodológicos fundamentales (teoría fundamentada, etnografía, narrativa, fenomenología, investigación-acción y estudio de casos en ingeniería de software y adopción tecnológica).
5. **Matriz Comparativa Interactiva**: Tabla y selector multidimensional de contrastes (lógica, muestra, recolección de datos, análisis, rol del investigador y generalización de resultados).
6. **Repositorio de Artículos Reales (Ingeniería y Tecnología)**: 8 artículos científicos reales verificados con DOI activo de Scielo, Redalyc y Dialnet (4 cuantitativos y 4 cualitativos), con desglose de objetivo, muestra, instrumentos aplicados, hallazgos clave y botón para copiar citación APA 7.
7. **Instrumentos y Técnicas de Recolección**: Cuestionarios técnicos, escala Likert, entrevistas a profundidad, benchmarking experimental, telemetría y pruebas de rendimiento.
8. **Recursos Didácticos y Multimedia**: Videos educativos embebidos (metodología cuantitativa y cualitativa en tecnología) y enlaces directos a bibliotecas académicas (Scielo, Redalyc, Dialnet, Google Académico, APA Style).
9. **Referencias Bibliográficas APA 7**: Listado riguroso con formato de sangría francesa visual, buscador dinámico y copiado de citas al portapapeles.
10. **Panel de Autores & Guía Vercel**: Ficha editable del equipo universitario y modal explicativo paso a paso para subir el repositorio a GitHub y conectarlo a Vercel.

### Audiencia Objetivo
Estudiantes universitarios, investigadores en formación y docentes de facultades de Ingeniería y Tecnología que requieren un marco metodológico estructurado conforme a la rúbrica de evaluación.

---

## 2. Experiencia de Usuario y Diseño Visual

### Identidad Visual y Paleta (Minimalismo Universitario)
Siguiendo las directrices editoriales universitarias (60% lienzo neutro, 30% superficies estructuradas, 10% acento sobrio):
- **Modo Claro**:
  - Lienzo: Alabastro / Papel marfil suave (`#FAF8F5` / `bg-stone-50`).
  - Superficies y tarjetas: Blanco puro (`#FFFFFF`) con bordes capilares sutiles (`border-stone-200`).
  - Tipografía principal: Carbón de imprenta (`text-stone-900`) y gris editorial (`text-stone-600`).
  - Acentos sobrios: Azul marino institucional / pizarra (`#1E3A8A` / `indigo-900` para cuanti) y Verde salvia / azul petróleo (`#0F766E` / `teal-800` para cuali).
- **Modo Oscuro** (configurado con `@custom-variant dark` para compatibilidad con Tailwind v4):
  - Lienzo: Pizarra oscura suave (`#0C0F14` / `dark:bg-stone-950`).
  - Superficies: Carbón oscuro (`dark:bg-stone-900` con `dark:border-stone-800`).
  - Tipografía: Marfil atenuado (`dark:text-stone-100`) y gris cálido (`dark:text-stone-400`).
- **Tipografía**:
  - Títulos y encabezados: Display serif humanista con personalidad editorial y equilibrio (`text-wrap: balance`).
  - Cuerpo de texto: Sans-serif limpio de alta legibilidad (`measure` de 65–75 caracteres, `leading-relaxed`).
  - Citas y fórmulas metodológicas: Monospace y notación matemática (`font-mono tabular-nums`).
- **Disciplinas de diseño anti-slop**:
  - Cero píldoras decorativas vacías; metadatos limpios separados por puntos tipográficos (`·`).
  - Sin prefijos artificiales tipo `// 01` ni puntos pulsantes decorativos.
  - Indicador de progreso de lectura en la parte superior del visor.
  - Tarjetas de artículos científicos con botón de copia rápida de cita APA 7 y retroalimentación táctil accesible.

---

## 3. Decisiones de Producto y Arquitectura

1. **SPA con Navegación por Pestañas / Rutas Limpias**:
   - *Decisión*: Arquitectura de navegación fluida en cliente que simula páginas independientes del blog con selector superior (Inicio, Fundamentos, Cuantitativos, Cualitativos, Comparador, Artículos, Instrumentos, Recursos, Referencias, Autores).
   - *Por qué*: Carga instantánea, sin parpadeos, compatible tanto con el preview de AI Studio como con Vercel.
2. **Copia de Citas APA 7 en 1 Clic**:
   - *Decisión*: Cada artículo y referencia incluye un botón "Copiar cita APA 7" con notificación visual instantánea.
   - *Por qué*: Maximiza la utilidad práctica para los integrantes del grupo y lectores académicos.
3. **Persistencia Local de Datos de Autores**:
   - *Decisión*: Guardar los nombres de los integrantes, profesor y asignatura en `localStorage` con un modal de edición simple.
   - *Por qué*: Permite al grupo personalizar los datos en cualquier momento sin necesidad de editar código fuente.
4. **Archivo de Configuración para Vercel**:
   - *Decisión*: Provisión de `vercel.json` con reescritura de rutas (`rewrites`) para que el sitio funcione a la perfección en producción.

---

## 4. Arquitectura Técnica y Modelo de Datos

### Diagrama de Componentes

```
┌────────────────────────────────────────────────────────────────────────┐
│                          App.tsx (Root State)                          │
│   - activeTab / activeFilter  - darkMode state  - authorsData (LS)     │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
       ┌─────────────────────────────┼─────────────────────────────┐
       ▼                             ▼                             ▼
┌──────────────┐             ┌──────────────┐             ┌──────────────┐
│  TopNavBar   │             │ ReadingBar   │             │  HeroBanner  │
│ - Brand      │             │ - Progress % │             │ - Contexto   │
│ - 6 Nav tabs │             └──────────────┘             │ - Tesis      │
│ - DarkToggle │                                          └──────────────┘
└──────────────┘
       │
       ├─► [FundamentosView]    ── Sampieri (2018) + Ñaupas (2018) + Rutas
       ├─► [CuantitativosView]  ── Exp (Pre, Cuasi, Puros) + No Exp (Transv/Long)
       ├─► [CualitativosView]   ── Teoría Fundamentada, Etnografía, Narrativo, etc.
       ├─► [ComparadorView]     ── Matriz interactiva de contraste metodológico
       ├─► [ArticulosView]      ── 8 artículos reales de Ingeniería con DOI y filtro
       ├─► [InstrumentosView]   ── Cuestionarios, Likert, Entrevistas, Telemetría
       ├─► [RecursosView]       ── Videos embebidos y repositorios indexados
       ├─► [ReferenciasView]    ── Bibliografía APA 7 con sangría francesa visual
       └─► [EquipoModal/View]   ── Integrantes, docente, curso y guía Vercel
```

### Estructura de Datos (TypeScript)

- `Article`: id, title, authors, year, journal, doi, url, designType ('cuantitativo' | 'cualitativo'), subDesign, objective, sample, instruments, findings, apaCitation.
- `ComparisonItem`: dimension, enfoqueCuantitativo, enfoqueCualitativo, enfoqueMixto, ejemploIngenieria.
- `AuthorInfo`: integrantes (array de nombres), docente, asignatura, institucion, fechaEntrega.
- `ReferenceItem`: id, citationHtml, rawText, category, doiUrl.

---

## Plan de Verificación

1. **Compilación y Linteo**: Ejecutar `compile_applet` y `lint_applet` para asegurar ausencia de errores tipográficos o de dependencias.
2. **Validación de Enlaces y DOI**: Comprobar que los artículos científicos reales de Scielo, Redalyc e IEEE tengan formato de DOI/enlace válido y citas APA 7 impecables.
3. **Responsive y Contraste**: Validar visualización limpia tanto en pantallas de escritorio (1440px) como en dispositivos móviles, sin desbordamientos horizontales.
4. **Funcionalidad de Copiado y Modo Oscuro**: Probar el botón de copiar citas al portapapeles y la alternancia de temas clara/oscura.
5. **Compatibilidad Vercel**: Asegurar que `package.json` y `vercel.json` contengan los scripts y rutas necesarias para un despliegue sin fricciones.
