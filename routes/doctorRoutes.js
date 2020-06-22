const express = require('express');
const router = express.Router();
const {rightUser} = require('../controllers/authController')
const {getDoctor, getDoctors, updateDoctor} = require('../controllers/doctorsController')
const appointmentRoutes = require('./appointmentRoutes')

router.get('/', getDoctors);

router.route('/:doctorId')
    .get(getDoctor)
    .put(rightUser, updateDoctor);// You have to be the right Doctor to change the Doctor

router.use('/:doctorId/appointments', rightUser, appointmentRoutes);


module.exports = router;