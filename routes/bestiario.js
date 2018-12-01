var express = require('express');
var bestiarioController = require('../controllers/bestiarioController');
var bestiario = express.Router();

//metodo get para más de un usuario
bestiario.get('/',bestiarioController.get);
//metodo get para un usario
bestiario.get('/:id',bestiarioController.get);
