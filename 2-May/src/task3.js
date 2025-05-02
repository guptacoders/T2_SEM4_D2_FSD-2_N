var express = require('express')
var app = express()
var p = require('path')
var sp = p.join(__dirname,"../Public")
app.set("view engine","pug")

app.get("/",(req,res)=>{
    res.render(sp+"/one")
})

app.get("/data",(req,res)=>{
    res.set("content-type","text/html")
    res.send("<h1>Welcome "+req.query.uname+" Your Email is "+req.query.email+"</h1>")
})

app.listen(9000)