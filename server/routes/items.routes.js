const express = require('express');
const routes = express.Router();

const itemsController = require('../controllers/items.controller');

routes.get('/items', itemsController.getBySearch);

module.exports = routes;