// // You have been assigned to develop a user feedback form for a website using 
// Express.js and cookies. Implement the following requirements: 
// Process a form with the following fields: Name, Email , Message , Rating 
// (radio buttons: Bad, Average, Good, Very Good, Excellent) When the user 
// submits the form, store their feedback information (name, email, message, and 
// rating) in a cookie named "feedback" that expires in 10 seconds. Display a 
// confirmation message to the user after successfully submitting the form & 
// Create a link to display the feedback details stored in the "feedback" cookie. 
// When the user click to the link, retrieve the feedback information from the 
// cookie and display it on the page also include a link on the feedback details 
// page to Logout. When the user clicks the link, user redirected to home page. 
// Make app.js file use get method in express js. No need to write html file having 
// form elements.

var express = require('express')
var app = express()
var cp = require('cookie-parser')

app.use(cp())
app.use(express.static("../Public",{index:'form.html'}))

app.get("/feedback",(req,res)=>{
    const {name , email , message , rating} = req.query
    const feedback = {name , email , message , rating}
    res.cookie("feedback",feedback,{maxAge:1000})
    res.send("Thank You For FeedBack! <br> <a href='/details'>Show feedback</a>")
})

app.get("/details",(req,res)=>{
    const feedback = req.cookies.feedback;

    if(feedback){
        res.send(`
            <h1>Feedback Details</h1>
            <p><strong>Name:</strong> ${feedback.name}</p>
            <p><strong>Email:</strong> ${feedback.email}</p>
            <p><strong>Message:</strong> ${feedback.message}</p>
            <p><strong>Rating:</strong> ${feedback.rating}</p>
            <a href="/" > logout </a>`);
        } 
        else 
        {
            res.send('No feedback available.');
        }
        });
        app.listen(3000, () => {
        console.log('Server is running on port 3000');
        });
