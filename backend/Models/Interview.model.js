const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const interviewSchema = new Schema({
  RegNum: { type: String, required: true },
  Name: { type: String, required: true },
  Interviewee: { type: String, required: true },
  Time: { type: String, required: true},
  date: { type: Date, required: true },
 
  
}, {
  timestamps: true,
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;