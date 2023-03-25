const mongoose = require('mongoose').default;

const personalAlert = require('../models/personalAlertModel');

// Create a personnal alert to send
const createPersonalAlert = async (req, res) => {
    const { title, lon, lat, timestamp } = req.body;
    const message = "";

    switch (title) {
        case 'Animal Attack' :
            return message = `A user life is threaten after encountering a dangerous animal, here’s the location :${lat} ${lon} where the signals was sent at ${time}. This message is automated.`;
        case 'No ressources' :
            return message = `A user life is threaten from lack of life supplies, here’s the location ${lat}, ${lon} where the signals was sent at ${time}. This message is automated.`;
        case 'Lost' :
            return message = `A user life is threaten, the user is lost and can’t find his way out, here’s the location ${lat}, ${lon} where the signals was sent at ${time}. This message is automated.`;
        case 'Unsafe' :
            return message = `A user is feeling threaten by someone, here’s the location ${lat}, ${lon} where the signals was sent at ${time}. This message is automated.`;
        case 'Injured' :
            return message = `A user life is threaten from an injury, here’s the location ${lat}, l${on} where the signals was sent at ${time}. This message is automated.`;
        case 'Stucked' :
            return message = `A user life is threaten and is being stuck with no way out, here’s the location ${lat}, ${lon} where the signals was sent at ${time}. This message is automated.`;
        default :
            return message = 'SOS';
    }
}

module.exports = {
    createPersonalAlert,
}