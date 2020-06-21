const express = require('express');
const router = express.Router();
const {getDoctor, getDoctors, updateDoctor} = require('../controllers/doctorsController')

router.get('/', getDoctors);

router.route('/:doctorId')
    .get(getDoctor)
    .put(rightDoctor,updateDoctor);// You have to be the right Doctor to change the Doctor

router.use('/:doctorId/appointments', appointmentRoutes);