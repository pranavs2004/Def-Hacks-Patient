const express = require('express');
const app = express();
var mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes')
const {loginRequired} = require('./controllers/authController')


//Set up default mongoose connection
//mongodb://dbuser:dbpassword@mongo-cluster-shard-00-00-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-01-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-02-ixqtu.mongodb.net:27017/test?ssl=true&replicaSet=mongo-cluster-shard-0&authSource=admin&retryWrites=true
//var mongoDB = 'mongodb+srv://pranav:pranav123@cluster0-dn2vn.mongodb.net/<local_library>?retryWrites=true&w=majority';
var mongoDB ='mongodb://pranav:pranav123@mongo-cluster-shard-00-00-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-01-ixqtu.mongodb.net:27017,mongo-cluster-shard-00-02-ixqtu.mongodb.net:27017/test?ssl=true&replicaSet=mongo-cluster-shard-0&authSource=admin&retryWrites=true'


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
app.use('/doctors', loginRequired, doctorRoutes)
app.use('/patients', loginRequired, patientRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
