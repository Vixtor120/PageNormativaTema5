export const ALL_QUESTIONS = [
  // ── ISO 27001 ──────────────────────────────────────────────
  {
    id: 1, topic: "ISO 27001",
    question: "¿Cuántos controles tiene el Anexo A de ISO 27001:2022 y en cuántos dominios se agrupan?",
    options: ["114 controles en 14 dominios","93 controles en 4 dominios","93 controles en 14 dominios","114 controles en 4 dominios"],
    correct: 1,
    explanation: "ISO 27001:2022 redujo de 114 controles (14 dominios) a 93 controles en 4 dominios conceptuales. Los controles se fusionaron y reorganizaron para reflejar riesgos modernos."
  },
  {
    id: 2, topic: "ISO 27001",
    question: "¿Es la ISO 27001 de obligado cumplimiento?",
    options: ["Sí, para todas las empresas de la UE","Sí, solo para el sector público","No, es voluntaria pero certificable","Solo obligatoria si superas 250 empleados"],
    correct: 2,
    explanation: "ISO 27001 es un estándar internacional voluntario, no obligatorio. Sin embargo, es certificable por entidades acreditadas, lo que la diferencia del ENS (obligatorio para AAPP)."
  },
  {
    id: 3, topic: "ISO 27001",
    question: "¿Cuál de estos es un control NUEVO introducido en ISO 27001:2022?",
    options: ["Control de accesos físicos","A.5.23 Seguridad para servicios cloud","Gestión de contraseñas","Clasificación de la información"],
    correct: 1,
    explanation: "Los 11 nuevos controles de 2022 incluyen: A.5.7 Threat intelligence, A.5.23 Seguridad cloud, A.8.10 Borrado de información, A.8.12 Prevención de fuga de datos, A.8.28 Codificación segura, entre otros."
  },
  {
    id: 4, topic: "ISO 27001",
    question: "¿Qué norma de la familia ISO 27000 se ocupa específicamente de la gestión de incidentes de seguridad?",
    options: ["ISO/IEC 27001","ISO/IEC 27005","ISO/IEC 27035","ISO/IEC 27032"],
    correct: 2,
    explanation: "ISO/IEC 27035 trata la gestión de incidentes de seguridad. ISO 27001 es el SGSI, 27005 es gestión de riesgos, y 27032 son directrices de ciberseguridad."
  },
  {
    id: 5, topic: "ISO 27001",
    question: "¿Qué nueva categoría de atributos introduce ISO 27001:2022 para clasificar controles?",
    options: ["Solo tipo y propiedad de seguridad","5 tipos de atributos (tipo, propiedad de seguridad, conceptos de ciberseguridad, capacidades operativas, dominios de seguridad)","3 tipos: preventivo, detectivo, correctivo","Los atributos ya existían en la versión 2013"],
    correct: 1,
    explanation: "ISO 27001:2022 introduce 5 tipos de atributos para clasificar controles de forma flexible: tipo (preventivo/detectivo/correctivo), propiedad de seguridad, temas de ciberseguridad, capacidades operativas y dominios de seguridad."
  },
  {
    id: 6, topic: "ISO 27001",
    question: "¿Qué norma de la familia ISO 27000 proporciona el vocabulario y visión general del SGSI?",
    options: ["ISO/IEC 27001","ISO/IEC 27000","ISO/IEC 27002","ISO/IEC 27005"],
    correct: 1,
    explanation: "ISO/IEC 27000 proporciona la visión general y el vocabulario común de todos los estándares de la serie. Es el glosario de referencia para el resto de normas."
  },
  {
    id: 7, topic: "ISO 27001",
    question: "¿Cuál es el objetivo declarado de la serie ISO 27000?",
    options: [
      "Certificar a los técnicos de seguridad informática",
      "Establecer requisitos y directrices para implantar un SGSI con enfoque de mejora continua",
      "Regular el uso de datos personales en entidades privadas",
      "Definir las sanciones por incumplimiento de seguridad"
    ],
    correct: 1,
    explanation: "El objetivo de la serie 27000 es establecer requisitos y directrices para implantar un SGSI que permita gestionar la seguridad de la información mediante un enfoque de mejora continua (ciclo PDCA)."
  },
  // ── SGSI ──────────────────────────────────────────────────
  {
    id: 8, topic: "SGSI",
    question: "¿Qué garantiza el SGSI? Selecciona la tríada correcta.",
    options: ["Confidencialidad, Integridad y Disponibilidad","Trazabilidad, Autenticidad y Disponibilidad","Confidencialidad, Trazabilidad y Autenticidad","Integridad, Resiliencia y Disponibilidad"],
    correct: 0,
    explanation: "El SGSI garantiza la tríada CID: Confidencialidad (solo acceden autorizados), Integridad (no manipulada sin autorización) y Disponibilidad (accesible cuando se necesita)."
  },
  {
    id: 9, topic: "SGSI",
    question: "¿Cuál es la fase correcta que sigue a 'Análisis de riesgos' en la implementación de un SGSI?",
    options: ["Selección de controles","Gestión del riesgo","Declaración de aplicabilidad (SoA)","Definir el alcance"],
    correct: 1,
    explanation: "El orden correcto es: Política → Alcance → Análisis de riesgos → Gestión del riesgo → Selección de controles → SoA → Revisión del sistema."
  },
  {
    id: 10, topic: "SGSI",
    question: "¿Cuál es la primera fase para implementar un SGSI?",
    options: ["Análisis de riesgos","Definir el alcance del SGSI","Definir la política de seguridad","Selección de controles"],
    correct: 2,
    explanation: "Las 7 fases son: (1) Política de seguridad, (2) Alcance del SGSI, (3) Análisis de riesgos, (4) Gestión del riesgo, (5) Selección de controles, (6) SoA, (7) Revisión del sistema."
  },
  {
    id: 11, topic: "SGSI",
    question: "¿Cuántas fases tiene el proceso de implementación de un SGSI según ISO 27001?",
    options: ["5 fases","6 fases","7 fases","9 fases"],
    correct: 2,
    explanation: "Son 7 fases: Política → Alcance → Análisis de riesgos → Gestión del riesgo → Controles → SoA → Revisión."
  },
  // ── SoA ───────────────────────────────────────────────────
  {
    id: 12, topic: "SoA",
    question: "¿Cuál de estos NO es un motivo para actualizar la Declaración de Aplicabilidad (SoA)?",
    options: ["Cambios organizativos u operacionales","Nueva información de clientes o legislación","Adquisición de nuevos activos TIC","La dirección decide asumir un riesgo existente sin cambios en el sistema"],
    correct: 3,
    explanation: "La SoA se actualiza ante: nueva información, adquisición/sustitución de activos, cambios organizativos y cambios en el contexto o requisitos. Asumir un riesgo ya conocido sin cambios en el sistema no implica actualizar la SoA."
  },
  {
    id: 13, topic: "SoA",
    question: "¿Por qué la SoA es el documento más importante de ISO 27001?",
    options: [
      "Porque es el único documento exigido por ley",
      "Porque justifica inclusión/exclusión de controles, es obligatoria para certificación y guía a los auditores",
      "Porque contiene el análisis de riesgos completo",
      "Porque lo firma el CEO de la organización"
    ],
    correct: 1,
    explanation: "La SoA es clave porque: justifica qué controles aplican y cuáles no, es obligatoria para la certificación ISO 27001, guía a auditores internos y externos, y es un documento vivo que refleja el estado real del SGSI."
  },
  {
    id: 14, topic: "SoA",
    question: "¿Qué contiene típicamente el documento SoA?",
    options: [
      "Solo la lista de controles aplicables",
      "Controles del Anexo A, si aplican o no, justificación, estado de implementación y documentación relacionada",
      "El análisis de riesgos y el plan de tratamiento",
      "Solo los controles excluidos y su justificación"
    ],
    correct: 1,
    explanation: "La SoA incluye: todos los controles del Anexo A, si aplican o no y sus justificaciones, estado de implementación, responsable, observaciones y documentación relacionada (procedimientos, evidencias)."
  },
  // ── Análisis de riesgos ────────────────────────────────────
  {
    id: 15, topic: "Análisis de riesgos",
    question: "¿Cómo se calcula el riesgo según ISO 27001?",
    options: ["Riesgo = Amenaza + Vulnerabilidad","Riesgo = Impacto × Probabilidad de la amenaza","Riesgo = Activo × Impacto","Riesgo = Probabilidad / Impacto"],
    correct: 1,
    explanation: "Riesgo = Impacto × Probabilidad de la amenaza. Esta fórmula es el eje del análisis de riesgos en ISO 27001 y permite priorizar el Plan de Tratamiento del Riesgo."
  },
  {
    id: 16, topic: "Análisis de riesgos",
    question: "¿Cuántos pasos tiene el proceso de análisis de riesgos de ISO 27001?",
    options: ["5 pasos","6 pasos","8 pasos","10 pasos"],
    correct: 2,
    explanation: "Son 8 pasos: (1) Identificar activos y responsables, (2) Identificar vulnerabilidades, (3) Identificar amenazas, (4) Identificar requisitos legales, (5) Identificar riesgos, (6) Calcular el riesgo, (7) Plan de tratamiento, (8) SoA."
  },
  {
    id: 17, topic: "Análisis de riesgos",
    question: "Una empresa decide externalizar un servicio para trasladar la responsabilidad del riesgo a un proveedor. ¿Qué opción de tratamiento aplica?",
    options: ["Mitigar el riesgo","Asumir el riesgo","Transferir el riesgo","Eliminar el riesgo"],
    correct: 2,
    explanation: "Transferir el riesgo: se traslada a un tercero (seguro, proveedor, subcontratación). Ojo: la responsabilidad última sigue siendo de la organización. Mitigar = controles; Asumir = tolerarlo; Eliminar = suprimir la actividad."
  },
  {
    id: 18, topic: "Análisis de riesgos",
    question: "¿Cuál de estas opciones de tratamiento del riesgo suele ser la MENOS viable por su coste?",
    options: ["Mitigar el riesgo","Asumir el riesgo","Transferir el riesgo","Eliminar el riesgo"],
    correct: 3,
    explanation: "Eliminar el riesgo (suprimir la actividad que lo genera) suele ser la opción menos viable porque implica renunciar a actividades del negocio, siendo generalmente más costosa que mitigarlo o transferirlo."
  },
  // ── ENS ───────────────────────────────────────────────────
  {
    id: 19, topic: "ENS",
    question: "¿Cuál es la mnemotecnia para las dimensiones de seguridad del ENS?",
    options: ["ACID","CITAD","DICA","TICAT"],
    correct: 1,
    explanation: "CITAD: Confidencialidad, Integridad, Trazabilidad, Autenticidad y Disponibilidad. Son las 5 dimensiones de seguridad que protege el ENS (frente a la tríada CID del SGSI)."
  },
  {
    id: 20, topic: "ENS",
    question: "¿Qué tipo de auditoría requiere un sistema de nivel BAJO en el ENS?",
    options: ["Auditoría externa anual","Auditoría bienal por personal independiente","Autoevaluación","No requiere auditoría"],
    correct: 2,
    explanation: "Nivel BAJO → solo autoevaluación. Nivel MEDIO o ALTO → auditoría bienal externa realizada por personal independiente del sistema auditado."
  },
  {
    id: 21, topic: "ENS",
    question: "¿En qué Real Decreto se recoge el ENS actualmente vigente?",
    options: ["Real Decreto 3/2010","Real Decreto 311/2022","Real Decreto 704/2011","Real Decreto 1720/2007"],
    correct: 1,
    explanation: "El ENS fue establecido por el Real Decreto 3/2010 y fue actualizado por el Real Decreto 311/2022, que es la versión actualmente vigente."
  },
  {
    id: 22, topic: "ENS",
    question: "Un incidente de seguridad tiene consecuencias catastróficas y afecta a múltiples dimensiones de seguridad. ¿Qué nivel ENS corresponde?",
    options: ["BAJO","MEDIO","ALTO","CRÍTICO"],
    correct: 2,
    explanation: "Nivel ALTO: consecuencias muy graves o catastróficas que afectan a muchas dimensiones. MEDIO: consecuencias graves que afectan a alguna dimensión. BAJO: consecuencias limitadas que afectan a alguna dimensión."
  },
  {
    id: 23, topic: "ENS",
    question: "¿Cuáles son los tres grupos en que se dividen las medidas de seguridad del ENS (Anexo II)?",
    options: [
      "Técnico, organizativo y legal",
      "Marco organizativo, marco operacional y marco de protección",
      "Preventivo, detectivo y correctivo",
      "Físico, lógico y procedimental"
    ],
    correct: 1,
    explanation: "El Anexo II del ENS divide las medidas de seguridad en: Marco organizativo (políticas y procedimientos), Marco operacional (gestión operativa) y Marco de protección (salvaguardas concretas)."
  },
  {
    id: 24, topic: "ENS",
    question: "¿Cuáles de estos sectores privados DEBEN cumplir el ENS?",
    options: [
      "Todas las empresas privadas con más de 50 empleados",
      "Solo las empresas del sector financiero",
      "Empresas privadas que presten servicios o soluciones a organismos públicos",
      "El ENS solo aplica al sector público, nunca al privado"
    ],
    correct: 2,
    explanation: "El ENS aplica al sector público (AAPP) y también al sector privado cuando presta servicios o soluciones a organismos públicos. No aplica si el sistema no está relacionado con el ejercicio de derechos o deberes por medios electrónicos."
  },
  {
    id: 25, topic: "ENS",
    question: "¿Qué metodología oficial de análisis y gestión de riesgos usa el CCN como instrumento de apoyo al ENS?",
    options: ["OCTAVE","CRAMM","MAGERIT","STRIDE"],
    correct: 2,
    explanation: "MAGERIT (Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información) es la metodología oficial del CCN como instrumento de apoyo al ENS para el análisis de riesgos."
  },
  // ── ENS vs ISO 27001 ──────────────────────────────────────
  {
    id: 26, topic: "ENS vs ISO 27001",
    question: "¿Cuál es la principal diferencia entre el ENS y la ISO 27001?",
    options: [
      "El ENS es voluntario; ISO 27001 es obligatoria para empresas privadas",
      "El ENS es obligatorio para las AAPP; ISO 27001 es un estándar voluntario",
      "Ambas son obligatorias, pero para sectores distintos",
      "El ENS solo aplica a nivel autonómico; ISO 27001 es nacional"
    ],
    correct: 1,
    explanation: "El ENS es una norma jurídica de obligado cumplimiento para las AAPP. ISO 27001 es un estándar internacional voluntario y certificable. Son complementarias: se puede usar ISO 27001 para cumplir los requisitos del ENS."
  },
  {
    id: 27, topic: "ENS vs ISO 27001",
    question: "¿Son equivalentes los niveles BÁSICO/MEDIO/ALTO del ENS y los de la LOPD?",
    options: [
      "Sí, tienen la misma semántica en ambas normativas",
      "Solo son equivalentes para sistemas de nivel ALTO",
      "No, en el ENS se basa en impacto del incidente; en la LOPD en la sensibilidad del dato",
      "Sí, pero solo en el sector público"
    ],
    correct: 2,
    explanation: "No son equivalentes. En la LOPD, el nivel se determina por la sensibilidad de los datos personales. En el ENS, la categoría del sistema se basa en el impacto que un incidente tendría sobre la organización (CITAD). Cada sistema debe cualificarse independientemente."
  },
  // ── Roles ENS ─────────────────────────────────────────────
  {
    id: 28, topic: "Roles ENS",
    question: "Según el ENS (CCN-STIC 801), ¿quién elabora la política de seguridad y el análisis de riesgos?",
    options: ["Responsable de la información","Responsable del sistema","Responsable de seguridad","Comité de Seguridad"],
    correct: 2,
    explanation: "El Responsable de Seguridad: categoriza el sistema, elabora la política de seguridad, realiza el análisis de riesgos, gestiona la documentación y propone planes de mejora. Es el rol clave operativo del ENS."
  },
  {
    id: 29, topic: "Roles ENS",
    question: "¿Qué rol del ENS determina los requisitos de seguridad de la información y los servicios?",
    options: ["Responsable del sistema","Responsable de seguridad","Responsable de la información","Comité de Seguridad"],
    correct: 2,
    explanation: "El Responsable de la información determina los requisitos de seguridad de los servicios e información. El Responsable del sistema ejecuta los controles, y el Responsable de seguridad elabora las políticas y el análisis de riesgos."
  },
  {
    id: 30, topic: "Roles ENS",
    question: "¿Cuál es la función del Comité de Seguridad en el ENS?",
    options: [
      "Realizar las auditorías externas bienales",
      "Alinear la seguridad con la estrategia organizativa; está formado por la Alta Dirección y los responsables de seguridad",
      "Gestionar los incidentes de seguridad diarios",
      "Implementar técnicamente los controles del Anexo A"
    ],
    correct: 1,
    explanation: "El Comité de Seguridad alinea la seguridad con la estrategia de la organización. Está formado por la Alta Dirección y los responsables de información, sistema y seguridad."
  },
  // ── NIS I ─────────────────────────────────────────────────
  {
    id: 31, topic: "NIS I",
    question: "¿A qué dos categorías afecta la Directiva NIS I?",
    options: [
      "Entidades esenciales y entidades importantes",
      "Operadores de Servicios Esenciales y Proveedores de Servicios Digitales",
      "Administraciones Públicas y empresas privadas",
      "Sector financiero y sector industrial"
    ],
    correct: 1,
    explanation: "NIS I afecta a: (1) Operadores de Servicios Esenciales (energía, transporte, banca, salud...) y (2) Proveedores de Servicios Digitales (marketplaces, buscadores, servicios cloud). NIS II amplió y reformuló estas categorías."
  },
  {
    id: 32, topic: "NIS I",
    question: "¿En qué año se publicó la Directiva NIS I?",
    options: ["2013","2016","2018","2020"],
    correct: 1,
    explanation: "La Directiva NIS I se publicó en julio de 2016. Fue la primera legislación horizontal adoptada a nivel de la UE para la protección de redes y sistemas de información."
  },
  {
    id: 33, topic: "NIS I",
    question: "Según la NIS I, ¿qué tipo de incidentes deben notificar los Operadores de Servicios Esenciales?",
    options: ["Todos los incidentes, sin excepción","Solo incidentes con impacto GRAVE","Solo incidentes con impacto sustancial","Incidentes que afecten a datos personales"],
    correct: 1,
    explanation: "Los Operadores de Servicios Esenciales deben notificar incidentes con impacto GRAVE. Los Proveedores de Servicios Digitales, en cambio, notifican incidentes con impacto 'sustancial'."
  },
  // ── NIS II ────────────────────────────────────────────────
  {
    id: 34, topic: "NIS II",
    question: "Según la Directiva NIS II, ¿cuál es el plazo para el informe inicial al CSIRT tras un incidente?",
    options: ["12 horas","24 horas","72 horas","1 semana"],
    correct: 1,
    explanation: "NIS II establece: alerta temprana al CSIRT en 24 horas, y un informe completo/final en el plazo de 1 mes desde el incidente."
  },
  {
    id: 35, topic: "NIS II",
    question: "¿Cuál es la sanción máxima para entidades ESENCIALES que incumplan la NIS II?",
    options: ["Hasta 1,4% o 7 M€","Hasta 2% o 10 M€","Hasta 4% o 20 M€","Hasta 5% o 10 M€"],
    correct: 1,
    explanation: "NIS II: entidades esenciales → hasta 2% del volumen de negocios o 10 M€. Entidades importantes → hasta 1,4% o 7 M€. No confundir con DORA (5% o 10M€) ni con GDPR (4% o 20M€)."
  },
  {
    id: 36, topic: "NIS II",
    question: "¿En qué año se publicó la Directiva NIS II?",
    options: ["2020","2021","2022","2023"],
    correct: 2,
    explanation: "La Directiva NIS II se publicó el 27 de diciembre de 2022 en el Diario Oficial de la UE, con el objetivo de eliminar las divergencias en la aplicación de NIS I entre Estados miembros."
  },
  {
    id: 37, topic: "NIS II",
    question: "¿Qué novedad introduce NIS II respecto a los órganos de dirección de las entidades afectadas?",
    options: [
      "Solo deben ser notificados de los incidentes",
      "Deben aprobar y supervisar las medidas de ciberseguridad y asistir a formaciones; pueden ser sancionados personalmente",
      "Solo aplica a entidades con más de 500 empleados",
      "Delegan toda responsabilidad en el CISO"
    ],
    correct: 1,
    explanation: "NIS II establece responsabilidad directa de los órganos de dirección: deben aprobar y supervisar las medidas de ciberseguridad, asistir a formaciones obligatorias y pueden ser sancionados personalmente por incumplimiento."
  },
  {
    id: 38, topic: "NIS II",
    question: "¿Qué umbral de tamaño de empresa determina la aplicación obligatoria de NIS II?",
    options: [
      "Más de 50 empleados y facturación superior a 10 M€",
      "Más de 100 empleados y facturación superior a 20 M€",
      "Más de 250 empleados y facturación superior a 50 M€ o balance superior a 43 M€",
      "Aplica a todas las empresas sin límite de tamaño"
    ],
    correct: 2,
    explanation: "NIS II es obligatoria para entidades con más de 250 empleados y facturación anual superior a 50 M€ o balance superior a 43 M€. También aplica a ciertos sectores críticos independientemente del tamaño."
  },
  // ── LPIC ──────────────────────────────────────────────────
  {
    id: 39, topic: "LPIC",
    question: "¿Qué documento debe elaborar CADA operador crítico respecto a cada una de sus infraestructuras críticas?",
    options: ["PES (Plan Estratégico Sectorial)","PSO (Plan de Seguridad del Operador)","PPE (Plan de Protección Específico)","PAO (Plan de Apoyo Operativo)"],
    correct: 2,
    explanation: "El PPE (Plan de Protección Específico) lo elabora cada operador crítico para CADA infraestructura crítica concreta. El PSO es el plan general del operador, el PES es sectorial y el PAO lo elabora la administración y fuerzas de seguridad."
  },
  {
    id: 40, topic: "LPIC",
    question: "¿Qué Ley y Real Decreto constituyen la base legal de la protección de infraestructuras críticas en España?",
    options: ["Ley 8/2011 y Real Decreto 704/2011","Ley 34/2002 y Real Decreto 311/2022","Ley 9/2014 y Real Decreto 3/2010","Ley 11/2002 y Real Decreto 1720/2007"],
    correct: 0,
    explanation: "La Ley PIC 8/2011 y el Real Decreto 704/2011 complementario son la base legal de la protección de infraestructuras críticas en España."
  },
  {
    id: 41, topic: "LPIC",
    question: "Según la Ley PIC, ¿qué diferencia hay entre infraestructura 'crítica' y 'estratégica'?",
    options: [
      "No existe diferencia, son sinónimos",
      "Crítica: no permite soluciones alternativas y su perturbación tiene grave impacto. Estratégica: instalaciones sobre las que descansan los servicios esenciales",
      "Crítica: de titularidad pública. Estratégica: de titularidad privada",
      "Crítica: física. Estratégica: digital"
    ],
    correct: 1,
    explanation: "Infraestructura crítica: su perturbación o destrucción tendría grave impacto y no permite soluciones alternativas. Infraestructura estratégica: instalaciones, redes y sistemas sobre los que descansan los servicios esenciales (concepto más amplio)."
  },
  {
    id: 42, topic: "LPIC",
    question: "¿Quién elabora el PAO (Plan de Apoyo Operativo) según la Ley PIC?",
    options: ["El operador crítico","La Administración competente apoyada por las fuerzas de seguridad","El INCIBE","El CCN"],
    correct: 1,
    explanation: "El PAO (Plan de Apoyo Operativo) lo elabora la administración competente apoyada por la policía y fuerzas de seguridad para coordinar la respuesta ante incidentes en infraestructuras críticas."
  },
  // ── LPIC vs NIS ───────────────────────────────────────────
  {
    id: 43, topic: "LPIC vs NIS",
    question: "¿Cuál es la principal diferencia entre la Ley PIC y la Directiva NIS?",
    options: [
      "La Ley PIC solo afecta al sector energético; NIS a todos los sectores",
      "En la Ley PIC la ciberseguridad es una parte más; en NIS es el eje principal",
      "NIS es nacional; Ley PIC es europea",
      "La Ley PIC exige notificar incidentes; NIS no"
    ],
    correct: 1,
    explanation: "En la Ley PIC la protección es integral (física + lógica/OT), y la ciberseguridad es una parte más del análisis. En la Directiva NIS, la ciberseguridad es el punto central, con énfasis en gestión de riesgos TIC y notificación de incidentes."
  },
  {
    id: 44, topic: "LPIC vs NIS",
    question: "¿Qué referencia usa la normativa NIS para identificar los sectores esenciales?",
    options: ["El GDPR","El listado de sectores de la Ley PIC","La Directiva Europea de Mercado Interior","El ENS"],
    correct: 1,
    explanation: "La normativa NIS toma como referencia el listado de sectores de la Ley PIC para identificar los sectores esenciales, siendo esta su principal similitud: el objetivo común de proteger los sectores clave del país."
  },
  // ── DORA ──────────────────────────────────────────────────
  {
    id: 45, topic: "DORA",
    question: "¿A partir de cuándo es aplicable el Reglamento DORA?",
    options: ["Enero 2023","Enero 2024","Enero 2025","Enero 2026"],
    correct: 2,
    explanation: "DORA (Digital Operational Resilience Act) comenzó a aplicarse en enero de 2025, afectando al sector financiero de la UE y sus proveedores TIC críticos."
  },
  {
    id: 46, topic: "DORA",
    question: "¿Cuáles son los 4 objetivos principales de DORA?",
    options: [
      "Confidencialidad, integridad, disponibilidad y trazabilidad",
      "Mejorar resistencia operativa, proteger datos de clientes, igualdad de condiciones en la UE y reforzar supervisión",
      "Certificación, auditoría, notificación y formación",
      "Gestión de riesgos, continuidad, pruebas e intercambio de información"
    ],
    correct: 1,
    explanation: "Los 4 objetivos de DORA son: (1) Mejorar la resistencia operativa del sector financiero UE, (2) Aumentar protección de datos de clientes, (3) Igualdad de condiciones mediante normas uniformes en la UE, (4) Reforzar el papel de las autoridades de supervisión."
  },
  {
    id: 47, topic: "DORA",
    question: "¿Cuál es la sanción máxima establecida en DORA por incumplimiento?",
    options: ["Hasta 5 M€ o 2% del volumen de negocios","Hasta 10 M€ o 5% del volumen de negocios","Hasta 20 M€ o 4% de la facturación global","Hasta 7 M€ o 1,4% del volumen de negocios"],
    correct: 1,
    explanation: "DORA establece multas de hasta 10 M€ o el 5% del volumen de negocio total anual (la cifra más alta). Además prevé medidas correctoras, amonestaciones públicas e incluso retirada de autorización."
  },
  // ── DORA vs GDPR ──────────────────────────────────────────
  {
    id: 48, topic: "DORA vs GDPR",
    question: "¿Cuál afirmación sobre las sanciones de DORA vs GDPR es CORRECTA?",
    options: [
      "DORA: hasta 20M€ o 4%; GDPR: hasta 10M€ o 5%",
      "DORA: hasta 10M€ o 5% del volumen de negocios; GDPR: hasta 20M€ o 4% de la facturación global",
      "Ambas aplican la misma sanción máxima de 20M€",
      "GDPR sanciona solo con el 2% de facturación"
    ],
    correct: 1,
    explanation: "DORA: multas hasta 10M€ o 5% del volumen de negocios anual. GDPR: hasta 20M€ o 4% de la facturación global anual. El GDPR tiene mayor sanción máxima en euros, pero DORA tiene mayor porcentaje."
  },
  // ── Regulaciones nacionales ────────────────────────────────
  {
    id: 49, topic: "Regulaciones nacionales",
    question: "¿Cuáles son las 4 regulaciones de Seguridad Nacional en España según el Código de Derecho de la Ciberseguridad (BOE)?",
    options: [
      "ENS, LOPD, Ley PIC y Estrategia Nacional de Ciberseguridad",
      "ENS, Ley de Secretos Oficiales, Ley de estados de alarma/excepción y Estrategia Nacional de Ciberseguridad",
      "ENS, NIS, DORA y Ley PIC",
      "Ley PIC, ENS, GDPR y Directiva NIS"
    ],
    correct: 1,
    explanation: "Las 4 regulaciones de Seguridad Nacional publicadas en el BOE son: (1) ENS, (2) Ley Orgánica de estados de alarma, excepción y sitio, (3) Ley de Secretos Oficiales, y (4) Estrategia Nacional de Ciberseguridad."
  },
  {
    id: 50, topic: "Regulaciones nacionales",
    question: "¿Qué organismo es el único en España acreditado para aprobar normas de normalización (estándares)?",
    options: ["INCIBE","CCN","UNE (Asociación Española de Normalización)","ENISA"],
    correct: 2,
    explanation: "UNE (Asociación Española de Normalización) es el único organismo nacional de normalización en España. ISO es el equivalente internacional. INCIBE y CCN son organismos de ciberseguridad, y ENISA es la agencia europea de ciberseguridad."
  },
  // ── ISO 27001 (ampliación) ────────────────────────────────
  {
    id: 51, topic: "ISO 27001",
    question: "¿Qué significa el ciclo PDCA en el contexto de un SGSI?",
    options: ["Plan-Do-Check-Act (Planificar-Hacer-Verificar-Actuar)","Prevent-Detect-Correct-Assess","Protect-Deploy-Control-Audit","Policy-Document-Certify-Approve"],
    correct: 0,
    explanation: "PDCA (Plan-Do-Check-Act) es el ciclo de mejora continua de Deming aplicado al SGSI: Planificar el sistema, Hacer la implementación, Verificar su eficacia y Actuar para mejorar."
  },
  {
    id: 52, topic: "ISO 27001",
    question: "¿Qué norma ISO proporciona directrices para la implementación de controles del Anexo A?",
    options: ["ISO/IEC 27001","ISO/IEC 27002","ISO/IEC 27003","ISO/IEC 27004"],
    correct: 1,
    explanation: "ISO/IEC 27002 es el código de buenas prácticas que proporciona directrices detalladas para implementar los controles del Anexo A de ISO 27001."
  },
  {
    id: 53, topic: "ISO 27001",
    question: "¿Cuál de los siguientes NO es uno de los 4 dominios en los que se agrupan los controles de ISO 27001:2022?",
    options: ["Organizacional","Personas","Físico","Tecnológico"],
    correct: 3,
    explanation: "Los 4 dominios de ISO 27001:2022 son: Organizacional, Personas, Físico y Tecnológico. No existe un dominio específico llamado 'Tecnológico' - el correcto es 'Tecnológico' que engloba controles técnicos."
  },
  // ── SGSI (ampliación) ─────────────────────────────────────
  {
    id: 54, topic: "SGSI",
    question: "¿Qué documento define el perímetro al que aplica el SGSI?",
    options: ["La Política de Seguridad","El Alcance del SGSI","La Declaración de Aplicabilidad","El Plan de Tratamiento de Riesgos"],
    correct: 1,
    explanation: "El Alcance del SGSI define claramente el perímetro: qué áreas, procesos, ubicaciones y activos están incluidos en el sistema de gestión de seguridad de la información."
  },
  {
    id: 55, topic: "SGSI",
    question: "¿Con qué frecuencia MÍNIMA debe revisarse un SGSI según ISO 27001?",
    options: ["Mensualmente","Trimestralmente","Anualmente","Cada 2 años"],
    correct: 2,
    explanation: "ISO 27001 requiere revisiones del SGSI al menos una vez al año por la dirección, aunque se recomienda hacerlo con mayor frecuencia según las necesidades."
  },
  {
    id: 56, topic: "SGSI",
    question: "¿Qué rol tiene la Alta Dirección en el SGSI según ISO 27001?",
    options: ["Ninguno, solo participa el equipo técnico","Delegar todas las decisiones en el CISO","Demostrar liderazgo y compromiso, aprobar política y asignar recursos","Solo aprobar el presupuesto anual"],
    correct: 2,
    explanation: "La Alta Dirección debe demostrar liderazgo y compromiso: establecer la política de seguridad, asegurar la integración del SGSI, proporcionar recursos y promover la mejora continua."
  },
  // ── ENS (ampliación) ──────────────────────────────────────
  {
    id: 57, topic: "ENS",
    question: "¿Qué organismo elabora las guías CCN-STIC de aplicación del ENS?",
    options: ["INCIBE","Centro Criptológico Nacional (CCN)","Instituto Nacional de Estadística","Ministerio del Interior"],
    correct: 1,
    explanation: "El Centro Criptológico Nacional (CCN) elabora las guías CCN-STIC que desarrollan y complementan el ENS con instrucciones técnicas de seguridad."
  },
  {
    id: 58, topic: "ENS",
    question: "¿Cuál es la guía CCN-STIC que describe la cualificación de sistemas conforme al ENS?",
    options: ["CCN-STIC 801","CCN-STIC 802","CCN-STIC 803","CCN-STIC 804"],
    correct: 2,
    explanation: "La guía CCN-STIC 803 describe la cualificación de los sistemas y establece la metodología para determinar la categoría del sistema (BAJO, MEDIO, ALTO)."
  },
  {
    id: 59, topic: "ENS",
    question: "¿Cada cuánto tiempo debe realizarse una auditoría regular del ENS en sistemas de categoría ALTA?",
    options: ["Anualmente","Cada dos años","Cada tres años","Solo cuando hay incidentes"],
    correct: 1,
    explanation: "Los sistemas de categoría MEDIA y ALTA del ENS requieren auditorías regulares cada dos años realizadas por auditores independientes."
  },
  // ── NIS II (ampliación) ───────────────────────────────────
  {
    id: 60, topic: "NIS II",
    question: "¿Cuándo deben los Estados miembros transponer completamente la Directiva NIS II a legislación nacional?",
    options: ["Diciembre 2023","Octubre 2024","Enero 2025","Junio 2025"],
    correct: 1,
    explanation: "Los Estados miembros tienen hasta el 17 de octubre de 2024 para transponer la Directiva NIS II a su legislación nacional, aunque la aplicación plena comenzó en enero de 2025."
  },
  {
    id: 61, topic: "NIS II",
    question: "¿Qué nueva figura introduce NIS II para la gestión de incidentes?",
    options: ["Central Security Officer","CSIRT (Computer Security Incident Response Team)","Chief Information Security Officer","Security Operations Center"],
    correct: 1,
    explanation: "NIS II refuerza el papel de los CSIRT (Equipos de Respuesta a Incidentes de Seguridad Informática) como punto de contacto único para notificación y gestión de incidentes."
  },
  {
    id: 62, topic: "NIS II",
    question: "¿Cuál de estos sectores NO está incluido en NIS II?",
    options: ["Fabricación de productos farmacéuticos","Gestión de residuos","Alimentación (retail)","Servicios postales"],
    correct: 2,
    explanation: "NIS II incluye 18 sectores de alta criticidad. El retail de alimentación general no está incluido, aunque sí lo están manufactura farmacéutica, gestión de residuos y servicios postales."
  },
  // ── DORA (ampliación) ─────────────────────────────────────
  {
    id: 63, topic: "DORA",
    question: "¿Qué tipo de pruebas de resiliencia DORA exige realizar periódicamente?",
    options: ["Solo pruebas de penetración anuales","Pruebas de penetración y pruebas TLPT (Threat-Led Penetration Testing)","Solo auditorías de código","Únicamente test de recuperación de backups"],
    correct: 1,
    explanation: "DORA exige pruebas de resiliencia operativa digital que incluyen pruebas de penetración regulares y, para entidades críticas, pruebas TLPT (pruebas de penetración basadas en amenazas reales)."
  },
  {
    id: 64, topic: "DORA",
    question: "¿A qué tipo de proveedores afecta DORA además de las entidades financieras?",
    options: ["A ningún proveedor externo","Solo a proveedores cloud","A proveedores TIC críticos que prestan servicios a entidades financieras","Solo a empresas de auditoría"],
    correct: 2,
    explanation: "DORA afecta tanto a entidades financieras como a proveedores de servicios TIC críticos (cloud, software, procesamiento de datos) que les prestan servicios."
  },
  {
    id: 65, topic: "DORA",
    question: "¿Qué plazo establece DORA para notificar incidentes GRAVES inicialmente?",
    options: ["2 horas","4 horas","24 horas","72 horas"],
    correct: 1,
    explanation: "DORA exige notificación inicial de incidentes graves a las autoridades en un plazo de 4 horas, seguida de notificaciones intermedias y finales."
  },
  // ── LPIC (ampliación) ─────────────────────────────────────
  {
    id: 66, topic: "LPIC",
    question: "¿Cuántos sectores estratégicos identifica la Ley de Protección de Infraestructuras Críticas?",
    options: ["8 sectores","10 sectores","12 sectores","15 sectores"],
    correct: 2,
    explanation: "La Ley PIC identifica 12 sectores estratégicos: energía, telecomunicaciones, agua, alimentación, salud, finanzas, transporte, industria química, nuclear, espacial, administración e investigación."
  },
  {
    id: 67, topic: "LPIC",
    question: "¿Qué organismo coordina la protección de infraestructuras críticas a nivel nacional?",
    options: ["INCIBE","Centro Nacional de Protección de Infraestructuras Críticas (CNPIC)","CCN","Ministerio del Interior"],
    correct: 1,
    explanation: "El CNPIC (Centro Nacional de Protección de Infraestructuras Críticas) es el organismo que coordina la protección de infraestructuras críticas en España bajo el Ministerio del Interior."
  },
  // ── Análisis de riesgos (ampliación) ──────────────────────
  {
    id: 68, topic: "Análisis de riesgos",
    question: "¿Qué es una amenaza en el contexto del análisis de riesgos?",
    options: ["Una debilidad del sistema","Un evento potencial que puede causar daño","El impacto financiero de un incidente","Un control de seguridad"],
    correct: 1,
    explanation: "Una amenaza es un evento potencial (natural, humano o técnico) que puede explotar una vulnerabilidad y causar daño a los activos de la organización."
  },
  {
    id: 69, topic: "Análisis de riesgos",
    question: "¿Qué diferencia hay entre vulnerabilidad y amenaza?",
    options: ["No hay diferencia, son sinónimos","Vulnerabilidad es una debilidad; amenaza es un evento que la puede explotar","Amenaza es interna; vulnerabilidad es externa","Vulnerabilidad es el impacto; amenaza es la probabilidad"],
    correct: 1,
    explanation: "Vulnerabilidad es una debilidad o carencia de controles en un activo. Amenaza es un evento o agente que puede explotar esa vulnerabilidad para causar daño."
  },
  {
    id: 70, topic: "Análisis de riesgos",
    question: "¿Qué metodología es más utilizada internacionalmente para el análisis de riesgos junto a MAGERIT?",
    options: ["OCTAVE","ISO/IEC 27005","CRAMM","Todas las anteriores son ampliamente utilizadas"],
    correct: 3,
    explanation: "Además de MAGERIT (España), existen metodologías reconocidas como ISO/IEC 27005 (internacional), OCTAVE (Carnegie Mellon), CRAMM (Reino Unido) y otras."
  },
  // ── SoA (ampliación) ──────────────────────────────────────
  {
    id: 71, topic: "SoA",
    question: "¿Debe incluir la SoA controles NO seleccionados del Anexo A?",
    options: ["No, solo los controles implementados","Sí, TODOS los controles indicando si aplican o no y su justificación","Solo si son obligatorios por ley","Solo los controles de nivel ALTO"],
    correct: 1,
    explanation: "La SoA debe incluir TODOS los controles del Anexo A, indicando para cada uno: si aplica o no, justificación, estado de implementación y referencias a documentación."
  },
  {
    id: 72, topic: "SoA",
    question: "¿Qué relación tiene el Plan de Tratamiento de Riesgos (PTR) con la SoA?",
    options: ["Son documentos independientes sin relación","El PTR justifica la selección de controles que luego aparecen en la SoA","La SoA reemplaza al PTR","Solo se usa uno de los dos documentos"],
    correct: 1,
    explanation: "El Plan de Tratamiento de Riesgos (PTR) identifica qué controles se necesitan para tratar los riesgos. La SoA documenta formalmente qué controles del Anexo A se implementan basándose en el PTR."
  },
  // ── Roles ENS (ampliación) ────────────────────────────────
  {
    id: 73, topic: "Roles ENS",
    question: "¿Puede una misma persona asumir varios roles en el ENS?",
    options: ["No, cada rol debe ser una persona diferente","Sí, en organizaciones pequeñas una persona puede asumir varios roles","Solo el Responsable de Seguridad puede asumir otros roles","Solo si lo aprueba el CCN"],
    correct: 1,
    explanation: "En organizaciones pequeñas, es común y admitido que una misma persona asuma varios roles del ENS, siempre que se garantice la independencia necesaria en las auditorías."
  },
  {
    id: 74, topic: "Roles ENS",
    question: "¿Quién aprueba finalmente el Plan de Seguridad del Sistema según el ENS?",
    options: ["El Responsable de Seguridad","El Responsable de la Información","El Responsable del Sistema","La máxima autoridad de la organización (Comité de Seguridad/Dirección)"],
    correct: 3,
    explanation: "Aunque el Responsable de Seguridad elabora el plan, debe ser aprobado por la máxima autoridad (Comité de Seguridad o Dirección) para garantizar compromiso y recursos."
  },
  // ── GDPR/LOPD ─────────────────────────────────────────────
  {
    id: 75, topic: "ENS vs ISO 27001",
    question: "¿Qué normativa regula específicamente la protección de datos personales en la UE?",
    options: ["ISO 27001","ENS (Esquema Nacional de Seguridad)","GDPR (Reglamento General de Protección de Datos)","NIS II"],
    correct: 2,
    explanation: "El GDPR (Reglamento UE 2016/679) es la normativa específica de protección de datos personales en la UE, complementada en España por la LOPDGDD."
  },
  {
    id: 76, topic: "Regulaciones nacionales",
    question: "¿Qué organismo es responsable de la supervisión del cumplimiento del GDPR en España?",
    options: ["INCIBE","CCN","AEPD (Agencia Española de Protección de Datos)","ENISA"],
    correct: 2,
    explanation: "La AEPD (Agencia Española de Protección de Datos) es la autoridad de control independiente que supervisa el cumplimiento del GDPR y la LOPDGDD en España."
  },
  // ── Ciberseguridad general ────────────────────────────────
  {
    id: 77, topic: "Regulaciones nacionales",
    question: "¿Qué organismo europeo coordina la respuesta a incidentes de ciberseguridad transfronterizos?",
    options: ["Europol","ENISA (Agencia de la Unión Europea para la Ciberseguridad)","Eurostat","EFSA"],
    correct: 1,
    explanation: "ENISA es la agencia de la UE para la ciberseguridad. Apoya a los Estados miembros, coordina ejercicios de ciberseguridad y desarrolla capacidades europeas de respuesta."
  },
  {
    id: 78, topic: "Regulaciones nacionales",
    question: "¿Qué organismo nacional gestiona CERTSI, el CERT de referencia para el sector público?",
    options: ["INCIBE","CCN (Centro Criptológico Nacional)","CNPIC","Ministerio de Defensa"],
    correct: 1,
    explanation: "El CCN gestiona CERTSI (CERT de Seguridad e Industria), el CERT de referencia para la Administración Pública española y empresas de especial relevancia."
  },
  {
    id: 79, topic: "ISO 27001",
    question: "¿Cuál es el periodo de validez típico de una certificación ISO 27001?",
    options: ["1 año","2 años","3 años con auditorías de seguimiento anuales","5 años"],
    correct: 2,
    explanation: "Una certificación ISO 27001 tiene validez de 3 años, con auditorías de seguimiento (surveillance) anuales en los años 1 y 2, y una auditoría de recertificación en el año 3."
  },
  {
    id: 80, topic: "NIS II",
    question: "¿Qué diferencia principal hay entre entidades esenciales e importantes en NIS II?",
    options: ["No hay diferencia práctica","Nivel de requisitos de seguridad y umbral de sanciones","Solo el número de empleados","El tipo de incidentes que deben notificar"],
    correct: 1,
    explanation: "Entidades esenciales tienen requisitos más estrictos y sanciones mayores (hasta 10M€ o 2%) que las importantes (hasta 7M€ o 1,4%). También difieren en supervisión y medidas aplicables."
  }
];
