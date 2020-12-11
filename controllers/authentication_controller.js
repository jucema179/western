const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/index')(process.env.NODE_ENV);
// const randomCode = require('../services/randomCode');
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
// const getTemplate = require('../services/template');
// const sendMail = require('../services/mail');
const _ = require('lodash');

const router = express.Router();

const login = (req, res) => {
  User
    .findOne({ user_email: req.body.user_email })
    .select('+user_password')
    .populate('role')
    .then((user) => {
      if (!user) {
        return res.json({ success: false, type: 'email', message: 'The email you entered is not associated with any account.' });
      } else if (!bcrypt.compareSync(req.body.user_password, user.user_password)) {
        return res.json({ success: false, type: 'password', message: 'Invalid password' });
      } else if (!user.user_active) {
        return res.json({ success: false, type: 'user', message: 'The user is not active.' });
      }

      const payload = { id: user.id,
        name: user.first_name,
        email: user.email,
        role: user.role.role_name };
      const token = jwt.sign(payload, config.secret, { expiresIn: 60 * 60 * 24 * 30 });

      return res.json({ success: true,
        token,
        user });
    })
    .catch((err) => {
      res.json({ success: false, message: err.message });
    });
};



router.post('/login', login);
module.exports = router;
