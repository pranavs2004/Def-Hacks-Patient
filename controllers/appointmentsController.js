// getAppointment, getAppointments, createAppointment, updateAppointment
const appointmentFuntion = require('../linked_list');
const Appoinment = require('../models/appointments');
const Mongoose = require('mongoose');
const appointments = require('../models/appointments');

const getAppointment = async (req, res) =>{
  try{
   result = await Appoinment.find({_id: req.params.appointmentId})
   res.json(result);
  } catch(err){
    res.json(err.message);  
  }
};

const getAppointments=async (req, res) =>{
    if(req.params.doctorId) user = "doctorId";
    else if(req.params.patientId) user = "patientId";
    try {
        appointments= await Appoinment.find({user: req.params[user]});
        res.json(appointments);
        } catch (err) {
        res.json(err.message);
        }
};

const createAppointment= async (req, res) =>{
 try{
   const conflictAppt = Appoinment.find({date: req.body.date, timeSlot: req.body.timeSlot})
   if(conflictAppt) res.json('message': 'Sorry, this time slot is booked.')
   else{
   const appt = new Appoinment(req.body);
   appt.doctorId = req.params.doctorId;
   appt.patientId = req.user.id
   const result = await appt.save();
   res.json(result)
}} catch(err){
    res.json(err.message)
}
};

module.exports = {getAppointment, getAppointments, createAppointment}
