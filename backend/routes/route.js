var express = require('express');
var router = express.Router();
const signupCopy = require('../models/signup');

// Get Sign Up Page

router.post("/signup", (req, res, next) => {
    try {
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
    } catch (error) {
        console.log(error)
    }
});


// Get Log In Page
router.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body;
        // const { password } = req.body.password;



        //Validation
        if (!username || !password)
            return res.status(400).json({ msg: "not all field have been entered" })
        console.log(username);
        console.log(password);


        const user = await signupCopy.findOne({ userName: username, password: password });
        // console.log(userName);
        // console.log(password);
        console.log(user);

        if (!user) {
            return res.status(400).json({ msg: "user not found" })
        }

        if (password != user.password)
            return res.status(400).json({ msg: "invalid password" })
        else
            return res.status(400).json({ msg: "Salut" })


    } catch (error) {
        return res.status(500).json({ error: error.messages })
    }

});
module.exports = router;
