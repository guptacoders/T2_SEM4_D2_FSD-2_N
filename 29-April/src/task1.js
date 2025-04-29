var express = require('express');
var app = express()

app.use(express.static("../Public",{index:'demo.html'}))

app.get("/a",(req,res,next)=>{
    res.set("content-type","text/html")
    res.write("<h1>Wlcome "+req.query.name+"</h1>")
    res.write("<h1>Email-Id:"+req.query.email+"</h1>")
    next()
});

app.get("/a",(req,res,next)=>{
    if(req.query.newsletter=="on")
    {
        res.write("<h2>Thank You For Subscription</h2><a href='/'>Logout<a>")
    }
    else{
        res.write("<h3>You can subscribe to get daily updates</h3><a href='/subscribe'>Subscribe</a></center>");
    }
  next()
});

app.get("/subscribe",(req,res)=>{                                                                                                                                                                                                                                                                                                                 
    res.set("content-type","text/html")
    res.write("<h2>ThankYou For Your sybscription</h2><a href='/'>Logout<a>")
    res.send()
})

app.listen(5002,()=>{"Server Started on 5002 Port"})