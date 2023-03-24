const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signalSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    lon: {
        type: Number,
        required: true,
    },
    lat: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Signal', signalSchema);