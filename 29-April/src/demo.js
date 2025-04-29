const express = require('express');
const app = express();

app.use("/",(req,res,next)=>{
    res.set("content-type","text/html")
    res.write("<h1>First</h1>")
    next()
},

    (req,res,next)=>{
        res.write("<h1>Second</h1>")
        next()
    },
    
    (req,res)=>{
        res.write("<h1>End</h1>")
        res.send()
    }
)

app.listen(8000)