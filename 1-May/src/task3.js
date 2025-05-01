// // xamples: write express script to print how much time user visit the page. For ex., if user 
// visit first time “you have visited page First time” message will print. if user visit second 
// time “you have visited page second time” message will print. And so on.
var express = require('express')
var app = express()
var sess = require('express-session')

app.use(sess({
    secret:"Neel",
    saveUninitialized:false,
    resave:false}
))

app.get("/",(req,res)=>
    {
    if(req.session.page_views)
    {
    req.session.page_views++;
    res.send(`<h1 style="color:blue;"> You have visited page ${req.session.page_views} times <h1>`);
    }
    else{
    req.session.page_views=1,
    res.send(`<h1 style="color:green;"> Welcome! Thank you for visiting our website!<h1>`); 
    }
    });
    app.listen(8003,()=>
    {
    console.log("server running at 8003");
    });


