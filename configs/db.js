const mongoose = require('mongoose');
const {mongodb} = require('./key');

mongoose.connect(mongodb.db).then(db=>console.log('connection success')).catch(err=>console.error(err));