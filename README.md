# simple-CRUD-nodejs

**Install dependencies first:** 
    npm install

**To start the app run:** 

    npm start

**Use an API tool to interface with the Todo API** 

Such as [Postman](https://www.getpostman.com).

 - `GET /api/todo` - Get the entire Todo list
 - `POST /api/todo` - Create a new Todo item
 - `PUT /api/todo/:id` - Edit an a new Todo item
 - `DELETE /api/todo/:id` - Edit an a new Todo item

**Other notes:**

**Populate database / Todo list:** 

To populate some inital todos use genTodos.js to create todo items. The script will generate any number of items, the item content is generated using chancejs:

    node genTodos.js

I installed the following node packages:

    npm install mongoose express body-parser nodemon chance --save

    npm install --save-dev babel-preset-latest babel-cli

Added start and test script to pacakges.json. Nodemon is configured to restart on any file changes made in the folder:

    "scripts": {
        "start": "nodemon ./index.js --watch .",
        "test": "babel-node --presets es2015 ./index.js"
      },