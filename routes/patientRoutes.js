const express = require('express');
const router = express.Router();
const {rightUser, validateUser} = require('../controllers/authController')
const {getPatient, getPatients, updatePatient} = require('../controllers/PatientsController')

router.get('/', getPatients);

router.route('/:patientId')
    .get(getPatient)
    .put(rightUser,validateUser, updatePatient);// You have to be the right Patient to change the Patient

router.use('/:patientId/appointments', rightUser, appointmentRoutes);


module.exports = router;