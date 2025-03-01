# Investigación sobre Remote Procedure Invocation (RPC)

## 1. Explicación del patrón Remote Procedure Invocation (RPC)

**Remote Procedure Invocation (RPC)** es un protocolo que permite a un programa ejecutar procedimientos (funciones o métodos) en un sistema remoto como si se estuvieran ejecutando localmente. El proceso implica que un cliente envía una solicitud a un servidor, que ejecuta el procedimiento solicitado y devuelve el resultado al cliente. La idea principal es ocultar la complejidad de la comunicación en red, permitiendo a los desarrolladores centrarse en la lógica de la aplicación.

### Características del RPC:
- **Transparente**: El cliente no necesita saber que el procedimiento se está ejecutando en un servidor remoto; se invoca de la misma manera que se haría localmente.
- **Interoperabilidad**: RPC puede funcionar entre diferentes plataformas y lenguajes de programación, aunque los detalles dependen de la implementación.
- **Sincronía**: Generalmente, las invocaciones RPC son síncronas, lo que significa que el cliente espera la respuesta del servidor antes de continuar.

## 2. Comparación con REST y gRPC

### REST (Representational State Transfer):
- **Modelo**: Basado en recursos y utiliza HTTP como protocolo de comunicación.
- **Formato de datos**: Comúnmente utiliza JSON o XML.
- **Estado**: Sin estado (stateless), lo que significa que cada solicitud del cliente al servidor contiene toda la información necesaria para entender y procesar la solicitud.
- **Uso**: Mejor para aplicaciones web, servicios públicos y donde la interoperabilidad es clave.

### gRPC:
- **Modelo**: Basado en RPC, pero utiliza HTTP/2 como transporte y Protocol Buffers como formato de serialización.
- **Características**: Soporta múltiples tipos de comunicación (unidireccional, bidireccional), streaming y es más eficiente en términos de rendimiento y tamaño de datos.
- **Uso**: Ideal para microservicios y sistemas distribuidos que requieren alta eficiencia y rendimiento.

## 3. Ventajas y desventajas del uso de RPC en sistemas distribuidos

### Ventajas:
- **Simplicidad**: La programación es más sencilla ya que se puede invocar métodos remotos de forma directa.
- **Transparencia**: Los desarrolladores pueden operar con procedimientos remotos sin preocuparse por los detalles de la red.
- **Interoperabilidad**: Puede facilitar la comunicación entre diferentes lenguajes y plataformas, especialmente cuando se utilizan herramientas y bibliotecas adecuadas.

### Desventajas:
- **Acoplamiento**: A menudo, los sistemas RPC están más acoplados que las arquitecturas basadas en REST, lo que puede dificultar la evolución de los sistemas.
- **Sincronización**: La naturaleza síncrona puede llevar a bloqueos y problemas de latencia, especialmente en redes lentas o poco confiables.
- **Errores de red**: La gestión de errores y la recuperación de fallos pueden ser más complejas en RPC, ya que las llamadas remotas pueden fallar debido a problemas de red.

## 4. Ejemplo de aplicaciones empresariales donde se recomienda su uso

- **Sistemas de gestión empresarial (ERP)**: Los sistemas ERP a menudo requieren la integración de múltiples módulos y servicios, donde RPC puede facilitar la comunicación entre ellos.
  
- **Servicios de backend para aplicaciones móviles**: Un backend de servicio que maneja múltiples solicitudes de diferentes clientes puede beneficiarse de la simplicidad y eficiencia de RPC.

- **Sistemas de procesamiento de datos**: En aplicaciones donde se requiere un procesamiento intensivo de datos y la comunicación entre diferentes componentes, RPC puede facilitar la invocación de funciones en sistemas distribuidos.

- **Microservicios**: En arquitecturas de microservicios, RPC puede ser utilizado para la comunicación entre servicios que necesitan invocar funciones de otros servicios de manera eficiente.

---

# Integración de gRPC en Aplicaciones Spring Boot

Este documento describe el proceso de integración de gRPC en aplicaciones Spring Boot, incluyendo la configuración de dependencias, la creación de archivos de definición de servicio, y más.

## 1. Agregar Dependencias

Se agregan las dependencias que nos ayudan con la integración de gRPC en aplicaciones Spring Boot, permitir manejar conexiones, protocolos y el transporte de datos. Adicionalmente, se agrega el controlador JDBC para PostgreSQL.

```groovy
implementation 'net.devh:grpc-spring-boot-starter:2.15.0.RELEASE'
implementation 'io.grpc:grpc-netty-shaded:1.58.0'
implementation 'io.grpc:grpc-census:1.58.0'
implementation 'org.postgresql:postgresql:42.7.2'
```

## 2. Crear el Archivo user.proto
Se crea el archivo user.proto en el que se configura el message request, el message response y el servicio que se va a ejecutar con los métodos a utilizar.

```protobuf
service UserService {
    rpc CreateUser(UserRequest) returns (UserResponse);
    rpc FindUserByUserName (UserNameRequest) returns (UserResponse);
}
```

## 3. Modificar el Archivo application.yml
Se modifica el archivo application.yml y dentro del mismo se configura la conexión a la base de datos y el puerto en el que va a escuchar el servidor gRPC.

```yml
grpc:
  server:
    port: 9091
```

## 4. Crear la Entidad AppUser
Se crea la entidad AppUser para realizar la persistencia de la información que se envíe desde el cliente, manejando los siguientes datos:

```java
private int id;
private String name;
private String lastName;
private String email;
private String userName;
private String password;
private LocalDateTime createdAt;
private LocalDateTime updatedAt;
private LocalDateTime deleteAt;
```

## 5. Crear la Interfaz UserRepository
Se crea la interfaz UserRepository, en la que JPA ya nos ayuda con los métodos básicos para persistir en la base de datos, y también se pueden crear métodos personalizados, como por ejemplo el de búsqueda por nombre de usuario.

```java
public interface UserRepository extends JpaRepository<AppUser, Long> {
    Optional<AppUser> findByUserName(String userName);
}
```

## 6. Configuración del Servidor gRPC
Se realiza la configuración del servidor gRPC donde se usa la anotación @GrpcService para que Spring Boot reconozca la clase como un componente de gRPC y escuche las solicitudes entrantes en el puerto que se especificó en el application.yml. Al extender de UserServiceGrpc.UserServiceImplBase, se indica que es una implementación del servicio gRPC definido en el archivo user.proto.

```java
@GrpcService
public class GrpcServer extends UserServiceGrpc.UserServiceImplBase {
    // Implementación de métodos aquí
}
```

## 7. Crear la Imagen del Proyecto gRPC
Para crear la imagen del proyecto gRPC, se debe ejecutar a la altura del Dockerfile el siguiente comando:

```bash
docker build -t grpc:latest .
```

## 8. Realizar Pruebas
Se pueden realizar pruebas desde Postman o BloomRPC; en ambos se debe cargar el archivo user.proto para obtener los métodos que se pueden utilizar.

### Método CreateUser

```json
{
  "name": "Lenin",
  "lastName": "Changotasig",
  "email": "lx@hotmail.com",
  "userName": "xaviz",
  "password": "ts1234"
}
```

### Método FindUserByUserName

```json
{
  "userName": "xaviz"
}
```