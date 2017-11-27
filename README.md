## Histograph Schemas

Creates JSON schemas from types and relations in [NYC Space/Time Directory configuration file](https://github.com/nypl-spacetime/spacetime-config/blob/master/spacetime.default.yml).

```js
const schemas = require('spacetime-schemas')

// JSON schema for Objects
console.log(schemas.objects)

// JSON schema for Relations
console.log(schemas.relations)

// JSON schema for Dataset
console.log(schemas.dataset)
```

### Objects

All Objects must have an `id` and a type, and optionally a GeoJSON geometry, and data and date fields. Example:

```json
{
  "id": "1157-west-138th-street",
  "name": "West 138th Street",
  "type": "st:Street",
  "validSince": 1893,
  "validUntil": 1893,
  "data": {
    "layerId": "1157",
    "borough": "Manhattan",
    "originalName": "West 138th Street"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        -73.95368860040216,
        40.822042081347085
      ],
      [
        -73.95641790185945,
        40.82318935408355
      ]
    ]
  }
}
```

### Relations

All Relations must have `from`, `to` and `type` fields. Example:

```json
{
  "from": "1157-west-137th-street",
  "to": "mapwarper/layer-1157",
  "type": "st:in"
}
```
