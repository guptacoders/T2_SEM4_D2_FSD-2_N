const expr = require("express");
const router = expr.Router();
const data=[
{ id:101,name:"ABC",branch:"CSE",contact:9876543210,city:"Ahmedabad" },
{ id:102,name:"BCD",branch:"CE",contact:9876543210,city:"Ahmedabad" },
{ id:103,name:"XYZ",branch:"CSE",contact:9876543210,city:"Rajkot" },
{ id:104,name:"PQR",branch:"IT",contact:9876543210,city:"Ahmedabad" },
{ id:105,name:"ABC",branch:"CSE",contact:9876543210,city:"Surat" },
{ id:106,name:"ABC",branch:"IT",contact:9876543210,city:"Rajkot" }
]

router.get("/",(req,res)=>{
    res.set("content-type","text/html")
    for(i of data){
    res.write("<h3>ID: "+ JSON.stringify(i.id) + ", Name: " + i.name + ", Branch: " + i.branch + ", Contact: " +
    i.contact + ", City: " + i.city + "</h3>");
    }
    res.send();
})

router.get("/id/:id",(req,res)=>{
    var current_data = data.filter((i1)=> i1.id == req.params.id)
    if(current_data.length >= 1){
    res.send(current_data);
    }else{
        res.status(404).json({"error":"No user found with id "+req.params.id})
    }
    })

router.get("/branch/:branch",(req,res)=>{
    var current_data = data.filter((b)=>b.branch.toLowerCase() == req.params.branch)
    if(current_data.length >= 1){
    res.send(current_data);
    }else{
    res.send("Not Found")
    }
    })
module.exports = router;
        