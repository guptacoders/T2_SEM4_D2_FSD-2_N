// write express js script which displays an object having property ul and value as an array of 5 object having key name and id  on a home page when user request for table page display a table format of this JSON object 

var app = require('express')();

var data ={ul: [{name:"Neel",id:19},{name:"Ishan",id:3},{name:"Namra",id:1},{name:"mahir",id:5},{name:"Harsh",id:10}]}

app.get("/",(req,res)=>{
    res.send(data.ul)

})

app.get("/table",(req,res)=>{
    res.set("content-type","text/html");
    res.write("<center><table border='2px solid black'><tr><th>Name</th><th>Id</th></tr>");

    for(i of data.ul){
        res.write("<tr><td>"+i.name+"</td>")
        res.write("<td>"+i.id+"</td></tr>")
    }

    res.write("</table></center>")
    res.send();

})


app.listen(3000)