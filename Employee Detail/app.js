const express = require('express');
const path=require('path');

const app=express();

app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile((__dirname+'/index.html'));
})

app.listen(2000,()=>{
    console.log("app is running");
});