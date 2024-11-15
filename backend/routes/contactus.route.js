const express = require("express")
const { addComment, getComments } = require("../controllers/contactus.controller")
const router = express.Router()

router.post('/getFeedback',addComment)
router.get('/getComments',getComments)

module.exports = router