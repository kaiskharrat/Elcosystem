const express = require('express');
const path = require('path');

const app = express();

// Servir les fichiers statiques de Angular depuis le dossier dist
app.use(express.static(path.join(__dirname, 'dist/elcosystem')));

// Rediriger toutes les autres routes vers l'index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/elcosystem/index.html'));
});

// Démarrer le serveur sur le port Heroku ou le port 8080 en local
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
