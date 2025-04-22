var app = require('express')();

app.get("/user/:userId/test/:test",(req,res)=>{
    res.send(req.params)
})

app.listen(3000);