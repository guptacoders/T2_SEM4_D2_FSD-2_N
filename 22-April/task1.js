var app = require('express')()

app.get("/:id",(req,res)=>{
    res.end(req.params.id)
})

app.listen(3000)