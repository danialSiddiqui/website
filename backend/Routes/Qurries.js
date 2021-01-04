const router = require('express').Router();
let Qurries = require('../Models/Qurries.model');


//  view all Qurries

router.route('/').get((req, res) => {
  Qurries.find()
    .then(query => res.json(query))
    .catch(err => res.status(400).json('Error: ' + err));
});

// view particular Qurries

router.route('/:id').get((req, res) => {
  Qurries.findById(req.params.id)
    .then(query => res.json(query))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Qurries add

router.route('/add').post((req, res) => {
  const Name = req.body.Name;
  const Number = req.body.Number;
  const SchoolName = req.body.SchoolName;
  const Section = req.body.Section;


  const newQuery = new Qurries({
    Name,
    Number,
    Section,
    SchoolName
    
  });

  newQuery.save()
    .then(() => res.json('Query added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete particular Qurries

router.route('/:id').delete((req, res) => {
  Qurries.findByIdAndDelete(req.params.id)
    .then(() => res.json('Query deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// update particular Qurries

router.route('/update/:id').post((req, res) => {
  Qurries.findById(req.params.id)
    .then(query => {
      query.Name = req.body.Name;
      query.Number = req.body.Number;
      query.SchoolName = req.body.SchoolName;
      query.Section = req.body.Section;
      
      query.save()
        .then(() => res.json('Query updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;