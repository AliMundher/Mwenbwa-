var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
const signupCopy = require('../models/signup');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');


// Get Sign Up Page
router.post("/register", async (req, res, next) => {
    const { fullName, userName, email, password } = req.body;
    try {
        // Check if User not Enter any Fields
        if (!fullName || !userName || !email || !password)
            return res.status(400).json({ msg: "Not all fields have been entered" })
        if (password.length < 5)
            return res.status(400).json({ msg: "the password need to be at lest 5 chars long" })

        // Find User through Email and UserName
        const userExists = await signupCopy.findOne({
            email: email,
            userName: userName
        });
        // Check if User is Existe
        if (userExists)
            return res.status(400).json({ msg: "An Account already exists" });

        // Encrypt a Password
        // const salt = await bcrypt.genSalt();
        // const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new signupCopy({
            fullName: fullName,
            userName: userName,
            email: email,
            password: password,
        });
        // Save The User In Database
        const saveUser = await newUser.save();
        res.json(saveUser);

    } catch (error) {
        return res.status(500).send()
    }

});


// Get Log In Page
router.post("/login", async (req, res, next) => {

    try {
        // const { username, password } = req.body;
        const Username = req.body.userName;
        const Password = req.body.password;


        //Validation
        if (!Username || !Password)
            return res.status(400).json({ msg: "please enter all filed" })

        // Check if User Not Existe
        const user = await signupCopy.findOne({ userName: Username, password: Password });
        console.log(user)
        if (!user) {
            return res.status(401).json({ msg: "There is no account with this name" })
        }

        if (Password === user.password) {
            // Sign the Token
            const token = jwt.sign({
                id: user._id,
            }, process.env.JWT_SECRET);
            res.json({
                token,
                user: {
                    id: user._id,
                    user: user.userName,
                    pass: user.password

                }
            })

            // Send the Token in HTTPOnly cookies
            res.cookie("token", token, {
                httpOnly: true
            }).send();

        }


    } catch (error) {
        return res.status(500).send()
    }

});

router.delete("/delete", auth, async (req, res) => {
    try {
        const deleteUser = await signupCopy.findByIdAndDelete(req.user);
        res.json(deleteUser);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

});

// Check if
router.post("/tokenValid", async (req, res) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.json(false);
        }
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        if (!verify)
            return res.json(false);

        const user = await signupCopy.findById(verify.id);
        if (!user)
            return res.json(false);

        return res.json(true);

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});

// Get Only One User Who he do Log i
router.get('/', auth, async (req, res) => {
    const user = await signupCopy.findById(req.user);
    res.json(user);
})

module.exports = router;
