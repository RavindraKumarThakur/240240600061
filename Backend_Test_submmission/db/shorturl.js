const mongoose = require('mongoose');

const shortUrlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        required: true,
        unique: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);