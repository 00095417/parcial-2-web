var express = require('express');
var bestiarioController = express.Router();

bestiarioController.get('/',(req,res)=>{
    res.send('estoy en el get de un usuario');
});
bestiarioController.get('/:id');
bestiarioController.post('/');
bestiarioController.put('/:id');
bestiarioController.delete('/:id');