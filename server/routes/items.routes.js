const express = require('express');
const routes = express.Router();

const itemsController = require('../controllers/items.controller');

routes.get('/items', itemsController.getBySearch);

routes.get('/items/:id', itemsController.getItemById);



module.exports = routes;