import express from "express"

const app = express();
app.get("/",(req,res)=>{
    res.send("Hello from express!")
})

app.get("/about",(req,res)=>{
    res.send("this is about page!")
})

app.get("/contact",(req,res)=>{
    res.send("Contact page!")
})

app.listen(4000,() =>{
    console.log("server running on http://localhost:4000");
})