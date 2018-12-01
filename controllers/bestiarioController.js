var express = require('express');
var bestiarioController = express.Router();

bestiarioController.get('/');
bestiarioController.get('/:id');
bestiarioController.post('/');
bestiarioController.put('/:id');
bestiarioController.delete('/:id');