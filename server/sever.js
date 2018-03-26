const express = require('express');
const bodyParser = require('body-parser');
const router = require("./config/router");
const guard = require("./config/guard");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/user', guard, router);



app.listen(PORT, () => console.log('Listening on :', PORT));











