const Doctor = require('../models/doctor');
const bcrypt = require('bcrypt');

const getDoctor= async (req, res) => {
  try {
    doctor= await Doctor.findById(req.params.id);
    res.json({
      'Doctorname': doctor.Doctorname,
      'email': doctor.email,
    });
  } catch (err) {
    res.json(err.message);
  }
};

const getDoctors= async (req, res) => {
  try {
    doctors= await Doctor.find({});
    res.json(doctors);
  } catch (err) {
    res.json(err.message);
  }
};

const updateDoctor= (req, res) => {
  const id = req.params.id;
  doctor= req.body; 
  doctor.hashPassword = bcrypt.hashSync(req.body.password, 10);
  Doctor.findByIdAndUpdate(id, doctor, {new: true}, (err, Doctor)=>{
    if (!err) {
      res.json({
        'name': doctor.name,
        'email': doctor.email,
      });
    } else {
      res.json(err.message);
    };
  });
};

module.exports = {getDoctor, getDoctors, updateDoctor};
