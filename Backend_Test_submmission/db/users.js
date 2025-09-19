const mongoose = require('mongoose');

const user_dataSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserData', user_dataSchema);