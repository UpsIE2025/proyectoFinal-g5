#imagen de node
FROM node:latest

#crear un espacio de trabajo
WORKDIR /graphql-server/src/app

#copiar los archivos package
COPY package*.json ./

#instalar dependencias
RUN npm install

#copiasr el codigo fuente
COPY . .

#compilar el proyecto
RUN npm run build

#exponer el puerto en el que se va a correr
EXPOSE 3000

#comando para iniciar las app
CMD [ "npm","run", "start:prod"]