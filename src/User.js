const mongoose = require('mongoose');
const PostSchema = require('./post');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'User name cant be blank'],
    validate: {
      validator: (name) => name.length > 2,
      message: 'User name must be greater then 2 characters',
    }
  },
  postCount: Number,
  posts: [PostSchema],
});

const User = mongoose.model('user', UserSchema);

module.exports = User;