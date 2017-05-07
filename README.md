# simple-CRUD-nodejs

I installed the following node packages:

    npm install mongoose express body-parser nodemon chance --save

    npm install --save-dev babel-preset-latest babel-cli

Added start and test script to pacakges.json. Nodemon is configured to restart on any file changes made in the folder:

    "scripts": {
        "start": "nodemon ./index.js --watch .",
        "test": "babel-node --presets es2015 ./index.js"
      },

**To start the app run:** 

    npm start

**Populate database / Todo llist:** 

To populate some inital todos use genTodos.js to create todo items. The script will generate any number of items, the item content is generated using chancejs:

    node genTodos.js
    
