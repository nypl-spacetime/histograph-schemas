# JSON Schemas for NYC Space/Time Directory

This repository contains base [JSON Schemas](http://json-schema.org/) for the data in [NYC Space/Time Directory](http://spacetime.nypl.org/) datasets, and it contains a Node.js module which creates the final JSON Schemas from types and relations specified in the [NYC Space/Time Directory configuration](https://github.com/nypl-spacetime/spacetime-config).

## ETL modules

NYC Space/Time Directory datasets are created by Extract/Transform/Load (ETL) modules. Each of those Node.js modules connect to a specific NYPL data source or API, and transform the data to the NYC Space/Time Directory data model.

An NYC Space/Time Directory ETL modules consists of at least the following two files:

| File                     | Description
| :----------------------- | :--------------------------
| `<dataset>.js`           |  Node.js module which exports a `steps` array containing functions that execute a single ETL step
| `<dataset>.dataset.json` | JSON file describing the ETL module and resulting dataset; this file conforms to [`dataset.schema.json`](json-schemas/dataset.schema.json)

You can execute an ETL module with the [NYC Space/Time Directory ETL runner](https://github.com/nypl-spacetime/spacetime-etl); this tool executes all steps in sequence and produces a single dataset.

 All ETL modules used in the NYC Space/Time Directory can be found [on GitHub](https://github.com/nypl-spacetime?utf8=%E2%9C%93&q=etl-).

## Datasets

__NYC Space/Time Directory Dataset.__

A single Dataset is produced by running a ETL module, and are published in the [Data section](http://spacetime.nypl.org/#data) of the NYC Space/Time Directory homepage.

A Dataset contains of at least the following files:

| File                         | Description
| :--------------------------- | :--------------------------
| `datapackage.json`           | [Data Package](https://frictionlessdata.io/data-packages/), describing the dataset’s sources and files
| `<dataset>.objects.ndjson`   | [Newline delimited JSON](http://ndjson.org/) file with the dataset’s Objects
| `<dataset>.relations.ndjson` |  [Newline delimited JSON](http://ndjson.org/) file with the dataset’s Relations

### Objects

__NYC Space/Time Directory Object.__

JSON Schema: [`objects.schema.json`](json-schemas/objects.schema.json)

All Objects must at least contain the `id` and `type` fields. The optional `data` field contains dataset-specific Object data, which conforms to the JSON Schema in the `schema` property of the JSON dataset descriptor file (e.g. [`nyc-streets.dataset.json`](https://github.com/nypl-spacetime/etl-nyc-streets/blob/master/nyc-streets.dataset.json)).

Example:

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

__Directional relationship between two NYC Space/Time Directory Objects.__

JSON Schema: [`relations.schema.json`](json-schemas/relations.schema.json)

All Relations must contain the `from`, `to` and `type` fields. Internal Relations (within a dataset itself) are created by using the Object ID in the `from` or `to` field; to link an Object from one dataset to an Object from another dataset, prepend the ID of the Object in the other dataset with its dataset ID.

Example:

```json
{
  "from": "1157-west-137th-street",
  "to": "mapwarper/layer-1157",
  "type": "st:in"
}
```

## Usage & Installation

### From Node.js

First, install spacetime-schemas:

    npm install -g nypl-spacetime/spacetime-schemas

Then, you can access the JSON Schemas as follows:

```js
const schemas = require('spacetime-schemas')

// JSON schema for Objects
console.log(schemas.objects)

// JSON schema for Relations
console.log(schemas.relations)

// JSON schema for Dataset
console.log(schemas.dataset)
```

### From the command line

First, install spacetime-schemas:

    npm install -g nypl-spacetime/spacetime-schemas

Running the modules will print all the JSON Schemas in your terminal:

    spacetime-schemas

## See Also

- [NYC Space/Time Directory datasets](http://spacetime.nypl.org/#data)
- [Architecture diagram](http://spacetime.nypl.org/architecture) or NYC Space/Time Directory
- [spacetime-etl](https://github.com/nypl-spacetime/spacetime-etl), ETL module runner
- [spacetime-data](https://github.com/nypl-spacetime/spacetime-data), useful tools and resources for working with those datasets
- [spacetime-cli](https://github.com/nypl-spacetime/spacetime-cli), command-line interface tools
- [Data Packages](http://frictionlessdata.io/data-packages/)
- [JSON Schema](http://json-schema.org/)
