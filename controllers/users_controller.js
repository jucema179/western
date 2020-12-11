const router = require('express').Router();
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const User = require('../models/Users');
const checkRole = require('../middleware').checkRole;

const getAllUsers = (req, res) => {
  User
    .find()
    .populate('role')
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error retrieving users',
      });
    });
};

const getUser = (req, res) => {
  User
    .findById(req.user.id)
    .populate('role')
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: `User not found with id: ${req.user.id}`,
        });
      }
      res.send({ user });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error retrieving user',
      });
    });
};

const createUser = (req, res) => {
  const user = new User({
    user_first_name: req.body.user_first_name,
    user_last_name: req.body.user_last_name,
    user_email: req.body.user_email,
    role: req.body.role,
    user_password: req.body.user_password,
    user_active: req.body.user_active,
    user_phone1: req.body.user_phone1,
    user_phone2: req.body.user_phone2,
  });
  user.save()
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send({ message: error.message || 'Error saving user' });
    });
};

const updateUser = (req, res) => {
  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_email: req.body.user_email,
    user_phone1: req.body.user_phone1,
    user_phone2: req.body.user_phone2,
  };

  User.findByIdAndUpdate(req.params.id, user, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: `Not found user with id: ${req.params.id}` });
      }
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send({ message: error.message || 'Error updating user' });
    });
};

const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  try {
    if (req.params.id === req.user.id) {
      const user = await User.findById(req.params.id);
      const matches = await bcrypt.compare(currentPassword, user.password);
      if (matches) {
        user.user_password = newPassword;
        const userUpdated = await user.save();
        res.send({
          success: true,
          message: 'User password updated successfully',
          user: userUpdated,
        });
      } else {
        res.send({
          success: false,
          message: 'Incorrect password',
        });
      }
    } else {
      res.send({
        success: false,
        message: 'Error updating password',
      });
    }
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const findIfUserExists = (req, res) => {
  User.find({ user_email: req.params.user_email }).then((response) => {
    res.send({ exists: response });
  });
};

const deactivateUser = (req, res) => {
  const { id } = req.params;
  User
    .findById(id)
    .populate('role')
    .then((user) => {
      User
        .findById(req.user.id)
        .then((reqUser) => {
            user.user_active = false;
            user
              .save()
              .then((response) => {
                res.json({ success: true, user: response });
              })
              .catch((e) => {
                res.json({ success: false, error: e });
              });
        })
        .catch((e) => {
          res.json({ success: false, error: e });
        });
    })
    .catch((e) => {
      res.json({ success: false, error: e });
    });
};

router.get('/', checkRole(['admin']), getAllUsers);
router.post('/', createUser);
router.get('/current', getUser);
router.put('/:id', updateUser);
router.put('/:id/deactive', checkRole(['admin']), deactivateUser);
router.post('/:id/change-password', changePassword);
router.get('/findIfExists/:email', findIfUserExists);

module.exports = router;
