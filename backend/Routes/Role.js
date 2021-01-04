const router = require('express').Router();
let Role = require('../Models/Role.model');

//  view all Role

router.route('/').get((req, res) => {
    Role.find()
    .then(Role => res.json(Role))
    .catch(err => res.status(400).json('Error: ' + err));
});

// view particular Role

router.route('/:id').get((req, res) => {
    Role.findById(req.params.id)
    .then(Role => res.json(Role))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Role add

router.route('/add').post((req, res) => {
  const RoleName = req.body.RoleName;
  const RoleType = req.body.RoleType;
  


  const newRole = new Role({
    RoleName,
    RoleType,
     
  });

  newRole.save()
    .then(() => res.json('Role added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete particular Role

router.route('/:id').delete((req, res) => {
    Role.findByIdAndDelete(req.params.id)
    .then(() => res.json('Role deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// update particular Role

router.route('/update/:id').post((req, res) => {
    Role.findById(req.params.id)
    .then(Role => {
        Role.RoleName = req.body.RoleName;
        Role.RoleType = req.body.RoleType;
        Role.save()
        .then(() => res.json('Role updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;