
const mongoose = require('mongoose');
const SignUpTemplate = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    date: {
        type: Date,
        default: Date.now()
    }

});


module.exports = mongoose.model('mytable', SignUpTemplate);