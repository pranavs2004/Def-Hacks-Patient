var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Doctor = new Schema({
  _id: {
  type:Number,
   min: [6, 'Too few characters']
   required:true
 }
 name:String,
 speciality: {
 type:String,
 required:true
}
});

module.exports = mongoose.model('Doctor', Doctor );
