const express = require('express')
const multer = require('multer');
//CREATE EXPRESS APP
const app = express();
app.use(express.static("../Public",{index: 'task1.html'}));
// SET STORAGE
var store = multer.diskStorage({
destination:"multiple",
filename: function (req, file, cb) {
cb(null, file.fieldname+"-"+Date.now()+".docx")
}
})
var upload = multer({ storage: store })
app.post('/uploadfile', upload.array('mypic',5), (req,res) => {
const files = req.files
if (files) {
res.set("content-type","text/html")
for(i of files){
res.write("<h2>File <span style='color:red'>" + JSON.stringify(i.originalname) + "</span> has beenuploaded </h2>")
}
res.send()
}
})
app.listen(6799);