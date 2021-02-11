var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
const signupCopy = require('../models/signup');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');


// Get Sign Up Page
router.post("/register", [
    check("fullName").notEmpty().withMessage('please inter your fullname'),
    check("userName").notEmpty().withMessage('please inter your userName'),
    check("email").notEmpty().withMessage('please inter your email'),
    check("password").notEmpty().withMessage('please inter your password'),

], (req, res, next) => {
    const my_errors = validationResult(req);
    if (!my_errors.isEmpty()) {
        // console.log(my_errors)
        // return;

        var ers = [];
        for (let i = 0; i < my_errors.errors.length; i++) {
            ers.push(my_errors.errors[i].msg)
        }
        // req.flash('error', ers);
        // res.redirect('/register');
        // console.log(ers);
        return res.status(400).json({ error: ers })
        return;
    }
    else {
        try {
            // Check if User Register before
            signupCopy.findOne({
                email: req.body.email,
                userName: req.body.userName
            }, (error, result) => {
                if (error) {
                    console.log(error)
                }
                if (result) {
                    // console.log('email and username is found')
                    return res.status(400).json({ msg: "email and username is found" })
                    // return;
                }
                else {
                    const sighUser = new signupCopy({
                        fullName: req.body.fullName,
                        userName: req.body.userName,
                        email: req.body.email,
                        password: req.body.password,
                    })
                    const saveUser = sighUser.save()
                        .then((data) => {
                            res.json(data)
                        })
                        .then((error) => {
                            res.json(error)
                        })

                    const token = jwt.sign({
                        user: saveUser._id,
                    }, process.env.JWT_SECRET);

                    console.log(token)
                }
            })



        } catch (error) {
            console.log(error)
        }

    }
});


// Get Log In Page
router.post("/login", (req, res) => {

    try {
        // const { username, password } = req.body;
        const Username = req.body.userName;
        const Password = req.body.password;

        // console.log(req.body.password)
        //Validation
        if (!Username || !Password)
            return res.status(400).json({ msg: "not all field have been entered" })

        const user = signupCopy.findOne({ username: Username, password: Password });
        console.log(Password)
        console.log(user.password)

        if (!user) {
            return res.status(400).json({ msg: "user not found" })
        }

        if (Password === user.password) {
            res.redirect('/')
            return res.status(400).json({ msg: "Salut" })
        }

        // const pa = bcrypt.compare(password, req.body.password);
        // console.log(!pa)
        // if (!pa) {
        //     return res.status(400).json({ msg: "invalid password" })
        // }
        else
            return res.status(400).json({ msg: "invalid password" })


    } catch (error) {
        return res.status(500).json({ error: error.messages })
    }

});


// router.get("/login", (req, res) => {
//     // var msgError = req.flash('error');
//     // res.render("app/register", { message: msgError })
//     res.status(400).json({ message: "some reason error message" })
// })

module.exports = router;
