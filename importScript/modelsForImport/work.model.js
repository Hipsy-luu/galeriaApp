const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
  workid: {
    type: Number
  },
  title: {
    type: String
  },
  copy: {
    type: String
  },
  medium: {
    type: String
  },
  description: {
    type: String
  },
  artistid: {
    type: Number
  }
});


module.exports = mongoose.model('Work', workSchema);
