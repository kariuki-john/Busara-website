const mongoose = require('mongoose')


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

module.exports = ContactUs