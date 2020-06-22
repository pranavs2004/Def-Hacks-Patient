// getAppointment, getAppointments, createAppointment, updateAppointment
const appointmentFuntion = require('../linked_list');
const Appoinment = require('../models/appointments');
const Mongoose = require('mongoose');
const appointments = require('../models/appointments');

const getAppointment=async (req, res) =>{
  try{
    Appoinment.find({_id: appointmentId})
  } catch(err){
    res.json(err.message);  
  }
};

const getAppointments=async (req, res) =>{
    if(req.params.doctorId) user = "doctorId";
    else if(req.params.patientId) user = "patientId";
    try {
        appointments= Appoinment.find({user: req.params[user]});
        res.json(appointments);
        } catch (err) {
        res.json(err.message);
        }
};

const createAppointment=async (req, res) =>{

};

module.exports = {getAppointment, getAppointments, createAppointment}
