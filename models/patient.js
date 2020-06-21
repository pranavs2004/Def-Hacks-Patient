var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Patient = new Schema({
  doctorId: {
  type:Number,
  min: [6, 'Too few characters']
}
  Name: String,
  symptoms: {
  type:String,
  enum['coming', 'finished', 'cancelled',]
}
}); 
