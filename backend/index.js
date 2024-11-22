const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const customerFeedback = require('./routes/contactus.route')
const createUser = require('./routes/register.route')
const loginUser = require('./routes/login.route')


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
require('dotenv').config()

app.use('/api',cors(),customerFeedback,createUser,loginUser)

app.listen(5000,()=>{
    console.log('Server running at port ' + process.env.PORT);    
});

mongoose.connect(process.env.MANGO_URI).then(()=>{
    console.log("DB Connected succesfully");   

}).catch((error)=>{
    console.log('DB Connection failed');
    
});