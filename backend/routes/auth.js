const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
    body('name', 'Enter name of minimum 3 characters length').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 4 }),
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
          }).then(user => res.json(user))
          .catch((err) => {
              console.log(err);
              res.json({error: 'Please enter a unique value for email' , message: err.message})
          });
})

module.exports = router;