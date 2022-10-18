const express=require('express');
const app=express();
const middleware1=(req,res,next)=>{
    console.log("Local Middleware");
    next();
}

const middleware2=(req,res,next)=>{
    console.log("Global Middleware For All Routes");
    next();
}

app.use(middleware2);


app.get('/',middleware1,(req,res)=>{
    res.send("Home Page");
    res.end();
})

app.get('/about',middleware1,(req,res)=>{
    res.send("About Page");
    res.end();
})
app.get('/contact',(req,res)=>{
    res.send("Contact Page")
    res.end();
})

app.get('/studymaterial',(req,res)=>{
    res.send("Study Material Page");
    res.end();
})

app.listen(9000,()=>{
    console.log("connected to port 9000");
})
