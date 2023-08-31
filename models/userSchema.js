const mongoose = require("mongoose");
const validator = require("validator");


// create users scehma

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
       
    },

    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },

    password: {
        type: String,
        required: true,
        maxlength: 8
    },
    role: {
        type: String,
        enum: ['super_admin', 'admin', 'user'],
        default: 'user'
    },
    datecreated: Date,
    dateUpdated: Date
});

// model define
const user = new mongoose.model("user", userSchema);
module.exports = user;