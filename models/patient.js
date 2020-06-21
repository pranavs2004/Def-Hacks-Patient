var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Patient = new Schema({
  _id: {
  type:Number,
  min: [6, 'Too few characters'],
  required:true,
},
  firstname:{
    type:String,
    required:true,
  },
  lastname:{
    type:String,
    required:true,
  },
  email_address:{
    type:String,
    required:true,
  },
  phone_number:{
    type:Number,
    required: true,
  },
  username:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  symptoms: {
  type:String,
},
  appointment:[String],
  doctorIDs:[Number],
});


module.exports = mongoose.model('Patient', Patient );
