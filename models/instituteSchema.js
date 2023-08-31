const mongoose = require("mongoose");
const validator = require("validator");


// create institute scehma

const instituteSchema = new mongoose.Schema({
 
    location: {
        type: String,
        required: true,
        trim: true,
    },
    discription: {
        type: String,
        required: true
    },
    admin_id: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    }
});

// model define
const institute = new mongoose.model("institute", instituteSchema);
module.exports = institute;