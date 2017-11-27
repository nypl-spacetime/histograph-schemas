const fuzzyDates = require('fuzzy-dates')
const baseSchema = require('../json-schemas/objects.schema.json')

module.exports = function (config) {
  // Load Fuzzy Date JSON schema
  Object.keys(fuzzyDates.schema.definitions).forEach((fdDef) => {
    baseSchema.definitions[fdDef] = fuzzyDates.schema.definitions[fdDef]
  })
  baseSchema.definitions.fuzzyDate = {
    oneOf: fuzzyDates.schema.oneOf
  }

  // Load types from Histograph configuration
  baseSchema.properties.type.enum = config.schemas.types
  return baseSchema
}
