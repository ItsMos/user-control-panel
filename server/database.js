const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const config = {
  db: "pacificrp"
};

let instance;

class ConnectionInfo {
  /**
   *
   * @param {MongoClient} client
   */
  constructor() {
    if (instance) {
      return instance;
    }

    if (config.user && config.pass) {
      /** @type {mongodb.MongoClient} */
      this.client = new MongoClient("mongodb://localhost:27017", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        auth: {
          user: config.user,
          password: config.pass
        }
      });
    } else {
      /** @type {mongodb.MongoClient} */
      this.client = new MongoClient("mongodb://localhost:27017", {
        useUnifiedTopology: true,
        useNewUrlParser: true
      });
    }

    this.client.connect(async err => {
      if (err) {
        console.error("DB connection error: ", err.message);
        return;
      }

      console.log("Conneceted to DB");

      /** @type {mongodb.Db} Main connection */
      this.db = this.client.db(config.db);
      // this.generateCollections();
      instance = this;
    });
  }

  generateCollections() {
    config.collections.forEach(async c => {
      await this.db.createCollection(c);
    });
    // mp.events.call('ConnectionComplete')
  }

  async find(collection, query) {
    return await this.db
      .collection(collection)
      .find(query)
      .toArray();
  }

  /**
   * @param {String} fieldName Field we want to modify.
   * @param {Any} fieldValue Field value we want to find.
   * @param {String} collection Name of the collection.
   * @returns {Any | null} A single document.
   */
  async fetchData(fieldName, fieldValue, collection) {
    if (fieldName === "_id") {
      fieldValue = new ObjectID(fieldValue);
    }

    const results = await this.db.collection(collection).findOne({
      [fieldName]: fieldValue
    });

    return results;
  }

  /**
   * @param {String} fieldName Field we want to modify.
   * @param {Any} fieldValue Field value we want to find.
   * @param {String} collection Name of the collection.
   * @returns {Array | null} An array of documents.
   */
  async fetchAllByField(fieldName, fieldValue, collection) {
    if (fieldName === "_id") {
      fieldValue = new ObjectID(fieldValue);
    }

    const results = await this.db
      .collection(collection)
      .find({
        [fieldName]: fieldValue
      })
      .toArray();

    if (results.length <= 0) {
      return null;
    }

    return results;
  }

  /**
   * Insert a document and return the ID.
   * @param {*} document
   * @param {*} collection
   * @param {Boolean} returnDocument
   * @returns {{_id, a, b, c}} Document
   */
  async insertData(document, collection, returnDocument = false) {
    const id = await (await this.db.collection(collection).insertOne(document))
      .insertedId;

    if (!returnDocument) {
      return id;
    }

    return await this.db.collection(collection).findOne({
      _id: ObjectID(id)
    });
  }

  /**
   *
   * @param {*} id
   * @param {*} partialObjectData
   * @param {*} collection
   */
  async updatePartialData(id, partialObjectData, collection) {
    await this.db.collection(collection).findOneAndUpdate(
      {
        _id: ObjectID(id)
      },
      {
        $set: { ...partialObjectData }
      }
    );
  }

  /**
   * Delete data by id.
   * @param {*} id
   * @param {*} collection
   */
  async deleteById(id, collection) {
    await this.db.collection(collection).findOneAndDelete({
      _id: ObjectID(id)
    });
  }

  async deleteField(query, field, collection) {
    if (query._id) {
      query._id = new ObjectID(query._id);
    }

    const results = await this.db.collection(collection).findOneAndUpdate(query, {
      $unset: {[field]: 1}
    })

    return results;
  }

  /**
   * Fetch all data in a collection.
   * @param {*} collection
   */
  async fetchAllData(collection) {
    return await this.db
      .collection(collection)
      .find()
      .toArray();
  }

  /**
   * Select specific fields from the collection; and return all data.
   * @param {*} collection
   * @param {*} fieldNames
   */
  async selectData(collection, fieldNames) {
    const selectData = {
      _id: 1
    };

    fieldNames.forEach(name => {
      selectData[name] = 1;
    });

    return await this.db
      .collection(collection)
      .find({})
      .project({ ...selectData })
      .toArray();
  }

  /**
   * Update partial data based on other parameters.
   * @param {*} fieldName
   * @param {*} fieldValue
   * @param {{name: 'stuyk'}} partialObjectData merely an example
   * @param {*} collection
   */
  async updateDataByFieldMatch(
    fieldName,
    fieldValue,
    partialObjectData,
    collection
  ) {
    if (fieldName === "_id") {
      fieldValue = ObjectID(fieldValue);
    }

    await this.db.collection(collection).findOneAndUpdate(
      {
        [fieldName]: fieldValue
      },
      {
        $set: { ...partialObjectData }
      }
    );
  }

  /**
   *
   * @param {*} id
   * @param {*} fieldName
   * @param {*} fieldValue
   * @param {*} collection
   */
  async replaceField(oldValue, fieldName, fieldValue, collection) {
    await this.db.collection(collection).updateMany(
      {
        [fieldName]: oldValue
      },
      {
        $set: {
          [fieldName]: fieldValue
        }
      }
    );
  }
}

module.exports = new ConnectionInfo();
