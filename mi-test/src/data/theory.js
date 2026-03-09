export const THEORY_CONTENT = {
  "ISO 27001": {
    title: "ISO 27001 - Sistema de Gestión de Seguridad de la Información (SGSI)",
    icon: "🔐",
    sections: [
      {
        subtitle: "Introducción y Conceptos Básicos",
        content: "ISO/IEC 27001 es el estándar internacional para Sistemas de Gestión de Seguridad de la Información (SGSI). Publicado por ISO e IEC, es la única norma certificable de la familia ISO 27000. Es de adopción VOLUNTARIA pero, una vez implementada, puede certificarse por una entidad acreditada.",
        keyPoints: [
          "Estándar internacional reconocido globalmente",
          "Voluntario pero certificable",
          "Enfoque basado en gestión de riesgos",
          "Aplicable a cualquier organización, tamaño o sector"
        ]
      },
      {
        subtitle: "Familia ISO 27000",
        content: "La familia ISO 27000 incluye múltiples normas complementarias:",
        keyPoints: [
          "ISO 27000: Vocabulario y visión general (glosario de referencia)",
          "ISO 27001: Requisitos del SGSI (la certificable)",
          "ISO 27002: Código de buenas prácticas para controles de seguridad",
          "ISO 27003: Guía de implementación del SGSI",
          "ISO 27004: Medición y métricas de seguridad",
          "ISO 27005: Gestión de riesgos de seguridad de la información",
          "ISO 27035: Gestión de incidentes de seguridad"
        ]
      },
      {
        subtitle: "Anexo A: Controles de Seguridad (Versión 2022)",
        content: "ISO 27001:2022 reorganizó completamente el Anexo A:",
        keyPoints: [
          "93 controles (reducción desde 114 en versión 2013)",
          "Organizados en 4 dominios temáticos (antes 14)",
          "Dominio Organizacional: políticas, gestión de activos, RRHH",
          "Dominio de Personas: concienciación, formación",
          "Dominio Físico: seguridad de instalaciones y equipamiento",
          "Dominio Tecnológico: controles técnicos y de red",
          "11 controles completamente NUEVOS (cloud, threat intelligence, DLP, etc.)"
        ]
      },
      {
        subtitle: "Controles Nuevos en 2022 (Destacados)",
        content: "Los 11 nuevos controles reflejan amenazas modernas:",
        keyPoints: [
          "A.5.7 - Threat Intelligence (inteligencia de amenazas)",
          "A.5.23 - Seguridad de la información en servicios cloud",
          "A.8.9 - Gestión de configuración",
          "A.8.10 - Borrado de información",
          "A.8.11 - Enmascaramiento de datos",
          "A.8.12 - Prevención de fuga de datos (DLP)",
          "A.8.16 - Actividades de monitorización",
          "A.8.23 - Filtrado web",
          "A.8.28 - Codificación segura (Secure Coding)"
        ]
      },
      {
        subtitle: "Ciclo PDCA (Deming)",
        content: "El SGSI se basa en el ciclo de mejora continua PDCA:",
        keyPoints: [
          "Plan (Planificar): Establecer política, alcance, análisis de riesgos, objetivos",
          "Do (Hacer): Implementar controles, procesos y formación",
          "Check (Verificar): Auditorías internas, revisión por la dirección, métricas",
          "Act (Actuar): Acciones correctivas, preventivas y de mejora continua"
        ]
      },
      {
        subtitle: "Tríada CID",
        content: "El SGSI protege la información garantizando tres propiedades fundamentales:",
        keyPoints: [
          "Confidencialidad: Solo personas autorizadas acceden a la información",
          "Integridad: La información es exacta, completa y no ha sido alterada indebidamente",
          "Disponibilidad: La información está accesible cuando se necesita"
        ]
      },
      {
        subtitle: "7 Fases de Implementación",
        content: "Proceso estructurado para implantar un SGSI:",
        keyPoints: [
          "1. Definir la Política de Seguridad (dirección estratégica)",
          "2. Definir el Alcance del SGSI (perímetro, límites)",
          "3. Análisis de Riesgos (identificar amenazas y vulnerabilidades)",
          "4. Gestión del Riesgo (decidir tratamiento: mitigar, aceptar, transferir, eliminar)",
          "5. Selección de Controles (del Anexo A u otros)",
          "6. Statement of Applicability - SoA (documento obligatorio)",
          "7. Revisión y Mejora del Sistema (auditorías y ciclo PDCA)"
        ]
      },
      {
        subtitle: "Certificación ISO 27001",
        content: "Proceso de certificación por entidad acreditada:",
        keyPoints: [
          "Auditoría de certificación en 2 etapas (Stage 1: documental, Stage 2: implantación)",
          "Certificado válido 3 años",
          "Auditorías de seguimiento (surveillance) en años 1 y 2",
          "Auditoría de recertificación en el año 3",
          "Requiere SGSI implementado, SoA documentada, Plan de Tratamiento, evidencias"
        ]
      },
      {
        subtitle: "Rol de la Alta Dirección",
        content: "La Alta Dirección debe demostrar liderazgo y compromiso:",
        keyPoints: [
          "Establecer y aprobar la Política de Seguridad",
          "Asegurar integración del SGSI en procesos de negocio",
          "Proporcionar recursos necesarios (personal, presupuesto, tecnología)",
          "Comunicar la importancia de la seguridad",
          "Promover la mejora continua",
          "Participar en revisiones periódicas del sistema"
        ]
      }
    ]
  },
  "ENS": {
    title: "ENS - Esquema Nacional de Seguridad",
    icon: "🏛️",
    sections: [
      {
        subtitle: "¿Qué es el ENS?",
        content: "El Esquema Nacional de Seguridad (ENS) es una normativa española de OBLIGADO CUMPLIMIENTO para las Administraciones Públicas. Fue establecido por el Real Decreto 3/2010 y actualizado por el Real Decreto 311/2022.",
        keyPoints: [
          "OBLIGATORIO para AAPP españolas (estatal, autonómica, local)",
          "También obligatorio para sector privado que preste servicios a AAPP",
          "Base legal: Ley 40/2015 de Régimen Jurídico del Sector Público",
          "Objetivo: proteger información y servicios electrónicos",
          "Enfoque en 5 dimensiones de seguridad (CITAD)"
        ]
      },
      {
        subtitle: "Dimensiones de Seguridad: CITAD",
        content: "El ENS protege 5 dimensiones de seguridad (frente a la tríada CID de ISO):",
        keyPoints: [
          "C - Confidencialidad: datos accesibles solo por autorizados",
          "I - Integridad: datos exactos y completos, sin alteración indebida",
          "T - Trazabilidad: registro de acciones para auditoría y responsabilidad",
          "A - Autenticidad: identidad verificada de usuarios y origen de datos",
          "D - Disponibilidad: sistemas y datos accesibles cuando se necesitan"
        ]
      },
      {
        subtitle: "Categorías de Sistemas: BAJO, MEDIO, ALTO",
        content: "La categoría se determina por el impacto potencial de un incidente de seguridad:",
        keyPoints: [
          "BAJO: impacto limitado en alguna dimensión de seguridad",
          "MEDIO: impacto grave en alguna dimensión",
          "ALTO: impacto MUY GRAVE o catastrófico en varias dimensiones",
          "Cada sistema se categoriza INDEPENDIENTEMENTE",
          "La categoría determina las medidas de seguridad aplicables",
          "Guía CCN-STIC 803: metodología para cualificar sistemas"
        ]
      },
      {
        subtitle: "Auditorías según Categoría",
        content: "Los requisitos de auditoría dependen de la categoría del sistema:",
        keyPoints: [
          "BAJO: Autoevaluación por la propia organización",
          "MEDIO: Auditoría BIENAL (cada 2 años) por auditor independiente",
          "ALTO: Auditoría BIENAL (cada 2 años) por auditor independiente",
          "Auditor independiente: externo al equipo responsable del sistema",
          "Informe de auditoría debe enviarse al CCN"
        ]
      },
      {
        subtitle: "Guías CCN-STIC",
        content: "El Centro Criptológico Nacional (CCN) elabora guías técnicas de aplicación:",
        keyPoints: [
          "CCN-STIC 801: Responsabilidades y funciones en el ENS",
          "CCN-STIC 803: Valoración de sistemas (categorización)",
          "CCN-STIC 804: Medidas de implementación",
          "CCN-STIC 806: Plan de Adecuación",
          "CCN-STIC 808: Verificación del cumplimiento",
          "CCN-STIC 817: Gestión de ciberincidentes",
          "CCN-STIC 824: Informe del estado de seguridad"
        ]
      },
      {
        subtitle: "Roles y Responsabilidades (CCN-STIC 801)",
        content: "El ENS define claramente los roles de seguridad:",
        keyPoints: [
          "Responsable de la Información: determina requisitos de seguridad",
          "Responsable del Sistema: ejecuta controles y gestiona el sistema",
          "Responsable de Seguridad: elabora política, análisis de riesgos, documentación",
          "Comité de Seguridad: Alta Dirección + responsables, alinea estrategia",
          "Una misma persona puede asumir varios roles en organizaciones pequeñas"
        ]
      },
      {
        subtitle: "Anexo II: Marco de Medidas de Seguridad",
        content: "El Anexo II del ENS estructura las medidas en 3 marcos:",
        keyPoints: [
          "Marco Organizativo: políticas, normativa, organización, concienciación",
          "Marco Operacional: planificación, control de acceso, gestión de personal",
          "Marco de Protección: infraestructuras, equipos, comunicaciones, cifrado"
        ]
      },
      {
        subtitle: "MAGERIT",
        content: "Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información:",
        keyPoints: [
          "Metodología oficial del CCN para análisis de riesgos",
          "Instrumento de apoyo al ENS",
          "Versión actual: MAGERIT v3",
          "Incluye: método, guía de técnicas, catálogo de elementos",
          "Herramienta PILAR: software de apoyo para aplicar MAGERIT",
          "Compatible con ISO 27005"
        ]
      },
      {
        subtitle: "ENS vs LOPD",
        content: "El ENS y la LOPD son normativas diferentes con criterios distintos:",
        keyPoints: [
          "ENS: categoría según impacto del incidente en la organización (CITAD)",
          "LOPD: nivel según sensibilidad de los datos personales tratados",
          "Los niveles NO son equivalentes ni se corresponden",
          "Un sistema debe cualificarse independientemente para cada normativa",
          "Pueden coexistir: un sistema puede ser ENS ALTO y LOPD BÁSICO (o viceversa)"
        ]
      },
      {
        subtitle: "CCN y CERTSI",
        content: "El Centro Criptológico Nacional y su CERT:",
        keyPoints: [
          "CCN: organismo del CNI, autoridad nacional en ciberseguridad",
          "CERTSI: CERT de Seguridad e Industria del CCN",
          "CERTSI: CERT de referencia para AAPP y empresas estratégicas",
          "Coordina respuesta a incidentes en el sector público",
          "Publica alertas, avisos y recomendaciones de seguridad"
        ]
      }
    ]
  },
  "NIS": {
    title: "Directivas NIS - Seguridad de Redes y Sistemas de Información",
    icon: "🌐",
    sections: [
      {
        subtitle: "NIS I - Directiva 2016 (Primera Directiva)",
        content: "La Directiva NIS I (2016/1148) fue la primera legislación horizontal de la UE en ciberseguridad:",
        keyPoints: [
          "Publicada en julio de 2016, entrada en vigor mayo 2018",
          "Objetivo: aumentar nivel de ciberseguridad en la UE",
          "Define 2 categorías de entidades afectadas:",
          "  - Operadores de Servicios Esenciales (OSE): energía, transporte, banca, salud, agua, infraestructuras digitales",
          "  - Proveedores de Servicios Digitales (PSD): marketplaces, motores de búsqueda, servicios cloud",
          "OSE notifican incidentes con impacto GRAVE",
          "PSD notifican incidentes con impacto SUSTANCIAL"
        ]
      },
      {
        subtitle: "NIS II - Directiva 2022 (Actualización)",
        content: "La Directiva NIS II (2022/2555) amplía y refuerza la NIS I:",
        keyPoints: [
          "Publicada 27 diciembre 2022, aplicable desde enero 2025",
          "Transpositión a legislación nacional: 17 octubre 2024",
          "Eliminar divergencias entre Estados miembros",
          "Amplía sectores afectados: de 7 a 18 sectores",
          "Nuevas categorías: Entidades Esenciales y Entidades Importantes",
          "Mayor responsabilidad de órganos de dirección",
          "Requisitos de ciberseguridad más estrictos",
          "Mayores sanciones por incumplimiento"
        ]
      },
      {
        subtitle: "18 Sectores Afectados por NIS II",
        content: "La NIS II amplía significativamente el alcance sectorial:",
        keyPoints: [
          "Energía (electricidad, gas, petróleo, hidrógeno)",
          "Transporte (aéreo, ferroviario, acuático, por carretera)",
          "Banca y mercados financieros",
          "Infraestructuras de los mercados financieros",
          "Salud (prestadores asistencia sanitaria, laboratorios, farmacia)",
          "Agua potable y aguas residuales",
          "Infraestructuras digitales",
          "Administración Pública",
          "Espacio",
          "Servicios postales y de mensajería",
          "Gestión de residuos",
          "Fabricación, producción y distribución de productos químicos",
          "Producción, transformación y distribución de alimentos",
          "Fabricación (dispositivos médicos, electrónica, maquinaria, vehículos, etc.)",
          "Proveedores digitales",
          "Investigación"
        ]
      },
      {
        subtitle: "Umbral de Aplicación de NIS II",
        content: "Criterios para determinar si una entidad está sujeta a NIS II:",
        keyPoints: [
          "GENERAL: Más de 250 empleados Y (facturación anual > 50M€ O balance > 43M€)",
          "EXCEPCIONES: Sectores críticos sin límite de tamaño",
          "Único proveedor en zona geográfica: aplica NIS II",
          "Entidad declarada crítica por Estado miembro: aplica NIS II",
          "Identificación como operador crítico en sector clave: aplica NIS II"
        ]
      },
      {
        subtitle: "Entidades Esenciales vs Importantes",
        content: "NIS II distingue dos categorías con requisitos diferentes:",
        keyPoints: [
          "Entidades ESENCIALES: sectores de alta criticidad",
          "  - Requisitos de seguridad más estrictos",
          "  - Supervisión más intensa",
          "  - Sanciones hasta 10M€ o 2% del volumen de negocios",
          "Entidades IMPORTANTES: sectores significativos",
          "  - Requisitos de seguridad estándar",
          "  - Supervisión regular",
          "  - Sanciones hasta 7M€ o 1,4% del volumen de negocios"
        ]
      },
      {
        subtitle: "Notificación de Incidentes en NIS II",
        content: "Plazos estrictos para notificación de incidentes:",
        keyPoints: [
          "Alerta temprana: 24 horas desde conocimiento del incidente",
          "Notificación de incidente: sin demora indebida",
          "Informe intermedio: cuando proceda durante gestión",
          "Informe final: en el plazo de 1 mes desde el incidente",
          "Punto único de contacto: CSIRT nacional",
          "Contenido mínimo: descripción, tipo, impacto, medidas adoptadas"
        ]
      },
      {
        subtitle: "CSIRT - Computer Security Incident Response Teams",
        content: "Equipos de respuesta a incidentes de seguridad informática:",
        keyPoints: [
          "Cada Estado miembro debe designar uno o más CSIRT",
          "Punto de contacto único para notificaciones",
          "Coordinan respuesta a incidentes transfronterizos",
          "Proporcionan avisos y alertas tempranas",
          "Cooperan a nivel europeo (red de CSIRT)",
          "En España: CCN-CERT (sector público), INCIBE-CERT (general)"
        ]
      },
      {
        subtitle: "Responsabilidad de los Órganos de Dirección",
        content: "NIS II introduce responsabilidad directa de directivos:",
        keyPoints: [
          "Deben aprobar medidas de gestión de riesgos de ciberseguridad",
          "Supervisar la implementación de las medidas",
          "Asistir a formaciones específicas en ciberseguridad",
          "Pueden ser sancionados PERSONALMENTE por incumplimiento",
          "Prohibición temporal de ejercer funciones directivas",
          "Aumenta la rendición de cuentas a nivel ejecutivo"
        ]
      },
      {
        subtitle: "Medidas de Ciberseguridad Obligatorias",
        content: "NIS II exige implementar medidas mínimas de seguridad:",
        keyPoints: [
          "Políticas de análisis de riesgos y seguridad de sistemas",
          "Gestión de incidentes",
          "Continuidad de negocio y gestión de crisis",
          "Seguridad de la cadena de suministro",
          "Seguridad en adquisición, desarrollo y mantenimiento",
          "Control de acceso y gestión de activos",
          "Uso de criptografía y cifrado",
          "Gestión de vulnerabilidades",
          "Pruebas de seguridad (auditorías, penetración)"
        ]
      },
      {
        subtitle: "Diferencias Clave: NIS I vs NIS II",
        content: "Principales cambios de NIS I a NIS II:",
        keyPoints: [
          "Sectores: 7 → 18 sectores",
          "Entidades: 2 categorías → Esenciales e Importantes",
          "Sanciones: No armonizadas → Hasta 10M€ o 2%",
          "Responsabilidad: Organizativa → Personal directivos",
          "Notificación: 72h → 24h alerta temprana",
          "Alcance: Más restrictivo → Más entidades incluidas",
          "Cadena suministro: No explícita → Obligatoria"
        ]
      }
    ]
  },
  "LPIC": {
    title: "LPIC - Ley de Protección de Infraestructuras Críticas",
    icon: "⚡",
    sections: [
      {
        subtitle: "Marco Legal",
        content: "La protección de infraestructuras críticas en España se basa en:",
        keyPoints: [
          "Ley 8/2011 de PIC (28 abril 2011)",
          "Real Decreto 704/2011 (reglamento de desarrollo, 5 mayo 2011)",
          "Enfoque integral: protección física + ciberseguridad",
          "Coordinación entre sector público y privado",
          "Dependiente del Ministerio del Interior"
        ]
      },
      {
        subtitle: "Definiciones Clave",
        content: "La ley distingue entre infraestructura estratégica y crítica:",
        keyPoints: [
          "Infraestructura Estratégica: instalaciones, redes, sistemas sobre los que descansan servicios esenciales",
          "Infraestructura Crítica: aquella cuya perturbación o destrucción tendría GRAVE IMPACTO y NO PERMITE soluciones alternativas inmediatas",
          "Operador Crítico: entidad pública o privada que presta servicios esenciales mediante infraestructura crítica",
          "Servicio Esencial: servicio necesario para funciones sociales básicas, salud, seguridad, bienestar económico"
        ]
      },
      {
        subtitle: "12 Sectores Estratégicos",
        content: "La Ley PIC identifica 12 sectores estratégicos en España:",
        keyPoints: [
          "1. Energía (eléctrica, gas, petróleo, energías renovables)",
          "2. Telecomunicaciones e Información",
          "3. Agua (abastecimiento y depuración)",
          "4. Alimentación (producción y distribución)",
          "5. Salud (hospitales, farmacia, investigación médica)",
          "6. Sistema financiero y tributario",
          "7. Transporte (aéreo, marítimo, terrestre)",
          "8. Industria química",
          "9. Industria nuclear",
          "10. Sector espacial",
          "11. Administración (servicios públicos básicos)",
          "12. Investigación"
        ]
      },
      {
        subtitle: "CNPIC - Centro Nacional de Protección de Infraestructuras Críticas",
        content: "Organismo coordinador nacional:",
        keyPoints: [
          "Depende de la Secretaría de Estado de Seguridad (Ministerio del Interior)",
          "Coordina protección de infraestructuras críticas a nivel nacional",
          "Enlace con  autoridades europeas e internacionales",
          "Elabora el Catálogo Nacional de Infraestructuras Críticas",
          "Gestiona el Sistema de Protección de Infraestructuras Críticas",
          "Coordina con operadores críticos y autoridades competentes"
        ]
      },
      {
        subtitle: "Planes de Seguridad: PPE, PSO, PES, PAO",
        content: "La Ley PIC establece una jerarquía de planes de seguridad:",
        keyPoints: [
          "PPE - Plan de Protección Específico:",
          "  - Elaborado por CADA operador crítico para CADA infraestructura crítica",
          "  - Análisis de riesgos, medidas de seguridad física y lógica, personal",
          "PSO - Plan de Seguridad del Operador:",
          "  - Plan general del operador que agrupa todos sus PPE",
          "  - Visión integral de todas sus infraestructuras críticas",
          "PES - Plan Estratégico Sectorial:",
          "  - Elaborado por el Ministerio competente del sector",
          "  - Estrategia de protección global del sector",
          "PAO - Plan de Apoyo Operativo:",  
          "  - Elaborado por Administración + Fuerzas de Seguridad",
          "  - Respuesta y apoyo institucional ante incidentes"
        ]
      },
      {
        subtitle: "Obligaciones de los Operadores Críticos",
        content: "Los operadores críticos deben cumplir:",
        keyPoints: [
          "Elaborar y actualizar el PPE para cada infraestructura crítica",
          "Designar un responsable de seguridad",
          "Implantar medidas de seguridad física y lógica",
          "Notificar incidentes de seguridad al CNPIC",
          "Realizar auditorías periódicas de seguridad",
          "Colaborar con autoridades en ejercicios y simulacros",
          "Mantener actualizado el análisis de riesgos",
          "Garantizar la continuidad del servicio esencial"
        ]
      },
      {
        subtitle: "Enfoque de Protección Integral",
        content: "La protección de infraestructuras críticas es multidimensional:",
        keyPoints: [
          "Seguridad física: perímetros, control acceso, vigilancia, alarmas",
          "Ciberseguridad: protección sistemas IT/OT, redes industriales",
          "Seguridad de personal: acreditación, formación, concienciación",
          "Resiliencia: capacidad de resistencia y recuperación ante incidentes",
          "Continuidad de negocio: planes de contingencia y recuperación",
          "Coordinación público-privada: cooperación entre sectores"
        ]
      },
      {
        subtitle: "Diferencia: LPIC vs NIS",
        content: "Aunque relacionadas, LPIC y NIS tienen enfoques distintos:",
        keyPoints: [
          "LPIC: Protección INTEGRAL (física + lógica), enfoque en infraestructuras",
          "NIS: CIBERSEGURIDAD como eje principal, enfoque en servicios digitales",
          "LPIC: Ámbito nacional español",
          "NIS: Directiva europea, transposición nacional",
          "LPIC: 12 sectores estratégicos",
          "NIS II: 18 sectores",
          "SIMILITUD: Ambas usan el listado de sectores críticos/esenciales de la LPIC como referencia"
        ]
      },
      {
        subtitle: "Relación con Ciberseguridad",
        content: "Aunque la LPIC es protección integral, incluye:",
        keyPoints: [
          "Protección de sistemas de control industrial (SCADA, ICS)",
          "Seguridad de redes OT (Operational Technology)",
          "Protección de sistemas IT que soportan servicios críticos",
          "Gestión de ciberincidentes en infraestructuras críticas",
          "Coordinación con CCN-CERT e INCIBE en ciberataques",
          "Planes de continuidad ante ciberamenazas"
        ]
      }
    ]
  },
  "DORA": {
    title: "DORA - Digital Operational Resilience Act",
    icon: "🏦",
    sections: [
      {
        subtitle: "Introducción al Reglamento DORA",
        content: "DORA es el Reglamento (UE) 2022/2554 sobre Resiliencia Operativa Digital del sector financiero:",
        keyPoints: [
          "Publicado: 14 diciembre 2022",
          "Aplicable desde: 17 enero 2025",
          "Ámbito: Sector financiero de la Unión Europea",
          "Formato: Reglamento UE (directamente aplicable, no requiere transposición)",
          "Objetivo: Armonizar requisitos de resiliencia operativa digital",
          "Complementa: NIS II (más específico para sector financiero)"
        ]
      },
      {
        subtitle: "4 Objetivos Principales de DORA",
        content: "El reglamento persigue cuatro objetivos estratégicos:",
        keyPoints: [
          "1. Mejorar la RESISTENCIA OPERATIVA del sector financiero europeo",
          "2. Aumentar la PROTECCIÓN de los datos de los clientes",
          "3. Crear IGUALDAD DE CONDICIONES mediante normas uniformes en toda la UE",
          "4. REFORZAR el papel de las autoridades de supervisión en ciberseguridad"
        ]
      },
      {
        subtitle: "Entidades Financieras Afectadas",
        content: "DORA aplica a un amplio espectro de entidades financieras:",
        keyPoints: [
          "Entidades de crédito (bancos, cajas)",
          "Empresas de inversión y valores",
          "Entidades de pago y dinero electrónico",
          "Empresas de seguros y reaseguros",
          "Fondos de pensiones",
          "Sociedades gestoras de fondos",
          "Proveedores de servicios de criptoactivos",
          "Agencias de calificación crediticia",
          "Registros de operaciones (trade repositories)"
        ]
      },
      {
        subtitle: "Proveedores TIC Críticos",
        content: "DORA también afecta a proveedores tecnológicos del sector financiero:",
        keyPoints: [
          "Proveedores de servicios cloud (AWS, Azure, Google Cloud, etc.)",
          "Proveedores de software financiero (core banking, trading platforms)",
          "Proveedores de análisis de datos",
          "Empresas de procesamiento de pagos",
          "Centros de datos",
          "Supervisión directa de la UE para proveedores TIC críticos",
          "Registro obligatorio y auditorías periódicas"
        ]
      },
      {
        subtitle: "5 Pilares de DORA",
        content: "El reglamento se estructura en 5 áreas principales:",
        keyPoints: [
          "1. Gestión de Riesgos TIC: marco integral, identificación, protección, detección",
          "2. Notificación de Incidentes: plazos estrictos, clasificación, seguimiento",
          "3. Pruebas de Resiliencia: penetración, TLPT, red team, auditorías",
          "4. Gestión del Riesgo de Terceros (proveedores TIC): contratos, supervisión",



          "5. Intercambio de Información: compartir amenazas, vulnerabilidades (CTI)"
        ]
      },
      {
        subtitle: "Notificación de Incidentes en DORA",
        content: "Plazos muy estrictos para notificación de incidentes:",
        keyPoints: [
          "Notificación INICIAL: 4 horas desde la detección de incidente GRAVE",
          "Notificación INTERMEDIA: actualización de la situación y medidas adoptadas",
          "Informe FINAL: análisis completo, causa raíz, acciones correctivas",
          "Destinatarios: autoridades competentes (Banco Central, supervisor nacional)",
          "Clasificación: Mayor, Grave, Significativo según impacto",
          "Incidentes significativos deben ser públicos si afectan a clientes"
        ]
      },
      {
        subtitle: "Pruebas TLPT (Threat-Led Penetration Testing)",
        content: "DORA exige pruebas de penetración basadas en amenazas reales:",
        keyPoints: [
          "TLPT: pruebas que simulan tácticas de atacantes reales sofisticados",
          "Obligatorio para entidades financieras de nivel crítico (cada 3 años)",
          "Basado en inteligencia de amenazas (Threat Intelligence)",
          "Simulan ataques APT (Advanced Persistent Threats)",
          "Realizadas por equipos especializados (Red Team interno o externo)",
          "Incluyen: reconocimiento, ataque, post-explotación, exfiltración",
          "Framework TIBER-EU: metodología europea de TLPT"
        ]
      },
      {
        subtitle: "Gestión de Terceros (Third-Party Risk)",
        content: "DORA establece requisitos estrictos para proveedores TIC:",
        keyPoints: [
          "Registro de todos los acuerdos con proveedores TIC",
          "Evaluación y clasificación según criticidad",
          "Cláusulas contractuales obligatorias (acceso auditoría, terminación)",
          "Estrategia de salida (exit strategy) documentada",
          "Supervisión continua del rendimiento y seguridad",
          "Evitar concentración excesiva en pocos proveedores críticos",
          "Proveedores críticos: supervisión directa de autoridades UE"
        ]
      },
      {
        subtitle: "Sanciones y Multas",
        content: "DORA establece sanciones administrativas robustas:",
        keyPoints: [
          "Hasta 10 millones de euros O",
          "Hasta el 5% del volumen de negocio total anual (el importe mayor)",
          "Medidas correctoras obligatorias",
          "Amonestaciones públicas",
          "Prohibición temporal de actividades",
          "Retirada de autorizaciones en casos graves",
          "Responsabilidad de los miembros del órgano de dirección"
        ]
      },
      {
        subtitle: "Diferencias: DORA vs NIS II",
        content: "Aunque relacionados, DORA y NIS II tienen diferencias:",
        keyPoints: [
          "DORA: sector financiero exclusivamente",
          "NIS II: todos los sectores críticos (incluido financiero)",
          "DORA: lex specialis (prevalece sobre NIS II para entidades financieras)",
          "DORA: más detallado y específico en resiliencia operativa",
          "DORA: supervisión de proveedores TIC críticos",
          "NIS II: enfoque más amplio en ciberseguridad general",
          "Sanciones: DORA 5% o 10M€ vs NIS II 2% o 10M€ (esenciales)"
        ]
      },
      {
        subtitle: "Comparación: DORA vs GDPR",
        content: "Ambos son reglamentos UE pero con enfoques diferentes:",
        keyPoints: [
          "GDPR: protección de datos personales (privacy)",
          "DORA: resiliencia operativa digital (ciberseguridad + continuidad)",
          "GDPR: aplicable a todos los sectores",
          "DORA: solo sector financiero",
          "GDPR: multas hasta 20M€ o 4% facturación global",
          "DORA: multas hasta 10M€ o 5% volumen negocios",
          "Complementarios: DORA ayuda a cumplir medidas de seguridad del GDPR"
        ]
      }
    ]
  },
  "Análisis de riesgos": {
    title: "Análisis y Gestión de Riesgos de Seguridad",
    icon: "📊",
    sections: [
      {
        subtitle: "Conceptos Fundamentales",
        content: "Base del análisis de riesgos en seguridad de la información:",
        keyPoints: [
          "Activo: Recurso del sistema de información con valor para la organización (datos, software, hardware, personas)",
          "Amenaza: Evento o agente que puede causar daño a un activo (malware, incendio, error humano, atacante)",
          "Vulnerabilidad: Debilidad o carencia de un control que puede ser explotada por una amenaza",
          "Impacto: Consecuencia (cuantitativa o cualitativa) de un incidente sobre la organización",
          "Probabilidad: Frecuencia estimada de que se materialice una amenaza",
          "Riesgo: Función del impacto y la probabilidad de materialización"
        ]
      },
      {
        subtitle: "Fórmula del Riesgo",
        content: "Cálculo fundamental del riesgo en ISO 27001:",
        keyPoints: [
          "Riesgo = Impacto × Probabilidad (de materialización de la amenaza)",
          "Impacto: Daño potencial si se materializa la amenaza (bajo, medio, alto)",
          "Probabilidad: Frecuencia o verosimilitud de ocurrencia (rara, posible, probable, muy probable)",
          "El resultado prioriza qué riesgos tratar primero",
          "Matriz de riesgos: herramienta visual (eje X: probabilidad, eje Y: impacto)",
          "Nivel de riesgo = Muy Bajo, Bajo, Medio, Alto, Muy Alto"
        ]
      },
      {
        subtitle: "8 Pasos del Análisis de Riesgos (ISO 27001)",
        content: "Proceso estructurado para analizar riesgos de seguridad:",
        keyPoints: [
          "1. Identificar ACTIVOS y asignar responsables (inventario completo)",
          "2. Identificar VULNERABILIDADES de cada activo (debilidades, carencias)",
          "3. Identificar AMENAZAS que pueden explotar vulnerabilidades (catálogo de amenazas)",
          "4. Identificar REQUISITOS LEGALES y regulatorios aplicables (GDPR, ENS, etc.)",
          "5. Identificar RIESGOS (combinación amenaza-vulnerabilidad-activo)",
          "6. CALCULAR EL RIESGO (Impacto × Probabilidad)",
          "7. Elaborar PLAN DE TRATAMIENTO DEL RIESGO (PTR)",
          "8. Documentar DECLARACIÓN DE APLICABILIDAD (SoA)"
        ]
      },
      {
        subtitle: "4 Estrategias de Tratamiento del Riesgo",
        content: "Opciones para gestionar los riesgos identificados:",
        keyPoints: [
          "1. MITIGAR el riesgo:",
          "   - Implementar controles para reducir probabilidad o impacto",
          "   - Opción más común (firewalls, cifrado, backups, formación)",
          "   - Nunca elimina el riesgo al 100%, queda riesgo residual",
          "2. ASUMIR (aceptar) el riesgo:",
          "   - Tolerar el riesgo sin controles adicionales",
          "   - Cuando coste del control > impacto del riesgo",
          "   - Requiere aprobación explícita de la Alta Dirección",
          "3. TRANSFERIR el riesgo:",
          "   - Trasladar a un tercero (seguro, subcontratación, cloud)",
          "   - Ojo: responsabilidad última sigue siendo de la organización",
          "   - Ejemplos: seguro cibernético, outsourcing",
          "4. ELIMINAR el riesgo:",
          "   - Suprimir la actividad que genera el riesgo",
          "   - Opción menos viable (implica dejar de hacer algo del negocio)",
          "   - Ejemplo: cerrar un servicio vulnerable que no es esencial"
        ]
      },
      {
        subtitle: "Plan de Tratamiento del Riesgo (PTR)",
        content: "Documento que define cómo tratar cada riesgo identificado:",
        keyPoints: [
          "Para cada riesgo, incluye:",
          "  - Identificación del riesgo",
          "  - Nivel de riesgo (antes del tratamiento)",
          "  - Opción de tratamiento elegida (mitigar/asumir/transferir/eliminar)",
          "  - Controles a implementar (si se mitiga)",
          "  - Responsable de implementación",
          "  - Plazo de implementación",
          "  - Nivel de riesgo residual (después del tratamiento)",
          "Debe ser aprobado por la Alta Dirección",
          "Base para la elaboración de la SoA"
        ]
      },
      {
        subtitle: "Statement of Applicability (SoA)",
        content: "Documento MÁS IMPORTANTE de ISO 27001:",
        keyPoints: [
          "Declaración de Aplicabilidad: documento OBLIGATORIO para certificación",
          "Lista TODOS los 93 controles del Anexo A de ISO 27001:2022",
          "Para cada control indica:",
          "  - Si APLICA o NO APLICA",
          "  - JUSTIFICACIÓN de inclusión o exclusión",
          "  - Estado de implementación (no implementado / parcial / completo)",
          "  - Responsable del control",
          "  - Documentación relacionada (procedimientos, políticas, registros)",
          "Guía para auditores internos y externos",
          "Documento vivo: se actualiza cuando cambian riesgos o contexto"
        ]
      },
      {
        subtitle: "Cuándo Actualizar la SoA",
        content: "La SoA debe actualizarse en las siguientes situaciones:",
        keyPoints: [
          "Cambios organizativos u operacionales significativos",
          "Nueva información sobre amenazas o vulnerabilidades",
          "Nuevo requisito legal o regulatorio aplicable",
          "Adquisición o sustitución de activos TIC significativos",
          "Cambios en el alcance del SGSI",
          "Resultados de auditorías internas o externas",
          "Incidentes de seguridad  relevantes",
          "Revisión anual del SGSI por la dirección"
        ]
      },
      {
        subtitle: "Metodologías de Análisis de Riesgos",
        content: "Principales metodologías reconocidas internacionalmente:",
        keyPoints: [
          "ISO/IEC 27005: Estándar internacional de gestión de riesgos de seguridad de la información",
          "MAGERIT v3: Metodología española del CCN, instrumento oficial para el ENS",
          "OCTAVE (Operationally Critical Threat, Asset, and Vulnerability Evaluation): Carnegie Mellon University",
          "CRAMM (CCTA Risk Analysis and Management Method): Reino Unido, muy detallada",
          "NIST SP 800-30: Guía del gobierno USA para evaluación de riesgos",
          "FAIR (Factor Analysis of Information Risk): cuantitativa basada en probabilidades",
          "Todas son compatibles con ISO 27001, elección según necesidades"
        ]
      },
      {
        subtitle: "Tipos de Análisis de Riesgos",
        content: "Enfoques para realizar el análisis:",
        keyPoints: [
          "CUALITATIVO:",
          "  - Usa escalas descriptivas (bajo/medio/alto)",
          "  - Más rápido y sencillo",
          "  - Subjetivo pero suficiente para muchas organizaciones",
          "CUANTITATIVO:",
          "  - Usa valores numéricos (€, probabilidad estadística)",
          "  - Cálculos: ALE (Annual Loss Expectancy), SLE, ARO",
          "  - Más preciso pero requiere datos históricos",
          "SEMI-CUANTITATIVO:",
          "  - Combina ambos enfoques",
          "  - Escalas numéricas asignadas a categorías cualitativas",
          "  - Equilibrio entre precisión y practicidad"
        ]
      },
      {
        subtitle: "Riesgo Inherente vs Residual",
        content: "Dos niveles de riesgo a considerar:",
        keyPoints: [
          "Riesgo INHERENTE (o bruto):",
          "  - Nivel de riesgo SIN controles implementados",
          "  - Riesgo natural o intrínseco de la actividad",
          "  - Punto de partida del análisis",
          "Riesgo RESIDUAL:",
          "  - Nivel de riesgo DESPUÉS de implementar controles",
          "  - Siempre existe (ningún control es 100% efectivo)",
          "  - Debe ser ACEPTABLE para la Alta Dirección",
          "  - Si no es aceptable → implementar controles adicionales"
        ]
      },
      {
        subtitle: "Relación PTR - SoA - Auditoría",
        content: "Cómo se conectan los documentos clave:",
        keyPoints: [
          "1. Análisis de Riesgos identifica riesgos y su nivel",
          "2. PTR (Plan Tratamiento Riesgo) define qué controles implementar para mitigar",
          "3. SoA (Statement of Applicability) documenta formalmente qué controles del Anexo A aplican",
          "4. Implementación: se ejecutan los controles documentados en la SoA",
          "5. Auditoría: verifica que lo declarado en SoA está realmente implementado",
          "6. Revisión: ciclo PDCA, mejora continua, actualización de SoA",
          "Todo debe ser coherente y trazable"
        ]
      }
    ]
  },
  "Regulaciones": {
    title: "Organismos, Regulaciones y Marco Legal Nacional",
    icon: "📜",
    sections: [
      {
        subtitle: "CCN - Centro Criptológico Nacional",
        content: "Autoridad nacional en materia de ciberseguridad:",
        keyPoints: [
          "Organismo del Centro Nacional de Inteligencia (CNI)",
          "Autoridad nacional en criptología y ciberseguridad",
          "Elabora las guías CCN-STIC de aplicación del ENS",
          "Supervisa cumplimiento del ENS en AAPP",
          "Opera CCN-CERT (Centro Criptológico Nacional CERT)",
          "Certifica productos de seguridad (Catálogo de Productos STIC)",
          "Forma a profesionales de ciberseguridad (CNI)",
          "Coordina respuesta a ciberincidentes en sector público"
        ]
      },
      {
        subtitle: "CCN-CERT y CERTSI",
        content: "Capacidad nacional de respuesta a incidentes:",
        keyPoints: [
          "CCN-CERT: CERT del Centro Criptológico Nacional",
          "CERTSI: CERT de Seguridad e Industria (antes CCN-CERT)",
          "CERT de referencia para:",
          "  - Administraciones Públicas (estatal, autonómica, local)",
          "  - Empresas de especial relevancia (operadores críticos)",
          "  - Sector industrial estratégico",
          "Publica:",
          "  - Alertas tempranas de amenazas",
          "  - Avisos de vulnerabilidades",
          "  - Informes de ciberseguridad (CCN-CERT IA, BP, etc.)",
          "Coordina ejercicios de ciberseguridad (CyberEx)",
          "Coopera con otros CERT nacionales e internacionales"
        ]
      },
      {
        subtitle: "INCIBE - Instituto Nacional de Ciberseguridad",
        content: "Entidad de referencia para ciudadanos y empresas:",
        keyPoints: [
          "Sociedad dependiente del Ministerio de Asuntos Económicos",
          "Misión: fortalecer ciberseguridad en España",
          "INCIBE-CERT: CERT nacional para ciudadanos, empresas y sector privado",
          "Servicios:",
          "  - Línea de ayuda en ciberseguridad (017)",
          "  - Avisos de seguridad y campañas de concienciación",
          "  - Formación y certificación profesional",
          "  - Apoyo a pymes (diagnóstico, asesoramiento)",
          "  - Investigación en ciberseguridad",
          "Opera Internet Segura 4 Kids (IS4K) para menores",
          "Gestiona programas: CyberCamp, CiberTalento, CERTSI Empresas"
        ]
      },
      {
        subtitle: "AEPD - Agencia Española de Protección de Datos",
        content: "Autoridad de control en protección de datos personales:",
        keyPoints: [
          "Autoridad de control independiente del GDPR en España",
          "Supervisa cumplimiento de GDPR (Reglamento UE 2016/679)",
          "Supervisa cumplimiento de LOPDGDD (Ley Orgánica 3/2018)",
          "Funciones:",
          "  - Recibir y tramitar reclamaciones de ciudadanos",
          "  - Inspeccionar y sancionar incumplimientos",
          "  - Emitir dictámenes y autorizaciones",
          "  - Asesorar a ciudadanos y organizaciones",
          "  - Elaborar códigos de conducta y certificaciones",
          "Registra Delegados de Protección de Datos (DPO)",
          "Canal prioritario: Brecha de Seguridad (notificación 72h)",
          "Coopera con autoridades UE (mecanismo ventanilla única)"
        ]
      },
      {
        subtitle: "GDPR - Reglamento General de Protección de Datos",
        content: "Normativa europea de protección de datos personales:",
        keyPoints: [
          "Reglamento (UE) 2016/679, aplicable desde 25 mayo 2018",
          "Ámbito: Unión Europea + efecto extraterritorial",
          "Principios: licitud, lealtad, transparencia, minimización, exactitud, limitación",
          "Derechos de los interesados:",
          "  - Acceso, rectificación, supresión ('derecho al olvido')",
          "  - Limitación del tratamiento, portabilidad",
          "  - Oposición y decisiones automatizadas",
          "Figuras:",
          "  - Responsable del tratamiento",
          "  - Encargado del tratamiento",
          "  - Delegado de Protección de Datos (DPO) - obligatorio en ciertos casos",
          "Obligaciones: Registro de actividades, EIPD, notificación brechas",
          "Sanciones: hasta 20M€ o 4% facturación global anual"
        ]
      },
      {
        subtitle: "LOPDGDD - Ley Orgánica de Protección de Datos",
        content: "Legislación española que complementa el GDPR:",
        keyPoints: [
          "Ley Orgánica 3/2018, de 5 de diciembre",
          "Complementa y adapta el GDPR al ordenamiento español",
          "NO sustituye al GDPR (que es directamente aplicable)",
          "Aspectos específicos españoles:",
          "  - Garantía de derechos digitales (Título X)",
          "  - Derecho al olvido en redes sociales",
          "  - Derecho a la desconexión digital laboral",
          "  - Videovigilancia (regulación específica)",
          "  - Datos de menores (consentimiento a partir de 14 años)",
          "Regula sistemas de información crediticia",
          "Procedimiento sancionador específico para España"
        ]
      },
      {
        subtitle: "UNE - Asociación Española de Normalización",
        content: "Organismo nacional de normalización:",
        keyPoints: [
          "Único organismo reconocido en España para aprobar normas (estándares)",
          "Asociación privada sin ánimo de lucro",
          "Representa a España en:",
          "  - ISO (International Organization for Standardization)",
          "  - CEN (Comité Europeo de Normalización)",
          "  - ETSI (Instituto Europeo de Normas de Telecomunicación)",
          "Elabora normas UNE (Una Norma Española)",
          "Adopta normas ISO/IEC como UNE-ISO/IEC",
          "Ejemplos: UNE-ISO/IEC 27001, UNE-EN 301549 (accesibilidad)",
          "Certificación de productos, servicios, personas y empresas"
        ]
      },
      {
        subtitle: "ENISA - Agencia de la Unión Europea para la Ciberseguridad",
        content: "Agencia europea de ciberseguridad:",
        keyPoints: [
          "European Union Agency for Cybersecurity",
          "Creada en 2004, sede en Atenas (Grecia)",
          "Misión: alto nivel de ciberseguridad en la UE",
          "Funciones:",
          "  - Asesoramiento experto a UE y Estados miembros",
          "  - Coordinación de ejercicios de ciberseguridad (Cyber Europe)",
          "  - Desarrollo de marcos de certificación de ciberseguridad",
          "  - Publicación de informes y buenas prácticas",
          "  - Formación y concienciación",
          "Apoya implementación de NIS II",
          "Coordina red de CSIRT europeos",
          "Publica informes anuales (Threat Landscape, Sectorial analyses)"
        ]
      },
      {
        subtitle: "CNPIC - Centro Nacional de Protección de Infraestructuras Críticas",
        content: "Coordinación nacional de protección de infraestructuras:",
        keyPoints: [
          "Dependiente de la Secretaría de Estado de Seguridad (Interior)",
          "Gestiona el Sistema de Protección de Infraestructuras Críticas",
          "Elabora el Catálogo Nacional de Infraestructuras Críticas",
          "Punto focal con autoridades europeas (EPCIP, ERNCIP)",
          "Coordina con 12 sectores estratégicos",
          "Supervisa Planes de Seguridad del Operador (PSO)",
          "Recibe notificaciones de incidentes en IC",
          "Apoya en gestión de crisis que afecten IC"
        ]
      },
      {
        subtitle: "Marco Legal Español de Ciberseguridad",
        content: "Regulaciones principales de Seguridad Nacional (según BOE):",
        keyPoints: [
          "1. ENS - Esquema Nacional de Seguridad (RD 311/2022)",
          "  - Obligatorio para AAPP y proveedores",
          "2. Estrategia Nacional de Ciberseguridad",
          "  - Documento estratégico del Consejo de Seguridad Nacional",
          "3. Ley de Secretos Oficiales (Ley 9/1968)",
          "  - Protección de información clasificada",
          "4. Ley Orgánica de estados de alarma, excepción y sitio",
          "  - Marco legal para crisis extraordinarias",
          "ADEMÁS:",
          "  - Ley PIC 8/2011 (infraestructuras críticas)",
          "  - LOPDGDD 3/2018 (protección de datos)",
          "  - Directiva NIS transpuesta (pendiente NIS II)"
        ]
      },
      {
        subtitle: "Cooperación Internacional",
        content: "España participa en múltiples foros internacionales:",
        keyPoints: [
          "OTAN - Cyber Defence Centre of Excellence (CCDCOE)",
          "ONU - Grupo de Expertos Gubernamentales (GGE) en ciberseguridad",
          "OSCE - Confianza mutua en ciberseguridad",
          "Interpol - Ciberdelincuencia",
          "Europol - European Cybercrime Centre (EC3)",
          "ENISA - Ejercicios y grupos de trabajo",
          "Red de CERT gubernamentales (FIRST, TF-CSIRT)",
          "Forum of Incident Response and Security Teams (FIRST)"
        ]
      }
    ]
  }
};
