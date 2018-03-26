const knexFile = require('./knexfile')[NODE_ENV]
const knex = require('knex')(knexFile)


module.exports = {knexFile:knexFile, knex:knex}