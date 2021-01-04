const router = require('express').Router();
let Department = require('../Models/Deparment.model');

//  view all Department

router.route('/').get((req, res) => {
    Department.find()
    .then(Department => res.json(Department))
    .catch(err => res.status(400).json('Error: ' + err));
});

// view particular Department

router.route('/:id').get((req, res) => {
    Department.findById(req.params.id)
    .then(Department => res.json(Department))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Department add

router.route('/add').post((req, res) => {
  const DepName = req.body.DepName;
 


  const newDeparment = new Department({
    DepName,
     
  });

  newDeparment.save()
    .then(() => res.json('Department added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete particular Deparment

router.route('/:id').delete((req, res) => {
    Department.findByIdAndDelete(req.params.id)
    .then(() => res.json('Department deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// update particular Deparment

router.route('/update/:id').post((req, res) => {
    Department.findById(req.params.id)
    .then(Department => {
        Department.DepName = req.body.DepName;
        Department.save()
        .then(() => res.json('Department updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;