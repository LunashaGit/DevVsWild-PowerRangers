const express = require('express');
const {
    createSignal,
    getSignal,
    getSignals,
    deleteSignal
} = require('../controllers/signalController');

const router = express.Router();

// create signal route
router.post('/', createSignal);

// get all signals route
router.get('/', getSignals);

// get a single signal route
router.get('/:id', getSignal);

// delete a signal route
router.delete('/:id', deleteSignal);

module.exports = router;