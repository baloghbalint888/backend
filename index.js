const express = require('express');
const cors = require('cors');
const port = 5555;
const bodyParser = require('body-parser');

const app = express();
const options = {
    extensions : ['png', 'jpg', 'jpeg']
}

app.use(bodyParser.json());
app.use(express.static('public/imgs', options));
app.use(cors({ origin: "http://localhost:3000" }));
const addRoutes = require('./route')



addRoutes(app);
app.listen(port, () => {
    console.log(`Running on port: ${port}`)
});