const express = require('express');

const app = express();

app.get(`/`,(req,res)=>{
    res.send('Do stuff')
})

app.get(`/about`,(req,res)=>{
    res.send('<h1>More Stuff</h1>')
})

app.get(`/about`,(req,res)=>{
    res.send(person={
        name: 'Sid',
        age: 35}) 
})

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})

const publicD