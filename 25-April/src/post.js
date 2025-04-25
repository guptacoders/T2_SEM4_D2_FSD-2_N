var express = require('express'); 
var app = express(); 

app.use(express.urlencoded({ extended: false }));

app.use(express.static("../Public",{index: 'p.html'}));

app.post('/process',(req, res)=>{
    res.send(req.body)
  
})

app.listen(7001) 