const express = require('express');

const app = express();
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';

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

app.post('/login', login)
app.post('/register', register)
app.use('/doctors', doctorRoutes)
app.use('/patients', patientRoutes)

const PORT = 3000;

app.listen(PORT, () => {
    console.log("listening on port 3000...")
})
