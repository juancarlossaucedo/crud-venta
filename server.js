const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;

app.use(cors()); // Habilitar CORS para permitir solicitudes desde cualquier origen

// Inicializamos el middleware para parsear JSON en las solicitudes
app.use(express.json());

// Lista de clientes de ejemplo (simulado)
const clientes = [
    { nombres: 'Juan', apellidos: 'Saucedo' },
    { nombres: 'Carlos', apellidos: 'Becerra' },
];

// Ruta para listar clientes
app.get('/api/clientes/listar', (req, res) => {
    // En una aplicación real, aquí recuperarías la lista de clientes de tu base de datos o fuente de datos
    res.json(clientes);
});

// Ruta para guardar un cliente
app.post('/api/clientes/guardar', (req, res) => {
    // En una aplicación real, aquí guardarías un nuevo cliente en tu base de datos
    const nuevoCliente = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
    };
    clientes.push(nuevoCliente); // Agregar a la lista (simulado)
    res.json(nuevoCliente);
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://192.168.0.104:${port}`);
});
