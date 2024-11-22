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




const ContactUs = mongoose.model("ContuctUs",ContactusSchema)

module.exports = {ContactUs}