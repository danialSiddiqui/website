const router = require('express').Router();
let Interview = require('../Models/Interview.model');

//  view all Interview

router.route('/').get((req, res) => {
  Interview.find()
    .then(interview => res.json(interview))
    .catch(err => res.status(400).json('Error: ' + err));
});

// view particular Interview

router.route('/:id').get((req, res) => {
  Interview.findById(req.params.id)
    .then(interview => res.json(interview))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Interview add

router.route('/add').post((req, res) => {
  const RegNum = req.body.RegNum;
  const Name = req.body.Name;
  const Interviewee = req.body.Interviewee;
  const Time = req.body.Time;
  const date = req.body.date;


  const newInterview = new Interview({
    RegNum,
    Name,
    Interviewee,
    Time,
    date  
  });

  newInterview.save()
    .then(() => res.json('Interview added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete particular Interview

router.route('/:id').delete((req, res) => {
  Interview.findByIdAndDelete(req.params.id)
    .then(() => res.json('Interview deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// update particular Interview

router.route('/update/:id').post((req, res) => {
  Interview.findById(req.params.id)
    .then(interview => {
      user.username = req.body.username;
      user.save()
        .then(() => res.json('Interview updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;