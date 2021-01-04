const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teestSchema = new Schema({
  Name: { type: String, required: true },
}, {
  timestamps: true,
});

const teest = mongoose.model('teest', teestSchema);

module.exports = teest;