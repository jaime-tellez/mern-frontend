## Curso de STACK MERN - Frontend

Siguiendo el tutorial:
[MERN STACK & Typescript - Frontend](https://www.youtube.com/watch?v=wOLo-B7mrZM&t=95s).

# Create React App

Proyecto creado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts

Ejecutar el siguiente comando para iniciar el front:

### `npm start`

Por defecto corre en el puerto 3000.
Pero se puede crear un archivo `.env` en la raíz del proyecto y agregar la propiedad PORT para cambiarlo:
`PORT=8000`

Abrir en le navegador [http://localhost:3000](http://localhost:3000)

Ejecutar el siguiente comando para pruebas:

### `npm test`

Ejecutar el siguiente comando para compilar el código:

### `npm run build`

## Despliegue en Vercel https://vercel.com

1. Agregar el repositorio de GitHub y darle permisos a Vercel sobre el repositorio.
2. El despliegue lo realiza automáticamente Vercel.
3. Ingresar al sitio web dado por Vercel.. https://mern-frontend.vercel.app/

## Variables de entorno

1. Para configurar las variables de entorno en React, https://create-react-app.dev/docs/adding-custom-environment-variables/
2. Los nombres siempre deben empezar por `REACT_PP_`
3. Dentro de Vercel, ingresar al proyecto y en la pestaña de `settings` ir a la opción `Environment Variables`
