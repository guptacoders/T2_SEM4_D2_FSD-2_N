var express = require('express');
var app = express();

// In Src folder ypu have to run below code in terminal
// npm init -y
// npm install express

app.use(express.static("../Public"))

app.listen(7000)

