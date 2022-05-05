const mongoose = require('mongoose')

let validString = /\d/;

let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validObjectId = (ObjectId) => {
  return mongoose.Types.ObjectId.isValid(ObjectId)
}

let validUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

let validMobileNum = /^[6-9]\d{9}$/;

module.exports = { validString, validObjectId, validMobileNum, validEmail,  validUrl };