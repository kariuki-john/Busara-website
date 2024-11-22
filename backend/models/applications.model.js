const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
    name: String,
    idNumber: String,
    email: String,
    phone: String,
    course: String,
    briefInformation: String,
    certification: [String],
  },
  {
    timestamps:true
}
);

  const Application = mongoose.model('Application', applicationSchema);
  
  module.exports = {
    Application
  }