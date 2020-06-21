var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Patient = new Schema({
  _id: {
  type:Number,
  min: [6, 'Too few characters']
  required:true
}
  name: String,
  symptoms: {
  type:String,
}

});


module.exports = mongoose.model('Patient', Patient );
