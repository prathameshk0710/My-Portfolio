const express = require('express');
const { sendEmail } = require('../controllers/index');
const router = express.Router();

router.post('/sendEmailController', sendEmail);

module.exports = router;