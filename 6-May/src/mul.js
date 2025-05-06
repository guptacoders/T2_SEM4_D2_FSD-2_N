var express = require('express')
var app = express()
var multer = require('multer')

var store = multer.diskStorage({
    
    destination:"MyFolder",
    filename:function(req,file,cb){
        console.log(file)
        cb(null,file.originalname)
    }
})

var upload = multer({storage:store,limits:{fieldSize:1000000}}).single('myfile')

app.use(express.static("../Public",{index:'mul.html'}))

app.post("/upload",upload,(req,res)=>{
    if(req.file){
        res.write('<h1>File Named as '+req.file.originalname+' Has Been Uploaded.</h1>')
    }
    res.send()
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})