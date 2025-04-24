var express = require('express');
var app = express();

app.use(express.static("../Public",{index:"form.html"}))

app.get("/process_get",(req,res)=>{
    
    const responce = {detail:req.query.text
    }
    res.send(responce)
})

app.listen(9000)