// Page Not Found SYNTAX use this Below 

var app = require('express')()

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
    app.use((req,res)=>{
        res.status(404).send("Page Not found")
    })
})

app.listen(6001)