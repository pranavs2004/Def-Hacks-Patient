const express = require('express');
const router = express.Router();
const {rightDoctor} = require('../controllers/authController')
const {getDoctor, getDoctors, updateDoctor} = require('../controllers/doctorsController')
const appointmentRoutes = require('./appointmentRoutes');
const { getPatients } = require('../controllers/patientsController');

router.get('/', getDoctors);

router.route('/:doctorId')
    .get(getDoctor)
    .put(rightDoctor, updateDoctor);// You have to be the right Doctor to change the Doctor


router.use('/:doctorId/appointments', rightDoctor, appointmentRoutes);

router.get('/:doctorId/patients', rightDoctor, getPatients)



module.exports = router;