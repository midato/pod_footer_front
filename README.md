# Coinpro: Portal Divisas (FOOTER)

Micro frontend que controla el despliegue de los demás módulos Micro frontend

## Node version
La versión necesaria para éste proyecto es: 
```bash
v14.xx.x
```

## Setup
Para instalar las dependencias del proyecto corra el siguiente comando.

```bash
yarn
```

Cree un archivo llamado .env.example con las variables de entorno en la raíz del proyecto 

Para levantar el proyecto corra el siguiente comando

```bash
yarn start
```
Abrir [http://localhost:4000](http://localhost:4000) para verlo en el navegador.


## Funcionalidades del proyecto

- Onboarding: El usuario debe existir como socio del grupo, debe contar con número de empleado y acceso al portal socio. Le ingreso se realizará a través del SSO OKTA.

- Catálogos: El usuario debe ingresar la información de los catálogos Monedas, Canales, Productos, Proveedores y Operación Contable.

- Configuración: El usuario puede diseñar un reporte con columnas específicas e incluso con gestión mínima de fórmula aritmética.


## Generar Distribuciones para Despliegue en Servidor Remoto ##
Debe tener las variables correspondientes al entorno a desplegar. Por ejemplo: archivo .env.dev o .env.qa en la raíz del proyecto segun sea el caso, luego ejecutar el siguiente comando en consola.

Para un ambiente DEV:
```sh
npm run build:dev
```
Para un ambiente QA:
```sh
npm run build:qa
```

## Token para desarrollo ##
Para el desarrollo local, se necesita refrescar manualmente un token de autorizacion. Este token tambien se utiliza en el entorno de DEV. En entornos superiores (QA, PROD) no es necesario este token, se sustituye por uno que se genera automaticamente por el proxy. Consultar al TL la URL necesaria para obtener a este token.


## Ejecutar los testing ##
TODO: Describir el proceso de testing......

Ejecución:

Paso 1:
```sh
yarn test (Devuelve Error. Se debe ejecutar nuevamente)
```
Paso 2:
```sh
yarn test (Devuelve Éxito)
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
