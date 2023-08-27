const mongoose = require("mongoose");
const validator = require("validator");


// create users scehma

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true,
    },
  
    Phone_Number:{
        type:Number,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    
    Password:{
        type:String,
        required:true,
        minlength:8
    },
    datecreated:Date,
    dateUpdated:Date
});

// model define
const user = new mongoose.model("user",userSchema);
module.exports = user;