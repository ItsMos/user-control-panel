const db = require("../db")

let auth = require('./auth')
let router = require('express').Router()

router.get('/getcharacters', auth, async (req, res)=> {
  let { id } = req.userData
  let characters = await db.characters.find({ownerId: id})
  res.json({characters})
})

module.exports = router