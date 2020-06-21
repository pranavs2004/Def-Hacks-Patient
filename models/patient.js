var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Patient = new Schema({
  _id: {
  type:Number,
  min: [6, 'Too few characters'],
  required:[true,"Need an ID!"],
},
  firstname:{
    type:String,
    required:[true,"Need an First Name!"],
  },
  lastname:{
    type:String,
    required:[true,"Need an Last Name!"],
  },
  email_address:{
    type:String,
    required:[true,"Need an Email!"],
  },
  phone_number:{
    type:Number,
    required: [true,"Need an Phone Number!"],
    validate: {
validator: function (v) {
//Must have XXX-XXX-XXXX format
//return true to pass the validation
//return false to fail the validation
return (/\d{3}-\d{3}-\d{4}/.test(v));
},
//message to return if validation fails
message: props => `${props.value} is not a valid number!`
},
  username:{
    type:String,
    required:[true,"Need an Username!"],
    max:[10,"Don't keep the username too long"],
  },
  password:{
    type:String,
    required:[true,"Need an Password!"],
  },
  symptoms: {
  type:String,
  max:[100,"Keep it shorter"],
},
  appointment:[String],
  doctorIDs:[Number],
});


module.exports = mongoose.model('Patient', Patient );
