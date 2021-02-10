var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
const signupCopy = require('../models/signup');
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
        console.log(my_errors)
        return;

        // var ers = [];
        // for (let i = 0; i < my_errors.errors.length; i++) {
        //     ers.push(my_errors.errors[i].msg)
        // }
        // // req.flash('error', ers);
        // res.redirect('/register');

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
                    console.log('email and username is found')
                    return;
                }
                else {
                    const sighUser = new signupCopy({
                        fullName: req.body.fullName,
                        userName: req.body.userName,
                        email: req.body.email,
                        password: req.body.password,
                    })
                    sighUser.save()
                        .then((data) => {
                            res.json(data)
                        })
                        .then((error) => {
                            res.json(error)
                        })

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
        const username = req.body.userName;
        const password = req.body.password;

        // console.log(req.body.password)
        //Validation
        if (!username || !password)
            return res.status(400).json({ msg: "not all field have been entered" })

        const user = signupCopy.findOne({ username: username, password: password });

        if (!user) {
            return res.status(400).json({ msg: "user not found" })
        }

        // if (password === user.password) {
        //     res.redirect('/')
        //     return res.status(400).json({ msg: "Salut" })
        // }
        const pa = bcrypt.compare(password, req.body.password);
        if (!pa) {
            return res.status(400).json({ msg: "Salut" })
        }
        else
            return res.status(400).json({ msg: "invalid password" })


    } catch (error) {
        return res.status(500).json({ error: error.messages })
    }

});


router.get("/login", (req, res) => {
    // var msgError = req.flash('error');
    // res.render("app/register", { message: msgError })
    res.status(400).json({ message: "some reason error message" })
})

module.exports = router;
