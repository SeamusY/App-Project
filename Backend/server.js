const express = require('express');
const bodyParser = require('body-parser');
const router = require("./config/router");
const guard = require("./config/guard");
const { PORT, NODE_ENV } = require('./config/server-config');
const cors = require('cors');
const app = express();
const photoRouter = require('./routers/photoRouter');
const knexFile = require('./knexfile')[NODE_ENV]
const knex = require('knex')(knexFile)

//serve the images
app.use(express.static('uploads'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use('/user', guard, router);

// app.use("/user",);

app.use('/upload', photoRouter);
app.get('/', (req, res) => {
    res.send('working');
})
app.listen(PORT, () => console.log('Listening on :', PORT));

