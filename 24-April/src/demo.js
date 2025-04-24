var express = require('express');
var app = express();
var path = require('path');

// method-1
// app.use(express.static("../Public",{index:'a.html'}))  html file name chnage then this format is used
// app.use(express.static("../Public"))

// method 2
// var sp = path.join(__dirname,"../Public")
// app.use(express.static(sp))

// method 3 in this method external css is not applied internal css is applied
// var sp = path.join(__dirname,"../Public")
// app.get("/",(req,res)=>{
    // res.sendFile(sp+"/index.html")
// })   

app.listen(7001);