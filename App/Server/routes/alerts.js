const express = require('express');
const {
    createAlert,
    getAlerts,
    getAlert
} = require('../controllers/alertController');

const router = express.Router();

router.post('/', createAlert);

router.get('/', getAlerts);

router.get('/:id', getAlert);

module.exports = router;