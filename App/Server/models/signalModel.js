const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signalSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Signal', signalSchema);