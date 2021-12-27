//jslint esversion:6
const express = require("express");
const app = express();
const port = 3000;

// 1. on Hyper, run npm init

app.listen(port, function() {
  console.log("Server started on port 3000");
});

app.get("/", function(req, res) {
  //  console.log(request);
  res.send("<h1>Hello World!</h1>");
})

app.get("/contact", function(req, res) {
  res.send("<h1>contact me at vinv@gmail.com</h1>");
})

app.get("/about", function(req, res) {
  res.send("<h1>vinv some bio</h1>");
})

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Coffee</li><li>Hiking</li><li>Code</li></h1></ul>");
})



// go to chrome and ebter http://localhost:3000/ in address bar

// 2. install nodemon by running :::: sudo npm install -g nodemon
//  next time, just run  :::: npm install express
// after installation:
        // 3. run nodemon server,js
// now make changes to server.js and nodemon auto detects changes
// auto starts

//    On Hyper, run::: npm init
//    On Hyper: run::: npm install express
//    On Hyper: run::: nodemon server.js
