const express = require('express');
const router = express.Router();
const {loginRequired, rightUser, validateUser} = require('../Controllers/authController')
const {getDoctor, getDoctors, updateDoctor} = require('../controllers/doctorsController')

router.use(loginRequired)
router.get('/', getDoctors);

router.route('/:doctorId')
    .get(getDoctor)
    .put(rightUser,validateUser, updateDoctor);// You have to be the right Doctor to change the Doctor

router.use('/:doctorId/appointments', appointmentRoutes);