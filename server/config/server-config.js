const port = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development'
require('dotenv').config();

module.export = {port: port, NODE_ENV:NODE_ENV}