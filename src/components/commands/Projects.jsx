import React, { useState } from 'react';
import BrowserModal from '../projects/BrowserModal.jsx';

const projectsList = [
  {
    id: 1,
    title: 'Sistema de Gestión Gym (GymSystem)',
    shortDescription: 'Plataforma SaaS para administración de gimnasios. Control de membresías, rutinas y pagos.',
    longDescription: 'GymSystem es una plataforma integral SaaS (Software as a Service) diseñada para digitalizar la operación completa de gimnasios modernos. Permite a los administradores gestionar pagos, controlar el acceso de los socios mediante códigos QR, y asignar planes de entrenamiento personalizados, mientras que los usuarios finales pueden visualizar su progreso y renovar membresías desde sus dispositivos.',
    techSummary: 'Spring Boot, React, Spring Security, Docker, PostgreSQL',
    techDetails: ['Spring Boot', 'React', 'Spring Security', 'PostgreSQL', 'Docker', 'GitHub', 'JWT', 'Tailwind CSS'],
    features: [
      'Autenticación robusta y control de roles (Admin, Entrenador, Socio) con Spring Security y JWT.',
      'Arquitectura de microservicios contenerizada con Docker.',
      'Interfaz de usuario (UI) moderna y responsive construida en React y Tailwind CSS.',
      'Gestión automatizada de cobros y recordatorios de vencimiento.',
      'Panel de análisis y métricas de crecimiento en tiempo real.'
    ],
    repo: '#',
    demo: '#',
    fakeUrl: 'gymsystem.app/admin/dashboard'
  },
  {
    id: 2,
    title: 'E-Commerce Seguro API',
    shortDescription: 'API RESTful para un e-commerce con enfoque en seguridad, mitigación de ataques DDoS e inyección SQL.',
    longDescription: 'Una API robusta diseñada con principios de seguridad "Security by Design". Maneja desde el catálogo de productos hasta el procesamiento seguro de pagos, asegurando la integridad de las transacciones y protegiendo los datos sensibles de los clientes.',
    techSummary: 'Node.js, Express, JWT, PostgreSQL, Docker',
    techDetails: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'JWT', 'Helmet', 'Rate Limiting'],
    features: [
      'Protección contra inyecciones SQL y Cross-Site Scripting (XSS).',
      'Rate limiting configurado para mitigar ataques DDoS y de fuerza bruta.',
      'Validación exhaustiva de inputs en cada endpoint.',
      'Despliegue automatizado mediante contenedores Docker.'
    ],
    repo: '#',
    demo: '#',
    fakeUrl: 'api.secure-ecommerce.dev/v1/docs'
  },
  {
    id: 3,
    title: 'Laboratorio de Ciberseguridad e Infraestructura',
    shortDescription: 'Auditoría y Fortificación de Infraestructura en entornos Active Directory.',
    longDescription: 'Diseño, implementación y auditoría de un entorno empresarial simulado (Sandbox) utilizando VMWare. El objetivo del proyecto fue construir una arquitectura de red corporativa realista con enrutamiento pfSense y un Controlador de Dominio (Windows Server 2022), para ejecutar ejercicios de seguridad ofensiva (Red Team) y proponer planes de remediación estratégicos (Blue Team).',
    role: 'Administrador de Sistemas / Arquitecto DevSecOps',
    techSummary: 'VMWare, pfSense, AD, Windows Server, Kali Linux',
    techDetails: ["VMWare", "pfSense", "Windows Server 2022", "Kali Linux", "Impacket", "Kerberos", "Active Directory"],
    phases: [
      {
        title: 'Fase 1: Arquitectura e Infraestructura',
        items: [
          '**Despliegue de red segmentada:** Implementación mediante un firewall de código abierto (pfSense), separando las interfaces WAN y LAN.',
          '**Ecosistema Active Directory:** Configuración de equipos cliente (Windows 10) y servidores con políticas de seguridad perimetral activas (Windows Defender / Firewall).'
        ]
      },
      {
        title: 'Fase 2: Ejercicios de Seguridad Ofensiva (Red Team)',
        description: 'Se ejecutaron simulaciones de amenazas avanzadas para evaluar la resiliencia de la red:',
        items: [
          '**Reconocimiento y Evasión:** Escaneo de superficie de ataque evadiendo firewalls restrictivos para descubrir servicios críticos (SMB, LDAP, Kerberos, WinRM).',
          '**Captura de Credenciales:** Explotación de protocolos de resolución de nombres locales (LLMNR/NBT-NS Poisoning) para la intercepción de hashes NTLMv2.',
          '**Escalada de Privilegios (Kerberoasting):** Abuso de la delegación de Kerberos para extraer tickets (TGS) de cuentas de servicio con configuraciones vulnerables (SPN) y cracking offline criptográfico.',
          '**Compromiso Total y Persistencia:** Extracción profunda de la base de datos de credenciales del servidor (NTDS.dit) para forjar "Golden Tickets" (AES-256). Uso de técnicas Living off the Land (WMI/SMB) para eludir los motores de detección de Windows Defender.'
        ]
      },
      {
        title: 'Fase 3: Fortificación y Remediación (Blue Team)',
        description: 'Con base en los hallazgos, se diseñó un plan de mitigación a nivel corporativo:',
        items: [
          '**Políticas de Red:** Desactivación de protocolos legacy (LLMNR) mediante GPOs y obligatoriedad de firmas SMB (SMB Signing) para mitigar ataques Man-In-The-Middle.',
          '**Gestión de Identidades:** Migración de cuentas de servicio tradicionales a **gMSA** (Group Managed Service Accounts) para asegurar una rotación criptográfica automática de 120 caracteres.',
          '**Defensa Profunda:** Restricción de enumeración mediante RPC, rotación programada de la cuenta crítica krbtgt e implementación de un modelo de administración por capas (Tiering) para proteger los privilegios de Domain Admin.'
        ]
      }
    ],
    repo: '#',
    demo: '#',
    fakeUrl: 'lab.security-audit.local/infra'
  },
  {
    id: 4,
    title: 'FinTech Batch Sentinel',
    shortDescription: 'Sistema backend de procesamiento por lotes (Batch) multihilo para auditoría y detección de fraudes financieros en tiempo real.',
    longDescription: 'Sistema backend de alto rendimiento diseñado bajo Clean Architecture y estructurado como un proyecto Maven Multi-Módulo. Procesa masivamente transacciones financieras por lotes (Batch) mediante hilos concurrentes (Worker Threads) y ejecuta reglas de detección de fraude en memoria con total thread-safety antes de persistir los resultados en PostgreSQL.',
    role: 'Backend Developer / Software Architect',
    techSummary: 'Java, Spring Boot, PostgreSQL, Docker, Maven, Multithreading',
    techDetails: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'PostgreSQL',
      'Docker',
      'Docker Compose',
      'Maven',
      'Multithreading',
      'Clean Architecture'
    ],
    phases: [
      {
        title: 'Módulos y Clean Architecture',
        description: 'Estructura modular Maven diseñada para garantizar bajo acoplamiento y alta cohesión:',
        items: [
          '**fintech-core (Dominio):** Modelos de datos (`Transaction`) y reglas de negocio puras (`FraudRule`). Totalmente desacoplado de frameworks.',
          '**fintech-batch (Procesamiento):** Motor de procesamiento concurrente. Lee registros por fragmentos (Chunks) y delega tareas a un `ExecutorService`.',
          '**fintech-api (Infraestructura y Web):** Capa Spring Boot para inyección de dependencias, exposición de endpoints REST y persistencia con Spring Data JPA y PostgreSQL.'
        ]
      },
      {
        title: 'Concurrencia y Patrones Técnicos',
        description: 'Optimización de rendimiento y seguridad en entornos multihilo:',
        items: [
          '**Multithreading y Concurrencia:** Distribución de miles de registros en hilos paralelos (Worker Threads) para maximizar el uso de CPU.',
          '**Thread-Safety:** Almacenamiento y validación en memoria mediante colecciones concurrentes (`ConcurrentHashMap`) para prevenir condiciones de carrera.',
          '**Patrón Strategy (SOLID):** Inyección polimórfica de reglas de fraude sin alterar el procesador principal (principio Open/Closed).'
        ]
      },
      {
        title: 'Reglas de Detección de Fraude',
        description: 'Reglas implementadas para la auditoría y análisis en tiempo real:',
        items: [
          '**VelocityRule:** Identificación de ráfagas inusuales de transacciones de una misma cuenta en lapsos de segundos configurables.',
          '**SalamiAttackRule:** Detección de acumulación de micro-transacciones sospechosas (ataque tipo Salami) en memoria concurrente.',
          '**TimeWindowRule:** Bloqueo automático de transacciones que intentan ejecutarse fuera del horario bancario permitido.',
          '**AmountThresholdRule:** Detección y contención de picos de monto que sobrepasan los límites máximos establecidos.'
        ]
      }
    ],
    repo: 'https://github.com/IvanBarranco0226/fintech-batch-sentinel.git',
    demo: '#',
    fakeUrl: 'fintech.sentinel.internal/batch/audit'
  },
  {
    id: 5,
    title: 'TerremotoSense: Monitoreo Sísmico en Tiempo Real',
    shortDescription: 'Motor de procesamiento geoespacial y distribución de sismos en tiempo real con WebSockets (STOMP), PostGIS y Frontend interactivo diseñado por IA (UX/UI).',
    longDescription: 'Plataforma avanzada de monitoreo y alerta sísmica en tiempo real. Resuelve el reto de la sincronización asíncrona de datos desde el servicio geológico USGS y la ejecución de consultas geoespaciales complejas (Geofencing con PostGIS y ST_DWithin). Distribuye alertas instantáneas a interfaces de usuario mediante WebSockets (STOMP) y simula la propagación de ondas sísmicas en mapas reactivos. La interfaz de usuario (Frontend) fue diseñada y construida en su totalidad mediante Inteligencia Artificial con agentes especializados en UX/UI.',
    role: 'Backend & Geo-Architect (Frontend AI UX/UI)',
    techSummary: 'Java, Spring Boot, PostGIS, WebSockets, React (AI UI), Leaflet, Docker',
    techDetails: [
      'Java',
      'Spring Boot',
      'PostGIS',
      'WebSockets (STOMP)',
      'Hibernate Spatial (JTS)',
      'React',
      'Frontend AI (UX/UI Agent)',
      'Leaflet',
      'Docker Compose'
    ],
    phases: [
      {
        title: '1. Arquitectura Event-Driven y Geoespacial',
        description: 'Flujo continuo de datos e ingesta automatizada:',
        items: [
          '**Ingesta Automática (Cron Job):** Hilo programado en Spring Boot que consume y parsea periódicamente el feed GeoJSON del servicio sismológico USGS.',
          '**Motor Geoespacial (SRID 4326 WGS 84):** Conversión de datos en crudo a geometrías espaciales indexadas en PostGIS mediante Hibernate Spatial (JTS).',
          '**Distribución Push de Baja Latencia:** Broker de mensajería STOMP sobre WebSockets para enviar alertas instantáneas a los clientes sin necesidad de sondeo (polling).',
          '**Tolerancia a Duplicados:** Filtros lógicos mediante llaves únicas (USGS ID) que previenen la redundancia y preservan la integridad de datos masivos.'
        ]
      },
      {
        title: '2. Geofencing y Endpoints de Consulta',
        description: 'Capacidades de análisis espacial y APIs de consumo:',
        items: [
          '**Geofencing con ST_DWithin:** Cálculo de distancias reales considerando la curvatura terrestre para identificar sismos en un radio específico basado en el GPS del usuario.',
          '**API REST Reactiva:** Endpoints optimizados (`/api/v1/sismos/recientes`, `/api/v1/sismos/filtrar`, `/api/v1/sismos/zona`) con filtrado por rango de fechas, magnitud y radio geográfico.',
          '**Multi-Stage Docker Build:** Empaquetado optimizado en dos fases que aísla el código fuente y reduce el peso de la imagen final para producción.'
        ]
      },
      {
        title: '3. Frontend Diseñado y Creado por IA (UX/UI)',
        description: 'Experiencia interactiva reactiva generada íntegramente con Inteligencia Artificial:',
        items: [
          '**Desarrollo asistido por Agente de Diseño IA:** La interfaz completa, arquitectura de componentes, paleta de colores y patrones de interacción UX/UI fueron generados y optimizados al 100% mediante Inteligencia Artificial.',
          '**Visualización Reactiva (Leaflet):** Mapas interactivos de alta precisión que renderizan eventos y simulan matemáticamente la onda sísmica en tiempo real.',
          '**Suscripción en Vivo a Eventos:** Conexión continua con el canal `/topic/alertas-sismos` para reflejar temblores al instante sin recarga de pantalla.'
        ]
      }
    ],
    repo: 'https://github.com/IvanBarranco0226/terremotosense-backend.git',
    demo: 'https://terremotosense-frontend.vercel.app/',
    fakeUrl: 'terremotosense.app/live-monitor'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openBrowser = (project) => {
    setSelectedProject(project);
  };

  const closeBrowser = () => {
    setSelectedProject(null);
  };

  return (
    <div className="text-gray-300 mt-2 mb-4 animate-fade-in relative">
      <div className="space-y-6">
        {projectsList.map((project, index) => (
          <div key={project.id} className="group bg-white/5 p-5 rounded-lg border border-white/10 hover:border-green-500/50 transition-all duration-300 shadow-lg relative overflow-hidden">
            {/* Efecto hover de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-transparent -translate-x-full group-hover:animate-[scanline_2s_ease-in-out_infinite]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-green-400 font-bold text-xl glow-green group-hover:translate-x-1 transition-transform flex items-center gap-2">
                  <span className="text-xs text-gray-500 font-normal tracking-widest uppercase">[{String(index + 1).padStart(2, '0')}]</span> 
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 font-semibold mb-3 mt-1 border-b border-white/5 pb-2 uppercase tracking-wide">Tech: <span className="text-blue-300">{project.techSummary}</span></p>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">{project.shortDescription}</p>
              </div>
              
              <div className="flex flex-col gap-3 justify-center min-w-[200px]">
                {/* Botón Verde Llamativo */}
                <button 
                  onClick={() => openBrowser(project)}
                  className="w-full relative px-4 py-2 font-bold text-black bg-green-500 rounded hover:bg-green-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] flex items-center justify-center gap-2 group/btn overflow-hidden"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover/btn:w-56 group-hover/btn:h-56 opacity-10"></span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                  <span className="relative z-10 text-xs tracking-wide uppercase">Abrir Navegador</span>
                </button>
                
                <div className="flex justify-between gap-2 text-xs">
                  <a href={project.repo} className="flex-1 text-center py-1 border border-white/20 rounded text-gray-400 hover:text-white hover:border-white/50 transition-colors">Repositorio</a>
                  {project.demo !== '#' && (
                    <a href={project.demo} className="flex-1 text-center py-1 border border-white/20 rounded text-gray-400 hover:text-white hover:border-white/50 transition-colors">Demo</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal del Navegador */}
      <BrowserModal 
        isOpen={!!selectedProject} 
        onClose={closeBrowser} 
        project={selectedProject} 
      />
    </div>
  );
}
