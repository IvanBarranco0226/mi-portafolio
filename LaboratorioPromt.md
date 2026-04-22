Hola. Necesito crear una nueva vista en proyectos **'Laboratorio de Ciberseguridad e Infraestructura'** en el modal/navegador de mi portafolio web.

Por favor, utiliza exactamente esta estructura e información para rellenar los detalles del proyecto. El tono debe ser altamente profesional, orientado a DevSecOps y ciberseguridad corporativa.

### **Título del Proyecto**

Auditoría y Fortificación de Infraestructura (Active Directory)

### **Rol**

Administrador de Sistemas / Arquitecto DevSecOps

### **Tecnologías empleadas**

\["VMWare", "pfSense", "Windows Server 2022", "Kali Linux", "Impacket", "Kerberos", "Active Directory"\]

*(Por favor, maqueta el siguiente contenido con un diseño limpio, usando tus componentes de interfaz, manteniendo los títulos, textos resaltados en negrita y listas para facilitar la lectura de los reclutadores).*

### **Resumen Ejecutivo**

Diseño, implementación y auditoría de un entorno empresarial simulado (Sandbox) utilizando VMWare. El objetivo del proyecto fue construir una arquitectura de red corporativa realista con enrutamiento pfSense y un Controlador de Dominio (Windows Server 2022), para ejecutar ejercicios de seguridad ofensiva (Red Team) y proponer planes de remediación estratégicos (Blue Team).

### **Fase 1: Arquitectura e Infraestructura**

* **Despliegue de red segmentada:** Implementación mediante un firewall de código abierto (pfSense), separando las interfaces WAN y LAN.  
* **Ecosistema Active Directory:** Configuración de equipos cliente (Windows 10\) y servidores con políticas de seguridad perimetral activas (Windows Defender / Firewall).

### **Fase 2: Ejercicios de Seguridad Ofensiva (Red Team)**

Se ejecutaron simulaciones de amenazas avanzadas para evaluar la resiliencia de la red:

* **Reconocimiento y Evasión:** Escaneo de superficie de ataque evadiendo firewalls restrictivos para descubrir servicios críticos (SMB, LDAP, Kerberos, WinRM).  
* **Captura de Credenciales:** Explotación de protocolos de resolución de nombres locales (LLMNR/NBT-NS Poisoning) para la intercepción de hashes NTLMv2.  
* **Escalada de Privilegios (Kerberoasting):** Abuso de la delegación de Kerberos para extraer tickets (TGS) de cuentas de servicio con configuraciones vulnerables (SPN) y cracking offline criptográfico.  
* **Compromiso Total y Persistencia:** Extracción profunda de la base de datos de credenciales del servidor (NTDS.dit) para forjar "Golden Tickets" (AES-256). Uso de técnicas *Living off the Land* (WMI/SMB) para eludir los motores de detección de Windows Defender.

### **Fase 3: Fortificación y Remediación (Blue Team)**

Con base en los hallazgos, se diseñó un plan de mitigación a nivel corporativo:

* **Políticas de Red:** Desactivación de protocolos legacy (LLMNR) mediante GPOs y obligatoriedad de firmas SMB (SMB Signing) para mitigar ataques *Man-In-The-Middle*.  
* **Gestión de Identidades:** Migración de cuentas de servicio tradicionales a **gMSA** (Group Managed Service Accounts) para asegurar una rotación criptográfica automática de 120 caracteres.  
* **Defensa Profunda:** Restricción de enumeración mediante RPC, rotación programada de la cuenta crítica krbtgt e implementación de un modelo de administración por capas (Tiering) para proteger los privilegios de Domain Admin.