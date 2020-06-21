const express = require('express');
const router = express.Router();
const {rightUser} = require('../controllers/authController')
const {getPatient, getPatients, updatePatient} = require('../controllers/patientsController')
const appointmentRoutes = require('../routes/appointmentRoutes')

router.route('/:patientId')
    .get(getPatient)
    .put(rightUser, updatePatient);// You have to be the right Patient to change the Patient

router.use('/:patientId/appointments', rightUser, appointmentRoutes);


module.exports = router;