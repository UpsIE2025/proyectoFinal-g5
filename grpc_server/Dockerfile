FROM gradle:8.8.0-jdk22 AS build

COPY --chown=gradle:gradle . /home/gradle/src/grpc
WORKDIR /home/gradle/src/grpc

RUN gradle build --no-daemon --stacktrace -x test

FROM openjdk:22-jdk-slim
EXPOSE 9091
ARG JAR_FILE=build/libs/*.jar
COPY --from=build /home/gradle/src/grpc/build/libs/*.jar /home/app.jar
CMD java -server -Dserver.tomcat.threads.max=200 -Duser.country=EC -Duser.language=es -Duser.timezone=America/Guayaquil -Dspring.profiles.active=default -jar /home/app.jar