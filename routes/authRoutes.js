const express = require('express');
const router = express.Router();

// import three functions in controller
const {login, logout, register} = require('../controllers/authController');

router.post('/login', login);
router.post('/register', register);
// Not sure if we need log out or just tell the frontend to clear the JWT token
// router.post('/logout', logout)

module.exports = router;