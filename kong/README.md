# API Gateway

## 📌 ¿Qué es un API Gateway y su importancia en la integración empresarial?

Un **API Gateway** es un componente clave en arquitecturas modernas de microservicios que actúa como un intermediario entre los clientes y los servicios de backend. Facilita el acceso a los servicios, evitando que los clientes tengan que navegar por diferentes rutas y puntos de conexión de API. 

El API Gateway cumple funciones clave como:
- **Punto único de entrada**: Controla el tráfico y dirige las solicitudes a los microservicios adecuados.
- **Autenticación y seguridad**: Valida credenciales y permisos de los clientes.
- **Transformación de solicitudes**: Asegura que los datos se intercambien en el formato correcto.
- **Balanceo de carga**: Distribuye eficientemente el tráfico entre los servidores.
- **Monitoreo y logging**: Registra las solicitudes y el tráfico de la API.

### 🌎 **Beneficios a nivel empresarial**
✅ **Simplifica la integración** con servicios internos y externos.
✅ **Centraliza el acceso** a las APIs, mejorando la seguridad.
✅ **Optimiza el rendimiento** mediante caching, compresión y balanceo de carga.
✅ **Escalabilidad**: Permite agregar, modificar o eliminar servicios sin afectar a los usuarios.

---

## 🔍 Comparación entre Kong y Apache APISIX

| **Característica** | **KONG** | **APACHE APISIX** |
|-------------------|----------|------------------|
| **Arquitectura** | Basado en Nginx y escrito en Lua. Modular con plugins extensibles. | Basado en Nginx + OpenResty y escrito en Lua. Enfocado en extensibilidad dinámica. |
| **Modelo de despliegue** | Compatible con Kubernetes, Docker y bare metal. Versiones Open Source y Enterprise. | Cloud-native, compatible con Kubernetes, Docker y entornos serverless. |
| **Gestión de APIs** | Interfaz intuitiva con plugins para autenticación, logging, etc. | API de gestión flexible y dinámica, sin necesidad de reinicios. |
| **Seguridad** | OAuth2, JWT, ACLs, SSL, IP Whitelisting. | OAuth2, JWT, mTLS y reglas avanzadas de control de acceso. |
| **Extensibilidad** | Plugins en Lua y posibilidad de crear nuevos. | Plugins en Lua, Python, Java y Go, mayor flexibilidad. |
| **Rendimiento** | Eficiente en alto tráfico, pero puede verse afectado por plugins. | Rápido y optimizado para alto rendimiento y procesamiento asíncrono. |
| **Comunidad** | Amplia comunidad y soporte empresarial. | Comunidad en crecimiento, fuerte respaldo open-source. |

---

## 🚀 Casos de uso recomendados

### **🔹 KONG**
- Empresas que requieren **soporte empresarial** y una comunidad establecida.
- Necesidad de un **ecosistema probado** con una gran cantidad de plugins.
- Integración con herramientas de **monitoreo** como Datadog, Prometheus y Splunk.
- Soluciones **híbridas** en nubes privadas, públicas y on-premise.

**Ejemplos de uso:**
- **HSBC** usa Kong Enterprise para gestionar APIs en múltiples regiones con autenticación avanzada y gestión de tráfico.
- **Glovo** utiliza Kong para gestionar microservicios y seguridad en APIs.
- **Rakuten** maneja miles de APIs para proveedores, clientes y sistemas internos con Kong.

### **🔹 Apache APISIX**
- Empresas que buscan **mayor rendimiento**, con más solicitudes por segundo.
- Necesidad de **personalización avanzada** en plugins con Lua, Python, Java y Go.
- Organizaciones que prefieren soluciones **100% open-source** sin depender de licencias.
- Empresas **cloud-native** con entornos Kubernetes y serverless.

**Ejemplos de uso:**
- **Tencent Cloud** usa APISIX para gestionar tráfico API con alta disponibilidad.
- **NASA JPL** optimizó su infraestructura de APIs con APISIX.
- **Huawei Cloud** gestiona tráfico API en sus servicios cloud con APISIX.

---

## 🏢 Comparativa del uso de Kong y Apache APISIX a nivel empresarial

| **Tipo de empresa** | **KONG** | **Apache APISIX** |
|--------------------|----------|------------------|
| **Banca y Finanzas (HSBC, BBVA, Mastercard)** | ✅ Seguridad avanzada y cumplimiento normativo | ❌ No recomendado para compliance empresarial |
| **eCommerce y Marketplaces (Rakuten, Amazon, eBay)** | ✅ Integración rápida con múltiples APIs y seguridad en pagos | ✅ Prioriza rendimiento en alto tráfico |
| **Startups con alto tráfico (TikTok, Netflix)** | ❌ Costoso a gran escala | ✅ Mayor rendimiento sin costos de licencias |
| **Empresas Cloud-Native (NASA, Alibaba Cloud, Tencent Cloud)** | ✅ Adaptable, pero pesado | ✅ Mejor optimizado para Kubernetes y serverless |
| **Telcos y Redes 5G (Huawei, Ericsson, Verizon)** | ❌ No recomendado en latencia baja | ✅ Ideal para tráfico masivo y personalización |
| **Gobiernos y sector público (NASA, IRS, Ayuntamiento)** | ✅ Seguridad y control centralizado | ✅ Código abierto y flexibilidad |

---

## Instalación y Configuración de Kong Gateway

### Descripción

[Kong Gateway](https://konghq.com/kong) es un API Gateway de alto rendimiento que permite administrar, asegurar y escalar servicios API. En este caso, se configurará **sin base de datos** utilizando archivos de configuración declarativa.


### Configuración con Docker

#### 1. Crear el archivo `docker-compose.yml`

Crea un archivo `docker-compose.yml` y agrega la siguiente configuración:

```yaml
version: '3.8'

services:
  kong:
    image: kong:3.0
    container_name: kong
    restart: always
    environment:
      KONG_DATABASE: "off"  # Modo sin base de datos
      KONG_DECLARATIVE_CONFIG: "/usr/local/kong/declarative/kong.yml"
      KONG_PROXY_LISTEN: "0.0.0.0:8000"
      KONG_ADMIN_LISTEN: "0.0.0.0:8001"
    volumes:
      - ./kong/kong.yml:/usr/local/kong/declarative/kong.yml
    networks:
      - kong_network
    ports:
      - "8000:8000"  # Puerto del proxy
      - "8001:8001"  # Puerto del administrador

networks:
  kong_network:
    driver: bridge


#### 1. Crear el archivo `kong.yml` y agrega la siguiente configuración:

```yaml
_format_version: "3.0"

services:
  - name: mi-servicio
    url: http://mockbin.org/request
    routes:
      - name: mi-ruta
        paths:
          - /mi-ruta

---

📌 ¡Contribuye al proyecto y mejora la implementación de API Gateways en entornos