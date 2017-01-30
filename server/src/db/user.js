import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  admin: Boolean,
  created_at: Date,
  updated_at: Date,
});

export const User = mongoose.model('User', userSchema);
