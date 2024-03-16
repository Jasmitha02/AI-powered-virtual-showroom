const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String }
}, {
    collection: "login"
});

module.exports = mongoose.model("loginSchema", loginSchema);
