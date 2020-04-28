const db = require("../database")

exports.createCharacter = async (req, res)=> {
  let { username, quizPassed } = req.userData
  if (quizPassed === false) return res.end()
  let user = await db.fetchData('username', username, 'accounts')
  let char = req.body.character
  if (!char || !char.name || !char.age || !char.gender)
    return res.sendStatus(403)

  console.log(user.characters.length)
  await db.db.collection('accounts').updateOne(
    {username},
    {
      $push: {
        characters: char
      }
    }
  )
  res.end()
}

exports.getCharacters = async (req, res)=> {
  let { username } = req.userData
  let user = await db.fetchData('username', username, 'accounts')
  res.json({characters: user.characters})
}