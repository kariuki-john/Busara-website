const express = require("express")
const { getApplications } = require("../controllers/applications.controller")
const router = express.Router()

router.get('/getApplications',getApplications)

module.exports = router