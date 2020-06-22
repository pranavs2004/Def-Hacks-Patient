const express = require('express');
const app = express();
var mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes')
const {loginRequired} = require('./controllers/authController')


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

app.use(bodyParser.json());

app.use(async (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]==='JWT') {
    token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'secretKey', (err, decoded) => {
      err? res.json(err.message) : req.user = decoded;
      next();
    } );
  } else {
    req.user = undefined;
    next();
  }
});

//login route 
app.post('/auth', authRoutes)
app.use('/doctors', loginRequired, doctorRoutes)
app.use('/patients', loginRequired, patientRoutes)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
