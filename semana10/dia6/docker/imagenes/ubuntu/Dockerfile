#imagen base
FROM ubuntu

#ejecutar comandos al crear la imagen
RUN apt-get update
RUN apt-get install python3 python3-dev -y

#definir un directorio de trabajo
WORKDIR /app

#copiar archivos al contenedor
COPY index.html .

#ejecutar comandos en el contenedor
CMD python3 -m http.server 4000

#exponer puertos
EXPOSE 4000

