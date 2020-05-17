const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

/** @type {mongodb.Db} Main connection */
let db = {}

async function prepareCollections(database) {
  let collections = await database.collections()
  collections.forEach(async col => {
    col.popArray = async function (query, arr, pos) {
      await col.updateOne(query, {
        $unset: {
          [`${arr}.${pos}`]: 1
        }
      })
      return await col.updateOne(query, {
        $pull: {
          [arr]: null
        }
      })
    }

    db[col.collectionName] = col
  })
}

let client = new MongoClient('mongodb://localhost:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
client.connect(async err => {
  if (err) {
    console.error('DB connection error: ', err.message)
    return;
  }
  console.log('Conneceted to DB')
  
  let db = client.db('pacificrp')
  prepareCollections(db)
})

module.exports = {db, ObjectID}