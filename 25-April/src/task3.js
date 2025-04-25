// create one html file which contains two number type input fields , one dropdown which contains options like select addition subtraction multiplicatiopn and division and one submit button the input field must contain the value grater then zero else it will give a msg please enter a valid number. also user must select any of the formula from the dropdown else msg should be display you have not seletcted any formula msg will be display /calc page if one formula is seletced and no are enterd then respective calculation will be performed on /calc page use get method to reqest the data.

var express = require('express');
var app = express();

app.use(express.static("../Public",{index:"calc.html"}))

app.get("/calc",(req,res)=>{
   
    var n1  =parseInt(req.query.num1) 
    var n2  = parseInt(req.query.num2)

    if(n1<0 && n2<0)
    {
        res.set("content-type","text/html")
        res.write("<h1>Number Must be Positive Only.</h1>")
    }
    else{
        if(req.query.select=="add")
            {
                var add = n1 + n2;
                res.write("Addition:"+add)
             
            }
            else if(req.query.select=="sub")
            {
                var sub = n1 - n2;
                res.write("Subtraction:"+ sub)
               
            }
            else if(req.query.select=="mul")
            {
                var mul = n1 * n2;
                res.write("Multiplication:"+mul)
               
            }
            else if(req.query.select=="div")
            {
                var div = n1 / n2;
                res.write("Division:"+div)
                        
            }
    }
    res.send()
 })
app.listen(9001)