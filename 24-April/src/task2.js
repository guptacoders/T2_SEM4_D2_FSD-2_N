var express = require('express');
var app = express();

app.use(express.static("../Public",{index:"text.html"}))

app.get("/details",(req,res)=>{
   
    var t1  = req.query.text
    var t = t1.split('.')
    res.set("content-type","text/html")
    for(i in t){
     res.write(t[i]+"<br>")
    }
    res.send()
 })

app.listen(9000)