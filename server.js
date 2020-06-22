const express = require('express');
const app = express();
var mongoose = require('mongoose');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes')
const {loginRequired} = require('./controllers/authController')
const bodyParser = require('body-parser')
const listEndpoints = require('express-list-endpoints');
const {login, register} = require('./controllers/authController');
const jwt = require('jsonwebtoken');





//Set up default mongoose connection
//mongodb://dbuser:dbpassword@mongo-cluster-shard-00-00-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-01-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-02-ixqtu.mongodb.net:27017/test?ssl=true&replicaSet=mongo-cluster-shard-0&authSource=admin&retryWrites=true
//var mongoDB = 'mongodb+srv://pranav:pranav123@cluster0-dn2vn.mongodb.net/<local_library>?retryWrites=true&w=majority';
//var mongoDB ='mongodb://pranav:pranav123@mongo-cluster-shard-00-00-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-01-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-02-ixqtu.mongodb.net:27017/test?ssl=true&replicaSet=mongo-cluster-shard-0&authSource=admin&retryWrites=true'
//var mongoDB = 'mongodb+srv://pranav:pranav123@cluster0-dn2vn.mongodb.net/test?retryWrites=true&w=majority';
var mongoDB='mongodb+srv://pranav:pranav123@cluster0-dn2vn.mongodb.net/local_library?retryWrites=true&w=majority';

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
app.post('/auth/login', login);
app.post('/auth/register', register);
//login route

app.use('/doctors', loginRequired, doctorRoutes)
app.use('/patients', loginRequired, patientRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    console.log(listEndpoints(app));
})
