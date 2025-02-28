const Users = require('../models/login.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptsjs');
require('dotenv').config();

const loginUser = async (req, res) => {
    const { email, password } = req.body
    const user = await Users.findOne({ email }).lean()

    if (!email) {
        return res.json({
            status: 404,
            message: "Invalid Email or Password"
        })
    }

    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({
            id: user._id,
            email: user._email
        }, process.env.JWT_SECRET)
        res.json({
            status: 200,
            message: 'Login succesfull',
            data: token
        })
    }
    res.json({
        status: 403,
        message: 'Invalid login credentials'
    })
}

module.exports = {
    loginUser
}