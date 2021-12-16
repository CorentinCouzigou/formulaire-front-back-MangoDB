// BACK DE NOTRE APPLICATION - SERVER
// express framework node , qui permet de créer le serveur
const express = require('express');
// défini le serveur de notre application
const app = express();
// utilisation des cors pour la gestion des autorisations d'entrée
const cors = require('cors');
// dotenv gestion variables d'environnements
const dotenv = require('dotenv');
dotenv.config();
// port de lecture du serveur
const PORT = 3001;
const client = require('./database');
const mainController = require('./mainController');
const mongoDBClient = require('./database')

app.use(cors());
// format du type de données utilisées
app.use(express.json());
// parser qui permet d'accéder à req.body
app.use(express.urlencoded({ extended: true }));

// route pour recevoir les données
app.get('/', mainController.homePage);

//  route pour post des nouveaux utilisateurs
app.post('/', mainController.addNewUser);


// ouverture du serveur sur le bon port
app.listen(PORT, () => {
    console.log(`Serveur connecté sur le port http://localhost:${PORT}/`);
    mongoDBClient.initialize();
});