const express = require('express');

const app = express();
var mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes')

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://pranav:<pranav123>@cluster0-dn2vn.mongodb.net/<local_library>?retryWrites=true&w=majority';

// Connect the mongoose with database
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
.then(()=>{
  console.log('connect succesfully!');
})
.catch(error => console.log(error));

//login route

app.post('/auth', authRoutes)
app.use('/doctors', doctorRoutes)
app.use('/patients', patientRoutes)

const PORT = 3000;

app.listen(PORT, () => {
    console.log("listening on port 3000...")
})
