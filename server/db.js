const fs = require('fs')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/pacificrp', {useNewUrlParser: true, useUnifiedTopology: true})
  .catch(e => console.error('DB connection error!', e.message))

mongoose.connection.on('error', e=> console.error('DB error:', e.message))

/**
 * @description Has all the models in the lib/models folder
 */
let db = {}

mongoose.connection.once('open', ()=> {
  console.log('> Connected to DB')
  // load schemas
  fs.readdirSync('./models').forEach(file => {
    let model = require('./models/'+file)
    // remvoe .js
    file = file.substr(0, file.length-3)
    db[file] = model

  })
})

module.exports = db