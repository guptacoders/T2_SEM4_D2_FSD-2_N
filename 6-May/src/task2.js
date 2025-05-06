// Write express js script to load student form using pug file which contains following fields
// Name(text)
// Email(email)
// Course(radio : CE, IT, CSE)
// Once form submitted then data must be displayed on ‘/data’ page using pug file. Means data
// should be submitted from express application to PUG file.

var express = require('express')
var app = express()
var path = require('path')
var sp = path.join(__dirname,"../Public")
app.set("view engine","pug")

app.get("/",(req,res)=>{
    res.render(sp+"/form")
})

app.get("/data",(req,res)=>{
    res.render(sp+"/form_output",{name:req.query.name,email:req.query.email,course:req.query.course})
})

app.listen(8520,()=>{
    console.log("Server is running on port 8520")
})
