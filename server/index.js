const express = require('express');
const bodyParser = require('body-parser');
const router = require("./config/router");
const guard = require("./config/guard");
const { PORT, NODE_ENV } = require('./config/server');
const cors = require('cors');
const app = express();

const knexFile = require('./knexfile')[NODE_ENV]
const knex = require('knex')(knexFile)

const {UserService} = require('./services');

let userService = new UserService(knex);

userService.create({gmail: "test@gmail.com", first_name: "test", last_name: "last test"})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use('/user', guard, router);

// app.use("/user",);

app.get('/', (req, res) => {
    res.send('Main page');
})
app.listen(PORT, () => console.log('Listening on :', PORT));

module.exports.app = app;