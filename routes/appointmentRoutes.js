const express = require('express');
const router = express.Router({mergeParams: true});
// const {validateAppointment} = require('../Controllers/authController')
const {getAppointment, getAppointments, createAppointment, updateAppointment} = require('../controllers/AppointmentsController')


router.route('/') 
.get(getAppointments)
.post(createAppointment)

router.route('/:AppointmentId')
    .get(getAppointment)
    .put(validateAppointment, updateAppointment);

module.exports = router;