const router = require('express').Router();
const { authMiddleware } = require('../middleware');

const authController = require('./authentication_controller');
const contactController = require('./contact_controller');
const users = require('./users_controller');
const roles = require('./roles_controller');

router.get('/', (req, res) => res.send('API running'));
router.use('/contact', contactController);
router.use('/auth', authController);
router.use(authMiddleware);
router.use('/users', users);
router.use('/roles', roles);


module.exports = router;
