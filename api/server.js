// Importa el módulo express para crear un servidor web
const express = require('express');

// Importa el módulo cors para habilitar el intercambio de recursos entre diferentes dominios
const cors = require('cors');

// Importa el módulo dotenv para cargar variables de entorno desde un archivo .env
const dotenv = require('dotenv');


// Carga las variables de entorno definidas en el archivo .env
dotenv.config();


// Crea una instancia de la aplicación express
const app = express();


// Habilita CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Permite que la aplicación pueda interpretar solicitudes con formato JSON
app.use(express.json());


// Define el puerto en el que el servidor escuchará las solicitudes, usando la variable de entorno PORT o 5000 por defecto
const PORT = process.env.PORT || 5000;


// Inicia el servidor y hace que escuche en el puerto definido
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
