const Users = require('../models/login.model')
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    try {
        const { userName, phoneNumber, email, password } = req.body
        if (password.length < 5) {
            return res.json({
                error: "Password too small"
            })
        }
        await bcrypt.hash(password, 10).then((hash) => {
            Users.create({
                userName: userName,
                password: hash,
                email: email,
                phoneNumber: phoneNumber
            })
                .then(() => {
                    res.json("User Registered succesfully")
                })
                .catch((error) => {
                    if (error.code === 11000) {
                        res.json("User already exists!");
                    }
                })
        });
    } catch (error) {

        console.log(error);
        res.json("There was a problem!");

    }
}

module.exports = {
    registerUser
}