const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const customerFeedback = require('./routes/contactus.route')
const createUser = require('./routes/register.route')
const loginUser = require('./routes/login.route')
const sendApplication = require('./routes/postapplication.route')
const getApplications = require('./routes/getApplications.route')
const deleteApplication = require('./routes/deleteApplication.route')
const updateStatus = require('./routes/updateApplication.route')
const deleteComment = require('./routes/contactus.route')
const bodyParser = require('body-parser')
app.use(bodyParser.json({ type: 'application/*+json' }))
const path = require("path");


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
require('dotenv').config()
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api', cors(), customerFeedback, createUser, loginUser, sendApplication, getApplications, deleteApplication, updateStatus, deleteComment)

app.listen(5000, () => {
    console.log('Server running at port ' + process.env.PORT);
});

mongoose.connect(process.env.MANGO_URI).then(() => {
    console.log("DB Connected succesfully");

}).catch((error) => {
    console.log('DB Connection failed');

});