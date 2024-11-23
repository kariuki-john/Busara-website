const express = require("express")
const { deleteApplication } = require("../controllers/applications.controller")
const router = express.Router()

router.delete('/deleteApplications/:id',deleteApplication)

module.exports = router