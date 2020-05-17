const express = require("express")
const router = express.Router()

router.use(require('./user'))
router.use(require('./character'))
router.use(require('./quiz'))
router.use(require('./admin'))

module.exports = router