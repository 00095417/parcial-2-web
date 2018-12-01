var express = require('express');
var bestiarioController = require('../controllers/bestiarioController');
var bestiario = express.Router();

//metodo get para más de un elemento
bestiario.get('/',bestiarioController.get);
//metodo get para un elemento
bestiario.get('/:id',bestiarioController.get);
//metodo para agregar un elemento
bestiario.post('/',bestiarioController.post);
//metodo para actualizar un elemento
bestiario.put('/:id',bestiarioController.put);
//metodo para eliminar un elemento
bestiario.delete('/:id'.bestiarioController.delete);

module.exports = bestiario;
