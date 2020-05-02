const express = require("express")
const router = express.Router()
const userController = require('./controllers/user')
const characters = require('./controllers/character')
const auth = require('./auth')

router.post('/validateToken', userController.validateToken)

router.post('/login', userController.loginUser)

router.post('/register', userController.registerNewUser)

router.get('/verify/:id', userController.verifyEmail)

router.get('/getcharacters', auth, characters.getCharacters)

router.get('/stats', auth, userController.getStats)

module.exports = router