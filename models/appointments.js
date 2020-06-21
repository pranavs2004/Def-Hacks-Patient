var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Appointments = new Schema({
  time: Number,
  status: {
  type:String,
  enum['coming', 'finished', 'cancelled',]
}
});

module.exports = mongoose.model('Appointment', Appointments );
