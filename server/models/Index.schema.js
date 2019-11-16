const mongoose = require('mongoose');

const IndexSchema = mongoose.Schema({
    current_id : Number,
    name: {
        type: String,
        required: [true, 'Name for new index required'],
        unique : true
      }
}, {
    timestamps: true
});

IndexSchema.index({name : 1});

module.exports = mongoose.model('Index', IndexSchema);