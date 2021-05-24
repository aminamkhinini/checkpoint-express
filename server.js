
// import express
const express = require('express');

// associate the express methods to a variable
const app = express();

//create the variable port 
const port = 5000;

 
app.use( (req,res,next)=> {
      let hours=new Date().getHours()
      let day=new Date().getDay()
    if(hours<9 || hours>17 || day==0 || day==6 ){
       return res.sendFile(__dirname+ '/public/close.html')
   }
    else next()
   })
   

app.use(express.static('public'));

//listen the port 
app.listen(port, (err)=>{
    err ? console.log(err) :console.log (`the server is running on port ${port}`)
})

 // GET method route
 app.get('/', function (req, res) {
    res.json('GET request to the home page');
  })
 

 
  // POST method route 
  app.post('/', function (req, res) {
    res.send('POST request to the home page');
  })
