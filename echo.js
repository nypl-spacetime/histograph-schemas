var schemas = require('./index')

console.log('JSON schemas:\n============================================================================\n')
console.log(JSON.stringify(schemas, null, 2))

console.log('\nOntology:\n============================================================================\n')
schemas.ontology((err, results) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log(results)
  }
})
