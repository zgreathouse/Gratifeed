const mongoose = require('mongoose');
const { Schema } = mongoose;

//Recipient Schema
//Recipient is a Sub Document to Surveys
const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
