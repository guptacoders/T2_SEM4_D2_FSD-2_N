var express = require('express');
var app = express();

app.use(express.static("../Public",{index:"text.html"}))

app.get("/details",(req,res)=>{
    
    const responce = {detail:req.query.text
    }
    res.send(responce)
})

app.listen(9000)