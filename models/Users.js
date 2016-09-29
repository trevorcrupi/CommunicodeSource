var mongoose = require("mongoose");

module.exports = mongoose.model('User', {
    email: String,
    password: String,
    fullname: String,
    bio: String,
    type: [Number],
    numLogins: [Number],
    creation_timestamp: Date
});