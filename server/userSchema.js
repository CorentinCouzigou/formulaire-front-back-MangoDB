const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    lastname: String,
    firstname: String,
}, { collection: 'users', versionKey: false });

module.exports = mongoose.model('User', userSchema)