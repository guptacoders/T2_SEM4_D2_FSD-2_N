var express = require('express');
var app = express()
var path = require('path')
var sp = path.join(__dirname,"../Public")
app.set("view engine","pug")

app.get("/",(req,res)=>{
    res.render(sp+"/a")
})

app.get("/about",(req,res)=>{
    res.write("<h1>Welcome To About Page.</h1>")
    res.send()
})

app.listen(8080)