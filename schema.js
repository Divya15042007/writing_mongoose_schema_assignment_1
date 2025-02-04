const mongoose = require('mongoose');

// Define the Profile subdocument schema
const ProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false, // Optional field
  },
});

// Define the User schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures usernames are unique
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures emails are unique
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    required: true,
    default: ['user'], // Default role is 'user'
  },
  profile: {
    type: ProfileSchema,
    required: true,
  },
  lastLogin: {
    type: Date,
    required: false, // Optional field
  },
});

// Create the User model
const User = mongoose.model('User', UserSchema);

module.exports = User;