// write a sript to meet foll requirements. 
// 1) create index.html page and open it on localhost
// 2) after clicking submit button, it should jump to savesessionpage.store 
// username in session.
// 3) After saving session, redirect to fetchsession page and read session value. 
// put a logout link button here.
// 4) destroy the session on this page and redirect to index.html

var expr = require("express");
var app = expr();
var es = require("express-session");
app.use(expr.static("../public",{index:"session.html"}))

app.use(es({
    resave:false,
    saveUninitialized:false,
    secret:"mykey1"
}));


app.get("/savesession",(req,res)=>{
var uname=req.query.uname;
var password=req.query.password;
req.session.uname = uname;
req.session.password = password;
res.redirect("fetchsession")
})

app.get("/fetchsession",(req,res)=>{
res.write("<h1>Welcome " + req.session.uname +"</h1>")
res.write("<a href='/deletesession'>Delete Session</a>")
res.send();
});

app.get("/deletesession",(req,res)=>{
req.session.destroy();
res.redirect('/')
//Also try res.clearCookie(‘connect.sid’)
//res.send(“Session Cookie cleared”)
});

app.listen(6177);