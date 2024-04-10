const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true
  },
  location: String,
  imageUrl: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
