var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Appointments = new Schema({
  _id: {
  type:Number,
   min: [6, 'Too few characters'],
   required:true,
 },
  time: String,
  status: {
  type:String,
  enum:['coming', 'finished', 'cancelled',],
},
doctorId:{
  type:Number,
   min: [6, 'Too few characters'],
   required:true,
 },
patientId: {
  type:Number,
   min: [6, 'Too few characters'],
   required:true,
 },

 date: {
   type: String
 },

 timeSlot: {
   type: Number
 },

 symptom: {
   type: String
 }
});

module.exports = mongoose.model('Appointment', Appointments );
