const router = require('express').Router();
let Admissions = require('../Models/Admission.model');

//  view all users

router.route('/').get((req, res) => {
  Admissions.find()
    .then(admissions => res.json(admissions))
    .catch(err => res.status(400).json('Error: ' + err));
});

// view particular user

router.route('/:id').get((req, res) => {
  Admissions.findById(req.params.id)
    .then(admissions => res.json(admissions))
    .catch(err => res.status(400).json('Error: ' + err));
});


// Find particular user

router.route('/test').get((req, res) => {
  Admissions.find(req.params.id)
    .then(admissions => res.json(admissions))
    .catch(err => res.status(400).json('Error: ' + err));
});

// user add

router.route('/add').post((req, res) => {



   const Name = req.body.Name;
   const CNIC = req.body.CNIC;
   const Regno = req.body.Regno;
   const Enail = req.body.Enail;
   const Phone = req.body.Phone;
   const Familylanguage = req.body.Familylanguage;
   const Nationality = req.body.Nationality;
   const DoB = req.body.DoB;
   const Gender = req.body.Gender;
   const CAddress = req.body.CAddress;
   const PAddress = req.body.PAddress;
   const Applyingfor = req.body.Applyingfor;
   const FStatus = req.body.FStatus;
   const FName = req.body.FName;
   const FEmail = req.body.FEmail;
   const FPhone = req.body.FPhone;
   const FOfficeNO = req.body.FOfficeNO;
   const FCNIC = req.body.FCNIC;
   const FBAddress = req.body.FBAddress;
   const FOccution = req.body.FOccution;
   const FIndustry = req.body.FIndustry;
   const MStatus = req.body.MStatus;
   const MName = req.body.MName;
   const MEmail = req.body.MEmail;
   const MPhone = req.body.MPhone;
   const MOfficeNO = req.body.MOfficeNO;
   const MCNIC = req.body.MCNIC;
   const MBAddress = req.body.MBAddress;
   const MOccution = req.body.MOccution;
   const MIndustry = req.body.MIndustry;
   const Sname = req.body.Sname;
   const Relationship = req.body.Relationship;
   const Age = req.body.Age;
   const NOI = req.body.NOI;
   const CPname = req.body.CPname;
   const Ephone = req.body.Ephone;
   const CpRelationship = req.body.CpRelationship;
   const Subject1 = req.body.Subject1;
   const Subject2 = req.body.Subject2;
   const Subject3 = req.body.Subject3;
   const Subject4  = req.body.Subject4;
   const Acc = req.body.Acc;
   const Eco = req.body.Eco;
   const Bus = req.body.Bus;
   const Math = req.body.Math;
   const Phy = req.body.Phy;
   const Che = req.body.Che;
   const Bio = req.body.Bio;
   const Soc = req.body.Cs;
   const Cs = req.body.Cs;
   const Englit = req.body.Englit;
   const Englag = req.body.Englag;
   const PS = req.body.PS;
   const Addmath = req.body.Addmath;
   const Urdu = req.body.Urdu;
   const Isl = req.body.Isl;
   const EM = req.body.EM;
   const CareerChoice = req.body.CareerChoice;
   const ExCurricular = req.body.ExCurricular;
   const ShortParah = req.body.ShortParah;
   const Sports = req.body.Sports;
   const Responsiblites = req.body.Responsiblites;
   const Health = req.body.Health;
   const CredoCollage = req.body.CredoCollage;
   const AddmissionCredoCollage = req.body.AddmissionCredoCollage;
   const SiblingCredoCollage = req.body.SiblingCredoCollage;

  const newUser = new Admissions({
  Name,
  CNIC,
  Regno,
  Enail,
  Phone,
  Familylanguage,
  Nationality,
  DoB,
  Gender,
  CAddress,
  PAddress,
  Applyingfor,
  FStatus,
  FName,
  FEmail,
  FPhone,
  FOfficeNO,
  FCNIC,
  FBAddress,
  FOccution,
  FIndustry,
  MStatus,
  MName,
  MEmail,
  MPhone,
  MOfficeNO,
  MCNIC,
  MBAddress,
  MOccution,
  MIndustry,
  Sname,
  Relationship,
  Age,
  NOI,
  CPname,
  Ephone,
  CpRelationship,
  Subject1,
  Subject2,
  Subject3,
  Subject4,
  Acc,
  Eco,
  Bus,
  Math,
  Phy,
  Che,
  Bio,
  Soc,
  Cs,
  Englit,
  Englag,
  PS,
  Addmath,
  Urdu,
  Isl,
  EM,
  CareerChoice,
  ExCurricular,
  Sports,
  Responsiblites,
  ShortParah,
  Health,
  CredoCollage,
  AddmissionCredoCollage,
  SiblingCredoCollage,
  });

  newUser.save()
    .then(() => res.json('Admissions added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete particular user

router.route('/:id').delete((req, res) => {
  Admissions.findByIdAndDelete(req.params.id)
    .then(() => res.json('Admissions deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// update particular user

router.route('/update/:id').post((req, res) => {
  Admissions.findById(req.params.id)
    .then(admissions => {
      admissions.username = req.body.username;
      admissions.save()
        .then(() => res.json('Admissions updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;