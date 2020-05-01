const {db, ObjectID} = require("../db")

exports.getCharacters = async (req, res)=> {
  let { id } = req.userData
  let characters = await db.characters.find({ownerId: new ObjectID(id)}).toArray()
  res.json({characters})
}