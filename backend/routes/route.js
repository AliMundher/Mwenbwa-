var express = require('express');
var router = express.Router();
const signupCopy = require('../models/signup');

// Get Sign Up Page
router.post("/signup", (req, res, next) => {

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

});
module.exports = router;
