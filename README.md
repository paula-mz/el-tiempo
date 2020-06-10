# El tiempo en Barcelona

SPA en la que se puede consultar la temperatura actual y la probabilidad de precipitación de cualquier municipio de la provincia de Barcelona.


### Proceso

* Creación rápida de wireframes y logotipo de la app en Figma:
https://www.figma.com/file/LFKmmDpZPOZziHyOVmpyZE/Weather.BCN?node-id=0%3A1

* Organizacion de carpetas de la app.

* Programación.



### Tecnología

* Para esta SPA se ha creado una aplicación con React (hooks, redux, axios, saga)
* Se ha utilizado el Framework Elastic UI para su diseño de componentes (Search bar y Cards)
* La información de las tarjetas y la lista de municipios se extraen mediante una llamada a la API de el-tiempo.net

### Instalación

Para instalar la app en la terminal:

```
npm install
```

Y para correr la aplicación en el navegador:

```
npm start
```

### Dificultades

* Adaptar mejor el diseño con el framework EUI (descubrir cómo customizar colores, formas, etc)
* Decodificar carácteres del API/JSON llamado mediante Axios (se ha intentado con: UTF8_encode(), iconv-lite, encodeURIComponent(), etc)