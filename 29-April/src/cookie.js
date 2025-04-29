var express = require('express')
var app = express()
var cp = require('cookie-parser')

app.use(cp())

app.get("/",(req,res)=>{
    res.cookie("uname","Neel")
    res.cookie("lname","Patel")
    res.cookie("contact","9737150260",{expires:new Date()+10000});
    res.cookie("email","neel@gmail.com",{maxAge:7000})
    res.send("cookie set")
})
    app.get("/read",(req,res)=>{
        res.write(JSON.stringify(req.cookies))
        res.write(req.cookies.uname)
        res.send()
    })

    app.get("/clear",(req,res)=>{
        res.clearCookie("uname")
        res.send(req.cookies)
    })

    app.listen(9090)
