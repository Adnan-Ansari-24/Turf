const mongoose = require("mongoose");
const validator = require("validator");


// create institute scehma

const instituteSchema = new mongoose.Schema({
    Location: {
        type: String,
        required: true,
        trim: true,
    },
    Discription: {
        type: String,
        required: true
    },
    Admin_Id: {
        type: String,
        required: true
    },

});

// model define
const institute = new mongoose.model("institute", instituteSchema);
module.exports = institute;