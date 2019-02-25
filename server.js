const express = require ('express');
const cors = require ('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const createRouter = require('./helpers/createRouter.js');

app.use(cors());

app.get('/', (req, res) => {});

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('monopoly')
    const propertyCollection = db.collection('properties')
    const propertyRouter = createRouter(propertyCollection)
    app.use('/api/properties', propertyRouter)
  })
  .catch(console.err)
  app.listen(5000, function() {
    console.log(`Listening on port ${this.address().port}`)
  })
