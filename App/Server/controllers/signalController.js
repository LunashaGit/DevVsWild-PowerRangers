const mongoose = require('mongoose').default;
const Signal = require('../models/signalModel');

// create a signal
const createSignal = async (req, res) => {
    const { title, lon, lat } = req.body;

    try {
        const signal = await Signal.create({
            title,
            lon,
            lat
        });

        res.status(200).json(signal);
    } catch (e) {
        res.status(400).json({
            error: e.message
        });
    }
}

// get all signals
const getSignals = async (req, res) => {
    const signals = await Signal.find({});

    res.status(200).json(signals);
}

// get a single signal
const getSignal = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: 'No such signal'
        });
    }

    const signal = await Signal.findById(id);

    res.status(200).json(signal);
}

module.exports = {
    createSignal,
    getSignals,
    getSignal
};