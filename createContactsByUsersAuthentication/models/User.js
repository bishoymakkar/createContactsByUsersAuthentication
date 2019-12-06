const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  first_name: {type:String,minlength:3},
  last_name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  fingerprint:Number,

  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Contacts" }]
  
})

module.exports = User = mongoose.model('Users', UserSchema)
