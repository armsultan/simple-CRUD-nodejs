"use strict";
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let TodoSchema = new Schema({
  content: String,
  time : { type : Date, default: Date.now }
});

// the schema is useless so far
// we need to create a model using it
module.exports = mongoose.model('Todo', TodoSchema);