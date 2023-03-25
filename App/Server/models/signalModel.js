const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signalSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    lon: {
        type: Number,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    expireAt: {
        type: Date,
        default: new Date(),
        expires: 5
    }
});

module.exports = mongoose.model('Signal', signalSchema);