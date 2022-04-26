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
POST /users-> adds a user from a recieved JSON object
POST /addProduct -> adds a product from a recieved JSON object

DELETE /delUser -> deletes 1 user by specifying login name from the request body
DELETE /delUser/:id -> deletes 1 user by specifying id

*/
const path = require('path');
function addRoutes(app){

    app.get('/admin', admins());
    app.get('/admin/:id', admin()); // admin only
    app.get('/users',  userList()) ;
    app.get('/users/:id', user());
    app.put('/users', user());
    app.delete('/user', user());
    app.delete('/user/:id', user());
    
    app.post('/login', login());
    
/*     app.get('/vat', (req, res) => {
        dbData.vat((err, data) => {
            if (err) throw err;
            res.json(data);
        })
    }) */

    app.get('/search', search());
    app.get('/search/:key', search());
    app.get('/products', products());
    app.get('/products/:key', products());
    app.get('/products/:id', product());
    app.put("/product", addProduct()); // admin only
    app.get('/services', services());
    app.get('/services/:id', services());
    app.get('/categories', categories());
    app.get('/categories/:id', categories());
}



const {userList,user,products,product,search,admins,services,categories} = require('../middlewares/userMWs/userMW');
const {addProduct,admin} = require('../middlewares/adminMWs/adminMW');
const {login} = require('../middlewares/userMWs/userAuth');
module.exports = addRoutes;