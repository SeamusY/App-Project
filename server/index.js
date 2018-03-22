require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development'

const PORT = 3000;

const knexFile = require('./knexfile')[NODE_ENV]
const knex = require('knex')(knexFile)

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hi');
})

app.listen(PORT, () => console.log('Listening on :', PORT));











