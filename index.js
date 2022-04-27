const express = require('express');
const cors = require('cors');
const session = require('express-session')
const port = 5555;
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const addRoutes = require('./route')
const app = express();
const store = new session.MemoryStore();
app.use(session({secret: "some secret", cookie: {maxAge: 300000},saveUninitialized : false, store, resave: false}))
const options = {
    extensions : ['png', 'jpg', 'jpeg']
}
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public/imgs', options));
app.use(cors({ origin: "http://localhost:3000" }));
addRoutes(app);



app.listen(port, () => {
    console.log(`Running on port: ${port}`)
});
