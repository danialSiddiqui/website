const router = require('express').Router();
let test = require('../Models/test.model');
let test2 = require('../Models/test2.model');


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
  
  const Username = req.body.Username;
  

  const newUser = new User({
    Username,
    
  
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