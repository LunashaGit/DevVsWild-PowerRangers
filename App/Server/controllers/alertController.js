const mongoose = require('mongoose').default;
const Alert = require('../models/alertModel');

// create an alert
const createAlert = async (req, res) => {
    const {title, content, lon, lat} = req.body;

    try {
        const alert = await Alert.create({
            title,
            content,
            lon,
            lat
        });

        res.status(200).json(alert);
    } catch (e) {
        res.status(400).json({
            error: e.message
        });
    }
}

// get all alerts
const getAlerts = async (req, res) => {
    const alerts = await Alert.find({});

    res.status(200).json(alerts);
}

// get a single alert
const getAlert = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: 'No such alert'
        });
    }

    const alert = await Alert.findById(id);

    res.status(200).json(alert);
}

module.exports = {
    createAlert,
    getAlerts,
    getAlert
}