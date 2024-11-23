const express = require("express")
const { updateStatus } = require("../controllers/applications.controller")
const router = express.Router()

router.patch('/updateStatus/:id',updateStatus)

module.exports = router