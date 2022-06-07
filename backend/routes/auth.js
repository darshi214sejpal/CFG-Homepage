const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { JsonWebTokenError } = require("jsonwebtoken");

const JWT_SECRET = 'muskanlikestocode';

// Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', 
    // Validate and server side
    [
    body('name', 'Enter name of minimum 3 characters length').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 4 }),
    ], async(req, res) => {

        // If there are errors return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        try {
        // Check whether the user with this email exists already
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error: "Sorry a user with this email already exists"})
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const secPsw = await bcrypt.hash(req.body.password, salt);

        // Create a new user 
        user = await User.create({
            name: req.body.name,
            password: secPsw,
            email: req.body.email,
            })

        // Generating jwt Token and signing it
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        // console.log(authToken);

        // Sending user their token (used instead of sessions)
        res.json({authToken});
        // res.json(user); 

        } catch (error) {
            console.error(error.message);
            res.status(500).send('Some Error occured');
        }
})

module.exports = router;