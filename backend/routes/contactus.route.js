const express = require("express")
const { addComment, getComments, deleteComment} = require("../controllers/contactus.controller")
const router = express.Router()


router.post('/getFeedback',addComment)
router.get('/getComments',getComments)
router.delete('/deleteComment/:id', deleteComment)


module.exports = router