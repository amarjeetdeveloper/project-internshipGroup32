const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter your name',
  },
  email: {
    type: String,
    required: 'Please enter your email',
    unique: true,
  },
  mobile: {
    type: Number,
    required: 'Please enter you mobile number',
    unique: true,
  },
  collegeId: {
    type: ObjectId,
    ref: 'College',
    required: 'Please enter a college Id'
  },
  isDeleted: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

module.exports = mongoose.model('Interns', internSchema);