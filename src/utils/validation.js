const mongoose = require('mongoose')

let validString = /\d/;

const validObjectId = (ObjectId) => {
  return mongoose.Types.ObjectId.isValid(ObjectId)
}

let validMobileNum = /^[6-9]\d{9}$/;

module.exports = { validString, validObjectId, validMobileNum };