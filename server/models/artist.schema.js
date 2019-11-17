const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({
  artistid: {
    type: Number
  },
  lastname: {
    type: String
  },
  firstname: {
    type: String
  },
  nationality: {
    type: String
  },
  dateofbirth: {
    type: Number
  },
  datedeceased: {
    type: Number
  },
  deleted: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('Artist', artistSchema);
