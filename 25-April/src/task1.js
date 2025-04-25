// . Write express js script to perform the tasks as asked below. (Post method) 

// 1) Create one HTML file named ljform.html and add one form which contains username, password and submit button. Data should be submitted by HTTP post method. 
// 2) Submit button is of black color with white text. (External CSS) 
// 3) On home page form should be displayed and while submitting the form, on next page named “/login” if username is admin then it will display “Welcome admin” else display “Please login with Admin name”.


var express = require('express'); 
var app = express(); 

app.use(express.urlencoded({ extended: false }));

app.use(express.static("../Public",{index: 'ljform.html'}));

app.post('/login',(req, res)=>{
    
    if(req.body.username.toLowerCase()=="admin")
    {
        res.set("content-type","text/html")
        res.write("<h1>Welcome Admin</h1>")
    }
    else{
        res.write("<h1>Please Login With Admin Name.</h1>")
    }
    res.send()
  
})

app.listen(7001) 