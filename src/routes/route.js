const express = require('express');
const {addInterns} = require('../controllers/internsController');

const router = express.Router();

router.post('/functionup/interns', addInterns);

module.exports = router;