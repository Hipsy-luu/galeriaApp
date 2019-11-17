const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  customerid: {
    type: Number
  },
  lastname: {
    type: String
  },
  firstname: {
    type: String
  },
  emailaddress: {
    type: String
  },
  encryptedpassword: {
    type: String
  },
  street: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  ziporpostalcode: {
    type: String
  },
  country: {
    type: String
  },
  areacode: {
    type: String
  },
  phonenumber: {
    type: String
  },
  deleted: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('Customer', customerSchema);
