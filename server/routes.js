const express = require("express")
const router = express.Router()
const userController = require('./controllers/user')
const characters = require('./controllers/character')
const auth = require('./auth')

router.post('/login', userController.loginUser)

router.post('/register', userController.registerNewUser)

router.get('/verify/:id', userController.verifyEmail)

router.get('/getcharacters', auth, characters.getCharacters)

// router.post('/character', auth, characters.createCharacter)

module.exports = router