var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Doctor = new Schema({
  _id: {
  type:Number,
   min: [6, 'Too few characters'],
   required:true,
 },
  email:{
    type:String,
    required:true,
  },
  username:{
  type:String,
  required:true,
},
  password: {
  type:String,
  required:true,
  min:[7, "password must be more secure"],
},
 firstname:{
   type:String,
   required:true,
 },
 lastname:{
   type:String,
   required:true,
 },
 speciality: {
 type:String,
 required:true,
},
patientsIDs:[Number],
appointment: [String],
});

module.exports = mongoose.model('Doctor', Doctor );
