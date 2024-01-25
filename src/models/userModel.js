import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tier: {
    type: String,
  },
  favourites: {
    type: Array,
    required: false,
  },
  watchlist: {
    type: Array,
    required: false,
  },
});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
