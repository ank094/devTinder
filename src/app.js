console.log('Running    ')

const express = require('express');
const app = express();


app.use('/test',(req,res)=>{
    res.send("Hello from server");
});

app.use('/dashboard',(req,res)=>{
    res.send("Hello from dashboard");
});
app.listen(3000,() => {
    console.log('Listening on port 3000');
});
