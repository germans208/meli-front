require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = require('./server/routes/items.routes');

app.use('/api', router);

app.listen(port, () => console.log(`Servidor listo y corriendo en el puerto ${port}`));