const express=require("express");
const app=express();
const port=8080;

app.use("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="give access"){
        next();
    }
    res.send("Access Denied!");
})

function checkAuth(req,res,next){
    let {pass}=req.query;
    if(pass==="123"){
          next();   
    }
    throw new Error("ACCESS DENIED!"); 
}


app.get("/api",checkAuth,(req,res)=>{
    res.send("Some Data"); 
})

app.get("/wrong",(req,res)=>{
    abcdd=abcd;
})
app.use((req,res,next)=>{
    console.log("Hi , Iam Middleware");
    next();
})

app.use((req,res,next)=>{
    console.log("Hi , Iam 2nd Middleware");
    next();
    console.log("This is After Middleware")
})

//Logger Information
app.use((req,res,next)=>{   
    req.responseTime=new Date(Date.now()).toString();
    console.log(req.method,req.path,req.responseTime,req.hostname);
    return next();
});

app.use("/random",(req,res,next)=>{
    console.log("Path MiddleWare Used!");
    next();
});

app.get("/random",(req,res)=>{
    res.send("This is a Random Page");
})

app.listen(port,()=>{
    console.log("Server is Listening!");
})


app.get("/",(req,res)=>{
    res.send("Hello Iam Root!");
})



//Page not found
app.use((req,res)=>{
    res.send("<h1>Error 404 Page not Found !</h1>")
})