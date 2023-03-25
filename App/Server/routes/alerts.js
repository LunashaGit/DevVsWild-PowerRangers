const express = require('express');
const {
    createAlert,
    getAlerts,
    getAlert,
    deleteAlert
} = require('../controllers/alertController');

const router = express.Router();

router.post('/', createAlert);

router.get('/', getAlerts);

router.get('/:id', getAlert);

router.delete('/:id', deleteAlert);

module.exports = router;