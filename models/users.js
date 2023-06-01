const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    password: {
        type:String,
        required: true,
        min: 6,
        max: 1024
    },
}, {versionKey: false, timestamps: true});

// Joi validation

module.exports = mongoose.model('User', userSchema);