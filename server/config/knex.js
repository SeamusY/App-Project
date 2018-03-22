const knexFile = require('./knexfile')[NODE_ENV]
const knex = require('knex')(knexFile)


module.export = {knexFile:knexFile, knex:knex}