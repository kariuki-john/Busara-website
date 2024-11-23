const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
    name:{
      type: String,
      required: true
    },
    idNumber: {
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    course: {
      type: String,
      required: true
    },
    briefInformation: {
      type: String
    },
    certification: {
      type: [String],
      default:[],
      required: true
    },
    status: {
      type: String,
      default: "Pending Approval", 
    },
  },
  {
    timestamps:true
}
);

  const Application = mongoose.model('Application', applicationSchema);
  
  module.exports = Application
  