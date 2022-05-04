const express = require('express');
const {addInterns} = require('../controllers/internsController');
const {createCollege} = require("../controllers/collegeController")

const router = express.Router();


router.post("/functionup/colleges" ,createCollege)

router.post('/functionup/interns', addInterns);

module.exports = router;