const express = require("express")
const { loginUser } = require("../controllers/login.controller")
const router = express.Router()

router.get('/login', loginUser)

module.exports = router