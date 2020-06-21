const express = require('express');
const router = express.Router();
const {rightUser, validateUser} = require('../Controllers/authController')
const {getDoctor, getDoctors, updateDoctor} = require('../controllers/doctorsController')

router.get('/', getDoctors);

router.route('/:doctorId')
    .get(getDoctor)
    .put(rightUser,validateUser, updateDoctor);// You have to be the right Doctor to change the Doctor

router.use('/:doctorId/appointments', rightUser, appointmentRoutes);


module.exports = router;