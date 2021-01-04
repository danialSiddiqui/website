const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  Id: { type: String,required: true,unique: true,trim: true, minlength: 3 },
  Username: { type: String,required: true,unique: true,trim: true, minlength: 3 },
  FirstName: { type: String },
  LastName: { type: String },
  Email: { type: String },
  Password: { type: String },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;