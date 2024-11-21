const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')

const ContactusSchema = mongoose.Schema(
    {
      name:{
        type:String,
      },
      email:{
        type:String,
      },
      message:{
        type:String
      }
    },
    {
        timestamps:true
    }
)


const applicationSchema = new mongoose.Schema({
  name: String,
  idNumber: String,
  email: String,
  phone: String,
  course: String,
  briefInformation: String,
  certification: [String],
});

const ContactUs = mongoose.model("ContuctUs",ContactusSchema)
const Application = mongoose.model('Application', applicationSchema);


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage }); 

module.exports = {ContactUs, Application,upload}