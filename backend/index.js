const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const customerFeedback = require('./routes/contactus.route')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
require('dotenv').config()

app.use('/api',cors(),customerFeedback)


app.listen(5000,()=>{
    console.log('Server running at port ' + process.env.PORT);    
});

mongoose.connect(process.env.MANGO_URI).then(()=>{
    console.log("DB Connected succesfully");   

}).catch((error)=>{
    console.log('DB Connection failed');
    
});