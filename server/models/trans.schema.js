const mongoose = require('mongoose');

const transSchema = mongoose.Schema({
  transactionid: {
    type: Number
  },
  dateacquired: {
    type: String
  },
  acquisitionprice: {
    type: Number
  },
  askingprice: {
    type: Number
  },
  datesold: {
    type: String
  },
  salesprice: {
    type: Number
  },
  customerid: {
    type: Number
  },
  workid: {
    type: Number
  }
});


module.exports = mongoose.model('Trans', transSchema);
