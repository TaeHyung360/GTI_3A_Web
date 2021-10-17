# GTI_3A_Web

_En este repositorio se encuentra el reposotorio de la parte web del servidor, toma los datos enviados por el programa android, los guarda en la base de datos y los muestra en una web_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu ordenador para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas._

_Hay que instalar [XAMPP](https://www.apachefriends.org/es/index.html)._

_Y tambien hay que añadir esta extension a google chrome [ARC cookie exchange](https://chrome.google.com/webstore/detail/arc-cookie-exchange/apcedakaoficjlofohhcmkkljehnmebp)._

### Instalación 🔧

_Primero vas a tener que descargar el programa [XAMPP](https://www.apachefriends.org/es/index.html) una vez instalado iniciamos los servicios Apache y MySQL, entras en admin creas una base de datos con el nombre gti_3a_web.sql posteriormnte importas el archivo que se encuentra en el repositorio en la carpteta src/bd/gti_3a_web.sql._

_Ahora desde la consola vas a la siguiente ubicación src/servidorREST e instalas todas las librerías que se encuentran en el  package.json, con el comando npm install -NOMBRE DEL PAQUETE-._

_Repetimos el anterior proceso pero en la carpeta src/logica._

_Abrimos un terminal nuevo y ejecutamos npm run servidor._

_En el archivo .env alojado en  la ubicación src/servidorREST puedes modificar los siguientes parámetros:._

```
PORT=
DATABASE=
DATABASE_HOST=l
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_PORT=
DATABASE_DIALECT=
```
## Ejecutando las pruebas ⚙️

_Para ejecutar los test automáticos tienes que ir a src/logica con la consola y ejecutar._
```
npm test
```
_Y con ARC cookie exchange puedes hacer tus propias peticiones a la base de datos._

## Construido con 🛠️

__

* [XAMPP](https://www.apachefriends.org/es/index.html)
* [POSTMAN](https://www.postman.com/downloads/)
* [ARC cookie exchange](https://chrome.google.com/webstore/detail/arc-cookie-exchange/apcedakaoficjlofohhcmkkljehnmebp)
---
