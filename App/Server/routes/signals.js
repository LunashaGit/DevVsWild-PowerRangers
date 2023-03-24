const express = require('express');
const {
    createSignal,
    getSignal,
    getSignals
} = require('../controllers/signalController');

const router = express.Router();

// create signal route
router.post('/', createSignal);

// get all signals route
router.get('/', getSignals);

// get a single signal route
router.get('/:id', getSignal);

module.exports = router;