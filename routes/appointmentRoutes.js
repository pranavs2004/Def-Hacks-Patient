const express = require('express');
const router = express.Router({mergeParams: true});
const {validateAppointment} = require('../Controllers/authController')
const {getAppointment, getAppointments, createAppointment, updateAppointment} = require('../controllers/AppointmentsController')

router.get('/', getAppointments);

router.route('/:AppointmentId')
    .get(getAppointment)
    .post(createAppointment)
    .put(validateAppointment, updateAppointment);
    
module.exports = router;