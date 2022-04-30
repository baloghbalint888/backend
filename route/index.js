/**
 * 
 */

const multer = require('multer')
function addRoutes(app){

    const storage = multer.diskStorage({
        destination: (req,file,cb)=>{
            
            cb(null,"public/imgs")
        },
        filename: (req,file,cb)=>{

            //console.log(file)
            cb(null,file.originalname)
        }
    })
const upload = multer({
    storage: storage
})

    app.get('/admin', admins()); //
    app.get('/admin/:id', admin()); // admin only
    app.get('/users',  userList()) ; //
    app.get('/users/:id', user()); //
    app.put('/users', user());
    app.patch('/user', user());
    app.delete('/user', user());
    app.delete('/user/:id', user());
    app.post('/login', login());
    app.get('/vat', vat());
    app.get('/cart/:id', cart());
    app.post('/cart', cart());
    app.put('/cart', cart());
    app.delete('/cart', cart());
    app.get('/search', search());
    app.get('/search/:key', search());
    app.get('/products',products());
    app.get('/products/:key', products());
    app.get('/products/:id', product());
    app.delete('/product', product())
    app.put("/product", upload.single('uploaded_file'),addProduct()); // admin only
    app.patch('/product', product())
    app.get('/services', services());
    app.get('/services/:id', services());
    app.get('/categories', categories());
    app.get('/categories/:id', categories());
}



const {userList,user,products,product,search,admins,services,categories,vat,cart} = require('../middlewares/userMWs/userMW');
const {addProduct,admin} = require('../middlewares/adminMWs/adminMW');
const {login} = require('../middlewares/userMWs/userAuth');
module.exports = addRoutes;