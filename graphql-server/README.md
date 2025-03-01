# Filtro (Filter Pattern) en Sistemas de Integración

Es un patrón de diseño utilizado para interceptar, modificar o procesar mensajes o eventos de manera estructurada antes de que lleguen al siguiente componente del flujo de procesamiento. 

Entre su principal uso se tiene:

- **Validar** la entrada de datos.
- **Transformar** los datos en un formato deseado.
- **Enriquecer** los mensajes con información adicional.
- **Loguear** o auditar la información.
- **Bloquear** mensajes no deseados.

El patrón de filtro permite la manipulación de los mensajes a lo largo de los flujos de procesamiento, interviniendo según criterios definidos.

# Comparación de Filtros en Apache Camel, Spring Integration y Node.js

| Característica  | Apache Camel                                                                                                                                                                                                 | Spring Integration                                                                                                                                                                                            | Node.js (Express/NestJS)                                                                                                                                                                                             |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Concepto**      | Un framework de integración basado en Enterprise Integration Patterns (EIP).  Ofrece DSLs (Java, XML, Groovy, Kotlin) para definir rutas de integración.                                             | Extensión de Spring Framework para construir soluciones de integración basadas en EIP.  Configuración a través de XML, Java annotations o DSL.                                                       | Express.js (middleware) y NestJS (filtros, pipes, guards) son frameworks web.  Se adaptan para la integración mediante el manejo de peticiones HTTP y la aplicación de lógica antes y después de las peticiones. |
| **Filtro**        | Componente `filter`.  Se define una expresión (predicado) que evalúa el mensaje. Si la expresión es verdadera, el mensaje continúa por la ruta; de lo contrario, se descarta o se envía a una ruta alternativa. | Componente `filter`.  Funciona de manera similar a Camel, utilizando un `MessageSelector` para evaluar el mensaje.  Puede integrarse con Spring Expression Language (SpEL).                     | **Express:** Middleware se puede usar para filtrar peticiones (ej: verificar autenticación).  **NestJS:**  Filtros de Excepción, Pipes de Transformación y Validación, y Guards de Autorización.                        |
| **Ejemplo (Camel)** | ```java  from("direct:start")          .filter(header("country").isEqualTo("US"))          .to("jms:queue:usOrders"); ```                                                                              | ```xml  <int:filter input-channel="inChannel" output-channel="outChannel" expression="payload.country == 'US'"/> ```                                                                                               | **Express:** `app.use('/orders', (req, res, next) => { if (req.user.role !== 'admin') return res.status(403).send('Forbidden'); next(); });`  **NestJS (Guards - Ejemplo más abajo)**                             |
| **Ventajas**      | Amplia gama de componentes predefinidos, soporte para muchos protocolos, DSLs flexibles.                                                                                                                       | Integración profunda con el ecosistema Spring, soporte para transacciones, mensajería asíncrona.                                                                                                        | **Express:** Sencillez, ecosistema npm rico.  **NestJS:**  Arquitectura estructurada, TypeScript, inyección de dependencias,  modularidad.                                                                          |
| **Desventajas**   | Curva de aprendizaje inicial (debido a la complejidad de los EIP), configuración a veces verbosa.                                                                                                           | Dependencia del ecosistema Spring.                                                                                                                                                                         | **Express:** Falta de estructura inherente (puede llevar a código desorganizado).  **NestJS:**  Curva de aprendizaje un poco más alta que Express.                                                                        |

### Filtros en NestJs

### Comparativa de filtros
![Imagen 1](https://github.com/UpsIE2025/proyectoFinal-g5/blob/main/graphql-server/images/fitros-nest.jpg)

### Ciclo de vida de los filtros
![Imagen 2](https://github.com/UpsIE2025/proyectoFinal-g5/blob/main/graphql-server/images/filtros-lifecycle.jpg)

## Conclusión
El Filter Pattern es una herramienta poderosa para la creación de sistemas modulares y fáciles de mantener. En sistemas de integración como Apache Camel y Spring Integration, se usa para procesar mensajes de manera flexible y reutilizable. En Node.js, especialmente con Express.js y NestJS, los filtros como middlewares, pipes y guards permiten gestionar de manera eficiente el flujo de solicitudes HTTP. Al implementar estos filtros en las aplicaciones, se asegura un alto nivel de modularidad y control sobre el comportamiento de las solicitudes y respuestas.