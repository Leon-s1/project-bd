const { Schema, model } = require('mongoose')

const User = new Schema({
  firstName: { type: String, require: true, unique: true },
  lastName: { type: String, require: true },
  phoneNumber: { type: Number, require: true },
  adress: { type: String, require: true },
})

module.exports = model((this.name: 'User'), User)
