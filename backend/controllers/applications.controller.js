const Application = require('../models/applications.model');
const multer = require('multer');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const sendApplication = async (req, res) => {
  upload.array("certification", 10)(req, res, async (err) => {

    if (err) {
      return res.status(500).json({ message: err.message, type: "danger" });
    }

    const { name, idNumber, email, phone, course, briefInformation } = req.body;


    if (!name || !idNumber || !email || !phone || !course) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const certificationFiles = req.files ? req.files.map((file) => file.filename) : [];

    const newApplication = new Application({
      name,
      idNumber,
      email,
      phone,
      course,
      briefInformation,
      certification: certificationFiles,
    });

    try {

      const savedApplication = await newApplication.save();
      res.status(200).json({
        message: "Application received successfully",
        application: savedApplication,
      });
    } catch (error) {
      res.status(500).json({ message: error.message, type: "danger" });
    }
  });
};


const getApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching applications. Please try again later.' });
  }
}

const updateStatus= async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedApplication = await Application.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.status(200).json(updatedApplication);
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error });
  }
}

const deleteApplication = async (req, res) => {
  const { id } = req.params;

  try {
    await Application.findByIdAndDelete(id);
    res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting application", error });
  }
};

module.exports = {
  getApplications, sendApplication,deleteApplication,updateStatus
}