const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const querySchema = new Schema({
  Name: { type: String, required: true },
  Number: { type: String, required: true },
  SchoolName: { type: String, required: true },
  Section: { type: String},
}, {
  timestamps: true,
});

const Qurries = mongoose.model('Qurries', querySchema);

module.exports = Qurries;