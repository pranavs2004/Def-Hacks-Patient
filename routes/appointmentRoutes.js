const express = require('express');
const router = express.Router({mergeParams: true});
const {getAppointment, getAppointments, createAppointment} = require('../controllers/appointmentsController')

router.route('/')
.get(getAppointments)
.post(createAppointment)

router.route('/:appointmentId')
    .get(getAppointment)

module.exports = router;
