const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const customerFeedback = require('./routes/contactus.route')
const { upload } = require('./models/contactUs.model')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
require('dotenv').config()

app.use('/api',cors(),customerFeedback)

app.post(('/applications'), upload.array('certification'),async (req,res)=>{
    try {
        const { name, idNumber, email, phone, course, briefInformation } = req.body;
        const certificationFiles = req.files.map(file => file.path); 
    
      
        const newApplication = new Application({
          name,
          idNumber,
          email,
          phone,
          course,
          briefInformation,
          certification: certificationFiles,
        });
    
        await newApplication.save(); 
    
        res.status(200).json({ message: 'Application submitted successfully!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error submitting application. Please try again later.' });
      }
     
})

app.listen(5000,()=>{
    console.log('Server running at port ' + process.env.PORT);    
});

mongoose.connect(process.env.MANGO_URI).then(()=>{
    console.log("DB Connected succesfully");   

}).catch((error)=>{
    console.log('DB Connection failed');
    
});