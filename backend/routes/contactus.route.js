const express = require("express")
const { addComment, getComments, receiveApplications} = require("../controllers/contactus.controller")
const router = express.Router()


router.post('/getFeedback',addComment)
router.get('/getComments',getComments)
router.get('/receiveApplication', receiveApplications)

module.exports = router