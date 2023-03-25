const express = require('express');
const {
    createPersonalAlert
} = require('../controllers/personalAlertController');

const router = express.Router();

// create signal route
router.get('/', createPersonalAlert);

module.exports = router;