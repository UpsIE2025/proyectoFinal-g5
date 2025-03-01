# proyectoFinal-g5

## Proyecto Final - Grupo 5

### Caso de Uso: "Nombre del Aplicativo"

## Flujo de Negocio

_(Describir el flujo de negocio de la aplicación)_

## Arquitectura

![Arquitectura del Proyecto](https://github.com/user-attachments/assets/ad73429a-9253-4bf1-97c6-e0d44a55afc1)

### Front End

#### Wedding Planner

_(Detalles sobre el frontend, tecnologías utilizadas, framework, etc.)_

### API Gateway + GraphQL

#### Kong:

- **Versión:** 3.0
- **Puerto Proxy:** 8000
- **Puerto Administración:** 8001

#### GraphQL:

- **Versión:** 16.10.0
- **Apollo Server:** 3.13.0
- **Puerto:** 4000

### Base de Datos

Para persistir la información se está usando como base de datos *** PostgreSQL *** que es un sistema de gestión de bases de datos relacional y orientado a objetos de código abierto. Es conocido por su robustez, escalabilidad y cumplimiento con el estándar SQL. Soporta transacciones ACID, extensibilidad mediante funciones y tipos de datos personalizados, replicación, indexación avanzada y JSON para almacenamiento semiestructurado. Es utilizado en aplicaciones empresariales, analíticas y web por su alto rendimiento y flexibilidad.

La estructura de la base de datos es la siguiente:

![Consumer Kafka](./images/EstructureBdd.jpeg)


### gRPC

_(Detalles sobre la implementación de gRPC, servicios expuestos, etc.)_

### CDC (Change Data Capture)

_(Explicar cómo se maneja el CDC en el sistema)_

### Autenticación

#### Auth0

_(Detalles sobre la configuración y uso de Auth0 en el proyecto)_

## APIs

_(Listar y describir las APIs implementadas)_

## Configuración y Despliegue

_(Instrucciones sobre cómo configurar y desplegar el proyecto)_

### 📌 Requisitos Previos

_(Software necesario, dependencias, herramientas, etc.)_

### 🚀 Pasos de Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/proyectoFinal-g5.git
   ```
2. _(Agregar más pasos de configuración)_

### 📦 Despliegue

_(Instrucciones para desplegar la aplicación en producción)_
