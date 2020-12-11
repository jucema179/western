const router = require('express').Router();
const _ = require('lodash');
const Role = require('../models/Role');
const checkRole = require('../middleware').checkRole;

const getAllRoles = (req, res) => {
  Role
    .find()
    .then((roles) => {
      res.send(roles);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error retrieving roles',
      });
    });
};

const getRole = (req, res) => {
  Role
    .findById(req.role.id)
    .then((role) => {
      if (!role) {
        return res.status(404).send({
          message: `Role not found with id: ${req.role.id}`,
        });
      }
      res.send({ role });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error retrieving role',
      });
    });
};

const createRole = (req, res) => {
  const role = new Role({
    role_name: req.body.role_name,
    role_active: req.body.role_active,
  });
  role.save()
    .then((role) => {
      res.send(role);
    })
    .catch((error) => {
      res.status(500).send({ message: error.message || 'Error saving role' });
    });
};

const updateRole = (req, res) => {
  const role = {
    role_name: req.body.role_name,
  };

  Role.findByIdAndUpdate(req.params.id, role, { new: true })
    .then((role) => {
      if (!role) {
        return res.status(404).send({ message: `Not found role with id: ${req.params.id}` });
      }
      res.send(role);
    })
    .catch((error) => {
      res.status(500).send({ message: error.message || 'Error updating role' });
    });
};

const deactivateRole = (req, res) => {
  const { id } = req.params;
  Role
    .findById(id)
    .then((role) => {
      Role
        .findById(req.role.id)
        .then((reqRole) => {
            user.user_active = false;
            role
              .save()
              .then((response) => {
                res.json({ success: true, role: response });
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

router.post('/', createRole);
router.get('/', checkRole(['admin']), getAllRoles);
router.get('/current', getRole);
router.put('/:id', updateRole);
router.put('/:id/deactive', checkRole(['admin']), deactivateRole);

module.exports = router;
