# INFORME SOBRE TRUENAS COMMUNITY EDITION Y SU APLICABILIDAD EN ENTORNOS EMPRESARIALES

## OBJETIVO GENERAL

Investigar sobre TrueNAS Community Edition y su aplicabilidad en entornos empresariales.

## OBJETIVOS ESPECÍFICOS

- Evaluar las diferencias entre la versión Community y la versión Empresarial.
- Indicar los casos de uso en la integración empresarial.
- Mencionar las ventajas y desventajas de la herramienta TrueNAS.
- Comparar TrueNAS con otras soluciones de almacenamiento.

---

## 1. ¿Qué es TrueNAS?

TrueNAS es un sistema operativo diseñado para almacenamiento en red. Es una solución de código abierto utilizada para gestionar y compartir almacenamiento en redes locales o en la nube.

El sistema operativo que usa TrueNAS depende de la versión elegida:

- **TrueNAS CORE**: Basado en FreeBSD.
- **TrueNAS SCALE**: Basado en Debian Linux.

Ambos utilizan el sistema de archivos **ZFS**, pero TrueNAS SCALE ofrece mayor compatibilidad con contenedores y Kubernetes debido a su base en Linux.

---

## 2. Características Principales

Entre las principales características de TrueNAS se encuentran:

- Manejo avanzado de archivos, permitiendo:
  - Protección contra corrupción de datos.
  - Creación de snapshots y replicación de datos.
- Almacenamiento flexible con soporte para configuraciones RAID.
- Compatibilidad con diversos protocolos de red: **SMB, NFS, FTP, SFTP**.
- Soporte para virtualización y contenedores:
  - **TrueNAS CORE** admite virtualización.
  - **TrueNAS SCALE** permite contenerización con Docker y Kubernetes.
- Alta disponibilidad y seguridad mediante cifrado de discos, replicación y backups automáticos.

---

## 3. Comparación entre TrueNAS Community y TrueNAS Enterprise

### TrueNAS Community (CORE / SCALE)
✅ Código abierto y gratuito.  
✅ Basado en FreeBSD (CORE) o Debian Linux (SCALE) con sistema de archivos ZFS.  
✅ Compatible con hardware genérico (PCs, servidores caseros).  
✅ Soporta **SMB, NFS, AFP, iSCSI, FTP**.  
✅ Permite snapshots, replicación y cifrado.  
✅ Administración a través de una interfaz web.  

### TrueNAS Enterprise
✅ Basado en TrueNAS CORE, optimizado para entornos empresariales.  
✅ Soporte técnico profesional de iXsystems.  
✅ Alta disponibilidad (**HA**) con failover automático.  
✅ Soporte para discos **SAS y NVMe** de alto rendimiento.  
✅ Integración avanzada con **VMware, Active Directory y LDAP**.  
✅ Licencia de alto rendimiento **ZFS** (RAID-Z con aceleración).  
✅ Incluye hardware certificado (**TrueNAS appliances de iXsystems**).  
⚠️ No es gratuito y requiere hardware validado por iXsystems.  

---

## 4. Casos de Uso en la Integración Empresarial

TrueNAS se puede utilizar en diversos escenarios dentro de una empresa, tales como:

- **Almacenamiento centralizado para redes corporativas**.
- **Solución NAS para backup y replicación**.
- **Virtualización de servidores con almacenamiento compartido**.
- **Almacenamiento para entornos de desarrollo y pruebas**.
- **Administración de grandes volúmenes de datos en infraestructuras de TI**.
- **Implementaciones de almacenamiento en la nube privada o híbrida**.

---

## 5. Ventajas y Desventajas de TrueNAS

### Ventajas
✅ Solución de código abierto y gratuita.  
✅ Sistema de archivos **ZFS** con alta protección contra corrupción de datos.  
✅ Interfaz web intuitiva y fácil de administrar.  
✅ Compatibilidad con múltiples protocolos de almacenamiento.  
✅ Escalabilidad con soporte para discos adicionales y configuraciones RAID.  
✅ Integración con contenedores y Kubernetes (**TrueNAS SCALE**).  

### Desventajas
⚠️ Requiere hardware compatible para un mejor desempeño.  
⚠️ La versión Community no tiene soporte técnico oficial.  
⚠️ La configuración y mantenimiento pueden requerir conocimientos técnicos avanzados.  
⚠️ La versión Enterprise tiene costos elevados.  

---

## 6. Comparación con Otras Soluciones de Almacenamiento

| Característica       | TrueNAS CORE/SCALE | TrueNAS Enterprise | Synology NAS  | QNAP NAS  | FreeNAS  |
|----------------------|-------------------|------------------|--------------|------------|---------|
| Código abierto     | Sí               | No               | No           | No         | Sí     |
| Sistema de archivos | ZFS               | ZFS              | EXT4, Btrfs  | EXT4, Btrfs | ZFS     |
| Soporte contenedores | SCALE: Sí        | No               | No           | Sí        | No      |
| Soporte HA          | No                | Sí              | Sí (en modelos avanzados) | Sí (en modelos avanzados) | No |
| Coste               | Gratuito          | Pago             | Pago         | Pago       | Gratuito |
| Hardware dedicado   | No                | Sí              | Sí          | Sí        | No      |

---

## PROCESO DE INSTALACIÓN

### 1. Página web oficial de TrueNAS

![Página Web TrueNAS](./TrueNAS_images/webtrueNAS.png)

### 2. Versiones de TrueNAS

![Versiones TrueNAS](./TrueNAS_images/versionestrueNAS.png)

### 3. Download imagen iso de TrueNAS

![Download TrueNAS](./TrueNAS_images/downloadIsotrueNAS.png)

### 4. Instalación en Workstation

![Install TrueNAS](./TrueNAS_images/instalacionWorkstationtrueNAS.png)

### 5. Instalación

![Paso1 TrueNAS](./TrueNAS_images/paso01InstaciontrueNAS.png)

### 6. Instalación

![Paso2 TrueNAS](./TrueNAS_images/paso02InstaciontrueNAS.png)

### 7. Instalación

![Paso3 TrueNAS](./TrueNAS_images/paso03InstaciontrueNAS.png)

### 8. Instalación

![Paso4 TrueNAS](./TrueNAS_images/paso04InstaciontrueNAS.png)

### 9. Instalación

![Paso5 TrueNAS](./TrueNAS_images/paso05InstaciontrueNAS.png)

### 10. Instalación

![Paso6 TrueNAS](./TrueNAS_images/paso06InstaciontrueNAS.png)

### 11. Instalación

![Paso7 TrueNAS](./TrueNAS_images/paso07InstaciontrueNAS.png)

### 12. Instalación

![Paso8 TrueNAS](./TrueNAS_images/paso08InstaciontrueNAS.png)

### 13. Instalación

![Paso9 TrueNAS](./TrueNAS_images/paso09InstaciontrueNAS.png)

### 14. Instalación

![Paso10 TrueNAS](./TrueNAS_images/paso10InstaciontrueNAS.png)

### 15. Final de instalación, pantalla de autenticación

![Paso11 TrueNAS](./TrueNAS_images/paso11InstaciontrueNAS.png)

### 16. Dashboard principal de TrueNAS

![Dashboard01 TrueNAS](./TrueNAS_images/dashboard01trueNAS.png)

### 17. Dashboard

![Dashboard02 TrueNAS](./TrueNAS_images/dashboard02trueNAS.png)

### 18. Dashboard

![Dashboard03 TrueNAS](./TrueNAS_images/dashboard03trueNAS.png)

### 19. Dashboard

![Dashboard04 TrueNAS](./TrueNAS_images/dashboard04trueNAS.png)

### 20. Dashboard

![Dashboard05 TrueNAS](./TrueNAS_images/dashboard05trueNAS.png)

### 21. Dashboard

![Dashboard06 TrueNAS](./TrueNAS_images/dashboard06trueNAS.png)

### 22. Dashboard

![Dashboard07 TrueNAS](./TrueNAS_images/dashboard07trueNAS.png)

### 23. Dashboard

![Dashboard08 TrueNAS](./TrueNAS_images/dashboard08trueNAS.png)


---

## Conclusiones

- TrueNAS Community Edition es una excelente opción de almacenamiento de código abierto con grandes ventajas en entornos de pequeñas y medianas empresas.
- Para empresas que requieren alta disponibilidad y soporte técnico, TrueNAS Enterprise es una opción más robusta pero con costos asociados.
- Comparado con otras soluciones NAS comerciales como **Synology** o **QNAP**, TrueNAS destaca por su flexibilidad y su sistema de archivos **ZFS**, aunque puede ser más complejo de configurar.
- La elección entre TrueNAS CORE, SCALE o Enterprise dependerá de las necesidades específicas de la organización y del nivel de soporte requerido.
