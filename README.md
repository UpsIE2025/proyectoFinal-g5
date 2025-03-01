# Proyecto Final - Grupo 5

## Registro de usuario de un Wedding Planner

## Flujo de Negocio

El sistema realizará el logueo de un usuario, si el cliente no tiene un usuario se creara uno y posteriormente se enviara esa información a traves de graphql el cual enrutará el mensaje para dos distintos microservicios un REST(Producer) y un gRPC......

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

- **Tecnología:** NestJs
- **Versión:**
- **Puerto:** 4000

### Base de Datos

#### MariaDB

- **Versión:**

#### Postgresql

- **Versión:**

### gRPC

- **Tecnología:** Spring
- **version:** 3.4.3
- **puerto:** 9091

### CDC (Change Data Capture)

_(Explicar cómo se maneja el CDC en el sistema)_

### Autenticación

#### Auth0

- **Tecnología:** Express
- **Versión:** 4.21.2
- **Puerto:** 3000

## Configuración y Despliegue

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
