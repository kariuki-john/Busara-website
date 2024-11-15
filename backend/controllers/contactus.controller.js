const ContactUs = require("../models/contactUs.model");

const addComment = async (req,res)=>{
    try {
        const feedback = await ContactUs.create(req.body)
        res.status(200).json(feedback)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getComments = async (req,res)=>{
    try {
        const feedback = await ContactUs.find()
        res.send(feedback)  

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports={
    addComment, getComments
}