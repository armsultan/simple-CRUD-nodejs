'use strict';
// Load Chance
let Chance = require('chance');
// Instantiate Chance so it can be used
let chance = new Chance();

// require Mongoose
let mongoose = require('mongoose');

// require DB settings and our Todo schema
let db  = require( './db' );
let Todo  = require( './Todo.model' );


// A function to generate x number of todo items
let genTodo = (number) => {
  for (let i = 0; i <= number; i++) {
    let item = chance.sentence();
    let timeNow = Date();
    Todo.create({
    content: item,
    time:  timeNow
}, function (err, entry) {
      if (err) {
        console.log("Error creating entry");
      } else {
        console.log("name: \"" + item + "\", email: \"" + timeNow + "\n");
      }
    });
  }
};

// Go ahead and create 50 entries
genTodo(10);

// And exit when done console.log("Done"); process.exit()