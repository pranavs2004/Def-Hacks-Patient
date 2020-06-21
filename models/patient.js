var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Patient = new Schema({
  _id: {
  type:Number,
  min: [6, 'Too few characters'],
<<<<<<< HEAD
  required:true
},
  name: String,
=======
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
>>>>>>> f669620b1e7f245069814bf75d56e56db8219e56
  symptoms: {
  type:String,
},
  appointment:[String],
  doctorIDs:[Number],
});


module.exports = mongoose.model('Patient', Patient );
