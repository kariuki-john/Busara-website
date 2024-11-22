const Application = require('../models/applications.model')

const receiveApplications = async (req,res) => {
    try {
        const applications = await Application.find(); 
        res.status(200).json(applications); 
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching applications. Please try again later.' });
      }
}

module.exports ={
    receiveApplications
}