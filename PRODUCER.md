# Productor - Apache Kafka

### Descripción

La funcionalidad principal del productor en Kafka es producir mensajes en tiempo real, con la finalidad de que sean consumidos por otras aplicaciones. Este tipo de funcionalida permite la integración de diferentes sistemas que necesitan interactuar con diferente propósitos.

### Requisitos previos

Para ejecutar el productor, debemos reunir los requisitos:

```
Apache Kafka en ejecución
Java 22 instalado
Gradle instalado
Docker instalado
```

Puedes verificar las versiones con:

```
java -version
gradle -version
docker --version
```

### Instalación y Ejecución

1. Compilación del Proyecto

El proyecto está construído para ser desplegado haciendo uso de la herramienta Docker, para eso hemos creado el archivo Dockerfile, el mismo que permitirá construir la imagen y posteriormente el contenedor:

```
docker build -t producer .
```

2. Ejecución del Productor

```
docker run -p 8090:8090 producer
```

3. Publicación de Mensajes

El productor envía mensajes a un topic específico de Kafka. Se puede usar peticiones HTTP con la finalidad de realizar pruebas de ejecución.

### Arquitectura del proyecto

Para este proyecto usamos la arquitectura hexagonal, también conocida como arquitectura de puertos y adaptadores, es un patrón de diseño de software que busca separar la lógica de negocio central de una aplicación de las dependencias externas. Esto permite que la aplicación sea más flexible, mantenible y fácil de probar.

Gráficamente veremos el proyecto de la siguiente manera:

![Consumer Kafka](./kafka-images/EstructuraProyectoProducer.png)

### Arquitectura y Componentes Principales de Kafka 

Apache Kafka es un sistema de mensajería distribuida basado en eventos. Su arquitectura se basa en los siguientes componentes clave:

1. **Producer (Productor)**
	- Es el servicio o aplicación que envía datos a Kafka.
	- Publica mensajes en uno o más Topics.
	- Puede distribuir los mensajes en diferentes Partitions para mejorar la escalabilidad y rendimiento.
	
2. **Broker**
	- Es un nodo dentro del clúster de Kafka que almacena y distribuye mensajes..
	- Un clúster de Kafka puede contener múltiples brokers para garantizar tolerancia a fallos y escalabilidad.
	- Se encarga de replicar datos entre brokers para evitar la pérdida de información.
	
3. **Consumer (Consumidor)**
	- Es el servicio o aplicación que lee los datos de Kafka.
	- Se suscribe a uno o más Topics y procesa los mensajes en orden.
	- Puede formar parte de un Consumer Group para distribuir la carga de trabajo entre múltiples instancias.
	
4. **Topic**
	- Es la categoría o canal donde se publican los mensajes.
	- Los datos enviados por los Producers se almacenan en un Topic, que es leído por los Consumers.
	- Se puede dividir en múltiples Partitions para aumentar la paralelización del procesamiento de datos.
	
5. **Partitions**
	- Cada Topic se divide en varias particiones para mejorar la escalabilidad y el procesamiento paralelo.
	- Los mensajes en una partición son almacenados en orden y cada mensaje recibe un identificador único llamado offset.
	- Los Consumers pueden leer desde cualquier offset, lo que permite el reprocesamiento de mensajes si es necesario.

### Casos de Uso

**Transmisión de eventos en tiempo real**: Permite el envío continuo de datos a través de Kafka, garantizando que los consumidores procesen los mensajes en el orden recibido sin pérdida de información clave. Es ideal para aplicaciones que requieren eventos secuenciales, como monitoreo de sistemas y análisis en tiempo real.

**Integración con sistemas distribuidos**: Facilita la comunicación entre microservicios al permitir que múltiples aplicaciones se suscriban y reaccionen a eventos en distintos puntos de una arquitectura distribuida. Esto mejora la escalabilidad y minimiza la dependencia entre servicios.

**Publicación de logs y métricas en microservicios**: Permite almacenar y analizar registros en tiempo real, asegurando que los eventos de diferentes servicios se capturen de forma ordenada. Esto es esencial para el monitoreo en entornos de producción, la detección de errores y el análisis de rendimiento.

### Comparación con RabbitMQ

Kafka y RabbitMQ tienen enfoques distintos en la producción y distribución de mensajes:

**Comparación entre Kafka y RabbitMQ**

| Característica        | Apache Kafka                          | RabbitMQ                                |
|----------------------|------------------------------------|----------------------------------------|
| **Modelo**          | Basado en registros y streaming   | Basado en colas de mensajes           |
| **Persistencia**    | Alta (retiene mensajes según configuración) | Opcional (mensajes pueden ser descartados después del consumo) |
| **Escalabilidad**   | Alta, distribuido en múltiples brokers | Moderada, basado en colas centralizadas |
| **Rendimiento**     | Alta velocidad y procesamiento de grandes volúmenes de datos | Más rápido en transacciones individuales, pero menos eficiente en alto volumen |
| **Casos de Uso**    | Streaming de eventos, procesamiento en tiempo real, big data | Comunicación entre microservicios, procesamiento de trabajos en cola |
| **Orden de Mensajes** | Garantiza el orden dentro de cada partición | No siempre garantiza el orden de los mensajes |
| **Modelo de Consumo** | Pull-based (los consumidores leen los mensajes cuando los necesitan) | Push-based (RabbitMQ envía mensajes activamente a los consumidores) |
| **Tolerancia a Fallos** | Alta, con replicación de datos entre brokers | Moderada, con opciones de persistencia y confirmaciones de entrega |
| **Reintentos y Confirmaciones** | Soporte nativo con offset de consumidor | Mecanismo de confirmación (ACK) configurable |

**Diferencia clave**

Mientras que Kafka está diseñado para manejar flujos de eventos a gran escala y proporciona almacenamiento distribuido con replicación, RabbitMQ se centra en la mensajería orientada a colas para la comunicación eficiente entre servicios. La elección entre ambos depende del caso de uso: Kafka es ideal para procesamiento de eventos y big data, mientras que RabbitMQ es más adecuado para mensajería empresarial y comunicación entre microservicios.

### Conclusión

Este productor Kafka permite enviar mensajes a un topic, facilitando la integración de sistemas en tiempo real mediante una arquitectura basada en eventos. Si se requiere procesamiento en tiempo real y alta disponibilidad, Kafka es la mejor opción; si el objetivo es mensajería confiable y rápida entre servicios, RabbitMQ es más adecuado. En algunos casos, incluso pueden complementarse dentro de una arquitectura híbrida.