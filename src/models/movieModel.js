// Video Schema
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  videolink: {
    type: String,
    required: true,
  },

  primaryposter: {
    type: String,
    required: true,
  },
  secondaryposter: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const Video = mongoose.models.videos || mongoose.model('videos', videoSchema);

export default Video;