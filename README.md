# Requisitos
1. Tener instalado node: https://nodejs.org/es/
2. Tener instalado postgreSQL: https://www.postgresql.org/download/
3. Tener instalado docker: https://docs.docker.com/get-docker/

# Instrucciones

1. Instalar las dependencias con ```npm install```.
2. Asegurate de establecer los datos correspondientes a tu informacion de PSQL en el archivo ```.env```.
3. En primera instancia tener el valor ````PGHOST=localhost``` en el archivo ```.env``` y crear la base de datos en psql correspondiente.
4. Ejecutar el siguiente comando ```npm run migrate``` para crear la base de datos.
5. En el archivo ```.env``` reemplaza el valor de ```PGHOST=localhost``` por ```PGHOST=host.docker.internal```.
6. Luego que esto ya está definido, debes asegurarte de estar dentro de la carpeta de tu proyecto y debes escribir el siguiente comando: ```docker build . -t desplegando-app-express-en-docker```
7. Luego de realizar este comando, comenzarás a ver mensajes de progreso, esto demorará segun tu conexion a internet.
8. Finalmente ejecuta el comando: ```docker run -d -p 4000:4000 desplegando-app-express-en-docker```
9. Despues de realizar este comando dirigirse a la a seccion containers de tu app Docker Desktop y verificar que la imagen este corriendo efectivamente.
Nota: Si no esta correctiendo correctamente, debes arreglar tu codigo y volver a ejecutar los ultimos 2 comandos.
10. A traves de tu browser dirigirse a la direccion "localhost:4000" y comprobar el funcionamiento de tu aplicacion.
