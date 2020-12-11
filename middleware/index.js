const jwt = require('jsonwebtoken');
const config = require('../config/index')(process.env.NODE_ENV);

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(404).send({ message: 'No token provided' });
  }

  const token = req.headers.authorization.split(' ')[1];
  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return res.json({ success: false, message: 'Failed to authenticate token' });
      req.user = decoded;
      return next();
    });
  } else {
    return res.status(403).send({ success: false, message: 'No token provided' });
  }
};

const checkRole = roles => (req, res, next) => {
  if (roles.includes(req.user.role)) {
    return next();
  }
  return res.status(403).send({ success: false, message: 'Access denied' });
};

module.exports = { authMiddleware, checkRole };
