var express = require('express')
var app = express()
var m1 = require("./data")
app.use("/",m1)
app.listen(8080)