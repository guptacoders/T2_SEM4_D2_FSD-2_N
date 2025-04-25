var express = require('express');
var app = express();

const cb = (req,res,next)=>{
    console.log("Initialized")
 
    res.write("<h1>First</h1>")
    res.send()
}

const cb1 = (req,res,next)=>{
    res.set("content-type","text/html")
    res.write("<h1>Second</h1>")
    next()
}

app.use("/",cb1,cb)

app.get("/",(req,res)=>{
    res.write("End")
    res.send()
})

app.listen(9000)