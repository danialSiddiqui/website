const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = new Schema({
  Name: { type: String, required: true },
}, {
  timestamps: true,
});

const test = mongoose.model('test', testSchema);

module.exports = test;