const User = require('../models/user');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    if(req.user.)
    User.findOne({email: req.body.email}, (err, user) => {
      if (err) res.json(err.message);
      if (!user) res.json({'message': 'User not found'});
      else if (user && user.comparePasswords(req.body.password, user.hashPassword)) {
        res.json({'token': jwt.sign({
          id: user.id,
          email: user.email,
          name: user.name,
          eventIDs: user.eventIDs,
        }, 'secretKey'),
        });
      } else {
        res.send({'message': 'Your password and email doesn\'t match.'});
      }
    });
  }; 


module.exports = {login, logout, register};
