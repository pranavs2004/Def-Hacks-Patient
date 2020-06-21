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
          _id: user.id,
          email: user.email,
          username: user.name,
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

  // need to define different right user
  const rightUser = (req, res, next) => {
    req.user && req.user.id===req.params.id? next() : res.json({'message': 'You don\'t have access to do this.'});
  }
  
  const loginRequired = (req, res, next) => {
    req.user? next() : res.json({'message': 'You have to log in first.'});
  };
  


module.exports = {login, register, rightUser, loginRequired};
