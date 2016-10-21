'use strict'

var path = require('path')
var config = require('spacetime-config')

var objectsSchema = require('./lib/objectsSchema')
var relationsSchema = require('./lib/relationsSchema')
var graphmalizerConfig = require('./lib/graphmalizerConfig')

var ontology = require('./lib/ontology')

module.exports = {
  dataset: require(path.join(__dirname, 'json-schemas', 'dataset.schema.json')),
  objects: objectsSchema(config),
  relations: relationsSchema(config),
  graphmalizer: graphmalizerConfig(config),
  ontology: ontology(config)
}
