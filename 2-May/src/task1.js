var express = require("express");
var app = express();
var es = require("express-session");

app.use(es({
 resave:false,
 saveUninitialized:false,
 secret:"NeelPatel",
//  cookie:{maxAge:1000}  method 1 to remove session id automatically
}));

app.use(express.static("../Public",{index:'task1.html'}));

app.get("/save",(req,res)=>{
 req.session.uname = req.query.uname;
 req.session.password = req.query.pass;
 res.redirect("/fetchdata")
 
})
app.get("/fetchdata",(req,res)=>{
    if(req.session.uname == "admin" && req.session.password=="admin@123"){
        res.write("<h1 style='color:green;'>Welcome Admin</h1>")
        res.write("<a href='/destroy'>Logout</a>")
    }
    else{
        res.write("<h1 style='color:red;'>Please enter valid username or password</h1><a href='/'>Login</a>")
    }
 res.send();
});

app.get("/destroy",(req,res)=>{
    req.session.destroy()
    // res.clearCookie("connect.sid")   method-s remove session id
    res.write("<h1>Session Destroyed</h1><a href='/'>Login</a>")
    res.send();
});

app.listen(6177);
