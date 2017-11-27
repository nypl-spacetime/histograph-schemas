#!/usr/bin/env node

const path = require('path')
const config = require('spacetime-config')

const objectsSchema = require('./lib/objectsSchema')
const relationsSchema = require('./lib/relationsSchema')

const schemas = {
  dataset: require(path.join(__dirname, 'json-schemas', 'dataset.schema.json')),
  objects: objectsSchema(config),
  relations: relationsSchema(config)
}

if (require.main === module) {
  Object.keys(schemas).forEach((schema) => {
    console.log('==================================================================')
    console.log(`${schema}:`)
    console.log('==================================================================')
    console.log('')
    console.log(JSON.stringify(schemas[schema], null, 2))
  })
}

module.exports = schemas
