const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["student", "recruiter", "admin"],
        required: true
    },

    phone: {
    type: String,
    default: ""
},

college: {
    type: String,
    default: ""
},

degree: {
    type: String,
    default: ""
},

skills: {
    type: String,
    default: ""
},

about: {
    type: String,
    default: ""
},

profileImage: {
    type: String,
    default: ""
},

resume: {
    type: String,
    default: ""
}

}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);