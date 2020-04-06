const express = require('express');
const Product = require('./controller/Product');


const route = express.Router();
    
    route.get('/product', Product.index);    
    route.get('/product/:id', Product.detail);


    route.post('/create', Product.create);
    route.put('/product/:id', Product.update);

    route.delete('/product/:id', Product.delete);
    

module.exports = route;