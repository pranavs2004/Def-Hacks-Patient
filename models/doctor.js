var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Define a schema
var Schema = mongoose.Schema;

var Doctor = new Schema({
  _id: {
  type:Number,
   min: [6, 'Too few characters'],
   required:[true, "Need an ID!"],
 },
  email:{
    type:String,
    required:[true,"Need an Email!"],
  },
  username:{
  type:String,
  required:[true,"Need an Username!"],
},
  hashPassword: {
  type:String,
  required:[true,"Need an Password!"],
  min:[7, "password must be more secure"],
},
 firstname:{
   type:String,
   required:[true, "Need an First Name!"],
 },
 lastname:{
   type:String,
   required:[true,"Need an Last Name!"],
 },
 speciality: {
 type:String,
 required:[true,"Need an Speciality!"],
},
patientsIDs:[Number],
appointment: [String],

});
Patient.methods.comparePasswords = (password, hashPassword) => {
return bcrypt.compareSync(password, hashPassword);
}
module.exports = mongoose.model('Doctor', Doctor );
