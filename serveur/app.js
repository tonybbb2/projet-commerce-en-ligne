const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const PORT = process.env.PORT || 3000;

// Packages nécessaires pour la documentation Swagger
const YAML = require('yamljs')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = YAML.load('documentation.yaml')

// Importation des fichiers de routes
const login = require('./routes/login.js');

// Middlewares nécessaires à l'application
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname))

// Routes
app.use('/login', login);

// Route pour la documentation
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT, () => {
    console.log(`Mon application roule sur http://localhost:${PORT}`);
});
