var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.set("content-type","text/html");
    res.write("<h1> Welcome To Lj University </h1>");
    res.end();
})

app.get("/about",(req,res)=>{
    res.set("content-type","text/html")
    res.end("<h1>Welcome To About Page.</h1>")
})

app.listen(5000,()=>{
    console.log('server Started on http://localhost:5000')
})