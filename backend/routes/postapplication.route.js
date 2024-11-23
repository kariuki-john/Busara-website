const express = require("express")
const  {sendApplication } = require("../controllers/applications.controller")
const router = express.Router()

router.post('/sendApplication',sendApplication)

module.exports = router