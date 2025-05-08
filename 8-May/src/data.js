var express = require('express')
var router = express.Router()

const mvi = [{id:101,name:"Neel",year:2005,rating:9.5},
    {id:102,name:"Kavish",Year:2016,rating:9},
    {id:103,name:"Nishit",Year:2103,rating:100}
]

module.exports = router

router.get("/",(req,res)=>{
    res.json(mvi)
})

router.get("/:id",(req,res)=>{
    var cm = mvi.filter((m)=>{
        if(m.id==req.params.id)
        {
            return true
        }
    })
    console.log(cm)

    if(cm.length==1)
    {
        res.json(cm[0])
    }
    else{
        res.status(404).json({"error":"No user found with id "+req.params.id})
    }
})