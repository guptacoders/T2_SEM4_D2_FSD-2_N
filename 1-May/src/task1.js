// create an html file which contain a form having fields first name last name password and a submit button open this form on the home page once form submitedd store all these entered values to respective cookies on / next page then redirect user to \admin and clear cookie set for the last name display remaining cookiees value on this page...

var express = require('express')
var app = express()
var cp = require('cookie-parser')

app.use(cp())
app.use(express.static("../Public",{index:'task1.html'}))

app.get("/next",(req,res)=>{
    res.cookie("fname",req.query.fname)
    res.cookie("lname",req.query.lname)
    res.cookie("pass",req.query.password)
    res.redirect("/admin")
})

app.get("/admin",(req,res)=>{
    res.clearCookie("lname")
    res.send(req.cookies)
})

app.listen(9000)