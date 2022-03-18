/*
GET /users -> list of all users 
GET /users/:id -> get one user by specifying a parameter (id)
GET /products -> list of all products
GET /products/:id -> get one product by specifying a parameter (id)
GET
GET
*/

const dbData = require('./dbModules/queries');
const express = require('express');
const cors = require('cors');
const port = 5555;



const app = express();


app.use(express.json())
app.use(cors({ origin: "http://localhost:3000" }));

app.get('/users', (req, res) => {
     dbData.userList((err, data) => {
        if (err) throw err;
        
        res.json(data);
    })
})

app.get('/users/:id', (req, res) => {
    dbData.user(req.params.id,(err, data) => {
       if (err) throw err;
       res.json(data);
   })
})

app.get('/products', (req, res) => {
    dbData.productList((err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

app.get('/products/:id', (req, res) => {
    dbData.product(req.params.id,(err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

app.get('/services', (req, res) => {
    dbData.serviceList((err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

app.get('/services/:id', (req, res) => {
    dbData.service(req.params.id,(err, data) => {
        if (err) throw err;
        res.json(data);
    })
})


app.get('/categories', (req, res) => {
    dbData.categoryList((err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

app.get('/categories/:id', (req, res) => {
    dbData.category(req.params.id,(err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

app.listen(port);