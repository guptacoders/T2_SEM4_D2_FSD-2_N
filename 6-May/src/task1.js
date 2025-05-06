// Write express JS script to pass data like message, name and id from express application to pug
// template in h1, h2 and h3 tags respectively and display data in browser. (Both file in same folder)

const express = require('express')
var app =express()

app.set("view engine","pug")

app.get("/",(req,res)=>{
    res.render(__dirname+"/task1",{name:"Neel patel",message:"Hello From Express!",id:51})
})

app.listen(9000)
