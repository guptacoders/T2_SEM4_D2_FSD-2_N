var app = require('express')();

var data = {name:"Neel",age:19}

app.get("/",(req,res)=>{
    res.send(data) // method 1
    // res.json(data)  method 2
    // res.write(JSON.stringify(data))  method 3
})

app.listen(3000)