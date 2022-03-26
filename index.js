

/*
GET /users -> list of all users 
GET /users/:id -> get one user by specifying a parameter (id)
GET /products -> list of all products
GET /products/:id -> get one product by specifying a parameter (id)
GET /services/ -> list of all services
GET /services/:id -> get one service by specifying a paramater (id)
GET /categories/ -> list of all services
GET /categories/:id -> get one service by specifying a paramater (id)
GET /admin/ -> list of all admins
POST /addUser -> adds a user from a recieved JSON object
POST /addProduct -> adds a product from a recieved JSON object

DELETE /delUser -> deletes 1 user by specifying login name
DELETE /delUser/:id -> deletes 1 user by specifying id

*/


const dbData = require('./dbModules/queries');
const express = require('express');
const cors = require('cors');
const port = 5555;



const app = express();


app.use(express.json())
app.use(cors({ origin: "http://localhost:3000" }));

app.get('/admin', (req, res) => {
    dbData.adminList((err, data) => {
        if (err) throw err;
        console.log("Új kérés a /admin felé..")
        res.json(data);
    })
})

app.get('/admin/:id', (req, res) => {
    dbData.adminList((err, data) => {
        if (err) throw err;

        res.json(data);
    })
})

app.get('/users', (req, res) => {
    dbData.userList((err, data) => {
        if (err) throw err;
        console.log('Új kérés a /users felé')
        res.json(data);
    })
})

app.get('/users/:id', (req, res) => {
    dbData.user(req.params.id, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
})
app.post('/addUser', (req, res) => {
    dbData.addUser(req.body, (err, data) => {
        if (err) throw err;
        res.json({ "status": "ok" });
    })
})

app.delete('/delUser', (req, res) => {
    dbData.delUserName(req.body.login, (err, data) => {
        if (err) throw err;
        res.json({ "deleted": "ok" })
    })
})

app.delete('/delUser/:id', (req, res) => {
    dbData.delUser(req.params.id, (err, data) => {
        if (err) throw err;
        res.json({ "deleted": "ok" })
    })
})
app.get('/products', (req, res) => {
    dbData.productList((err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

app.get('/products/:id', (req, res) => {
    dbData.product(req.params.id, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

app.post("/addProduct", (req, res) => {
    dbData.addProduct(req.body, (err, data) => {
        if (err) throw err;
        res.json({ "added": "ok" });
    })
})

app.get('/services', (req, res) => {
    dbData.serviceList((err, data) => {
        if (err) throw err;
        res.json(data);
    })
})
app.get('/services/:id', (req, res) => {
    dbData.service(req.params.id, (err, data) => {
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
    dbData.category(req.params.id, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

app.listen(port, () => {
    console.log(`Running on port: ${port}`)
});