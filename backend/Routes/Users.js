const router = require('express').Router();
let User = require('../Models/User.model');

//  view all users

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// view particular user

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// user add

router.route('/add').post((req, res) => {
  const Id = req.body.Id;
  const Username = req.body.Username;
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Email = req.body.Email;
  const Password = req.body.Password;

  const newUser = new User({
    Id,
    Username,
    FirstName,
    LastName,
    Email,
    Password
  
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete particular user

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// update particular user

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.Id = req.body.Id;
      user.Username = req.body.Username;
      user.FirstName = req.body.FirstName;
      user.LastName = req.body.LastName;
      user.Email = req.body.Email;
      user.Password = req.body.Password;
      user.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;