const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ContactSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  },
  mobileNumber: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" }
});

module.exports = User = mongoose.model("Contacts", ContactSchema);
