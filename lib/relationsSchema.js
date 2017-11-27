const baseSchema = require('../json-schemas/relations.schema.json')

module.exports = function (config) {
  // Load relations from configuration
  baseSchema.properties.type.enum = config.schemas.relations
  return baseSchema
}
