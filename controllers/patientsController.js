const Patient = require('../models/patient');
const bcrypt = require('bcrypt');

const getPatient= async (req, res) => {
  try {
    patient= await Patient.findById(req.params.id);
    res.json({
      'username': patient.username,
      'email': patient.email,
    });
  } catch (err) {
    res.json(err.message);
  }
};

const updatePatient= (req, res) => {
  const id = req.params.id;
  Patient= req.body; 
  patient.hashPassword = bcrypt.hashSync(req.body.password, 10);
  Patient.findByIdAndUpdate(id, patient, {new: true}, (err, Patient)=>{
    if (!err) {
      res.json({
        'username': patient.name,
        'email': patient.email,
      });
    } else {
      res.json(err.message);
    };
  });
};

module.exports = {getPatient, updatePatient};
