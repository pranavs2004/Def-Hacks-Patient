const Doctor= require('../models/doctor');
const Patient= require('../models/patient');
const jwt = require('jsonwebtoken');
const bcrypt  =  require('bcrypt')

const login = async (req, res) => {
    const identity = req.user.identity
    const capitalized = identity.charAt(0).toUpperCase() + identity.slice(1)
    capitalized.findOne({email: req.body.email}, (err, user) => {
      if (err) res.json(err.message);
      if (!user) res.json({'message': 'User not found'});
      else if (user && user.comparePasswords(req.body.password, user.hashPassword)) {//make sure user has hashpassword and comparepasswords in user.js
        res.json({'token': jwt.sign({
          id: user.id,
          email: user.email,
          name: user.name,
        }, 'secretKey'),
        });
      } else {
        res.send({'message': 'Your password and email doesn\'t match.'});
      }
    });
  }; 

  const register = (req, res) => {
    const identity = req.user.identity
    const capitalized = identity.charAt(0).toUpperCase() + identity.slice(1)
    ${capitalized}.init()
        .then( async ()=>{
          const user = new ${capitalized}(req.body);
          user.hashPassword = bcrypt.hashSync(req.body.password, 10);
          const result = await user.save();
          res.json(result);
        })
        .catch((err) => {
          res.json(err.message);
        });
  };


module.exports = {login, register};
