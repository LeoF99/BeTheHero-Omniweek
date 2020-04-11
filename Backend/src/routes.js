const express = require('express');

const ongsController = require('./controllers/OngsController');
const incidendsController = require('./controllers/IncidentsController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.post('/ongs', ongsController.create);
routes.get('/ongs', ongsController.index);

routes.get('/profile', profileController.index);

routes.post('/incidents', incidendsController.create);
routes.get('/incidents', incidendsController.index);
routes.delete('/incidents/:id', incidendsController.delete);

module.exports = routes;